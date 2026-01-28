import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [farmerData, setFarmerData] = useState({
    fullName: '', village: '', mobile: '', cropType: '', farmSize: '', soilType: '', message: '', newsletter: true
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    
    // Mobile number validation: strict numeric input, max 10 digits
    if (id === 'mobile') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFarmerData({ ...farmerData, [id]: numericValue });
      return;
    }

    setFarmerData({ ...farmerData, [id]: type === 'checkbox' ? checked : value });
  };

  const validateForm = () => {
    // 1. Name Validation
    if (farmerData.fullName.trim().length < 2) {
      toast.error("Please enter a valid full name.");
      return false;
    }

    // 2. Mobile Number Validation (Strict 10 digits)
    if (farmerData.mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return false;
    }

    // 3. Farm Size Validation
    if (!farmerData.farmSize || parseFloat(farmerData.farmSize) <= 0) {
      toast.error("Please enter a valid farm size.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Debugging: Check if keys are loaded
    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    // Trim keys to remove any hidden spaces
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FARMER?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS Keys are missing!");
      alert("Error: Email service not configured correctly.");
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: farmerData.fullName,
      village: farmerData.village,
      mobile: farmerData.mobile,
      crop_type: farmerData.cropType,
      farm_size: farmerData.farmSize,
      soil_type: farmerData.soilType,
      message: farmerData.message,
      newsletter: farmerData.newsletter ? 'Yes' : 'No',
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
      toast.success(t('submitForm') + ' Success!');
      setFarmerData({ fullName: '', village: '', mobile: '', cropType: '', farmSize: '', soilType: '', message: '', newsletter: true });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      toast.error('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setLoading(false);
    });
  };


  const socialLinks = [
    { icon: <FaFacebookF />, col: '#1877f2', link: '#' },
    { icon: <FaInstagram />, col: '#e4405f', link: '#' },
    { icon: <FaXTwitter />, col: '#000000', link: '#' },
    { icon: <FaYoutube />, col: '#ff0000', link: '#' },
    { icon: <FaLinkedinIn />, col: '#0077b5', link: '#' },
    { icon: <FaWhatsapp />, col: '#25d366', link: 'https://wa.me/919422191210' }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center" data-aos="fade-up">
            <h2 className="section-title">{t('sectionContact')}</h2>
            <p className="text-muted">{t('sectionContactSub')}</p>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-right">
            <div className="contact-info">
              <h4 className="mb-4">{t('connectTitle')}</h4>
              
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-4 flex-wrap">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
                     style={{ width:'42px', height:'42px', display:'flex', alignItems:'center', justifyContent:'center', 
                              backgroundColor:s.col, color:'#fff', borderRadius:'50%', textDecoration:'none', fontSize:'22px' }}>
                    {s.icon}
                  </a>
                ))}
              </div>
              
              <div className="contact-details">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-map-marker-alt text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="mb-0">{t('addressTitle')}</h6>
                    <p className="text-muted mb-0">{t('address')}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-phone text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="mb-0">{t('phoneTitle')}</h6>
                    <a href="tel:+919422191210" className="text-muted mb-0 text-decoration-none hover-text-success transition-all">
                      {t('phone')}
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fas fa-envelope text-success me-3 fs-5"></i>
                  <div>
                    <h6 className="mb-0">{t('emailTitle')}</h6>
                    <a href="mailto:royal1shetkari@gmail.com" className="text-muted mb-0 text-decoration-none hover-text-success transition-all">
                      {t('email')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-8" data-aos="fade-left">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title mb-4">{t('farmerFormTitle')}</h4>
                <form id="farmerForm" onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="fullName" className="form-label">{t('fullName')}</label>
                      <input type="text" className="form-control" id="fullName" value={farmerData.fullName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="village" className="form-label">{t('village')}</label>
                      <input type="text" className="form-control" id="village" value={farmerData.village} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mobile" className="form-label">{t('mobile')}</label>
                      <input type="tel" className="form-control" id="mobile" value={farmerData.mobile} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="cropType" className="form-label">{t('cropType')}</label>
                      <select className="form-select" id="cropType" value={farmerData.cropType} onChange={handleChange} required>
                        <option value="">{t('selectCrop')}</option>
                        <option value="wheat">Wheat</option>
                        <option value="rice">Rice</option>
                        <option value="cotton">Cotton</option>
                        <option value="sugarcane">Sugarcane</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="farmSize" className="form-label">{t('farmSize')}</label>
                      <input type="number" className="form-control" id="farmSize" min="0" step="0.1" value={farmerData.farmSize} onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="soilType" className="form-label">{t('soilType')}</label>
                      <select className="form-select" id="soilType" value={farmerData.soilType} onChange={handleChange} required>
                        <option value="">{t('selectSoil')}</option>
                        <option value="black">Black Soil</option>
                        <option value="red">Red Soil</option>
                        <option value="alluvial">Alluvial Soil</option>
                        <option value="laterite">Laterite Soil</option>
                        <option value="mountain">Mountain Soil</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">{t('message')}</label>
                      <textarea className="form-control" id="message" rows="4" placeholder={t('message') + "..."} value={farmerData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="newsletter" checked={farmerData.newsletter} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="newsletter">
                          {t('newsletter')}
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-success btn-lg w-100" disabled={loading}>
                        {loading ? 'Sending...' : t('submitForm')}
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

export default Contact;
