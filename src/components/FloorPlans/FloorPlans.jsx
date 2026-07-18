import { useState, useEffect } from "react";
import "./FloorPlans.css";
import { useLanguage } from "../../context/LanguageContext";

const base = import.meta.env.BASE_URL;
const PLAN_PHOTOS = {
  "plan-a": [
    base + "apartmentpictures/planA_1.webp",
    base + "apartmentpictures/planA_2.webp",
    base + "apartmentpictures/planA_3.webp",
    base + "apartmentpictures/planA_4.webp",
    base + "apartmentpictures/planA_5.webp",
    base + "apartmentpictures/planA_6.webp",
    base + "apartmentpictures/planA_7.webp",
    base + "apartmentpictures/planA_bathroom.webp",
    base + "apartmentpictures/planA_bathroom2.webp",
    base + "apartmentpictures/planA_counter.webp",
    base + "apartmentpictures/planA_kitchen.webp",
  ],
  // "plan-b": [
  //   base + "apartmentpictures/planB_1.webp",
  //   base + "apartmentpictures/planB_2.webp",
  //   base + "apartmentpictures/planB_3.webp",
  //   base + "apartmentpictures/planB_4.webp",
  //   base + "apartmentpictures/planB_5.webp",
  //   base + "apartmentpictures/planB_6.webp",
  //   base + "apartmentpictures/planB_7.webp",
  //   base + "apartmentpictures/planB_8.webp",
  // ],
  "plan-c": [
    base + "apartmentpictures/planC_1new.webp",
    base + "apartmentpictures/planC_2.webp",
    base + "apartmentpictures/planC_3.webp",
    base + "apartmentpictures/planC_4.webp",
    base + "apartmentpictures/planC_tv.webp",
  ],
};

export default function FloorPlans() {
  const { t } = useLanguage();
  const fp = t.floorPlans;
  const plans = fp.plans.map((p) => ({
    ...p,
    features: [...p.extraFeatures, ...fp.shared],
  }));

  const [selected, setSelected] = useState("plan-a");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const plan = plans.find((p) => p.id === selected);
  const photos = PLAN_PHOTOS[selected];

  useEffect(() => {
    setPhotoIndex(0);
  }, [selected]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, photoIndex]);

  const prevPhoto = () =>
    setPhotoIndex((i) => (i - 1 + photos.length) % photos.length);
  const nextPhoto = () => setPhotoIndex((i) => (i + 1) % photos.length);

  return (
    <section id="floor-plans" className="floor-plans section section--alt">
      <div className="container">
        <div className="section__header">
          <p className="section__label">{fp.label}</p>
          <h2 className="section__title">{fp.title}</h2>
          <p className="section__subtitle">{fp.subtitle}</p>
        </div>

        <div className="floor-plans__tabs">
          {plans.map((p) => (
            <button
              key={p.id}
              className={
                "floor-plans__tab " +
                (selected === p.id ? "floor-plans__tab--active" : "")
              }
              onClick={() => setSelected(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="floor-plans__detail">
          <div className="floor-plans__preview">
            <div
              className="floor-plans__diagram"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={photos[photoIndex]}
                alt={plan.name + " photo " + (photoIndex + 1)}
                className="floor-plans__diagram-img"
                loading="lazy"
              />
              <div className="floor-plans__zoom-hint">
                &#128269; Click to enlarge
              </div>
              <div className="floor-plans__photo-nav">
                <button
                  className="floor-plans__photo-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  aria-label="Previous photo"
                >
                  &#8249;
                </button>
                <span className="floor-plans__photo-counter">
                  {photoIndex + 1} / {photos.length}
                </span>
                <button
                  className="floor-plans__photo-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  aria-label="Next photo"
                >
                  &#8250;
                </button>
              </div>
            </div>
          </div>

          <div className="floor-plans__info">
            <h3 className="floor-plans__name">{plan.name}</h3>
            <p className="floor-plans__tagline">{plan.tagline}</p>
            <div className="floor-plans__meta">
              <span className="floor-plans__meta-item">🛌 {plan.beds}</span>
              <span className="floor-plans__meta-item">
                &#128703; {plan.baths}
              </span>
              <span className="floor-plans__meta-item">{plan.view}</span>
              {plan.balcony && (
                <span className="floor-plans__meta-item">
                  &#127968; {plan.balcony}
                </span>
              )}
            </div>
            <p className="floor-plans__desc">{plan.desc}</p>
            <ul className="floor-plans__features">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="floor-plans__check">&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="floor-plans__pricing">
              <div className="floor-plans__price-cards">
                <div className="floor-plans__price-card">
                  <span className="floor-plans__price-label">
                    {fp.monthlyRent}
                  </span>
                  <span className="floor-plans__price-value">
                    {fp.contactForPrice}
                  </span>
                </div>
                <div className="floor-plans__price-card">
                  <span className="floor-plans__price-label">
                    {fp.dailyRate}
                  </span>
                  <span className="floor-plans__price-value">
                    {fp.contactForPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fp-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="fp-lightbox__close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="fp-lightbox__nav fp-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prevPhoto();
            }}
            aria-label="Previous"
          >
            &#8249;
          </button>
          <img
            src={photos[photoIndex]}
            alt={plan.name + " photo " + (photoIndex + 1)}
            className="fp-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="fp-lightbox__nav fp-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              nextPhoto();
            }}
            aria-label="Next"
          >
            &#8250;
          </button>
          <p className="fp-lightbox__counter">
            {photoIndex + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}
