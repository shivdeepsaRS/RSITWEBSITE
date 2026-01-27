import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Internship = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', college: '', course: '', domain: '', duration: '', message: '', resume: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Trim keys to remove any hidden spaces
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_INTERNSHIP?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS Keys are missing!");
      alert("Error: Email service not configured correctly.");
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      college: formData.college,
      course: formData.course,
      domain: formData.domain,
      duration: formData.duration,
      message: formData.message,
      resume_link: formData.resume,
    };


    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      {
        publicKey: publicKey,
      }
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      toast.success(t('submitApplication') + ' Success!');
      setFormData({ name: '', email: '', phone: '', college: '', course: '', domain: '', duration: '', message: '', resume: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      toast.error('Failed to send application. Please try again later.');
    })
    .finally(() => {
      setLoading(false);
    });
  };


  return (
    <section id="internship" className="section-padding bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('sectionInternship')}</h2>
            <p className="text-muted">{t('sectionInternshipSub')}</p>
          </div>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="internship-info p-4">
              <h3 className="mb-4">{t('internshipWhy')}</h3>
              <ul className="list-unstyled">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <li key={i} className="mb-3">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {t(`internshipPoint${i}`)}
                  </li>
                ))}
              </ul>
              
              <div className="mt-4">
                <h5>{t('internshipDomains')}</h5>
                <div className="d-flex flex-wrap gap-2 mt-2">
                  <span className="badge bg-success p-2">AI/ML in Agriculture</span>
                  <span className="badge bg-success p-2">Full Stack MERN</span>
                  <span className="badge bg-success p-2">MEAN Stack</span>
                  <span className="badge bg-success p-2">Flutter Development</span>
                  <span className="badge bg-success p-2">Salesforce</span>
                  <span className="badge bg-success p-2">AWS & DevOps</span>
                  <span className="badge bg-success p-2">Data Analytics</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="internship-form card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-4">{t('applyInternship')}</h4>
                <form id="internshipForm" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">{t('internName')}</label>
                      <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">{t('internEmail')}</label>
                      <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">{t('internPhone')}</label>
                      <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="college" className="form-label">{t('internCollege')}</label>
                      <input type="text" className="form-control" id="college" value={formData.college} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="course" className="form-label">{t('internCourse')}</label>
                      <input type="text" className="form-control" id="course" value={formData.course} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="domain" className="form-label">{t('internDomain')}</label>
                      <select className="form-select" id="domain" value={formData.domain} onChange={handleChange} required>
                        <option value="">{t('selectDomain')}</option>
                        <option value="mern">Full Stack MERN</option>
                        <option value="mean">MEAN Stack</option>
                        <option value="flutter">Flutter Development</option>
                        <option value="salesforce">Salesforce</option>
                        <option value="aws-devops">AWS & DevOps</option>
                        <option value="ai-ml">AI/ML in Agriculture</option>
                        <option value="data">Data Analytics</option>
                        <option value="engineering">Agricultural Engineering</option>
                        <option value="marketing">Marketing & Outreach</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="duration" className="form-label">{t('internDuration')}</label>
                      <select className="form-select" id="duration" value={formData.duration} onChange={handleChange} required>
                        <option value="">{t('selectDuration')}</option>
                        <option value="1">1 Month</option>
                        <option value="2">2 Months</option>
                        <option value="3">3 Months</option>
                        <option value="6">6 Months</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">{t('internMessage')}</label>
                      <textarea className="form-control" id="message" rows="3" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-12">
                      <label htmlFor="resume" className="form-label">{t('internResume')}</label>
                      <input type="url" className="form-control" id="resume" placeholder="https://drive.google.com/..." value={formData.resume} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-success btn-lg w-100" disabled={loading}>
                        {loading ? 'Sending...' : t('submitApplication')}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
