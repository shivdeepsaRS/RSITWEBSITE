// Main JavaScript for Royalshetkari Agri-Tech Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
    
    // ===== NAVBAR SCROLL EFFECT =====
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide back to top button
        const backToTopBtn = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // ===== SMOOTH SCROLLING =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile navbar after click
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
    
    // ===== BACK TO TOP BUTTON =====
    document.getElementById('backToTop').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== LANGUAGE SWITCHER =====
    const langButtons = document.querySelectorAll('.lang-btn');
    const langTexts = {
        en: {
            slogan: "Future of Farming",
            navHome: "Home",
            navAbout: "About",
            navValues: "Core Values",
            navAchievements: "Achievements",
            navInternship: "Internship",
            navContact: "Contact",
            heroTitle: "Royalshetkari Information Technology",
            heroSubtitle: "Future of Farming with AI & Innovation",
            ctaKnowMore: "Know More",
            ctaContactUs: "Contact Us",
            sectionAbout: "About Us",
            sectionAboutSub: "Transforming Agriculture Through Technology",
            profileTitle: "Company Profile",
            visionTitle: "Our Vision",
            missionTitle: "Our Mission",
            sectionValues: "Our Core Values",
            sectionValuesSub: "Principles that guide our journey",
            innovationTitle: "Innovation",
            innovationDesc: "Bringing AI and new technologies to farming for smarter agriculture.",
            sustainabilityTitle: "Sustainability",
            sustainabilityDesc: "Protecting soil, nature, and future generations through eco-friendly practices.",
            empowermentTitle: "Farmer Empowerment",
            empowermentDesc: "Helping farmers grow technologically and financially with modern tools.",
            integrityTitle: "Integrity",
            integrityDesc: "Honest and transparent work with farmers and stakeholders.",
            affordabilityTitle: "Affordability",
            affordabilityDesc: "High-quality solutions at fair prices accessible to all farmers.",
            growthTitle: "Growth",
            growthDesc: "Continuous development and income improvement for farming communities.",
            sectionAchievements: "Our Achievements",
            sectionAchievementsSub: "Milestones and Farmer Success Stories",
            galleryTitle: "Gallery",
            videosTitle: "Featured Videos",
            testimonialsTitle: "Farmer Testimonials",
            testimonial1: "Royalshetkari's AI tools helped me increase my crop yield by 30% while reducing water usage. Their support team is always available to guide us.",
            testimonial1Name: "Rajesh Kumar",
            testimonial1Location: "Farm Owner, Maharashtra",
            testimonial2: "The organic fertilizers provided are effective and affordable. My soil health has improved significantly in just one season.",
            testimonial2Name: "Priya Sharma",
            testimonial2Location: "Organic Farmer, Punjab",
            testimonial3: "Market support from Royalshetkari helped me get better prices for my produce. Their technology solutions are truly farmer-friendly.",
            testimonial3Name: "Anil Patel",
            testimonial3Location: "Vegetable Grower, Gujarat",
            sectionInternship: "Internship Program",
            sectionInternshipSub: "Get Real-time Industry Experience in Agri-Tech Projects",
            internshipWhy: "Why Join Our Internship?",
            internshipPoint1: "Hands-on experience with real Agri-Tech projects",
            internshipPoint2: "Work with AI, IoT, and modern farming technologies",
            internshipPoint3: "Mentorship from industry experts",
            internshipPoint4: "Opportunity to work directly with farmers",
            internshipPoint5: "Certificate and potential job placement",
            internshipPoint6: "Stipend for deserving candidates",
            internshipDomains: "Available Domains:",
            applyInternship: "Apply for Internship",
            internName: "Full Name",
            internEmail: "Email Address",
            internPhone: "Mobile Number",
            internCollege: "College/University",
            internCourse: "Course/Degree",
            internDomain: "Preferred Domain",
            selectDomain: "Select Domain",
            internDuration: "Preferred Duration",
            selectDuration: "Select Duration",
            internMessage: "Why do you want to intern with us?",
            internResume: "Resume Link (Google Drive/Dropbox)",
            submitApplication: "Submit Application",
            sectionContact: "Contact Us",
            sectionContactSub: "Get in touch with our team",
            connectTitle: "Connect With Us",
            addressTitle: "Address",
            address: "AgriTech Park, Pune, Maharashtra, India",
            phoneTitle: "Phone",
            phone: "+91 98765 43210",
            emailTitle: "Email",
            email: "info@royalshetkari.com",
            farmerFormTitle: "Farmer Data Collection Form",
            fullName: "Full Name",
            village: "Village / Location",
            mobile: "Mobile Number",
            cropType: "Crop Type",
            selectCrop: "Select Crop",
            farmSize: "Farm Size (in acres)",
            soilType: "Soil Type",
            selectSoil: "Select Soil Type",
            message: "Message / Requirements",
            newsletter: "Subscribe to our newsletter for farming tips and updates",
            submitForm: "Submit Form",
            footerDesc: "Transforming agriculture through technology and innovation for sustainable farming and better farmer livelihoods.",
            footerQuickLinks: "Quick Links",
            footerServices: "Our Services",
            service1: "AI-Based Farming Tools",
            service2: "Organic Fertilizers",
            service3: "Market Support",
            service4: "Farm Advisory",
            service5: "Training & Workshops",
            newsletterTitle: "Newsletter",
            newsletterSub: "Subscribe to get farming tips and updates",
            subscribeBtn: "Subscribe",
            copyright: "© 2023 Royalshetkari Information Technology. All rights reserved.",
            designedWith: "Designed with",
            forFarmers: "for Farmers"
        },
        hi: {
            slogan: "कृषि का भविष्य",
            navHome: "होम",
            navAbout: "हमारे बारे में",
            navValues: "मूल्य",
            navAchievements: "उपलब्धियाँ",
            navInternship: "इंटर्नशिप",
            navContact: "संपर्क करें",
            heroTitle: "रॉयलशेतकरी सूचना प्रौद्योगिकी",
            heroSubtitle: "एआई और नवाचार के साथ कृषि का भविष्य",
            ctaKnowMore: "और जानें",
            ctaContactUs: "संपर्क करें",
            sectionAbout: "हमारे बारे में",
            sectionAboutSub: "प्रौद्योगिकी के माध्यम से कृषि को बदलना",
            profileTitle: "कंपनी प्रोफाइल",
            visionTitle: "हमारी दृष्टि",
            missionTitle: "हमारा मिशन",
            sectionValues: "हमारे मूल मूल्य",
            sectionValuesSub: "सिद्धांत जो हमारी यात्रा का मार्गदर्शन करते हैं",
            innovationTitle: "नवाचार",
            innovationDesc: "स्मार्ट कृषि के लिए कृषि में एआई और नई तकनीकें लाना।",
            sustainabilityTitle: "स्थिरता",
            sustainabilityDesc: "पर्यावरण अनुकूल प्रथाओं के माध्यम से मिट्टी, प्रकृति और भविष्य की पीढ़ियों की रक्षा करना।",
            empowermentTitle: "किसान सशक्तिकरण",
            empowermentDesc: "किसानों को आधुनिक उपकरणों के साथ तकनीकी और वित्तीय रूप से विकसित करने में मदद करना।",
            integrityTitle: "ईमानदारी",
            integrityDesc: "किसानों और हितधारकों के साथ ईमानदार और पारदर्शी कार्य।",
            affordabilityTitle: "सामर्थ्य",
            affordabilityDesc: "सभी किसानों के लिए उचित मूल्य पर उच्च गुणवत्ता वाले समाधान।",
            growthTitle: "विकास",
            growthDesc: "कृषि समुदायों के लिए निरंतर विकास और आय में सुधार।",
            sectionAchievements: "हमारी उपलब्धियाँ",
            sectionAchievementsSub: "माइलस्टोन और किसान सफलता की कहानियाँ",
            galleryTitle: "गैलरी",
            videosTitle: "विशेष वीडियो",
            testimonialsTitle: "किसान प्रशंसापत्र",
            testimonial1: "रॉयलशेतकरी के एआई उपकरणों ने मुझे पानी के उपयोग को कम करते हुए अपनी फसल की पैदावार 30% बढ़ाने में मदद की। उनकी सहायता टीम हमेशा हमारा मार्गदर्शन करने के लिए उपलब्ध है।",
            testimonial1Name: "राजेश कुमार",
            testimonial1Location: "फार्म मालिक, महाराष्ट्र",
            testimonial2: "प्रदान किए गए जैविक उर्वरक प्रभावी और सस्ते हैं। सिर्फ एक मौसम में मेरी मिट्टी का स्वास्थ्य काफी बेहतर हुआ है।",
            testimonial2Name: "प्रिया शर्मा",
            testimonial2Location: "जैविक किसान, पंजाब",
            testimonial3: "रॉयलशेतकरी से बाजार समर्थन ने मुझे अपनी उपज के बेहतर दाम पाने में मदद की। उनके तकनीकी समाधान वास्तव में किसान-अनुकूल हैं।",
            testimonial3Name: "अनिल पटेल",
            testimonial3Location: "सब्जी उत्पादक, गुजरात",
            sectionInternship: "इंटर्नशिप कार्यक्रम",
            sectionInternshipSub: "एग्री-टेक परियोजनाओं में वास्तविक समय उद्योग अनुभव प्राप्त करें",
            internshipWhy: "हमारी इंटर्नशिप क्यों ज्वाइन करें?",
            internshipPoint1: "वास्तविक एग्री-टेक परियोजनाओं के साथ व्यावहारिक अनुभव",
            internshipPoint2: "एआई, आईओटी और आधुनिक कृषि प्रौद्योगिकियों के साथ कार्य",
            internshipPoint3: "उद्योग विशेषज्ञों से मेंटरशिप",
            internshipPoint4: "सीधे किसानों के साथ काम करने का अवसर",
            internshipPoint5: "प्रमाणपत्र और संभावित नौकरी प्लेसमेंट",
            internshipPoint6: "योग्य उम्मीदवारों के लिए वजीफा",
            internshipDomains: "उपलब्ध डोमेन:",
            applyInternship: "इंटर्नशिप के लिए आवेदन करें",
            internName: "पूरा नाम",
            internEmail: "ईमेल पता",
            internPhone: "मोबाइल नंबर",
            internCollege: "कॉलेज/विश्वविद्यालय",
            internCourse: "कोर्स/डिग्री",
            internDomain: "पसंदीदा डोमेन",
            selectDomain: "डोमेन चुनें",
            internDuration: "पसंदीदा अवधि",
            selectDuration: "अवधि चुनें",
            internMessage: "आप हमारे साथ इंटर्न क्यों करना चाहते हैं?",
            internResume: "रिज्यूमे लिंक (गूगल ड्राइव/ड्रॉपबॉक्स)",
            submitApplication: "आवेदन जमा करें",
            sectionContact: "संपर्क करें",
            sectionContactSub: "हमारी टीम से संपर्क करें",
            connectTitle: "हमसे जुड़ें",
            addressTitle: "पता",
            address: "एग्रीटेक पार्क, पुणे, महाराष्ट्र, भारत",
            phoneTitle: "फोन",
            phone: "+91 98765 43210",
            emailTitle: "ईमेल",
            email: "info@royalshetkari.com",
            farmerFormTitle: "किसान डेटा संग्रह फॉर्म",
            fullName: "पूरा नाम",
            village: "गाँव / स्थान",
            mobile: "मोबाइल नंबर",
            cropType: "फसल प्रकार",
            selectCrop: "फसल चुनें",
            farmSize: "खेत का आकार (एकड़ में)",
            soilType: "मिट्टी का प्रकार",
            selectSoil: "मिट्टी का प्रकार चुनें",
            message: "संदेश / आवश्यकताएँ",
            newsletter: "कृषि सुझाव और अपडेट के लिए हमारे न्यूज़लेटर की सदस्यता लें",
            submitForm: "फॉर्म जमा करें",
            footerDesc: "टिकाऊ कृषि और बेहतर किसान आजीविका के लिए प्रौद्योगिकी और नवाचार के माध्यम से कृषि को बदलना।",
            footerQuickLinks: "त्वरित लिंक",
            footerServices: "हमारी सेवाएँ",
            service1: "एआई-आधारित कृषि उपकरण",
            service2: "जैविक उर्वरक",
            service3: "बाजार समर्थन",
            service4: "खेत सलाह",
            service5: "प्रशिक्षण और कार्यशालाएं",
            newsletterTitle: "न्यूज़लेटर",
            newsletterSub: "कृषि सुझाव और अपडेट प्राप्त करने के लिए सदस्यता लें",
            subscribeBtn: "सदस्यता लें",
            copyright: "© 2023 रॉयलशेतकरी सूचना प्रौद्योगिकी। सर्वाधिकार सुरक्षित।",
            designedWith: "के साथ डिज़ाइन किया गया",
            forFarmers: "किसानों के लिए"
        },
        mr: {
            slogan: "शेतीचे भविष्य",
            navHome: "मुख्यपृष्ठ",
            navAbout: "आमच्याबद्दल",
            navValues: "मूल्ये",
            navAchievements: "यश",
            navInternship: "इंटर्नशिप",
            navContact: "संपर्क",
            heroTitle: "रॉयलशेतकरी माहिती तंत्रज्ञान",
            heroSubtitle: "कृत्रिम बुद्धिमत्ता आणि नावीन्यासह शेतीचे भविष्य",
            ctaKnowMore: "अधिक माहिती",
            ctaContactUs: "संपर्क साधा",
            sectionAbout: "आमच्याबद्दल",
            sectionAboutSub: "तंत्रज्ञानाद्वारे शेतीचे रूपांतर",
            profileTitle: "कंपनी प्रोफाइल",
            visionTitle: "आमचे ध्येय",
            missionTitle: "आमचे उद्दिष्ट",
            sectionValues: "आमची मूलभूत मूल्ये",
            sectionValuesSub: "आमच्या प्रवासाला मार्गदर्शन करणारी तत्त्वे",
            innovationTitle: "नावीन्य",
            innovationDesc: "स्मार्ट शेतीसाठी शेतीत कृत्रिम बुद्धिमत्ता आणि नवीन तंत्रज्ञान आणणे.",
            sustainabilityTitle: "शाश्वतता",
            sustainabilityDesc: "पर्यावरणास अनुकूल पद्धतींद्वारे माती, निसर्ग आणि भविष्यातील पिढ्यांचे संरक्षण.",
            empowermentTitle: "शेतकरी सक्षमीकरण",
            empowermentDesc: "आधुनिक साधनांसह शेतकऱ्यांना तांत्रिक आणि आर्थिकदृष्ट्या वाढण्यास मदत करणे.",
            integrityTitle: "प्रामाणिकपणा",
            integrityDesc: "शेतकऱ्यांसोबत आणि भागधारकांसोबत प्रामाणिक आणि पारदर्शक कार्य.",
            affordabilityTitle: "सवलत",
            affordabilityDesc: "सर्व शेतकऱ्यांसाठी वाजवी किंमतीत उच्च दर्जाचे उपाय.",
            growthTitle: "वाढ",
            growthDesc: "शेती समुदायांसाठी सतत विकास आणि उत्पन्नात सुधारणा.",
            sectionAchievements: "आमची यशे",
            sectionAchievementsSub: "मैलाचे दगड आणि शेतकरी यशाच्या कथा",
            galleryTitle: "गॅलरी",
            videosTitle: "विशेष व्हिडिओ",
            testimonialsTitle: "शेतकरी प्रशंसापत्रे",
            testimonial1: "रॉयलशेतकरीच्या कृत्रिम बुद्धिमत्ता साधनांमुळे मला पाणी वापर कमी करताना माझ्या पिकाचे उत्पादन 30% वाढवण्यात मदत झाली. त्यांची समर्थन टीम नेहमी आमचे मार्गदर्शन करण्यासाठी उपलब्ध आहे.",
            testimonial1Name: "राजेश कुमार",
            testimonial1Location: "शेत मालक, महाराष्ट्र",
            testimonial2: "पुरवलेले सेंद्रिय खते प्रभावी आणि किफायतशीर आहेत. फक्त एका हंगामात माझ्या मातीचे आरोग्य लक्षणीयरीत्या सुधारले आहे.",
            testimonial2Name: "प्रिया शर्मा",
            testimonial2Location: "सेंद्रिय शेतकरी, पंजाब",
            testimonial3: "रॉयलशेतकरीकडून बाजार समर्थनामुळे मला माझ्या उत्पादनासाठी चांगले दाम मिळण्यास मदत झाली. त्यांची तांत्रिक उपाय खरोखर शेतकरी-अनुकूल आहेत.",
            testimonial3Name: "अनिल पटेल",
            testimonial3Location: "भाजीपाला उत्पादक, गुजरात",
            sectionInternship: "इंटर्नशिप कार्यक्रम",
            sectionInternshipSub: "एग्री-टेक प्रकल्पांमध्ये रिअल-टाइम उद्योग अनुभव मिळवा",
            internshipWhy: "आमची इंटर्नशिप का सामील व्हावे?",
            internshipPoint1: "वास्तविक एग्री-टेक प्रकल्पांसह प्रत्यक्ष अनुभव",
            internshipPoint2: "कृत्रिम बुद्धिमत्ता, आयओटी आणि आधुनिक शेती तंत्रज्ञानासह कार्य",
            internshipPoint3: "उद्योग तज्ञांकडून मार्गदर्शन",
            internshipPoint4: "थेट शेतकऱ्यांसोबत काम करण्याची संधी",
            internshipPoint5: "प्रमाणपत्र आणि संभाव्य नोकरी प्लेसमेंट",
            internshipPoint6: "पात्र उमेदवारांसाठी वजीफा",
            internshipDomains: "उपलब्ध डोमेन:",
            applyInternship: "इंटर्नशिपसाठी अर्ज करा",
            internName: "पूर्ण नाव",
            internEmail: "ईमेल पत्ता",
            internPhone: "मोबाइल नंबर",
            internCollege: "महाविद्यालय/विद्यापीठ",
            internCourse: "अभ्यासक्रम/पदवी",
            internDomain: "पसंतीचे डोमेन",
            selectDomain: "डोमेन निवडा",
            internDuration: "पसंतीचा कालावधी",
            selectDuration: "कालावधी निवडा",
            internMessage: "तुम्ही आमच्यासोबत इंटर्न का करू इच्छिता?",
            internResume: "रिझ्युमे लिंक (गूगल ड्राइव्ह/ड्रॉपबॉक्स)",
            submitApplication: "अर्ज सबमिट करा",
            sectionContact: "संपर्क साधा",
            sectionContactSub: "आमच्या टीमशी संपर्क साधा",
            connectTitle: "आमच्याशी जोडा",
            addressTitle: "पत्ता",
            address: "एग्रीटेक पार्क, पुणे, महाराष्ट्र, भारत",
            phoneTitle: "फोन",
            phone: "+91 98765 43210",
            emailTitle: "ईमेल",
            email: "info@royalshetkari.com",
            farmerFormTitle: "शेतकरी डेटा संकलन फॉर्म",
            fullName: "पूर्ण नाव",
            village: "गाव / स्थान",
            mobile: "मोबाइल नंबर",
            cropType: "पिक प्रकार",
            selectCrop: "पिक निवडा",
            farmSize: "शेताचा आकार (एकर मध्ये)",
            soilType: "मातीचा प्रकार",
            selectSoil: "मातीचा प्रकार निवडा",
            message: "संदेश / गरजा",
            newsletter: "शेती सल्ले आणि अद्यतनांसाठी आमच्या न्यूझलेटरची सदस्यता घ्या",
            submitForm: "फॉर्म सबमिट करा",
            footerDesc: "टिकाऊ शेती आणि चांगल्या शेतकरी उपजीविकेसाठी तंत्रज्ञान आणि नावीन्याद्वारे शेतीचे रूपांतर करणे.",
            footerQuickLinks: "द्रुत दुवे",
            footerServices: "आमच्या सेवा",
            service1: "कृत्रिम बुद्धिमत्ता-आधारित शेती साधने",
            service2: "सेंद्रिय खते",
            service3: "बाजार समर्थन",
            service4: "शेत सल्ला",
            service5: "प्रशिक्षण आणि कार्यशाळा",
            newsletterTitle: "न्यूझलेटर",
            newsletterSub: "शेती सल्ले आणि अद्यतने मिळवण्यासाठी सदस्यता घ्या",
            subscribeBtn: "सदस्यता घ्या",
            copyright: "© 2023 रॉयलशेतकरी माहिती तंत्रज्ञान. सर्व हक्क राखीव.",
            designedWith: "सह डिझाइन केलेले",
            forFarmers: "शेतकऱ्यांसाठी"
        }
    };
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected language
            const lang = this.getAttribute('data-lang');
            
            // Update all text elements
            updateLanguage(lang);
        });
    });
    
    function updateLanguage(lang) {
        const texts = langTexts[lang];
        
        // Update all elements with data-lang-key attribute
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (texts[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = texts[key];
                } else {
                    element.textContent = texts[key];
                }
            }
        });
        
        // Update specific elements without data-lang-key
        document.querySelector('.slogan').textContent = texts.slogan;
        document.querySelectorAll('.nav-link')[0].textContent = texts.navHome;
        document.querySelectorAll('.nav-link')[1].textContent = texts.navAbout;
        document.querySelectorAll('.nav-link')[2].textContent = texts.navValues;
        document.querySelectorAll('.nav-link')[3].textContent = texts.navAchievements;
        document.querySelectorAll('.nav-link')[4].textContent = texts.navInternship;
        document.querySelectorAll('.nav-link')[5].textContent = texts.navContact;
        document.querySelector('.hero-section h1').textContent = texts.heroTitle;
        document.querySelector('.hero-section .lead').textContent = texts.heroSubtitle;
        document.querySelector('.hero-section .btn-success').textContent = texts.ctaKnowMore;
        document.querySelector('.hero-section .btn-outline-light').textContent = texts.ctaContactUs;
        
        // Update about section
        document.querySelector('#about .section-title').textContent = texts.sectionAbout;
        document.querySelector('#about .text-muted').textContent = texts.sectionAboutSub;
        document.querySelectorAll('.card-title')[0].textContent = texts.profileTitle;
        document.querySelectorAll('.card-title')[1].textContent = texts.visionTitle;
        document.querySelectorAll('.card-title')[2].textContent = texts.missionTitle;
        
        // Update values section
        document.querySelector('#values .section-title').textContent = texts.sectionValues;
        document.querySelector('#values .text-muted').textContent = texts.sectionValuesSub;
        document.querySelectorAll('.value-card h4')[0].textContent = texts.innovationTitle;
        document.querySelectorAll('.value-card p')[0].textContent = texts.innovationDesc;
        document.querySelectorAll('.value-card h4')[1].textContent = texts.sustainabilityTitle;
        document.querySelectorAll('.value-card p')[1].textContent = texts.sustainabilityDesc;
        document.querySelectorAll('.value-card h4')[2].textContent = texts.empowermentTitle;
        document.querySelectorAll('.value-card p')[2].textContent = texts.empowermentDesc;
        document.querySelectorAll('.value-card h4')[3].textContent = texts.integrityTitle;
        document.querySelectorAll('.value-card p')[3].textContent = texts.integrityDesc;
        document.querySelectorAll('.value-card h4')[4].textContent = texts.affordabilityTitle;
        document.querySelectorAll('.value-card p')[4].textContent = texts.affordabilityDesc;
        document.querySelectorAll('.value-card h4')[5].textContent = texts.growthTitle;
        document.querySelectorAll('.value-card p')[5].textContent = texts.growthDesc;
        
        // Update achievements section
        document.querySelector('#achievements .section-title').textContent = texts.sectionAchievements;
        document.querySelector('#achievements .text-muted').textContent = texts.sectionAchievementsSub;
        document.querySelectorAll('h4')[2].textContent = texts.galleryTitle;
        document.querySelectorAll('h4')[3].textContent = texts.videosTitle;
        document.querySelectorAll('h4')[4].textContent = texts.testimonialsTitle;
        
        // Update testimonials
        document.querySelectorAll('.testimonial-body p')[0].innerHTML = `<i class="fas fa-quote-left text-success me-2"></i>${texts.testimonial1}<i class="fas fa-quote-right text-success ms-2"></i>`;
        document.querySelectorAll('.testimonial-author h5')[0].textContent = texts.testimonial1Name;
        document.querySelectorAll('.testimonial-author p')[0].textContent = texts.testimonial1Location;
        
        document.querySelectorAll('.testimonial-body p')[1].innerHTML = `<i class="fas fa-quote-left text-success me-2"></i>${texts.testimonial2}<i class="fas fa-quote-right text-success ms-2"></i>`;
        document.querySelectorAll('.testimonial-author h5')[1].textContent = texts.testimonial2Name;
        document.querySelectorAll('.testimonial-author p')[1].textContent = texts.testimonial2Location;
        
        document.querySelectorAll('.testimonial-body p')[2].innerHTML = `<i class="fas fa-quote-left text-success me-2"></i>${texts.testimonial3}<i class="fas fa-quote-right text-success ms-2"></i>`;
        document.querySelectorAll('.testimonial-author h5')[2].textContent = texts.testimonial3Name;
        document.querySelectorAll('.testimonial-author p')[2].textContent = texts.testimonial3Location;
        
        // Update internship section
        document.querySelector('#internship .section-title').textContent = texts.sectionInternship;
        document.querySelector('#internship .text-muted').textContent = texts.sectionInternshipSub;
        document.querySelector('.internship-info h3').textContent = texts.internshipWhy;
        document.querySelectorAll('.internship-info li')[0].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.internshipPoint1}`;
        document.querySelectorAll('.internship-info li')[1].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.internshipPoint2}`;
        document.querySelectorAll('.internship-info li')[2].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.internshipPoint3}`;
        document.querySelectorAll('.internship-info li')[3].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.internshipPoint4}`;
        document.querySelectorAll('.internship-info li')[4].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.internshipPoint5}`;
        document.querySelectorAll('.internship-info li')[5].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.internshipPoint6}`;
        document.querySelectorAll('.internship-info h5')[0].textContent = texts.internshipDomains;
        document.querySelector('.internship-form .card-title').textContent = texts.applyInternship;
        
        // Update internship form labels
        document.querySelector('label[for="internName"]').textContent = texts.internName;
        document.querySelector('label[for="internEmail"]').textContent = texts.internEmail;
        document.querySelector('label[for="internPhone"]').textContent = texts.internPhone;
        document.querySelector('label[for="internCollege"]').textContent = texts.internCollege;
        document.querySelector('label[for="internCourse"]').textContent = texts.internCourse;
        document.querySelector('label[for="internDomain"]').textContent = texts.internDomain;
        document.querySelector('#internDomain option[value=""]').textContent = texts.selectDomain;
        document.querySelector('label[for="internDuration"]').textContent = texts.internDuration;
        document.querySelector('#internDuration option[value=""]').textContent = texts.selectDuration;
        document.querySelector('label[for="internMessage"]').textContent = texts.internMessage;
        document.querySelector('label[for="internResume"]').textContent = texts.internResume;
        document.querySelector('#internshipForm button[type="submit"]').textContent = texts.submitApplication;
        
        // Update contact section
        document.querySelector('#contact .section-title').textContent = texts.sectionContact;
        document.querySelector('#contact .text-muted').textContent = texts.sectionContactSub;
        document.querySelector('.contact-info h4').textContent = texts.connectTitle;
        document.querySelectorAll('.contact-details h6')[0].textContent = texts.addressTitle;
        document.querySelectorAll('.contact-details p')[0].textContent = texts.address;
        document.querySelectorAll('.contact-details h6')[1].textContent = texts.phoneTitle;
        document.querySelectorAll('.contact-details p')[1].textContent = texts.phone;
        document.querySelectorAll('.contact-details h6')[2].textContent = texts.emailTitle;
        document.querySelectorAll('.contact-details p')[2].textContent = texts.email;
        document.querySelector('.card-title').textContent = texts.farmerFormTitle;
        
        // Update farmer form labels
        document.querySelector('label[for="fullName"]').textContent = texts.fullName;
        document.querySelector('label[for="village"]').textContent = texts.village;
        document.querySelector('label[for="mobile"]').textContent = texts.mobile;
        document.querySelector('label[for="cropType"]').textContent = texts.cropType;
        document.querySelector('#cropType option[value=""]').textContent = texts.selectCrop;
        document.querySelector('label[for="farmSize"]').textContent = texts.farmSize;
        document.querySelector('label[for="soilType"]').textContent = texts.soilType;
        document.querySelector('#soilType option[value=""]').textContent = texts.selectSoil;
        document.querySelector('label[for="message"]').textContent = texts.message;
        document.querySelector('#message').placeholder = texts.message + "...";
        document.querySelector('label[for="newsletter"]').textContent = texts.newsletter;
        document.querySelector('#farmerForm button[type="submit"]').textContent = texts.submitForm;
        
        // Update footer
        document.querySelector('.footer-logo p').textContent = texts.slogan;
        document.querySelector('footer .col-lg-4 p').textContent = texts.footerDesc;
        document.querySelectorAll('footer h5')[0].textContent = texts.footerQuickLinks;
        document.querySelectorAll('footer h5')[1].textContent = texts.footerServices;
        document.querySelectorAll('.list-unstyled li')[5].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.service1}`;
        document.querySelectorAll('.list-unstyled li')[6].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.service2}`;
        document.querySelectorAll('.list-unstyled li')[7].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.service3}`;
        document.querySelectorAll('.list-unstyled li')[8].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.service4}`;
        document.querySelectorAll('.list-unstyled li')[9].innerHTML = `<i class="fas fa-check-circle text-success me-2"></i>${texts.service5}`;
        document.querySelectorAll('footer h5')[2].textContent = texts.newsletterTitle;
        document.querySelector('footer .col-lg-3 p').textContent = texts.newsletterSub;
        document.querySelector('footer .btn-success').textContent = texts.subscribeBtn;
        document.querySelector('.col-md-6 p').textContent = texts.copyright;
        document.querySelector('.col-md-6 p:nth-child(2)').innerHTML = `${texts.designedWith} <i class="fas fa-heart text-danger"></i> ${texts.forFarmers}`;
    }
    
    // ===== FORM SUBMISSIONS =====
    // Internship Form Submission
    document.getElementById('internshipForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('internName').value,
            email: document.getElementById('internEmail').value,
            phone: document.getElementById('internPhone').value,
            college: document.getElementById('internCollege').value,
            course: document.getElementById('internCourse').value,
            domain: document.getElementById('internDomain').value,
            duration: document.getElementById('internDuration').value,
            message: document.getElementById('internMessage').value,
            resume: document.getElementById('internResume').value
        };
        
        // In a real application, you would send this data to a server
        console.log('Internship Application Submitted:', formData);
        
        // Show success message
        alert('Thank you for your internship application! We will contact you soon.');
        
        // Reset form
        this.reset();
    });
    
    // Farmer Form Submission
    document.getElementById('farmerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('fullName').value,
            village: document.getElementById('village').value,
            mobile: document.getElementById('mobile').value,
            cropType: document.getElementById('cropType').value,
            farmSize: document.getElementById('farmSize').value,
            soilType: document.getElementById('soilType').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };
        
        // In a real application, you would send this data to a server
        console.log('Farmer Data Submitted:', formData);
        
        // Show success message
        alert('Thank you for submitting your information! Our team will contact you shortly.');
        
        // Reset form
        this.reset();
    });
    
    // Newsletter Subscription
    document.querySelector('footer .btn-success').addEventListener('click', function() {
        const emailInput = document.querySelector('footer input[type="email"]');
        if (emailInput.value) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter your email address.');
        }
    });
    
    // ===== INITIALIZE COMPONENTS =====
    // Initialize tooltips if using Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers if using Bootstrap popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // ===== ADDITIONAL ANIMATIONS =====
    // Add animation to value cards on hover
    document.querySelectorAll('.value-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add animation to gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
    
    // ===== LOADING ANIMATION =====
    // Simulate loading completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});