import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Brand from "./Brand";
import "./Header.css";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Exhibition Stands", to: "/exhibition-stands" },
  { label: "Projects", to: "/projects" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the menu when the user navigates to another route.
  useEffect(() => setOpen(false), [pathname]);

  // Support Escape and close the menu when returning to desktop.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const media = window.matchMedia("(max-width: 1024px)");
    const onBreakpointChange = () => {
      if (!media.matches) setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onBreakpointChange);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onBreakpointChange);
    };
  }, [open]);

  return (
    <header className="kg-header">
      <div className="kg-container kg-header__inner">
        <Brand />

        <button
          type="button"
          className={`kg-header__toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="kg-navigation"
          aria-expanded={open}
          onClick={() => setOpen((previous) => !previous)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="kg-navigation"
          className={`kg-header__nav${open ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="kg-header__links">
            {navigation.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `kg-header__link${isActive ? " is-active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* One CTA, shared by desktop and the responsive dropdown. */}
          <a
            className="kg-button kg-button--gold kg-header__cta"
            href="mailto:info@k-g.gr?subject=Exhibition%20Stand%20Enquiry"
            onClick={() => setOpen(false)}
          >
            <span>Get in Touch</span>
            <ArrowRightAltIcon aria-hidden="true" fontSize="small" />
          </a>
        </nav>
      </div>
    </header>
  );
}
