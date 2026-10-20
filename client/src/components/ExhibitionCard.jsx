import { Link } from "react-router-dom";

/** Reusable exhibition card for the listing and related projects. */
export default function ExhibitionCard({ stand, index }) {
  return (
    <article className="kg-exhibition-card">
      <Link
        className="kg-exhibition-card__link"
        to={`/exhibition-stands/${stand.id}`}
        aria-label={`View ${stand.title} exhibition stand`}
      >
        <div className="kg-exhibition-card__media">
          <img
            src={stand.image}
            alt={`${stand.title} exhibition stand by KG`}
            loading="lazy"
          />
          <span className="kg-exhibition-card__number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="kg-exhibition-card__arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <div className="kg-exhibition-card__info">
          <div>
            <span className="kg-exhibition-card__eyebrow">
              Exhibition stand
            </span>
            <h3>{stand.title}</h3>
          </div>
          <span className="kg-exhibition-card__view">View project</span>
        </div>
      </Link>
    </article>
  );
}
