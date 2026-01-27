import React from 'react';
import { useTranslation } from 'react-i18next';

const CoreValues = () => {
  const { t } = useTranslation();

  const values = [
    { icon: 'fa-lightbulb', title: 'innovationTitle', desc: 'innovationDesc' },
    { icon: 'fa-leaf', title: 'sustainabilityTitle', desc: 'sustainabilityDesc' },
    { icon: 'fa-hands-helping', title: 'empowermentTitle', desc: 'empowermentDesc' },
    { icon: 'fa-handshake', title: 'integrityTitle', desc: 'integrityDesc' },
    { icon: 'fa-tags', title: 'affordabilityTitle', desc: 'affordabilityDesc' },
    { icon: 'fa-chart-line', title: 'growthTitle', desc: 'growthDesc' },
  ];

  return (
    <section id="values" className="section-padding bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('sectionValues')}</h2>
            <p className="text-muted">{t('sectionValuesSub')}</p>
          </div>
        </div>
        
        <div className="row g-4">
          {values.map((v, i) => (
            <div key={i} className="col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="value-card text-center p-4">
                <div className="value-icon mb-3">
                  <i className={`fas ${v.icon} fa-3x text-success`}></i>
                </div>
                <h4 className="mb-3">{t(v.title)}</h4>
                <p className="text-muted">{t(v.desc)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
