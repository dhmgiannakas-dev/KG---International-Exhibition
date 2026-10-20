import "./Home.css";
import heroImage from "../assets/hero-kg.png";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { projects, stats, services } from "./../data/homeData";
import ClientsCarousel from "../components/ClientsCarousel";
import AnimatedCounter from "../components/AnimatedCounter";


export default function Home() {
  return <section id="home" className="kg-home">
    <section className="kg-hero" style={{ "--hero-image": `url("${heroImage}")` }} aria-labelledby="kg-hero-title">
      <div className="kg-container kg-hero__inner">
        <div className="kg-hero__copy">
          <p className="kg-eyebrow">Ideas / Design / Construction</p>
          <h1 id="kg-hero-title">Exhibition<br />spaces.<br /><em>Extraordinary<br />experiences.</em></h1>
          <p className="kg-hero__subtitle">Designing &amp; building exhibition stands since 1990</p>
          <div className="kg-hero__actions">
            <a className="kg-button kg-button--gold" href="#projects">Explore Projects <span aria-hidden="true"><ArrowRightAltIcon /></span></a>
            <a className="kg-button kg-button--outline" href="#contact">Get in Touch <span aria-hidden="true"><ArrowRightAltIcon /></span></a>
          </div>
        </div>
      </div>
    </section>


{/* =========================================
    COMPANY STATS — ANIMATED COUNTERS
========================================= */}

<section
  id="stats"
  className="kg-stats"
  aria-label="Company highlights"
>
  <div className="kg-container kg-stats__grid">
    {stats.map(([value, label]) => {
      const numericValue = Number(
        String(value).replace(/\./g, "")
      );

      return (
        <div className="kg-stats__item" key={label}>
          <strong className="kg-stats__number">
            <AnimatedCounter
              value={numericValue}
              duration={2200}
            />
          </strong>

          <span className="kg-stats__label">
            {label}
          </span>
        </div>
      );
    })}
  </div>
</section>


    <section id="projects" className="kg-projects">
      <div className="kg-container">
        <div className="kg-projects__heading">
          <p className="kg-eyebrow">Featured Projects</p>
          <a href="#contact">DISCUSS YOUR PROJECT <span>↗</span></a>
          </div>
        <div className="kg-projects__grid">
          {projects.map(({ title, type, image }) => 
          <article className="kg-project" key={title}>
            <a className="kg-project__image" href="#contact" aria-label={`Enquire about ${title}`}>
              <img src={image} alt={`Illustrative exhibition project: ${title}`} loading="lazy" />
              </a>
            <div className="kg-project__details">
              <div>
                <h3>{title}</h3>
                <p>{type}</p>
                </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section id="about" className="kg-about">
      <div className="kg-about__intro">
        <div className="kg-about__copy">
          <p className="kg-eyebrow">About KG</p>
          <h2>Built to<br /><em>stand out.</em></h2>
          <p>We create distinctive exhibition environments that help brands connect, communicate and leave a lasting impression.</p>
          <a className="kg-button kg-button--gold" href="#contact">Our Story ↗</a>
        </div>
        <div className="kg-about__image">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=85" alt="Illustrative modern architectural interior" loading="lazy" />
        </div>
      </div>
      <div id="services" className="kg-container kg-about__services">
        {services.map(({ symbol, title, description }) => <div className="kg-service" key={title}>
          <span className="kg-service__icon" aria-hidden="true">{symbol}</span>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>)}
      </div>
    </section>

    {/* =========================================
    CLIENTS / PARTNERS SECTION
========================================= */}

    <ClientsCarousel />

    <section id="contact" className="kg-contact">
      <div className="kg-container kg-contact__inner">
        <div>
          <div className="kg-contact__heading">
          <p className="kg-eyebrow">Let's create something great</p>
          </div>
          <h2>Ready to stand out?</h2>
          <p>Let's talk about your next exhibition project.</p>
        </div>
        <a className="kg-button kg-button--gold" href="mailto:info@k-g.gr?subject=Exhibition%20Stand%20Enquiry">Get in Touch <ArrowRightAltIcon></ArrowRightAltIcon></a>
      </div>
    </section>
  </section>;
}
