"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import StructuredData from "../components/StructuredData";

export default function Collaborate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    partnershipType: "Education Consultant / Agent",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and contact number.", { icon: false });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-partner-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast.success("🎉 Partner Application Received! Our Partnership Director will connect with you within 24 hours.", { icon: false });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          partnershipType: "Education Consultant / Agent",
          location: "",
          message: ""
        });
      } else {
        toast.error("❌ Submission failed. Please try again.", { icon: false });
      }
    } catch {
      toast.error("❌ Something went wrong. Please try again.", { icon: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      title: "Industry-Leading Commission Payouts",
      desc: "Earn competitive, timely payouts for every verified student admission with transparent real-time tracking.",
      icon: "💰"
    },
    {
      title: "Dedicated Partner CRM & Tracking",
      desc: "Access a state-of-the-art partner portal to track student lead statuses, payouts, and documentation live.",
      icon: "📊"
    },
    {
      title: "50+ Premier UGC University Portfolio",
      desc: "Offer top NAAC A+ programs from Amity, Manipal Jaipur, SMU, Uttaranchal, MIT and Mangalayatan.",
      icon: "🏛️"
    },
    {
      title: "Marketing & Lead Gen Collateral",
      desc: "Get digital brochures, fee comparisons, social media banners, and customized landing pages.",
      icon: "🚀"
    },
    {
      title: "Dedicated Account Manager",
      desc: "Direct access to our senior relationship managers to expedite application processing and counseling.",
      icon: "🤝"
    },
    {
      title: "0% Student EMI Financing Support",
      desc: "Close more leads with instant student loan approvals and flexible semester installment options.",
      icon: "💳"
    }
  ];

  const partnerUniversities = [
    { name: "Amity University Online", grade: "NAAC A+ / QS #1", image: "/university/amity-noida-campus.jpg" },
    { name: "Manipal University Jaipur", grade: "NAAC A++ Grade", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" },
    { name: "Sikkim Manipal University", grade: "28+ Years Legacy", image: "/university/sikkim-manipal-campus.jpg" },
    { name: "Uttaranchal University", grade: "NAAC A+ Accredited", image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80" },
    { name: "MIT University", grade: "Premier Tech & Mgmt", image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80" },
    { name: "Mangalayatan University", grade: "UGC-DEB Approved", image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80" }
  ];

  const collaborateSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Partner & Collaborate with SuccessMentorix",
    "description": "Join our education consultant and university partner network. Earn top commissions with 50+ UGC-approved degree programs.",
    "url": "https://successmentorix.com/collaborate"
  };

  return (
    <>
      <StructuredData data={collaborateSchema} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
        {/* Hero Section with Integrated Partner Form */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-r from-blue-400/15 via-indigo-400/10 to-rose-400/15 blur-3xl pointer-events-none -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Side Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm font-semibold text-[#0f4c75] dark:text-[#38bdf8] shadow-sm">
                  🤝 B2B Educational Partner Program
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
                  Scale Your Business with{" "}
                  <span className="bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                    India’s Premier University Network
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Join 150+ active consultants, institutions, and counseling agencies across India. Earn top-tier commissions, access our partner CRM, and provide your students direct admission to UGC-approved online degrees.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>High Commission Structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>50+ UGC Partner Universities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Real-time Lead CRM Portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>Marketing & Collateral Kit</span>
                  </div>
                </div>
              </div>

              {/* Right Side Partner Form */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  Apply for Partnership
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                  Fill details below to receive our partner onboarding deck and commission slab.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Full Name <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Malhotra"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone (+91) <span className="text-[#dc2626]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 Mobile Number"
                        required
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Work Email <span className="text-[#dc2626]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@company.com"
                        required
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Company / Agency Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Agency Name"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Partnership Model
                      </label>
                      <select
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                      >
                        <option value="Education Consultant / Agent">Education Consultant / Agent</option>
                        <option value="Franchise Partner">Franchise Partner</option>
                        <option value="University / Institution">University / Institution</option>
                        <option value="Corporate / HR Upskilling">Corporate / HR Upskilling</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai, Delhi, Lucknow"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting Application..." : "Submit Partner Application →"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
              Partner Value Proposition
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Why Top Education Consultants Choose Us
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Designed to accelerate your student conversions and streamline admission workflows
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, bi) => (
              <div
                key={bi}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-2xl mb-4">
                    {b.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Universities Gallery */}
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                Institution Portfolio
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Authorized Admissions for Top Universities
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {partnerUniversities.map((u, ui) => (
                <div
                  key={ui}
                  className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="h-28 overflow-hidden relative">
                    <img
                      src={u.image}
                      alt={u.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40"></div>
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">
                      {u.name}
                    </h3>
                    <p className="text-[10px] text-[#0f4c75] dark:text-[#38bdf8] font-semibold mt-0.5">
                      {u.grade}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Simple Onboarding Process */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
              Seamless Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              How To Get Started as a Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit Application", desc: "Fill out the partner registration form with your agency details." },
              { step: "02", title: "Partner Verification", desc: "Our team verifies credentials and shares the commission agreements." },
              { step: "03", title: "CRM & Collateral Access", desc: "Get instant access to marketing kits, brochures, and lead tracking portal." },
              { step: "04", title: "Start Enrolling & Earning", desc: "Submit student profiles, confirm admissions, and receive direct payouts." }
            ].map((s, si) => (
              <div key={si} className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm text-center">
                <div className="text-3xl font-black text-[#0f4c75] dark:text-[#38bdf8] mb-2">{s.step}</div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{s.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
