import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

// Portfolio images already used in the KG exhibition data.
// Replace these URLs with the exact images from the original carousel if needed.
const projects = [
  { id: "thiral", title: "THIRAL", category: "Exhibition stand", image: "https://k-g.gr/wp-content/uploads/2022/10/THIRAL-1024x768.jpg" },
  { id: "pegasus-lab", title: "PEGASUS", category: "Exhibition stand", image: "https://k-g.gr/wp-content/uploads/2022/10/PEGASUS-1-1024x682.jpg" },
  { id: "cyclon", title: "CYCLON", category: "Exhibition stand", image: "https://k-g.gr/wp-content/uploads/2022/10/CYCLON-1024x768.jpg" },
  { id: "lyrakis-family", title: "LYRAKIS FAMILY", category: "Exhibition stand", image: "https://k-g.gr/wp-content/uploads/2022/10/LYRAKIS-1-1024x768.jpg" },
  { id: "marras", title: "MARRAS", category: "Exhibition stand", image: "https://k-g.gr/wp-content/uploads/2022/10/MARRAS-1024x768.jpg" },
  { id: "skag", title: "SKAG", category: "Exhibition stand", image: "https://k-g.gr/wp-content/uploads/2022/05/skag-1024x768.jpg" },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState([]);
  const available = projects.filter((project) => !failed.includes(project.id));
  const index = available.length ? ((active % available.length) + available.length) % available.length : 0;
  const project = available[index];

  useEffect(() => { setActive(0); }, []);

  const move = (direction) => {
    setActive((previous) => available.length ? (previous + direction + available.length) % available.length : 0);
  };

  const onImageError = (id) => {
    setFailed((previous) => previous.includes(id) ? previous : [...previous, id]);
    setActive(0);
  };

  return (
    <main className="kg-projects">
      {/* HERO — identical to Exhibition Stands */}
      <section className="kg-exhibitions__hero">
        <div className="kg-container kg-exhibitions__hero-inner">
          <p className="kg-eyebrow">KG / Selected work</p>
          <h1>
            Beyond <em>Ordinary.</em>
          </h1>
          <p className="kg-exhibitions__lead">
            Explore the spaces we've created. Designed to express identity. Built to leave a lasting impression.
          </p>
          <div className="kg-exhibitions__hero-meta">
            <span>Creativity</span>
            <span>Innovation</span>
            <span>Excellence</span>
          </div>
        </div>
      </section>

      <section className="kg-projects__showcase" aria-label="Featured projects carousel">
        <div className="kg-projects__container">
          <div className="kg-projects__topline"><span>FEATURED PROJECTS</span><span>{available.length ? `${String(index + 1).padStart(2,"0")} / ${String(available.length).padStart(2,"0")}` : "00 / 00"}</span></div>
          {project ? (
            <>
              <div className="kg-projects__stage">
                <div className="kg-projects__image-wrap">
                  <img key={project.id} src={project.image} alt={`${project.title} exhibition project`} onError={() => onImageError(project.id)} />
                  <div className="kg-projects__image-shade" />
                  <div className="kg-projects__image-caption"><span>{project.category}</span><h2>{project.title}<span>.</span></h2></div>
                </div>
                <div className="kg-projects__controls">
                  <button type="button" onClick={() => move(-1)} aria-label="Previous project">←</button>
                  <button type="button" onClick={() => move(1)} aria-label="Next project">→</button>
                </div>
              </div>
              <div className="kg-projects__bottom">
                <div className="kg-projects__thumbs" aria-label="Choose a project">
                  {available.map((item, i) => (
                    <button key={item.id} type="button" className={`kg-projects__thumb ${i === index ? "is-active" : ""}`} onClick={() => setActive(i)} aria-label={`Show ${item.title}`} aria-pressed={i === index}>
                      <img src={item.image} alt="" loading="lazy" onError={() => onImageError(item.id)} />
                    </button>
                  ))}
                </div>
                <Link className="kg-projects__detail-link" to={`/exhibition-stands/${project.id}`}>View project ↗</Link>
              </div>
            </>
          ) : <p className="kg-projects__empty" role="status">Project images are currently unavailable.</p>}
        </div>
      </section>

      <section className="kg-projects__outro">
        <div className="kg-projects__container kg-projects__outro-inner">
          <div><p className="kg-projects__eyebrow">EXPLORE MORE</p><h2>Every project has <em>a story.</em></h2><p>Discover more of our exhibition stand design and construction work.</p></div>
          <Link className="kg-projects__button" to="/exhibition-stands">All exhibition stands ↗</Link>
        </div>
      </section>
    </main>
  );
}
