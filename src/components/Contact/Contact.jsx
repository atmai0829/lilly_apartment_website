import "./Contact.css";
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="contact__centered">
          <p className="section__label">{c.label}</p>
          <h2 className="section__title">{c.title}</h2>
          <p className="contact__info-text">{c.info}</p>

          <a href="tel:+84000000000" className="contact__phone-cta">
            <span className="contact__phone-icon">&#128222;</span>
            <span className="contact__phone-number">+84 0787 590 468</span>
          </a>

          <a
            href="https://www.airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__airbnb-cta"
          >
            <svg className="contact__airbnb-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.001 5.4c.96 0 1.74.78 1.74 1.74s-.78 1.74-1.74 1.74-1.74-.78-1.74-1.74.78-1.74 1.74-1.74zm4.321 10.56c-.18.54-.479 1.02-.899 1.38-.601.54-1.38.84-2.221.84-.6 0-1.2-.18-1.74-.48l-.06-.039-.061.039c-.539.3-1.139.48-1.739.48-.841 0-1.621-.3-2.221-.84-.42-.36-.72-.84-.9-1.38-.12-.36-.12-.72 0-1.08.42-1.26 2.04-2.64 4.86-4.08l.06-.03.061.03c2.82 1.44 4.44 2.82 4.86 4.08.12.36.12.72 0 1.08z"/>
            </svg>
            {c.airbnbBook}
          </a>

          <div className="contact__details">
            <div className="contact__detail-item">
              <span className="contact__detail-icon">&#128205;</span>
              <div>
                <p className="contact__detail-label">{c.addressLabel}</p>
                <p className="contact__detail-value">
                  105 H&#224; K&#7923; Ng., An H&#7843;i, &#272;&#224;
                  N&#7861;ng 550000, Vietnam
                </p>
              </div>
            </div>
            <div className="contact__detail-item">
              <span className="contact__detail-icon">&#128336;</span>
              <div>
                <p className="contact__detail-label">{c.availableLabel}</p>
                <p className="contact__detail-value">{c.availableValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
