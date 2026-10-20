import { Link, NavLink } from "react-router-dom";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Brand from "./Brand";
import "./Footer.css";

// Keep the footer navigation in one place, matching App.jsx routes.
const footerLinks = [
  { label: "Home", to: "/" },
  { label: "Exhibition Stands", to: "/exhibition-stands" },
  { label: "Projects", to: "/projects" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// Replace phone/address values with KG's confirmed business details.
const contactDetails = {
  phoneDisplay: "+30 XXX XXX XXXX",
  phoneHref: "", // e.g. tel:+302101234567
  email: "info@k-g.gr",
  address: "Add KG's verified address",
  mapsHref: "", // Paste a verified Google Maps URL.
};

const enquiryEmail =
  "mailto:info@k-g.gr?subject=Exhibition%20Stand%20Enquiry";

export default function Footer() {
  return (
    <footer className="kg-footer" aria-label="Site footer">
      <div className="kg-container">
        {/* Main invitation and call to action */}
        <div className="kg-footer__top">
          <div className="kg-footer__intro">
            <span className="kg-footer__eyebrow">LET'S BUILD WHAT'S NEXT</span>
            <h2>
              Make your next <em>exhibition unforgettable.</em>
            </h2>
            <a className="kg-button kg-button--gold kg-footer__cta" href={enquiryEmail}>
              Start a Project <ArrowOutwardIcon fontSize="small" aria-hidden="true" />
            </a>
          </div>

          {/* Navigation and contact information */}
          <div className="kg-footer__columns">
            <div className="kg-footer__column">
              <h3>Explore</h3>
              <nav className="kg-footer__links" aria-label="Footer navigation">
                {footerLinks.map(({ label, to }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                      `kg-footer__link${isActive ? " is-active" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
                <a
                  className="kg-footer__link"
                  href="https://k-g.gr/en/home-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Existing KG website <ArrowOutwardIcon fontSize="inherit" aria-hidden="true" />
                </a>
              </nav>
            </div>

            <div className="kg-footer__column kg-footer__column--contact">
              <h3>Get in touch</h3>
              <address className="kg-footer__contact-list">
                <div className="kg-footer__contact-item">
                  <PhoneOutlinedIcon aria-hidden="true" />
                  {contactDetails.phoneHref ? (
                    <a href={contactDetails.phoneHref}>{contactDetails.phoneDisplay}</a>
                  ) : (
                    <span>{contactDetails.phoneDisplay}</span>
                  )}
                </div>
                <div className="kg-footer__contact-item">
                  <EmailOutlinedIcon aria-hidden="true" />
                  <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
                </div>
                <div className="kg-footer__contact-item">
                  <LocationOnOutlinedIcon aria-hidden="true" />
                  {contactDetails.mapsHref ? (
                    <a href={contactDetails.mapsHref} target="_blank" rel="noopener noreferrer">
                      {contactDetails.address}
                    </a>
                  ) : (
                    <span>{contactDetails.address}</span>
                  )}
                </div>
              </address>
            </div>
          </div>
        </div>

        {/* Global footer bottom bar */}
        <div className="kg-footer__bottom">
          <Brand />
          <p>© {new Date().getFullYear()} KG. All rights reserved.</p>
          <Link className="kg-footer__back" to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top <KeyboardArrowUpIcon fontSize="small" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
