import "./Hero.css";
import { useLanguage } from "../../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tagline">{t.hero.tagline}</p>
        <h1 className="hero__title">
          {t.hero.title1}
          <br />
          <span>{t.hero.title2}</span>
        </h1>
        <p className="hero__description">{t.hero.description}</p>
        <div className="hero__actions">
          <a href="#floor-plans" className="btn btn--primary">
            {t.hero.exploreUnits}
          </a>
          <a href="#contact" className="btn btn--outline">
            {t.hero.bookTour}
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">10</span>
            <span className="hero__stat-label">{t.hero.luxuryUnits}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">2</span>
            <span className="hero__stat-label">{t.hero.floorPlans}</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-value">5</span>
            <span className="hero__stat-label">{t.hero.floors}</span>
          </div>
        </div>
      </div>
      <a href="#about" className="hero__scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
