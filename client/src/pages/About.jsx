import { Link } from "react-router-dom";
import AnimatedCounter from "../components/AnimatedCounter";
import "./About.css";

const values = [
  {
    number: "01",
    title: "We listen",
    description: "Every project starts with understanding the brand, the space and the people it needs to reach.",
  },
  {
    number: "02",
    title: "We design",
    description: "We combine creative direction with functionality, materials and careful technical planning.",
  },
  {
    number: "03",
    title: "We build",
    description: "We bring each approved concept into the exhibition environment with attention to the final detail.",
  },
];

export default function About() {
  return (
    <main className="kg-about-page">
      {/* HERO — identical to Exhibition Stands */}
      <section className="kg-exhibitions__hero">
        <div className="kg-container kg-exhibitions__hero-inner">
          <p className="kg-eyebrow">KG / Who we are</p>
          <h1>
            Built to <em>Create.</em>
          </h1>
          <p className="kg-exhibitions__lead">
            Driven by creativity. Defined by experience. Dedicated to bringing ambitious ideas to life.
          </p>
          <div className="kg-exhibitions__hero-meta">
            <span>Passion</span>
            <span>Experience</span>
            <span>Craftsmanship</span>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="kg-about-page__story" id="kg-about-story">
        <div className="kg-about-page__container kg-about-page__story-grid">
          <div className="kg-about-page__story-side">
            <p className="kg-about-page__label">OUR STORY</p>
            <span className="kg-about-page__year">
              <span className="kg-about-page__year-number">
                <AnimatedCounter value={1990} format={false} />
              </span>
              <span className="kg-about-page__year-label">— today</span>
            </span>
          </div>
          <div className="kg-about-page__story-content">
            <h2 className="kg-about-page__section-title">
              Experience meets <span>new ideas.</span>
            </h2>
            <p>
              K&G has worked in exhibition stand design and construction since
              1990, under the direction of architect Vasilis Kasimidis and in
              collaboration with a network of specialists.
            </p>
            <p>
              Our work begins with a simple principle: a successful exhibition
              space should express a brand's identity while responding to its
              practical needs. From the first conversation to the finished stand,
              we aim for clarity, creativity and care.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="kg-about-page__expertise">
        <div className="kg-about-page__container">
          <div className="kg-about-page__expertise-head">
            <div>
              <p className="kg-about-page__label">OUR APPROACH</p>
              <h2 className="kg-about-page__section-title">
                One idea. <span>Every detail.</span>
              </h2>
            </div>
            <p>
              We connect concept, design and construction in a clear process
              shaped around each project.
            </p>
          </div>
          <div className="kg-about-page__values">
            {values.map((value) => (
              <article className="kg-about-page__value" key={value.number}>
                <span className="kg-about-page__value-number">{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="kg-about-page__cta">
        <div className="kg-about-page__container kg-about-page__cta-inner">
          <div>
            <p className="kg-about-page__label">LET'S CREATE SOMETHING</p>
            <h2>Have a space in mind?</h2>
            <p>Let's turn your next exhibition into an experience worth remembering.</p>
          </div>
          <div className="kg-about-page__cta-actions">
            <Link to="/exhibition-stands" className="kg-about-page__cta-outline">
              View our work ↗
            </Link>
            <a href="mailto:info@k-g.gr" className="kg-about-page__cta-button">
              Get in touch ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
