"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CareerCounselling() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          source: 'Career Counselling'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        alert("Thank you! We'll contact you soon for your free career counselling session.");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 md:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#0f4c75]/15 to-[#dc2626]/15 rounded-full blur-[100px] -top-[200px] -right-[200px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-6 py-2.5 mb-6 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 border border-[#0f4c75]/20 dark:border-[#1e7aa8]/20 rounded-full text-sm font-semibold text-[#0f4c75] dark:text-[#1e7aa8] tracking-tight">
              Free Career Counselling
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              Get Free Career
              <span className="block bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
                {" "}Counselling
              </span>
            </h1>
            <p className="text-xl md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto mb-8">
              Connect with our expert career counselors and get personalized guidance for your future. 
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>
        </div>
      </section>

      {/* Call Us Section */}
      <section className="py-12 bg-gradient-to-r from-[#0f4c75] to-[#dc2626]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Call Us for Career Counselling
            </h2>
            <a
              href="tel:+918112592546"
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-white hover:text-white/90 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (+91) 8112592546
            </a>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              White Board Education
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              Enquiry Form
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Please fill out the form below and we'll contact you for your free career counselling session.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-200 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wide">
                  Name <span className="text-[#dc2626]">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                      placeholder="First"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                      placeholder="Last"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 mb-2 uppercase tracking-wide">
                  <span className="text-[#0f4c75] dark:text-[#1e7aa8]">📱</span>
                  Phone <span className="text-[#dc2626]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="+91 123 456 7890"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 mb-2 uppercase tracking-wide">
                  <span className="text-[#0f4c75] dark:text-[#1e7aa8]">✉️</span>
                  Email <span className="text-[#dc2626]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="your.email@example.com"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-50 mb-2 uppercase tracking-wide">
                  <span className="text-[#0f4c75] dark:text-[#1e7aa8]">💬</span>
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all resize-none"
                    placeholder="Tell us about your career goals or any questions..."
                  ></textarea>
                  <div className="absolute left-4 top-4 text-slate-400 dark:text-slate-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
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
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Submit
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a3d5c] to-[#b91c1c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`text-center transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                🎯
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                Expert Guidance
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Get personalized career advice from experienced counselors
              </p>
            </div>
            <div className={`text-center transition-all duration-800 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                💯
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                100% Free
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                No charges, no hidden fees - completely free career counselling
              </p>
            </div>
            <div className={`text-center transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-lg">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                Quick Response
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                We'll get back to you within 24 hours of your enquiry
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
