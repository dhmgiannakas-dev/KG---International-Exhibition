import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExhibitionStands from "./pages/exhibitionStands";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ExhibitionStandDetail from "./pages/ExhibitionStandDetail";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* Global Header */}
      <Header />

      {/* Page content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/exhibition-stands"
            element={<ExhibitionStands />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/exhibition-stands"
            element={<ExhibitionStands />}
          />

          <Route
            path="/exhibition-stands/:id"
            element={<ExhibitionStandDetail />}
          />

          {/* 404 - Page not found */}
          <Route
            path="*"
            element={
              <div className="kg-container" style={{ padding: "120px 0" }}>
                <h1>404 — Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
