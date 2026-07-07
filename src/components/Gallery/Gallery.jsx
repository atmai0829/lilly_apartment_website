import { useState, useEffect, useCallback } from "react";
import "./Gallery.css";
import { useLanguage } from "../../context/LanguageContext";

const base = import.meta.env.BASE_URL;
const galleryItems = [
  { id: 1, src: base + "apartmentpictures/planA_1.webp" },
  { id: 2, src: base + "apartmentpictures/counter1.webp" },
  { id: 3, src: base + "apartmentpictures/planB_5.webp" },
  { id: 4, src: base + "apartmentpictures/event_lounge.webp" },
  { id: 5, src: base + "apartmentpictures/planB_7.webp" },
  { id: 6, src: base + "apartmentpictures/planA_6.webp" },
  { id: 7, src: base + "apartmentpictures/planC_1new.webp" },
  { id: 8, src: base + "apartmentpictures/planC_tv.webp" },
  { id: 9, src: base + "apartmentpictures/planA_kitchen.webp" },
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
              className={
                "gallery__item" +
                (index === 0 ? " gallery__item--featured" : "")
              }
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
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
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
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            &#8250;
          </button>
          <p className="lightbox__counter">{lightbox + 1} / {items.length}</p>
        </div>
      )}
    </section>
  );
}
