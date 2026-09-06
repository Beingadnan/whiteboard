"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import StructuredData from "./components/StructuredData";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Home() {
  const router = useRouter();

  // Interactive Matcher / Lead Form State
  const [matcherStep, setMatcherStep] = useState(1);
  const [matcherData, setMatcherData] = useState({
    level: "Postgraduate",
    course: "Online MBA",
    budget: "Flexible / Any",
    name: "",
    email: "",
    phone: "",
    state: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Quick Lead Callback Form
  const [callbackData, setCallbackData] = useState({
    name: "",
    phone: "",
    course: "Online MBA"
  });
  const [isCallbackSubmitting, setIsCallbackSubmitting] = useState(false);

  const handleMatcherSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!matcherData.name || !matcherData.phone) {
      toast.error("Please enter your name and phone number to get your recommendations.", { icon: false });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: matcherData.name,
          email: matcherData.email || "not-provided@mentorix.com",
          phone: matcherData.phone,
          course: matcherData.course,
          university: `Budget: ${matcherData.budget} | Level: ${matcherData.level}`,
          source: "Home Hero Matcher Widget"
        })
      });
      const data = await res.json();
      if (data.success) {
        toast.success("🎉 University Matches Ready! Our senior counselor will call you in 15 mins.", { icon: false });
        setMatcherStep(1);
        setMatcherData({
          level: "Postgraduate",
          course: "Online MBA",
          budget: "Flexible / Any",
          name: "",
          email: "",
          phone: "",
          state: ""
        });
      } else {
        toast.error("❌ Something went wrong. Please try again.", { icon: false });
      }
    } catch {
      toast.error("❌ Submission failed. Please try again.", { icon: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCallbackSubmitting(true);
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: callbackData.name,
          email: "callback-request@mentorix.com",
          phone: callbackData.phone,
          course: callbackData.course,
          source: "Home Quick Callback Card"
        })
      });
      const data = await res.json();
      if (data.success) {
        toast.success("🎉 Free Counseling Session Booked! We'll call you shortly.", { icon: false });
        setCallbackData({ name: "", phone: "", course: "Online MBA" });
      } else {
        toast.error("❌ Something went wrong. Please try again.", { icon: false });
      }
    } catch {
      toast.error("❌ Submission failed. Please try again.", { icon: false });
    } finally {
      setIsCallbackSubmitting(false);
    }
  };

  // Curated 3 Spotlight Premier Universities (NOT showing all)
  const spotlightUniversities = [
    {
      id: 1,
      slug: "amity-university",
      name: "Amity University Online",
      badge: "India's #1 Ranked by QS",
      grade: "NAAC A+ Grade",
      image: "/university/amity-noida-campus.jpg",
      rating: 4.9,
      students: "50K+ Students",
      startingFee: "₹16,500/Sem",
      highlights: ["QS Ranked #1 Online MBA in India", "WES Accredited in US & Canada", "300+ Fortune 500 Recruiters"],
      topPrograms: ["Online MBA", "Online MCA", "Online BBA", "Online BCA"]
    },
    {
      id: 2,
      slug: "manipal-university-jaipur",
      name: "Manipal University Jaipur",
      badge: "NAAC A++ Highest Grade",
      grade: "NAAC A++",
      image: "/university/manipal_campus_premium.jpg",
      rating: 4.8,
      students: "25K+ Students",
      startingFee: "₹17,500/Sem",
      highlights: ["13+ In-Demand MBA Electives", "Free Coursera for Campus Bundle", "Prestigious Global Alumni Base"],
      topPrograms: ["Online MBA", "Online MCA", "Online BBA", "Online B.Com"]
    },
    {
      id: 3,
      slug: "sikkim-manipal-university",
      name: "Sikkim Manipal University",
      badge: "Most Affordable & Trusted",
      grade: "NAAC A+",
      image: "/university/sikkim-manipal-campus.jpg",
      rating: 4.7,
      students: "35K+ Students",
      startingFee: "₹12,500/Sem",
      highlights: ["28+ Years Academic Heritage", "5 Lakh+ Successful Alumni", "Pocket-Friendly Semester Fees"],
      topPrograms: ["Distance MBA", "Online MCA", "Online B.Com", "Online BA"]
    }
  ];

  // Curated 4 Flagship Career Tracks (NOT showing all)
  const flagshipPrograms = [
    {
      id: 1,
      slug: "mba-amity-university",
      title: "Online MBA (Leadership & Dual Specialization)",
      duration: "2 Years",
      tag: "Popular Career-Focused Program",
      fee: "₹1,99,000",
      emi: "₹4,150/mo",
      image: "/courses/mba_premium.jpg",
      salary: "₹9.2 LPA Avg Package",
      roles: "Product Lead, Consultant, Marketing Head"
    },
    {
      id: 2,
      slug: "online-mca-amity-university",
      title: "Online MCA (Cloud, AI & Software Engineering)",
      duration: "2 Years",
      tag: "Top Tech Degree",
      fee: "₹1,70,000",
      emi: "₹3,540/mo",
      image: "/courses/mca_premium.jpg",
      salary: "₹8.8 LPA Avg Package",
      roles: "Cloud Architect, Full-Stack Dev, AI Engineer"
    },
    {
      id: 3,
      slug: "online-bba-amity-university",
      title: "Online BBA (Business Analytics & Management)",
      duration: "3 Years",
      tag: "Top Undergraduate Track",
      fee: "₹1,65,000",
      emi: "₹2,300/mo",
      image: "/courses/bba_premium.jpg",
      salary: "₹5.5 LPA Avg Package",
      roles: "Business Analyst, Operations Associate, Marketing Exec"
    },
    {
      id: 4,
      slug: "online-bca-amity-university",
      title: "Online BCA (Coding, Web & Data Science)",
      duration: "3 Years",
      tag: "High Demand IT",
      fee: "₹1,50,000",
      emi: "₹2,080/mo",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      salary: "₹5.2 LPA Avg Package",
      roles: "Software Engineer, Web Dev, Data Analyst"
    }
  ];

  // Student transformations with Unsplash portrait avatars
  const studentStories = [
    {
      name: "Rahul Verma",
      prevRole: "Software Engineer",
      newRole: "Senior Product Manager at Tech Mahindra",
      salaryHike: "+65% Salary Hike",
      course: "Online MBA (Amity)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "SuccessMentorix helped me choose the right online MBA with 0% EMI. The weekend schedule allowed me to work full-time while accelerating into a leadership role."
    },
    {
      name: "Pooja Sharma",
      prevRole: "Technical Associate",
      newRole: "Cloud Engineer at Infosys",
      salaryHike: "+70% Salary Hike",
      course: "Online MCA (Amity)",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      quote: "The counselor guided me through admission within 24 hours. The AI proctored exams from home were hassle-free and the degree is fully UGC recognized."
    },
    {
      name: "Aman Gupta",
      prevRole: "Sales Executive",
      newRole: "Marketing Consultant at Wipro",
      salaryHike: "+50% Salary Hike",
      course: "Online MBA (MUJ)",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Free counseling, clear fee structure, and no fake promises. Got direct admission in Manipal Jaipur with full Coursera access."
    }
  ];

  const faqs = [
    {
      q: "Are online degrees from these universities valid for government and MNC jobs?",
      a: "Yes, 100%. As per UGC-DEB notifications, online degrees from accredited universities (like Amity, MUJ, SMU) hold equal status to regular on-campus degrees for all Central/State government exams (UPSC, SSC, Banking) and top corporate hiring."
    },
    {
      q: "Does SuccessMentorix charge students for counseling or admission support?",
      a: "No! Our counseling, university fee comparison, scholarship assistance, and admission processing is 100% FREE for all students."
    },
    {
      q: "How do online classes and exams work?",
      a: "Lectures are delivered live on weekends and recorded on your LMS for 24/7 self-paced viewing. Semester examinations are conducted 100% online through secure AI-proctored software from the comfort of your home."
    },
    {
      q: "Can I pay my degree fee in monthly installments (EMI)?",
      a: "Yes. All partner universities provide flexible semester installment plans and 0% interest No-Cost EMI options starting from as low as ₹2,080/month."
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SuccessMentorix",
    "url": "https://successmentorix.com",
    "logo": "https://successmentorix.com/SMLogo.png",
    "description": "Premier admission counseling portal helping students compare and enroll in UGC-approved online degree programs in India.",
    "sameAs": ["https://wa.me/919335512881"]
  };

  return (
    <>
      <StructuredData data={homeSchema} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
        {/* ===================== SECTION 1: HERO & LEAD CONVERTER WIDGET ===================== */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          {/* Student Studying Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-student-studying.jpg"
              alt="Student Studying Online Education"
              className="w-full h-full object-cover object-center opacity-45 dark:opacity-35 filter scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-900/70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Hero Copy */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm font-semibold text-[#0f4c75] dark:text-[#38bdf8] shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Admissions Open for 2026-2027 Batches
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
                  Find & Compare India's Top{" "}
                  <span className="bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                    UGC-Approved Online Degrees
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                  Get 100% free expert counseling, compare transparent 2026 fee structures, and secure direct admissions in NAAC A+ universities with 0% No-Cost EMI.
                </p>

                {/* Key Value Checks */}
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>UGC-Recognized Online Degree Programs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>100% Online Classes & Exams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>0% Interest No-Cost EMI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">✓</span>
                    <span>10,000+ Enrolled Students</span>
                  </div>
                </div>

                {/* Direct Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/universities"
                    className="px-6 py-3.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    Explore Top Universities →
                  </Link>
                  <Link
                    href="/courses"
                    className="px-6 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-xs sm:text-sm rounded-xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    Browse Degree Catalog
                  </Link>
                </div>
              </div>

              {/* Right Side: Interactive High-Converting University Matcher Form */}
              <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/80 dark:border-slate-800 relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                      Interactive Matcher
                    </span>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      Find Your Ideal University
                    </h2>
                  </div>
                  <span className="px-2.5 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 text-[10px] font-bold rounded-full">
                    Step {matcherStep} of 2
                  </span>
                </div>

                <form onSubmit={handleMatcherSubmit} className="space-y-4">
                  {matcherStep === 1 ? (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Select Academic Level
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {["Postgraduate", "Undergraduate"].map((lvl) => (
                            <button
                              type="button"
                              key={lvl}
                              onClick={() => setMatcherData({ ...matcherData, level: lvl })}
                              className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all ${
                                matcherData.level === lvl
                                  ? "bg-[#0f4c75] text-white border-[#0f4c75]"
                                  : "bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                              }`}
                            >
                              {lvl === "Postgraduate" ? "🎓 Master's (PG)" : "📘 Bachelor's (UG)"}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Select Desired Degree Program
                        </label>
                        <select
                          value={matcherData.course}
                          onChange={(e) => setMatcherData({ ...matcherData, course: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                        >
                          <option value="Online MBA">Online MBA (Master of Business Admin)</option>
                          <option value="Online MCA">Online MCA (Computer Applications)</option>
                          <option value="Online BBA">Online BBA (Business Administration)</option>
                          <option value="Online BCA">Online BCA (Computer Applications)</option>
                          <option value="Online B.Com">Online B.Com (Bachelor of Commerce)</option>
                          <option value="Online M.Com">Online M.Com (Master of Commerce)</option>
                          <option value="Online BA">Online BA (Bachelor of Arts)</option>
                          <option value="Online MA">Online MA (Master of Arts)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                          Preferred Budget / Semester
                        </label>
                        <select
                          value={matcherData.budget}
                          onChange={(e) => setMatcherData({ ...matcherData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                        >
                          <option value="Flexible / Any">Flexible / Show Best Ranked</option>
                          <option value="Under ₹15,000/Sem">Under ₹15,000 / Semester (Budget Friendly)</option>
                          <option value="₹15,000 - ₹30,000/Sem">₹15,000 - ₹30,000 / Semester (Standard)</option>
                          <option value="₹30,000+/Sem">₹30,000+ / Semester (Premium / Immersion)</option>
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={() => setMatcherStep(2)}
                        className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2"
                      >
                        <span>Continue to Matches</span>
                        <span>→</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3.5 animate-fadeIn">
                      <div className="p-3 bg-blue-50 dark:bg-blue-950/50 rounded-xl text-xs text-slate-700 dark:text-slate-300 border border-blue-100 dark:border-blue-900">
                        🎯 Selected: <strong>{matcherData.course}</strong> ({matcherData.level}) • Budget: {matcherData.budget}
                      </div>

                      <div>
                        <input
                          type="text"
                          name="name"
                          value={matcherData.name}
                          onChange={(e) => setMatcherData({ ...matcherData, name: e.target.value })}
                          placeholder="Your Full Name *"
                          required
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={matcherData.phone}
                          onChange={(e) => setMatcherData({ ...matcherData, phone: e.target.value })}
                          placeholder="Phone Number (+91) *"
                          required
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          name="email"
                          value={matcherData.email}
                          onChange={(e) => setMatcherData({ ...matcherData, email: e.target.value })}
                          placeholder="Email Address (Optional)"
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => setMatcherStep(1)}
                          className="py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl hover:bg-slate-200"
                        >
                          ← Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="py-2.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs rounded-xl shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
                        >
                          {isSubmitting ? "Matching..." : "Get Free Matches"}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 2: STATS & IMPACT ===================== */}
        <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  10,000+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Students Guided</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">
                  55% Avg.
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Post-Degree Salary Hike</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  0% No-Cost
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Monthly EMI Options</div>
              </div>
              <div className="p-3">
                <div className="text-2xl sm:text-3xl font-black text-[#0f4c75] dark:text-[#38bdf8]">
                  300+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Corporate Hiring Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 3: TOP 3 PREMIER UNIVERSITIES SPOTLIGHT ===================== */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                Curated Institution Spotlight
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                Top-Tier Partner Universities
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                Highest ranked UGC-entitled institutions with proven placement records and flexible online learning.
              </p>
            </div>
            <Link
              href="/universities"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm font-bold text-[#0f4c75] dark:text-[#38bdf8] hover:bg-slate-50 shadow-sm transition-all"
            >
              <span>View All 50+ Universities</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {spotlightUniversities.map((uni) => (
              <div
                key={uni.id}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative w-full h-48 sm:h-52 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <img
                      src={uni.image}
                      alt={uni.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                      <span className="px-2.5 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8] shadow-sm">
                        {uni.grade}
                      </span>
                      <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-bold text-[11px] rounded-full shadow-sm">
                        {uni.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 z-10 text-white flex items-center justify-between text-xs">
                      <span className="text-amber-300 font-bold">★ {uni.rating}</span>
                      <span className="text-slate-200 font-medium text-[11px]">{uni.students}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors">
                      <Link href={`/universities/${uni.slug}`}>
                        {uni.name}
                      </Link>
                    </h3>

                    <div className="space-y-1.5 pt-1">
                      {uni.highlights.map((h, hi) => (
                        <div key={hi} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                        Popular Degrees
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {uni.topPrograms.map((p, pi) => (
                          <span
                            key={pi}
                            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Starting From</span>
                      <span className="text-base font-bold text-slate-900 dark:text-white">{uni.startingFee}</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      0% EMI Option
                    </span>
                  </div>

                  <Link
                    href={`/universities/${uni.slug}`}
                    className="block w-full text-center py-2.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white text-xs font-semibold rounded-xl hover:shadow-md hover:opacity-95 transition-all"
                  >
                    View Programs & Fee Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================== SECTION 4: 4 FLAGSHIP DEGREE TRACKS ===================== */}
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                  High ROI Programs
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Top In-Demand Degree Tracks
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                  Programs with the highest corporate recruitment demand and maximum salary growth.
                </p>
              </div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm font-bold text-[#0f4c75] dark:text-[#38bdf8] hover:bg-slate-100 shadow-sm transition-all"
              >
                <span>Explore Full Course Catalog</span>
                <span>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {flagshipPrograms.map((prog) => (
                <div
                  key={prog.id}
                  className="group bg-slate-50 dark:bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative w-full h-44 bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                        <span className="px-2 py-0.5 bg-amber-500 text-slate-950 text-[10px] font-bold rounded-md">
                          {prog.tag}
                        </span>
                        <span className="px-2 py-0.5 bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 text-[10px] font-bold rounded-md">
                          {prog.duration}
                        </span>
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-white flex items-center justify-between text-xs">
                        <span className="text-emerald-400 font-bold">{prog.salary}</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-2">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                        <Link href={`/courses/${prog.slug}`}>
                          {prog.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        🎯 Roles: {prog.roles}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-slate-400 block font-medium">Total Fee</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">{prog.fee}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block font-medium">No-Cost EMI</span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{prog.emi}</span>
                      </div>
                    </div>

                    <Link
                      href={`/courses/${prog.slug}`}
                      className="block w-full text-center py-2 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white text-xs font-semibold rounded-xl hover:opacity-95 transition-all"
                    >
                      View Syllabus & Fees
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 5: COMPARISON & VALUE PROP ===================== */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
              Smart Career Investment
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
              Why Online Degrees Beat Traditional Campus
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Gain the exact same accredited degree with 3x higher flexibility and 70% lower financial cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Save Over 70% on Costs</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Zero hostel fees, zero daily commuting expenses, and significantly lower tuition costs with transparent 0% interest monthly installments.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Work While You Study</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Keep earning your full salary while building career credentials. Weekend live classes and self-paced recorded LMS modules ensure zero work disruption.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">UGC-Recognized Degree Validity</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                UGC-recognized online degrees are generally eligible for applicable government and private-sector opportunities, subject to the specific employer/exam eligibility criteria.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 6: STUDENT SUCCESS STORIES ===================== */}
        <section className="py-16 sm:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                Proven Transformations
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Real Students. Real Career Growth.
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Hear how our learners accelerated their professional careers through UGC-approved degrees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studentStories.map((story, si) => (
                <div
                  key={si}
                  className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-4">
                      {story.salaryHike}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-6">
                      "{story.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                    <img
                      src={story.avatar}
                      alt={story.name}
                      className="w-11 h-11 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{story.name}</div>
                      <div className="text-xs text-[#0f4c75] dark:text-[#38bdf8] font-semibold">{story.newRole}</div>
                      <div className="text-[11px] text-slate-400">{story.course}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== SECTION 7: HIGH CONVERSION FREE COUNSELING CARD ===================== */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-[#0f4c75] to-[#1e7aa8] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-amber-300">
                  100% Free Counseling Guarantee
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Still Confused Which Degree or University Is Best For You?
                </h2>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                  Talk directly with our senior academic counselors. We map your current job profile, budget, and career goals to recommend the right program with complete admission guidance and application support.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-200">
                  <span className="flex items-center gap-1.5">✓ 15-Minute Callback</span>
                  <span className="flex items-center gap-1.5">✓ Zero Consultation Fees</span>
                  <span className="flex items-center gap-1.5">✓ Scholarship Support</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Request Free 1-on-1 Callback</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Enter your number and an advisor will connect with you.</p>

                <form onSubmit={handleCallbackSubmit} className="space-y-3.5">
                  <input
                    type="text"
                    name="name"
                    value={callbackData.name}
                    onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                    placeholder="Full Name *"
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={callbackData.phone}
                    onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                    placeholder="Phone Number (+91) *"
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                  <select
                    value={callbackData.course}
                    onChange={(e) => setCallbackData({ ...callbackData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  >
                    <option value="Online MBA">Online MBA</option>
                    <option value="Online MCA">Online MCA</option>
                    <option value="Online BBA">Online BBA</option>
                    <option value="Online BCA">Online BCA</option>
                    <option value="Commerce (B.Com / M.Com)">Commerce (B.Com / M.Com)</option>
                    <option value="Humanities (BA / MA)">Humanities (BA / MA)</option>
                  </select>
                  <button
                    type="submit"
                    disabled={isCallbackSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {isCallbackSubmitting ? "Connecting..." : "Get Free Expert Guidance Now"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 8: FAQ ACCORDION ===================== */}
        <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Clear answers to help you start your degree with full confidence
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 pr-4">
                    {faq.q}
                  </span>
                  <span className={`text-base font-bold text-[#0f4c75] dark:text-[#38bdf8] transition-transform duration-200 ${openFAQ === index ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
