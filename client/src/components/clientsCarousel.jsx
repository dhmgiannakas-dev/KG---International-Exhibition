import "./clientsCarousel.css";
import { clients } from "../data/carouselData";

/* =========================================
   REUSABLE CLIENT LOGO
========================================= */

function ClientLogo({ client }) {
  return (
    <div className="kg-clients__item">
      <img
        className="kg-clients__logo"
        src={client.image}
        alt={client.name}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* =========================================
   CLIENTS CAROUSEL SECTION
========================================= */

export default function ClientsCarousel() {
  return (
    <section
      className="kg-clients"
      aria-labelledby="kg-clients-title"
    >
      <div className="kg-clients__container">
        {/* SECTION HEADING */}
        <div className="kg-clients__heading">
          <span className="kg-clients__eyebrow">
            VALUABLE COOPERATIONS
          </span>

          <h2
            className="kg-clients__title"
            id="kg-clients-title"
          >
            Our Trusted <span>Partners.</span>
          </h2>

          <p className="kg-clients__description">
            Proud to have collaborated with remarkable
            brands across different industries.
          </p>
        </div>
      </div>

      {/* INFINITE LOGO MARQUEE */}
      <div className="kg-clients__carousel">
        <div className="kg-clients__track">
          {/* ORIGINAL LOGO SET */}
          <div className="kg-clients__group">
            {clients.map((client) => (
              <ClientLogo
                key={client.name}
                client={client}
              />
            ))}
          </div>

          {/* DUPLICATE SET FOR SEAMLESS LOOP */}
          <div
            className="kg-clients__group"
            aria-hidden="true"
          >
            {clients.map((client) => (
              <ClientLogo
                key={`duplicate-${client.name}`}
                client={client}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}