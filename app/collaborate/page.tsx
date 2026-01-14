"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Collaborate() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    experience: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-partner-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Thank you for your interest! We'll contact you soon to discuss partnership opportunities.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          experience: "",
          location: "",
          message: ""
        });
      } else {
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: "Increased exposure to our target audience",
      icon: "👥"
    },
    {
      title: "Access to our marketing resources such as (CRM Software & Website Landing pages)",
      icon: "📊"
    },
    {
      title: "The ability to cross-promote our products and services",
      icon: "🤝"
    },
    {
      title: "Exclusive discounts and offers",
      icon: "🎁"
    },
    {
      title: "Ongoing Support to Partners",
      icon: "💬"
    },
    {
      title: "Featured & Promote on Our Platforms",
      icon: "⭐"
    }
  ];

  const whyChooseUs = [
    {
      title: "Product Diversification",
      description: "We offer a wide range of products and services, so you can find the right solution for your needs.",
      icon: "📦"
    },
    {
      title: "Streamline Process",
      description: "We use cutting-edge technology to optimize our processes, so we can deliver results faster and more efficiently.",
      icon: "⚡"
    },
    {
      title: "CRM & Lead Generation",
      description: "We have a state-of-the-art CRM system that helps us track leads and manage our relationships with customers.",
      icon: "📈"
    },
    {
      title: "Tracking and Transparency",
      description: "We use a transparent system to track your work and ensure that you are paid fairly.",
      icon: "🔍"
    },
    {
      title: "Better Commission",
      description: "We offer a competitive commission structure that rewards your hard work and dedication.",
      icon: "💰"
    },
    {
      title: "Employment",
      description: "We offer a variety of challenging campus programs that give you the opportunity to learn new skills and grow your career.",
      icon: "💼"
    }
  ];

  const partneredUniversities = [
    {
      name: "Amity University",
      logo: "https://collegesgyan.com/wp-content/uploads/2024/03/Untitled-design-10-e1710144513893.webp",
      features: [
        "Leading online education platform in Asia",
        "20+ years of experience in online education",
        "Offers LMS-based online education",
        "Delivered by a team of 6000+ distinguished corporate experts and faculty members"
      ]
    },
    {
      name: "Manipal University Jaipur (MUJ)",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Manipal_University_Jaipur_logo.png",
      features: [
        "Endorsed by the University Grants Commission (UGC)",
        "Convenient access to courses via EduNxt from anywhere",
        "Recognized as an award-winning next-generation education platform",
        "Enables 24/7 availability of webinars, online classes, and counseling services"
      ]
    },
    {
      name: "Sikkim Manipal University (SMU)",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Logo_of_Sikkim_Manipal_University.jpg",
      features: [
        "Established under Sikkim Manipal University of Health, Medical & Technological Sciences Act No. 9 of 1995",
        "Recognised by the UGC under Section 2(f)",
        "Accredited by NAAC with A+ grade",
        "Approved for distance/online learning by DEB; multiple global partnerships and programs"
      ]
    },
    {
      name: "GLA University",
      logo: "https://gcetl.in/web2manage/images/Universities/University17187822841556781613phpNa5MIG.jpeg",
      features: [
        "A leading private university offering quality education",
        "Engineering, Management, Pharmacy, and Applied Sciences programs",
        "Modern facilities and infrastructure",
        "UGC and AICTE approved"
      ]
    },
    {
      name: "Uttaranchal University (UU)",
      logo: "https://www.admissionindia.net/uploads/colleges/10/logo.jpg",
      features: [
        "20+ Years of Excellence",
        "Ranked 27th In India & 1st in Uttarakhand by India Today",
        "NAAC A+ Accredited University",
        "Uttaranchal University online degrees are recognised by UGC & AICTE"
      ]
    },
    {
      name: "MIT University",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/1f/Manipal_University_Jaipur_logo.png",
      features: [
        "Prestigious institution known for excellence in engineering and technology",
        "Strong industry connections",
        "Award-winning programs",
        "Global recognition"
      ]
    },
    {
      name: "Mangalayatan University",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSFLljfmgx0Y26SkW3viqM71aGDPp-NmOog&s",
      features: [
        "A progressive university offering diverse programs",
        "Engineering, Management, Law, and Arts programs",
        "Focus on holistic development",
        "UGC recognized"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section with Form */}
      <section className="relative py-24 md:py-20 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#0f4c75]/15 to-[#dc2626]/15 rounded-full blur-[100px] -top-[200px] -right-[200px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
                Partner With Us
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Join our network of education partners and grow your business. Earn commissions, get marketing support, and help students achieve their dreams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Access to premium university programs</p>
                    </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Competitive commission structure</p>
                    </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">Complete marketing and sales support</p>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className={`transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">
                  Get Started Today
            </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    Full Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    Email <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    Phone <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="City, State"
                  />
                </div>
              <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all resize-none"
                      placeholder="Tell us about your interest..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Our partnership program offers a variety of benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Why choose us?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnered Universities Section */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Our Partnered Universities
            </h2>
          </div>
          <div className="overflow-x-auto">
            <div className="min-w-full">
              {partneredUniversities.map((university, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-slate-800 rounded-xl p-6 mb-4 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700 flex items-center justify-center flex-shrink-0">
                        <img
                          src={university.logo}
                          alt={university.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://via.placeholder.com/80?text=Logo";
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
                        {university.name}
                      </h3>
                    </div>
                    <div className="lg:col-span-2">
                      <ul className="space-y-2">
                        {university.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="text-[#0f4c75] dark:text-[#1e7aa8] mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-20 bg-gradient-to-br from-[#0f4c75] to-[#dc2626] overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join our network of successful partners and help students achieve their educational goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0f4c75] font-semibold rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+917275131439"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Call: +91 7275131439
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
