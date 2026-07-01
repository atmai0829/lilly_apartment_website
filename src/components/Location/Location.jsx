import './Location.css';
import { useLanguage } from '../../context/LanguageContext';

export default function Location() {
  const { t } = useLanguage();
  const loc = t.location;
  return (
    <section id='location' className='location section'>
      <div className='container'>
        <div className='section__header'>
          <p className='section__label'>{loc.label}</p>
          <h2 className='section__title'>{loc.title}</h2>
          <p className='section__subtitle'>{loc.subtitle}</p>
        </div>

        <div className='location__grid'>
          <div className='location__map'>
            <div className='location__map-placeholder'>
              <span className='location__map-icon'>&#128506;</span>
              <p className='location__map-address'>
                105 H&#224; K&#7923; Ng., An H&#7843;i, &#272;&#224; N&#7861;ng 550000, Vietnam
              </p>
              <a
                href='https://www.google.com/maps/search/105+Ha+Ky+Ngo+An+Hai+Da+Nang+550000+Vietnam'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn--outline btn--sm'
              >
                {loc.viewOnMaps}
              </a>
            </div>
          </div>

          <div className='location__info'>
            <h3 className='location__info-title'>{loc.nearbyTitle}</h3>
            <div className='location__nearby'>
              {loc.nearby.map((item) => (
                <div key={item.label} className='location__nearby-item'>
                  <span className='location__nearby-icon'>{item.icon}</span>
                  <span className='location__nearby-label'>{item.label}</span>
                  <span className='location__nearby-dist'>{item.dist}</span>
                </div>
              ))}
            </div>

            <div className='location__transport'>
              <h4>{loc.gettingAround}</h4>
              <div className='location__transport-items'>
                {loc.transport.map((badge) => (
                  <span key={badge} className='location__transport-badge'>{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
