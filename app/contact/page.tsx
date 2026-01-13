"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    subject: "",
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
      const response = await fetch('/api/submit-student-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'Contact Page'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          course: "",
          subject: "",
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

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["Noida, Uttar Pradesh", "India"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 8112592546"]
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["+91 8112592546"]
    },
    {
      icon: "🕒",
      title: "Working Hours",
      details: ["Monday - Friday: 10:30 AM - 5:30 PM"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 md:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#1e7aa8]/15 to-[#ea580c]/15 rounded-full blur-[100px] -top-[200px] -right-[200px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-6 py-2.5 mb-6 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 border border-[#0f4c75]/20 dark:border-[#1e7aa8]/20 rounded-full text-sm font-semibold text-[#0f4c75] dark:text-[#1e7aa8] tracking-tight">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              Contact
              <span className="block bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
                {" "}Us
              </span>
            </h1>
            <p className="text-xl md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Have questions or need assistance? We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200 dark:border-slate-700 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-full mb-4">
                    <span className="text-2xl">📧</span>
                    <span className="text-sm font-semibold text-[#0f4c75] dark:text-[#1e7aa8]">Contact Form</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-3">
                    Send us a Message
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Fill out the form below and we'll respond within 24 hours.
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                        <span className="text-[#0f4c75] dark:text-[#1e7aa8]">👤</span>
                        Full Name <span className="text-[#dc2626]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] dark:focus:ring-[#1e7aa8] dark:focus:border-[#1e7aa8] transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-500"
                          placeholder="Enter your full name"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                        <span className="text-[#0f4c75] dark:text-[#1e7aa8]">✉️</span>
                        Email Address <span className="text-[#dc2626]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] dark:focus:ring-[#1e7aa8] dark:focus:border-[#1e7aa8] transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-500"
                          placeholder="your.email@example.com"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                        <span className="text-[#0f4c75] dark:text-[#1e7aa8]">📱</span>
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] dark:focus:ring-[#1e7aa8] dark:focus:border-[#1e7aa8] transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-500"
                          placeholder="+91 123 456 7890"
                        />
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                        <span className="text-[#0f4c75] dark:text-[#1e7aa8]">📋</span>
                        Subject <span className="text-[#dc2626]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 pl-12 pr-10 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] dark:focus:ring-[#1e7aa8] dark:focus:border-[#1e7aa8] transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-500 appearance-none cursor-pointer"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="admission">Admission Inquiry</option>
                          <option value="partnership">Partnership</option>
                          <option value="support">Support</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="university" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                        <span className="text-[#0f4c75] dark:text-[#1e7aa8]">🏫</span>
                        University <span className="text-[#dc2626]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="university"
                          name="university"
                          value={formData.university}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 pl-12 pr-10 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] dark:focus:ring-[#1e7aa8] dark:focus:border-[#1e7aa8] transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-500 appearance-none cursor-pointer"
                        >
                          <option value="">Select a university</option>
                          <option value="Amity University">Amity University</option>
                          <option value="Uttaranchal University (UU)">Uttaranchal University (UU)</option>
                          <option value="Sikkim Manipal University (SMU)">Sikkim Manipal University (SMU)</option>
                          <option value="Manipal University Jaipur (MUJ)">Manipal University Jaipur (MUJ)</option>
                          <option value="MIT University">MIT University</option>
                          <option value="GLA University">GLA University</option>
                          <option value="Mangalayatan University">Mangalayatan University</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="course" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                        <span className="text-[#0f4c75] dark:text-[#1e7aa8]">📚</span>
                        Course <span className="text-[#dc2626]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 pl-12 pr-10 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] dark:focus:ring-[#1e7aa8] dark:focus:border-[#1e7aa8] transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-500 appearance-none cursor-pointer"
                        >
                          <option value="">Select a course</option>
                          <option value="Online MBA">Online MBA</option>
                          <option value="Online B.Tech">Online B.Tech</option>
                          <option value="Online MCA">Online MCA</option>
                          <option value="Online BBA">Online BBA</option>
                          <option value="Online BCA">Online BCA</option>
                          <option value="Online M.Com">Online M.Com</option>
                          <option value="Online B.Com">Online B.Com</option>
                          <option value="Online BA">Online BA</option>
                          <option value="Online MA">Online MA</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wide">
                      <span className="text-[#0f4c75] dark:text-[#1e7aa8]">💬</span>
                      Message <span className="text-[#dc2626]">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] dark:focus:ring-[#1e7aa8] dark:focus:border-[#1e7aa8] transition-all duration-200 shadow-sm hover:border-slate-300 dark:hover:border-slate-500 resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                      <div className="absolute left-4 top-4 text-slate-400 dark:text-slate-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group relative px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-bold text-lg rounded-xl hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d5c] to-[#b91c1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-2xl flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-slate-600 dark:text-slate-400">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`mb-8 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2 text-center">
              Find Us
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-center">
              Visit our office or reach out to us through any of the channels above.
            </p>
          </div>
          <div className={`rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.647469395123!2d77.3910264!3d28.5355161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              Prefer to Talk?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Schedule a free consultation call with our education experts. We're here to help you make the right decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career-counselling"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl shadow-lg hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 hover:shadow-xl"
              >
                Schedule Free Consultation
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-[#0f4c75] dark:text-[#1e7aa8] font-semibold rounded-xl border-2 border-[#0f4c75]/20 dark:border-[#1e7aa8]/30 hover:bg-[#0f4c75]/10 dark:hover:bg-[#1e7aa8]/10 transition-all duration-300"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

