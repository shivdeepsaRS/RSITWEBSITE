import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('sectionAbout')}</h2>
            <p className="text-muted">{t('sectionAboutSub')}</p>
          </div>
        </div>
        
        <div className="row g-4">
          <div className="col-lg-4" data-aos="fade-right">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4">
                <div className="icon-wrapper mb-4">
                  <i className="fas fa-building fs-1 text-success"></i>
                </div>
                <h4 className="card-title mb-3">{t('profileTitle')}</h4>
                <p className="card-text text-muted">{t('profileDesc')}</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4" data-aos="fade-up">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4">
                <div className="icon-wrapper mb-4">
                  <i className="fas fa-eye fs-1 text-success"></i>
                </div>
                <h4 className="card-title mb-3">{t('visionTitle')}</h4>
                <p className="card-text text-muted">{t('visionDesc')}</p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4" data-aos="fade-left">
            <div className="card h-100 border-0 shadow-sm hover-card">
              <div className="card-body p-4">
                <div className="icon-wrapper mb-4">
                  <i className="fas fa-bullseye fs-1 text-success"></i>
                </div>
                <h4 className="card-title mb-3">{t('missionTitle')}</h4>
                <p className="card-text text-muted">{t('missionDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
