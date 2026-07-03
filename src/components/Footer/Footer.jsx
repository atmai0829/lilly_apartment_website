import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";

const socials = [
  { label: "Instagram", href: "#", icon: "&#128247;" },
  { label: "Facebook", href: "#", icon: "&#128077;" },
  { label: "Twitter", href: "#", icon: "&#128038;" },
  { label: "YouTube", href: "#", icon: "&#9654;&#65039;" },
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const nav = t.nav;

  const quickLinks = [
    { label: nav.about, href: "#about" },
    { label: nav.features, href: "#features" },
    { label: nav.gallery, href: "#gallery" },
    { label: nav.floorPlans, href: "#floor-plans" },
    { label: nav.location, href: "#location" },
    { label: nav.contact, href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">L</span>
              <span>Lilly Apartment</span>
            </div>
            <p className="footer__tagline">{f.tagline}</p>
            <div className="footer__socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social"
                  aria-label={s.label}
                  dangerouslySetInnerHTML={{ __html: s.icon }}
                />
              ))}
            </div>
          </div>

          <div className="footer__links">
            <h4>{f.quickLinks}</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact-col">
            <h4>{f.getInTouch}</h4>
            <p>
              &#128205; 105 H&#224; K&#7923; Ng.
              <br />
              An H&#7843;i, &#272;&#224; N&#7861;ng 550000, Vietnam
            </p>
            <p>&#128222; +84 0787 590 468</p>
            <p>&#128336; {f.available}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &#169; {new Date().getFullYear()} Lilly Apartment. {f.copyright}
          </p>
          <div className="footer__legal">
            <a href="#">{f.privacy}</a>
            <a href="#">{f.terms}</a>
            <a href="#">{f.accessibility}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
