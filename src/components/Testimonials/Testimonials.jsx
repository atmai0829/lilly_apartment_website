import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Sarah M.",
    unit: "Resident, 2 Bedroom",
    stars: 5,
    text: "Moving into Lilly Apartment was the best decision I've made. The quality of finishes, the attentive staff, and the community feel here are unlike anything I've experienced. I truly feel at home.",
    initials: "SM",
  },
  {
    id: 2,
    name: "James T.",
    unit: "Resident, Penthouse",
    stars: 5,
    text: "The views from our penthouse terrace are absolutely breathtaking. The building management is incredibly responsive and the amenities are top-notch. Worth every penny.",
    initials: "JT",
  },
  {
    id: 3,
    name: "Priya K.",
    unit: "Resident, 1 Bedroom",
    stars: 5,
    text: "I love how everything is designed with the resident in mind — smart home features, the rooftop pool, the fitness center. It's made my day-to-day life so much more enjoyable.",
    initials: "PK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section section--alt">
      <div className="container">
        <div className="section__header">
          <p className="section__label">Testimonials</p>
          <h2 className="section__title">Loved by Our Residents</h2>
          <p className="section__subtitle">
            Don't just take our word for it — hear from the people who call
            Lilly Apartment home.
          </p>
        </div>

        <div className="testimonials__grid">
          {reviews.map((r) => (
            <div key={r.id} className="testimonial-card">
              <div className="testimonial-card__stars">
                {"★".repeat(r.stars)}
              </div>
              <p className="testimonial-card__text">"{r.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{r.initials}</div>
                <div>
                  <p className="testimonial-card__name">{r.name}</p>
                  <p className="testimonial-card__unit">{r.unit}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials__cta">
          <p>Ready to join our community?</p>
          <a href="#contact" className="btn btn--primary">
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  );
}
