import { useEffect, useMemo, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import ExhibitionCard from "../components/ExhibitionCard";
import { exhibitionStands } from "../data/exhibitionStands";
import "./exhibitionStands.css";

/** Exhibition stands archive with a searchable project grid. */
export default function ExhibitionStands() {
  const [query, setQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Debounce filtering so the user sees a short loading skeleton.
  useEffect(() => {
    if (query.trim() === searchTerm) {
      setIsSearching(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setSearchTerm(query.trim());
      setIsSearching(false);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [query, searchTerm]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
    setIsSearching(true);
  };

  const filteredStands = useMemo(() => {
    const normalizedTerm = searchTerm.toLocaleLowerCase();

    return exhibitionStands.filter((stand) =>
      stand.title.toLocaleLowerCase().includes(normalizedTerm)
    );
  }, [searchTerm]);

  return (
    <div className="kg-exhibitions">
      {/* Page hero */}
      <section className="kg-exhibitions__hero">
        <div className="kg-container kg-exhibitions__hero-inner">
          <p className="kg-eyebrow">KG / What we create</p>
          <h1>
            Exhibition <em>Stands.</em>
          </h1>
          <p className="kg-exhibitions__lead">
            Designed to make an impression. Built with purpose, crafted with passion, and made to last.
          </p>
          <div className="kg-exhibitions__hero-meta">
            <span>Design</span>
            <span>Construction</span>
            <span>Experience</span>
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section
        className="kg-exhibitions__intro"
        aria-labelledby="kg-exhibitions-intro-title"
      >
        <div className="kg-container kg-exhibitions__intro-grid">
          <div>
            <p className="kg-eyebrow">Our approach</p>
            <h2 id="kg-exhibitions-intro-title">
              Distinctive spaces.
              <br />
              <em>Memorable presence.</em>
            </h2>
          </div>
          <div className="kg-exhibitions__intro-copy">
            <p>
              With respect, experience and speed, we create striking and
              functional exhibition stands designed to capture visitors’
              attention and exceed expectations.
            </p>
            <p>
              Our work spans the study, design and construction of exhibition
              stands, corporate presentations, speaking panels, conference
              spaces and scenery.
            </p>
            <p>
              Our experienced construction teams provide support and bring
              ideas to life — creating presentations that strengthen the
              presence and identity of your company.
            </p>
          </div>
        </div>
      </section>

      {/* Searchable exhibition gallery */}
      <section
        className="kg-exhibitions__gallery"
        aria-labelledby="kg-exhibitions-gallery-title"
      >
        <div className="kg-container">
          <div className="kg-exhibitions__gallery-head">
            <div>
              <p className="kg-eyebrow">Selected archive</p>
              <h2 id="kg-exhibitions-gallery-title">
                Explore our stands<span>.</span>
              </h2>
              <p>Browse the exhibition stand photography published by KG.</p>
            </div>

            <label className="kg-exhibitions__search">
              <span>Search stands</span>
              <input
                type="search"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search by exhibitor..."
              />
            </label>
          </div>

          <p className="kg-exhibitions__count" aria-live="polite" aria-busy={isSearching}>
            {isSearching
              ? "Searching exhibition stands..."
              : `Showing ${filteredStands.length} of ${exhibitionStands.length} stands`}
          </p>

          {isSearching ? (
            <div className="kg-exhibitions__grid" aria-label="Loading search results">
              {Array.from({ length: 6 }, (_, index) => (
                <div className="kg-exhibitions__skeleton" key={index}>
                  <Skeleton variant="rectangular" animation="wave" className="kg-exhibitions__skeleton-image" />
                  <Skeleton variant="text" animation="wave" width="35%" height={20} />
                  <Skeleton variant="text" animation="wave" width="70%" height={34} />
                </div>
              ))}
            </div>
          ) : filteredStands.length > 0 ? (
            <div className="kg-exhibitions__grid">
              {filteredStands.map((stand) => (
                <ExhibitionCard
                  key={stand.id}
                  stand={stand}
                  index={exhibitionStands.indexOf(stand)}
                />
              ))}
            </div>
          ) : (
            <p className="kg-exhibitions__empty">
              No exhibition stands match your search.
            </p>
          )}
        </div>
      </section>

      {/* Project enquiry */}
      <section className="kg-exhibitions__cta">
        <div className="kg-container kg-exhibitions__cta-inner">
          <div>
            <p className="kg-eyebrow">Let's collaborate</p>
            <h2>
              Make every impression <em>count.</em>
            </h2>
          </div>
          <a
            className="kg-button kg-button--gold"
            href="mailto:info@k-g.gr?subject=Exhibition%20Stand%20Enquiry"
          >
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}
