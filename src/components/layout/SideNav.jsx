import { useState, useEffect } from "react";
import { navLinks } from "../../data/content";
import "./SideNav.css";

/* Design: Vertical rail navigation — gallery/museum wayfinding
   instead of a traditional top navbar. Active section tracked via scroll. */
export default function SideNav({ isDark, onToggleTheme }) {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="side-nav" aria-label="Main navigation">
        <a href="#intro" className="side-nav__brand" aria-label="Home">
          P
        </a>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="theme-toggle__icon">{isDark ? "☀︎" : "☾"}</span>
          <span className="theme-toggle__label">
            {isDark ? "Light" : "Dark"}
          </span>
        </button>

        <ul className="side-nav__list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`side-nav__link ${active === link.id ? "side-nav__link--active" : ""}`}
                onClick={() => scrollTo(link.id)}
                aria-current={active === link.id ? "true" : undefined}
              >
                <span className="side-nav__dot" />
                <span className="side-nav__label">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        <button
          type="button"
          className="mobile-nav__theme"
          onClick={onToggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDark ? "☀︎" : "☾"}
        </button>
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={`mobile-nav__item ${active === link.id ? "mobile-nav__item--active" : ""}`}
            onClick={() => scrollTo(link.id)}
            aria-label={link.label}
          >
            {link.label.slice(0, 1)}
          </button>
        ))}
      </nav>
    </>
  );
}
