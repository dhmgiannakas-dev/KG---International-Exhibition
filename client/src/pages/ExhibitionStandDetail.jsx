
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ExhibitionGallery from "./../components/ExhibitionGallery";
import ExhibitionCard from "../components/ExhibitionCard";

import {
  exhibitionStands,
  getExhibitionStand,
  getStandImages,
  getStandDetail,
} from "../data/exhibitionStands";

import "./ExhibitionStands.css";

/**
 * Shared detail page for every exhibition stand.
 */
export default function ExhibitionStandDetail() {
  const { id } = useParams();

  const stand = getExhibitionStand(id);

  // Shared selection between main image and thumbnails.
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Reset selection when navigating to a different stand.
  useEffect(() => {
    setSelectedIndex(0);
  }, [id]);

  // Safe image collection.
  const allImages = getStandImages(stand);

  // Related projects.
  const relatedStands = exhibitionStands
    .filter((item) => item.id !== id)
    .slice(0, 3);

  if (!stand) {
    return (
      <section className="kg-exhibition-detail kg-exhibition-detail--missing">
        <div className="kg-container">
          <p className="kg-eyebrow">404 / Not found</p>
          <h1>Stand not found.</h1>

          <Link
            className="kg-button kg-button--gold"
            to="/exhibition-stands"
          >
            Back to exhibition stands ↗
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="kg-exhibition-detail">

      {/* ======================================
          PROJECT HEADING
      ====================================== */}
      <section className="kg-exhibition-detail__heading">
        <div className="kg-container">
          <Link
            className="kg-exhibition-detail__back"
            to="/exhibition-stands"
          >
            ← All exhibition stands
          </Link>

          <p className="kg-eyebrow">
            Exhibition stand / KG portfolio
          </p>

          <h1>
            {stand.title}<span>.</span>
          </h1>

          <p>
            Exhibition stand design &amp; construction
          </p>
        </div>
      </section>

      {/* ======================================
          MAIN IMAGE + PROJECT DETAILS
      ====================================== */}
      <section className="kg-exhibition-detail__feature">
        <div className="kg-container">

          <div className="kg-exhibition-detail__feature-grid">

            {/* Large selected image */}
            <ExhibitionGallery
              images={allImages}
              title={stand.title}
              projectId={stand.id}
              selectedIndex={selectedIndex}
              mode="main"
            />

            {/* Project metadata */}
            <aside
              className="kg-exhibition-detail__facts"
              aria-label="Exhibition details"
            >
              <p className="kg-eyebrow">
                Project details
              </p>

              <h2>
                Project Overview<span>.</span>
              </h2>

              <dl className="kg-exhibition-detail__facts-list">
                <div>
                  <dt>Exhibition name</dt>
                  <dd>{getStandDetail(stand.exhibitionName)}</dd>
                </div>

                <div>
                  <dt>Exhibition date</dt>
                  <dd>{getStandDetail(stand.exhibitionDate)}</dd>
                </div>

                <div>
                  <dt>City</dt>
                  <dd>{getStandDetail(stand.city)}</dd>
                </div>

                <div>
                  <dt>Author</dt>
                  <dd>{getStandDetail(stand.author)}</dd>
                </div>

                <div>
                  <dt>Date posted</dt>
                  <dd>{getStandDetail(stand.datePosted)}</dd>
                </div>
              </dl>
            </aside>

          </div>

          {/* ======================================
              GALLERY THUMBNAILS
              Below main image and details
          ====================================== */}
          <ExhibitionGallery
            images={allImages}
            title={stand.title}
            projectId={stand.id}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
            mode="thumbnails"
          />

        </div>
      </section>

      {/* ======================================
          PROJECT OVERVIEW
      ====================================== */}
      <section className="kg-exhibition-detail__body">
        <div className="kg-container kg-exhibition-detail__body-grid">

          <div>
            <p className="kg-eyebrow">
              Project overview
            </p>

            <h2>
              Made to <em>stand out.</em>
            </h2>
          </div>

          <div>
            <p>
              This exhibition stand is part of KG's published
              project gallery. Our approach combines thoughtful
              design, practical functionality and experienced
              construction to create memorable brand experiences.
            </p>

            <a
              className="kg-button kg-button--gold"
              href="mailto:info@k-g.gr?subject=Exhibition%20Stand%20Enquiry"
            >
              Discuss your project ↗
            </a>
          </div>

        </div>
      </section>

      {/* ======================================
          RELATED EXHIBITION STANDS
      ====================================== */}
      <section className="kg-exhibition-detail__related">
        <div className="kg-container">

          <div className="kg-exhibition-detail__related-head">
            <h2>
              Explore more stands<span>.</span>
            </h2>

            <Link to="/exhibition-stands">
              View all ↗
            </Link>
          </div>

          <div className="kg-exhibitions__grid">
            {relatedStands.map((item, index) => (
              <ExhibitionCard
                key={item.id}
                stand={item}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
