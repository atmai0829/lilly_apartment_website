import "./About.css";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const { label, title1, title2, body1, body2, highlights } = t.about;
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__visual">
            <div className="about__img-main">
              <img
                src={import.meta.env.BASE_URL + "apartmentpictures/front.jpeg"}
                alt="Lilly Apartment - Front View"
                className="about__img"
              />
            </div>
            <div className="about__img-accent">
              <img
                src={import.meta.env.BASE_URL + "apartmentpictures/planA_6.jpg"}
                alt="Lilly Apartment - Plan A View"
                className="about__img"
              />
            </div>
            <div className="about__badge">
              <span className="about__badge-year">Est.</span>
              <span className="about__badge-num">2026</span>
            </div>
          </div>
          <div className="about__content">
            <p className="section__label">{label}</p>
            <h2 className="section__title">
              {title1}
              <br />
              {title2}
            </h2>
            <p className="about__text">{body1}</p>
            <p className="about__text">{body2}</p>
            <div className="about__highlights">
              {highlights.map((h) => (
                <div key={h.label} className="about__highlight">
                  <span className="about__highlight-icon">{h.icon}</span>
                  <div>
                    <h4>{h.label}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
