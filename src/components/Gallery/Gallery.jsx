import { useState, useEffect, useCallback } from "react";
import "./Gallery.css";
import { useLanguage } from "../../context/LanguageContext";

const galleryItems = [
  { id: 1, src: "/apartmentpictures/planB_1.jpeg", span: "normal" },
  { id: 2, src: "/apartmentpictures/two_bedroom.JPG", span: "normal" },
  { id: 3, src: "/apartmentpictures/washer_dryer.JPG", span: "normal" },
  { id: 4, src: "/apartmentpictures/full_kitchen.jpg", span: "normal" },
  { id: 5, src: "/apartmentpictures/closet.JPG", span: "normal" },
  { id: 6, src: "/apartmentpictures/bathroom1.JPG", span: "normal" },
  { id: 7, src: "/apartmentpictures/bathroom2.jpg", span: "normal" },
  { id: 8, src: "/apartmentpictures/event_lounge.jpeg", span: "normal" },
  { id: 9, src: "/apartmentpictures/front.jpeg", span: "normal" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) => (i - 1 + galleryItems.length) % galleryItems.length),
    [],
  );
  const next = useCallback(
    () => setLightbox((i) => (i + 1) % galleryItems.length),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  const items = galleryItems.map((item, i) => ({
    ...item,
    label: t.gallery.photos[i],
  }));

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section__header">
          <p className="section__label">{t.gallery.label}</p>
          <h2 className="section__title">
            {t.gallery.title1}
            <br />
            {t.gallery.title2}
          </h2>
          <p className="section__subtitle">{t.gallery.subtitle}</p>
        </div>

        <div className="gallery__grid">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={"gallery__item gallery__item--" + item.span}
              onClick={() => setLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={"View " + item.label}
              onKeyDown={(e) => e.key === "Enter" && setLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.label}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__item-overlay">
                <p>{item.label}</p>
                <span className="gallery__item-zoom">{t.gallery.zoom}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="lightbox"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="lightbox__close"
            onClick={close}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="lightbox__prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].label}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            &#8250;
          </button>
          <p className="lightbox__caption">{items[lightbox].label}</p>
        </div>
      )}
    </section>
  );
}
