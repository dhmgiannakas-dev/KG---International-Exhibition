import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to the top whenever a new route is opened. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
