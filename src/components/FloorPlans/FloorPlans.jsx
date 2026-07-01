import { useState } from 'react';
import './FloorPlans.css';
import { useLanguage } from '../../context/LanguageContext';

const PLAN_IMAGES = {
  'plan-a': '/plan_A.png',
  'plan-b': '/plan_B.png',
  'plan-c': '/plan_C.png',
  'plan-d': '/plan_D.png',
};

export default function FloorPlans() {
  const { t } = useLanguage();
  const fp = t.floorPlans;
  const plans = fp.plans.map((p) => ({
    ...p,
    features: [...p.extraFeatures, ...fp.shared],
  }));

  const [selected, setSelected] = useState('plan-a');
  const plan = plans.find((p) => p.id === selected);

  return (
    <section id='floor-plans' className='floor-plans section section--alt'>
      <div className='container'>
        <div className='section__header'>
          <p className='section__label'>{fp.label}</p>
          <h2 className='section__title'>{fp.title}</h2>
          <p className='section__subtitle'>{fp.subtitle}</p>
        </div>

        <div className='floor-plans__tabs'>
          {plans.map((p) => (
            <button
              key={p.id}
              className={'floor-plans__tab ' + (selected === p.id ? 'floor-plans__tab--active' : '')}
              onClick={() => setSelected(p.id)}
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className='floor-plans__detail'>
          <div className='floor-plans__preview'>
            <div className='floor-plans__diagram'>
              <img
                src={PLAN_IMAGES[plan.id]}
                alt={plan.name + ' floor plan'}
                className='floor-plans__diagram-img'
              />
            </div>
          </div>

          <div className='floor-plans__info'>
            <h3 className='floor-plans__name'>{plan.name}</h3>
            <p className='floor-plans__tagline'>{plan.tagline}</p>
            <div className='floor-plans__meta'>
              <span className='floor-plans__meta-item'>&#127761; {plan.beds}</span>
              <span className='floor-plans__meta-item'>&#128703; {plan.baths}</span>
              <span className='floor-plans__meta-item'>{plan.view}</span>
              {plan.balcony && (
                <span className='floor-plans__meta-item'>&#127968; {plan.balcony}</span>
              )}
            </div>
            <p className='floor-plans__desc'>{plan.desc}</p>
            <ul className='floor-plans__features'>
              {plan.features.map((f) => (
                <li key={f}>
                  <span className='floor-plans__check'>&#10003;</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className='floor-plans__pricing'>
              <div className='floor-plans__price-cards'>
                <div className='floor-plans__price-card'>
                  <span className='floor-plans__price-label'>{fp.monthlyRent}</span>
                  <span className='floor-plans__price-value'>{fp.contactForPrice}</span>
                </div>
                <div className='floor-plans__price-card'>
                  <span className='floor-plans__price-label'>{fp.dailyRate}</span>
                  <span className='floor-plans__price-value'>{fp.contactForPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
