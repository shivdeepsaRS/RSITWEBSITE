import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div className="language-switcher">
        <div className="container d-flex justify-content-end py-2">
          <div className="btn-group" role="group">
            <button 
              type="button" 
              className={`btn btn-sm btn-outline-success lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >English</button>
            <button 
              type="button" 
              className={`btn btn-sm btn-outline-success lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
              onClick={() => changeLanguage('hi')}
            >हिन्दी</button>
            <button 
              type="button" 
              className={`btn btn-sm btn-outline-success lang-btn ${i18n.language === 'mr' ? 'active' : ''}`}
              onClick={() => changeLanguage('mr')}
            >मराठी</button>
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top ${isScrolled ? 'scrolled shadow-sm' : ''}`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home" style={{ marginLeft: '40px' }}>
            <div className="logo-placeholder" style={{ width: '85px', height: '85px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
              <img src={logo} alt="Logo" style={{ maxWidth: '280%', maxHeight: '280%', objectFit: 'contain' }} />
            </div>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">{t('navHome')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">{t('navAbout')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#values">{t('navValues')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#achievements">{t('navAchievements')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#internship">{t('navInternship')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">{t('navContact')}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
