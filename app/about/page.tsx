"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<"overview" | "vision" | "mission" | "values">("overview");

  const stats = [
    { number: "2022", label: "Established Heritage", sub: "Trusted Since" },
    { number: "10,000+", label: "Graduated Students", sub: "Pan India" },
    { number: "50+", label: "Accredited Programs", sub: "UG & PG Degrees" },
    { number: "300+", label: "Hiring Partners", sub: "Fortune 500 MNCs" }
  ];

  const values = [
    {
      title: "Student-First Integrity",
      desc: "We provide 100% unbiased university guidance, transparent fee structures, and zero hidden charges.",
      icon: "🎯"
    },
    {
      title: "Academic Excellence",
      desc: "We partner exclusively with UGC, DEB, AICTE, NAAC A+ and NIRF ranked universities.",
      icon: "🏆"
    },
    {
      title: "Affordable Higher Education",
      desc: "Direct admissions backed with 0% interest No-Cost EMI and scholarship processing assistance.",
      icon: "💳"
    },
    {
      title: "Lifelong Career Mentorship",
      desc: "Dedicated placement cell assistance, resume workshops, and direct campus recruitment access.",
      icon: "🚀"
    }
  ];

  const leadership = [
    {
      role: "Academic Advisory Board",
      desc: "Former university registrars, senior deans, and UGC curriculum specialists guiding university standards.",
      icon: "🏛️"
    },
    {
      role: "Senior Student Counselors",
      desc: "Experienced career experts offering 1-on-1 personalized course recommendations and career roadmaps.",
      icon: "🎓"
    },
    {
      role: "Corporate Placement Cell",
      desc: "Industry liaisons connecting students with 300+ recruiters including Amazon, Deloitte, Tech Mahindra & TCS.",
      icon: "💼"
    },
    {
      role: "Technology & Student LMS Support",
      desc: "Technical team ensuring smooth online exam access, document processing, and portal verification.",
      icon: "💻"
    }
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SuccessMentorix",
    "description": "Learn about SuccessMentorix, India's premier online university admission counseling and educational discovery portal.",
    "url": "https://successmentorix.com/about"
  };

  return (
    <>
      <StructuredData data={aboutSchema} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-r from-blue-400/15 via-indigo-400/10 to-rose-400/15 blur-3xl pointer-events-none -z-10"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm font-semibold text-[#0f4c75] dark:text-[#38bdf8] mb-6 shadow-sm">
              ✨ Empowering 10,000+ Students Since 2022
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-6">
              Bridging The Gap Between{" "}
              <span className="bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                Ambition & Top Universities
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
              SuccessMentorix is India's leading admission discovery portal. We empower students and working professionals to discover, compare, and enroll in UGC-entitled online and distance degree programs with 100% free counseling.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/universities"
                className="px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Explore Partner Universities →
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-xs sm:text-sm rounded-xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
              >
                Talk to a Counselor
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-3">
                  <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are & Story Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Visual Side */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
                  alt="Students Collaborating"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">Our Commitment</div>
                  <div className="text-base sm:text-lg font-bold leading-snug">
                    "Democratizing access to prestigious higher education for everyone, everywhere."
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                Who We Are
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Transforming Higher Education Discovery in India
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Choosing the right higher education degree in today’s digital era is a pivotal decision. With hundreds of online degrees available, students often face misinformation, high costs, and confusing admission portals.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                At <strong>SuccessMentorix</strong>, we simplify your entire academic journey. We provide personalized career profiling, side-by-side fee comparisons, 0% EMI financing, and complete admission guidance and application support for India’s highest-ranked UGC-DEB entitled universities.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>100% Free Counseling</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Direct University Admission</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>0% Interest EMI Loans</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>300+ Placement Partners</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, and Values Interactive Tabs */}
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                Our Philosophy
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Vision, Mission & Core Values
              </h2>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
              {[
                { id: "overview", label: "🌟 Overview" },
                { id: "vision", label: "🔭 Our Vision" },
                { id: "mission", label: "🎯 Our Mission" },
                { id: "values", label: "💎 Core Values" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-md scale-105"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Panels */}
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-700/80 shadow-lg">
              {activeTab === "overview" && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    India’s Dedicated Online Higher Education Platform
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    SuccessMentorix was established with a singular objective: to eliminate barriers between ambitious students and world-class universities. We bring transparency to online learning, offering complete clarity on accreditations, curriculum, semester fees, and job prospects.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Our team of experienced educational consultants, corporate mentors, and admission specialists has guided over 10,000+ candidates across India into accredited MBA, MCA, BBA, BCA, and postgraduate courses.
                  </p>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Our Vision for Global Accessible Learning
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    To be India’s most trusted higher education counseling and university discovery ecosystem, recognized for empowering every student to acquire prestigious, career-defining degrees without geographical or financial boundaries.
                  </p>
                  <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-[#0f4c75] dark:text-[#38bdf8] font-semibold">
                    "Every learner deserves access to premier university faculty, state-of-the-art LMS tech, and high-growth corporate career placements."
                  </div>
                </div>
              )}

              {activeTab === "mission" && (
                <div className="space-y-4 animate-fadeIn">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Our Mission
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    To deliver transparent, tech-enabled, and zero-cost admission assistance, connecting learners with accredited institutions while fostering career development through industry-focused certifications and placement mentoring.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <li className="flex items-center gap-2">✓ Provide 100% unbiased university comparisons and transparent fee breakdowns.</li>
                    <li className="flex items-center gap-2">✓ Enable flexible 0% No-Cost EMI payment plans for all students.</li>
                    <li className="flex items-center gap-2">✓ Ensure complete student support from counseling to graduation.</li>
                  </ul>
                </div>
              )}

              {activeTab === "values" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                  {values.map((v, vi) => (
                    <div key={vi} className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                      <div className="text-2xl mb-2">{v.icon}</div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">{v.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Leadership & Support Wings */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
              Expert Support Structure
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Dedicated Support At Every Step
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Our multidisciplinary teams ensure your academic and admission journey is seamless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.role}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 sm:py-16 bg-gradient-to-r from-slate-900 via-[#0f4c75] to-[#dc2626] text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Ready to Upgrade Your Career with an Online Degree?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
              Schedule your free 1-on-1 counseling session with our senior university advisor today.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-white text-slate-900 font-bold text-xs sm:text-sm rounded-xl shadow-lg hover:bg-slate-100 transition-all"
              >
                Book Free Counseling Session →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
