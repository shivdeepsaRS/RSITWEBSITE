import React from 'react';
import { useTranslation } from 'react-i18next';

const Achievements = () => {
  const { t } = useTranslation();

  const galleryImages = [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&w=800&q=80',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&w=800&q=80',
    'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?ixlib=rb-4.0.3&w=800&q=80'
  ];

  const testimonials = [
    { key: 'testimonial1', name: 'testimonial1Name', loc: 'testimonial1Location' },
    { key: 'testimonial2', name: 'testimonial2Name', loc: 'testimonial2Location' },
    { key: 'testimonial3', name: 'testimonial3Name', loc: 'testimonial3Location' }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('sectionAchievements')}</h2>
            <p className="text-muted">{t('sectionAchievementsSub')}</p>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <h4 className="text-center mb-4">{t('galleryTitle')}</h4>
            <div className="row g-3">
              {galleryImages.map((img, i) => (
                <div key={i} className="col-md-4" data-aos="flip-left" data-aos-delay={i * 100}>
                  <div className="gallery-item">
                    <img src={img} className="img-fluid rounded" alt={`Gallery ${i}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row mb-5">
          <div className="col-12">
            <h4 className="text-center mb-4">{t('videosTitle')}</h4>
            <div className="row g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/d4aNfN_8FPM" title="Agricultural Technology" allowFullScreen></iframe>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <div className="ratio ratio-16x9">
                  <iframe src="https://www.youtube.com/embed/7wI_V3cK-qM" title="Smart Farming" allowFullScreen></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <h4 className="text-center mb-4">{t('testimonialsTitle')}</h4>
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((test, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <div className="testimonial-card mx-auto">
                      <div className="testimonial-body p-4">
                        <p className="mb-3">
                          <i className="fas fa-quote-left text-success me-2"></i>
                          {t(test.key)}
                          <i className="fas fa-quote-right text-success ms-2"></i>
                        </p>
                        <div className="testimonial-author">
                          <h5 className="mb-1">{t(test.name)}</h5>
                          <p className="text-muted mb-0">{t(test.loc)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
