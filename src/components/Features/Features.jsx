import './Features.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();
  const { label, title1, title2, subtitle, amenities, noPets } = t.features;
  return (
    <section id='features' className='features section section--alt'>
      <div className='container'>
        <div className='section__header'>
          <p className='section__label'>{label}</p>
          <h2 className='section__title'>
            {title1}
            <br />
            {title2}
          </h2>
          <p className='section__subtitle'>{subtitle}</p>
        </div>
        <div className='features__grid features__grid--centered'>
          {amenities.map((item) => (
            <div key={item.title} className='feature-card'>
              <span className='feature-card__icon'>{item.icon}</span>
              <h3 className='feature-card__title'>{item.title}</h3>
              <p className='feature-card__desc'>{item.desc}</p>
            </div>
          ))}
        </div>
        <p className='features__no-pets'>{noPets}</p>
      </div>
    </section>
  );
}
