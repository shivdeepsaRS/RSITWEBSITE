import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-charcoal text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-logo mb-3">
              <div className="d-flex align-items-center">
                <div>
                  <img src={logo} alt="Royalshetkari Logo" style={{ width: '200px', height: 'auto', display: 'block' }} />
                  <p className="mb-0 text-light" style={{ fontSize: '0.8rem' }}>
                    {t('slogan')}
                  </p>
                </div>
              </div>
            </div>
            <p className="mb-0">{t('footerDesc')}</p>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3">{t('footerQuickLinks')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-light text-decoration-none">{t('navHome')}</a></li>
              <li className="mb-2"><a href="#about" className="text-light text-decoration-none">{t('navAbout')}</a></li>
              <li className="mb-2"><a href="#values" className="text-light text-decoration-none">{t('navValues')}</a></li>
              <li className="mb-2"><a href="#achievements" className="text-light text-decoration-none">{t('navAchievements')}</a></li>
              <li className="mb-2"><a href="#internship" className="text-light text-decoration-none">{t('navInternship')}</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">{t('navContact')}</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="mb-3">{t('footerServices')}</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>{t('service1')}</li>
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>{t('service2')}</li>
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>{t('service3')}</li>
              <li className="mb-2"><i className="fas fa-check-circle text-success me-2"></i>{t('service4')}</li>
              <li><i className="fas fa-check-circle text-success me-2"></i>{t('service5')}</li>
            </ul>
          </div>
          
          <div className="col-lg-3">
            <h5 className="mb-3">{t('newsletterTitle')}</h5>
            <p>{t('newsletterSub')}</p>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Your Email" />
              <button className="btn btn-success" type="button">{t('subscribeBtn')}</button>
            </div>
          </div>
        </div>
        
        <hr className="my-4 bg-light" />
        
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">{t('copyright')}</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0 d-flex align-items-center justify-content-center justify-content-md-end">
              {t('designedWith')} 
              <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto', margin: '0 10px' }} />
              {t('forFarmers')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
