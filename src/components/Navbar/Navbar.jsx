import { useState, useEffect } from "react";
import "./Navbar.css";
import { useLanguage } from "../../context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.floorPlans, href: "#floor-plans" },
    { label: t.nav.location, href: "#location" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-icon">L</span>
        <span>Lilly Apartment</span>
      </a>

      <button
        className={`navbar__burger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__link"
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        {/* <a href="#contact" className="navbar__cta" onClick={handleLinkClick}>
          {t.nav.bookTour}
        </a> */}
        <div className="lang-toggle">
          {["en", "vi", "ko"].map((l) => (
            <button
              key={l}
              className={`lang-toggle__btn ${lang === l ? "lang-toggle__btn--active" : ""}`}
              onClick={() => setLang(l)}
              aria-label={`Switch to ${l.toUpperCase()}`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
