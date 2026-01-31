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

  /* Handle smooth scroll manually */
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    const isMobile = window.innerWidth < 992;
    const closeBtn = document.getElementById('offcanvas-close-btn');
    
    if (isMobile && closeBtn) {
      closeBtn.click();
    }

    setTimeout(() => {
      const element = document.querySelector(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, isMobile ? 350 : 0);
  };
  
  return (
    <>
      <div className="language-switcher py-1 border-bottom">
        <div className="container d-flex justify-content-end align-items-center">
          <div className="btn-group btn-group-sm" role="group">
            <button 
              type="button" 
              className={`btn btn-outline-secondary lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >Eng</button>
            <button 
              type="button" 
              className={`btn btn-outline-secondary lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
              onClick={() => changeLanguage('hi')}
            >हिंदी</button>
            <button 
              type="button" 
              className={`btn btn-outline-secondary lang-btn ${i18n.language === 'mr' ? 'active' : ''}`}
              onClick={() => changeLanguage('mr')}
            >मराठी</button>
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg navbar-light bg-white sticky-top ${isScrolled ? 'scrolled shadow-sm' : ''}`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="logo-placeholder">
              <img src={logo} alt="RoyalShetkari Logo" />
            </div>
          </a>
          
          <div className="d-none d-lg-flex align-items-center ms-auto">
            <ul className="navbar-nav d-flex flex-row align-items-center">
              <li className="nav-item"><a className="nav-link" href="#home" onClick={(e) => handleNavClick(e, '#home')}>{t('navHome')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, '#about')}>{t('navAbout')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#values" onClick={(e) => handleNavClick(e, '#values')}>{t('navValues')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#achievements" onClick={(e) => handleNavClick(e, '#achievements')}>{t('navAchievements')}</a></li>
              <li className="nav-item"><a className="nav-link" href="#internship" onClick={(e) => handleNavClick(e, '#internship')}>{t('navInternship')}</a></li>
              <li className="nav-item ms-2">
                <a className="btn btn-success px-4" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>{t('navContact')}</a>
              </li>
            </ul>
          </div>

          <button 
            className="navbar-toggler border-0 p-0 shadow-none d-lg-none" 
            type="button" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-menu-icon" style={{ fontSize: '1.5rem', color: '#2ECC71' }}>
              <i className="fas fa-bars"></i>
            </span>
          </button>
          
          <div className="offcanvas offcanvas-end d-lg-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title fw-bold text-success" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" id="offcanvas-close-btn" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a 
                    className="nav-link px-3 py-2" 
                    href="#home" 
                    onClick={(e) => handleNavClick(e, '#home')}
                  >{t('navHome')}</a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link px-3 py-2" 
                    href="#about"
                    onClick={(e) => handleNavClick(e, '#about')}
                  >{t('navAbout')}</a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link px-3 py-2" 
                    href="#values"
                    onClick={(e) => handleNavClick(e, '#values')}
                  >{t('navValues')}</a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link px-3 py-2" 
                    href="#achievements"
                    onClick={(e) => handleNavClick(e, '#achievements')}
                  >{t('navAchievements')}</a>
                </li>
                <li className="nav-item">
                  <a 
                    className="nav-link px-3 py-2" 
                    href="#internship"
                    onClick={(e) => handleNavClick(e, '#internship')}
                  >{t('navInternship')}</a>
                </li>
                <li className="nav-item mt-2">
                  <a 
                    className="btn btn-success w-100 rounded-pill" 
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                  >{t('navContact')}</a>
                </li>
              </ul>
              
              <div className="mt-4 pt-4 border-top">
                <p className="text-muted small mb-2 text-center text-uppercase fw-bold">{t('selectLanguage')}</p>
                <div className="d-flex justify-content-center gap-2">
                  <button 
                    className={`btn btn-sm ${i18n.language === 'en' ? 'btn-success' : 'btn-outline-secondary'}`}
                    onClick={() => { changeLanguage('en'); }}
                  >English</button>
                  <button 
                    className={`btn btn-sm ${i18n.language === 'hi' ? 'btn-success' : 'btn-outline-secondary'}`}
                    onClick={() => { changeLanguage('hi'); }}
                  >हिन्दी</button>
                  <button 
                    className={`btn btn-sm ${i18n.language === 'mr' ? 'btn-success' : 'btn-outline-secondary'}`}
                    onClick={() => { changeLanguage('mr'); }}
                  >मराठी</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
