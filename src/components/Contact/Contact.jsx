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
