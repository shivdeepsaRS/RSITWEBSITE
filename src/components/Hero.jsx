import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container h-100 position-relative" style={{ zIndex: 2 }}>
        <div className="row h-100 align-items-center">
          <motion.div 
            className="col-12 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="display-4 fw-bold mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t('heroTitle')}
            </motion.h1>
            <motion.p 
              className="lead mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t('heroSubtitle')}
            </motion.p>
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a href="#about" className="btn btn-success btn-lg mx-2 mb-2 shadow-sm">{t('ctaKnowMore')}</a>
              <a href="#contact" className="btn btn-outline-light btn-lg mx-2 mb-2">{t('ctaContactUs')}</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <div className="tractor-animation">
        <i className="fas fa-tractor"></i>
      </div>
    </section>
  );
};

export default Hero;

