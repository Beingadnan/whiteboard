"use client";

import { useEffect, useState, useMemo, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import StructuredData from "../../components/StructuredData";
import {
  getDegreeProgramBySlug,
  getCourseBySlugOrId,
  DegreeProgram,
  CourseDetailItem
} from "../../../lib/coursesData";

export default function CourseDetailPage() {
  const params = useParams();
  const idParam = (params?.id as string) || "";

  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "universities" | "curriculum" | "fees" | "eligibility">("overview");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Check if param matches a Degree Program (e.g., /courses/mba-online, /courses/bca-online)
  const degreeProgram = useMemo(() => getDegreeProgramBySlug(idParam), [idParam]);

  // Check if param matches an individual university course (e.g., /courses/mba-amity-university)
  const individualCourse = useMemo(() => getCourseBySlugOrId(idParam), [idParam]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const hasInitialized = useRef<string | null>(null);
  useEffect(() => {
    if (degreeProgram && hasInitialized.current !== idParam) {
      setFormData((prev) => ({
        ...prev,
        course: degreeProgram.shortTitle,
        university: degreeProgram.universities[0]?.university || ""
      }));
      hasInitialized.current = idParam;
    } else if (individualCourse && hasInitialized.current !== idParam) {
      setFormData((prev) => ({
        ...prev,
        course: individualCourse.title,
        university: individualCourse.university
      }));
      hasInitialized.current = idParam;
    }
  }, [idParam, degreeProgram, individualCourse]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const sourceContext = degreeProgram
      ? `Degree Program Page - ${degreeProgram.shortTitle}`
      : individualCourse
      ? `Course Page - ${individualCourse.title}`
      : "Course Page";

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: sourceContext
        })
      });

      const data = await response.json();
      if (data.success) {
        toast.success("🎉 Consultation booked! Our academic counselor will contact you shortly.", {
          icon: false
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: degreeProgram?.universities[0]?.university || individualCourse?.university || "",
          course: degreeProgram?.shortTitle || individualCourse?.title || "",
          message: ""
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

  // -------------------------------------------------------------
  // VIEW 1: DEGREE PROGRAM HUB (e.g. /courses/mba-online, /courses/bca-online)
  // -------------------------------------------------------------
  if (degreeProgram) {
    const degreeSchema = {
      "@context": "https://schema.org",
      "@type": "Course",
      name: degreeProgram.title,
      description: degreeProgram.description,
      provider: {
        "@type": "EducationalOrganization",
        name: "SuccessMentorix",
        sameAs: "https://successmentorix.com"
      },
      educationalLevel: degreeProgram.degreeType,
      timeRequired: degreeProgram.duration,
      hasCourseInstance: degreeProgram.universities.map((uni) => ({
        "@type": "CourseInstance",
        courseMode: "Online",
        instructor: {
          "@type": "CollegeOrUniversity",
          name: uni.university
        }
      }))
    };

    return (
      <>
        <StructuredData data={degreeSchema} />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
          {/* Hero Section */}
          <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4c75]/10 to-[#dc2626]/10 blur-3xl pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Info Column */}
                <div
                  className={`lg:col-span-8 space-y-4 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                >
                  {/* Breadcrumb & Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      href="/courses"
                      className="text-xs font-semibold text-[#0f4c75] dark:text-[#38bdf8] hover:underline"
                    >
                      ← All Courses
                    </Link>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                      {degreeProgram.categoryLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                      ✓ UGC-DEB & AICTE Approved
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {degreeProgram.title}
                  </h1>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                    {degreeProgram.fullDescription}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                      <div className="text-base font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                        {degreeProgram.duration}
                      </div>
                      <div className="text-[11px] text-slate-500">Duration</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                      <div className="text-base font-bold text-slate-900 dark:text-white">
                        {degreeProgram.universities.length} Universities
                      </div>
                      <div className="text-[11px] text-slate-500">Offering Options</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                      <div className="text-base font-bold text-[#dc2626] dark:text-rose-400">
                        {degreeProgram.averageSalary}
                      </div>
                      <div className="text-[11px] text-slate-500">Avg Package</div>
                    </div>
                    <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                      <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                        0% EMI
                      </div>
                      <div className="text-[11px] text-slate-500">Installments Available</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 pt-3">
                    <button
                      onClick={() => {
                        const el = document.getElementById("degree-universities-list");
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:opacity-95 transition-all"
                    >
                      Compare All {degreeProgram.universities.length} Universities ↓
                    </button>
                    <a
                      href={`https://wa.me/919335512881?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
                        degreeProgram.title
                      )}%20admissions%2C%20fees%2C%20and%20university%20options.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:bg-emerald-700 transition-all flex items-center gap-2"
                    >
                      <span>💬 Chat with Counselor on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Right Quick Consultation Form */}
                <div
                  id="degree-lead-form"
                  className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 dark:border-slate-800"
                >
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 rounded-lg text-amber-800 dark:text-amber-300 text-[11px] font-bold mb-2">
                    <span>⚡ Free Admission Guidance</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    Get {degreeProgram.shortTitle} Fee Comparison
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                    Compare syllabus, scholarship discounts, and semester fee installment schedules.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Full Name *"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address *"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone (+91) *"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    >
                      <option value="">Select Preferred University</option>
                      {degreeProgram.universities.map((u, i) => (
                        <option key={i} value={u.university}>
                          {u.university}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:opacity-95 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Get Free Expert Guidance"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION: ALL OFFERING UNIVERSITIES (The Core User Request) */}
          <section
            id="degree-universities-list"
            className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8] uppercase tracking-wider">
                Compare All Partner Institutions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1">
                Universities Offering {degreeProgram.shortTitle} (2026-2027)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
                All {degreeProgram.universities.length} universities are recognized by UGC-DEB with equal degree validity. Compare fees, semester installments, and specializations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {degreeProgram.universities.map((uni, idx) => (
                <div
                  key={idx}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image & Header */}
                  <div>
                    <div className="relative w-full h-44 sm:h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${uni.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                        <span className="px-2.5 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8] shadow-sm">
                          {uni.naacGrade}
                        </span>
                        <span className="px-2.5 py-1 bg-emerald-500 text-slate-950 font-bold text-[11px] rounded-full shadow-sm">
                          ✓ UGC-DEB Approved
                        </span>
                      </div>

                      {/* Bottom Info in Image */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-amber-300 font-bold">★ {uni.rating}</span>
                          <span className="text-slate-300 text-[11px]">({uni.reviewsCount} reviews)</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-200 font-medium text-[11px]">{uni.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 space-y-3.5">
                      <div>
                        <div className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                          {uni.university}
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors leading-snug">
                          <Link href={`/courses/${uni.courseSlug}`}>
                            {uni.courseTitle}
                          </Link>
                        </h3>
                      </div>

                      {/* Approvals pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {uni.approvals.map((app, ai) => (
                          <span
                            key={ai}
                            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-medium border border-slate-200/50 dark:border-slate-700/50"
                          >
                            {app}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                        {uni.highlights.slice(0, 3).map((hl, hli) => (
                          <div
                            key={hli}
                            className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                          >
                            <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between mb-3.5">
                      <div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                          Semester Fee
                        </span>
                        <span className="text-base font-bold text-slate-900 dark:text-white">
                          {uni.semesterFee}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">
                          No-Cost EMI
                        </span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          Starts {uni.emiStarts}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/courses/${uni.courseSlug}`}
                        className="w-full text-center px-3 py-2.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white text-xs font-semibold rounded-xl hover:shadow-md hover:opacity-95 transition-all"
                      >
                        Syllabus & Details
                      </Link>
                      <a
                        href={`https://wa.me/919335512881?text=Hi%2C%20I%20want%20to%20apply%20for%20${encodeURIComponent(
                          uni.courseTitle
                        )}%20at%20${encodeURIComponent(uni.university)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-3 py-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1"
                      >
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Program Curriculum and Specializations */}
          <section className="py-14 sm:py-16 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Curriculum structure */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8] uppercase tracking-wider">
                      Academic Roadmap
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {degreeProgram.shortTitle} Curriculum & Subjects
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Designed to meet modern industry demands with live case studies and digital capstone projects.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {degreeProgram.curriculumSemesters.map((sem, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/70 dark:border-slate-700/70"
                      >
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                          {sem.semester}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {sem.subjects.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                            >
                              <span className="text-[#0f4c75] dark:text-[#38bdf8] font-bold">•</span>
                              <span>{sub}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Career Roles & Specializations */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/50 dark:from-slate-800/80 dark:to-slate-900/80 border border-blue-200/60 dark:border-slate-700">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      Top In-Demand Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {degreeProgram.specializations.map((spec, si) => (
                        <span
                          key={si}
                          className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm border border-slate-200/70 dark:border-slate-700"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      Career Pathways & Target Roles
                    </h3>
                    <div className="space-y-2">
                      {degreeProgram.careerRoles.map((role, ri) => (
                        <div
                          key={ri}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                            ✓
                          </span>
                          <span>{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Admission Roadmap Section */}
          <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8] uppercase tracking-wider">
                Simple Admission Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                How to Enroll in 4 Easy Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  step: "01",
                  title: "Free Counseling",
                  desc: "Connect with our certified academic advisors to evaluate university choices and fees."
                },
                {
                  step: "02",
                  title: "Document Upload",
                  desc: "Submit your academic marksheets and government ID proofs digitally."
                },
                {
                  step: "03",
                  title: "Fee Payment & EMI",
                  desc: "Pay semester installment or choose 0% interest No-Cost EMI via banking partners."
                },
                {
                  step: "04",
                  title: "LMS Access",
                  desc: "Receive university registration number, student ID, and full access to learning portal."
                }
              ].map((st, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <div className="text-2xl font-black text-[#0f4c75] dark:text-[#38bdf8] mb-2">
                    {st.step}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{st.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Accordion */}
          <section className="py-14 sm:py-16 bg-slate-100/60 dark:bg-slate-900/60 border-t border-slate-200/80 dark:border-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Frequently Asked Questions
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Everything you need to know about {degreeProgram.shortTitle} admissions
                </p>
              </div>

              <div className="space-y-3">
                {degreeProgram.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 pr-4">
                        {faq.question}
                      </span>
                      <span
                        className={`text-lg font-bold text-[#0f4c75] dark:text-[#38bdf8] transition-transform duration-200 ${
                          openFAQ === index ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>
                    {openFAQ === index && (
                      <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: INDIVIDUAL UNIVERSITY COURSE DETAIL (e.g. /courses/online-mba-uttaranchal-university)
  // -------------------------------------------------------------
  if (individualCourse) {
    const course = individualCourse;
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
        {/* Course Hero Banner */}
        <section className="relative pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#0f4c75]/10 to-[#dc2626]/10 blur-3xl pointer-events-none -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div
                className={`lg:col-span-8 space-y-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={`/courses/${course.degreeSlug || "mba-online"}`}
                    className="text-xs font-semibold text-[#0f4c75] dark:text-[#38bdf8] hover:underline"
                  >
                    ← Back to {course.shortTitle}
                  </Link>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                    {course.categoryLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                    ✓ UGC-DEB Approved
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  {course.title}
                </h1>

                <div className="flex items-center gap-3 text-sm">
                  <span className="font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                    Offered by {course.university}
                  </span>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="text-amber-500 font-bold">
                    ★ {course.rating} ({course.reviewsCount} reviews)
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  {course.description}
                </p>

                {/* Meta Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="text-base font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                      {course.duration}
                    </div>
                    <div className="text-[11px] text-slate-500">Duration</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      {course.level}
                    </div>
                    <div className="text-[11px] text-slate-500">Program Level</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="text-base font-bold text-[#dc2626] dark:text-rose-400">
                      100% Online
                    </div>
                    <div className="text-[11px] text-slate-500">Study Mode</div>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                      {course.fee}
                    </div>
                    <div className="text-[11px] text-slate-500">Total Program Fee</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById("course-lead-form");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:opacity-95 transition-all"
                  >
                    Apply & Talk to Counselor
                  </button>
                  <a
                    href={`https://wa.me/919335512881?text=Hi%2C%20I%20want%20to%20know%20the%20complete%20syllabus%20and%20fee%20structure%20for%20${encodeURIComponent(
                      course.title
                    )}%20at%20${encodeURIComponent(course.university)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl text-xs sm:text-sm shadow-md hover:bg-emerald-700 transition-all flex items-center gap-2"
                  >
                    <span>💬 Enquire on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Course Form Box */}
              <div
                id="course-lead-form"
                className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-xl border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Download Brochure & Syllabus
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  Get full syllabus, fee installment breakdown, and admission guidance for {course.university}.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name *"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address *"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Phone (+91) *"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Course Brochure"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Course Details Sections */}
        <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              {/* Overview */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  About {course.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.fullDescription}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                    Program Key Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {course.highlights.map((h, hi) => (
                      <div
                        key={hi}
                        className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                      >
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Curriculum Breakdown */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Syllabus & Semester Structure
                </h3>
                <div className="space-y-4">
                  {course.programStructure.map((sem, si) => (
                    <div
                      key={si}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/70"
                    >
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                        {sem.semester}
                      </h4>
                      <div className="space-y-1.5">
                        {sem.subjects.map((sub, sbi) => (
                          <div
                            key={sbi}
                            className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300"
                          >
                            <span>{sub.name}</span>
                            {sub.credits && (
                              <span className="text-slate-400 text-[11px] font-medium">
                                {sub.credits} Credits
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fee & EMI Breakdown */}
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Fee Structure & Installment Plans
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700">
                    <div className="text-[11px] text-slate-500">Semester Fee</div>
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      {course.feeStructure.semesterFee.prime}
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700">
                    <div className="text-[11px] text-slate-500">Total Program Fee</div>
                    <div className="text-base font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                      {course.feeStructure.fullFee.prime}
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700">
                    <div className="text-[11px] text-slate-500">0% Interest EMI</div>
                    <div className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                      Starts {course.emi}
                    </div>
                  </div>
                </div>
                {course.feeStructure.note && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    Note: {course.feeStructure.note}
                  </p>
                )}
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Eligibility Criteria
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {course.eligibility}
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-[#0f4c75] to-[#1e7aa8] text-white rounded-2xl shadow-lg space-y-3">
                <h4 className="text-base font-bold">Need Help with Admission?</h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Speak directly with an authorized counselor for {course.university}. 100% Free guidance.
                </p>
                <a
                  href={`https://wa.me/919335512881?text=Hi%2C%20I%20need%20admission%20guidance%20for%20${encodeURIComponent(
                    course.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 bg-white text-[#0f4c75] font-bold text-xs rounded-xl shadow hover:bg-slate-50 transition-all"
                >
                  Chat with Counselor
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: NOT FOUND
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-6">
      <div className="text-center max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
        <div className="text-4xl mb-4">📚</div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Course Not Found</h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          The degree or course you are looking for might have been moved or updated.
        </p>
        <Link
          href="/courses"
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl text-sm shadow-md"
        >
          Browse All Courses
        </Link>
      </div>
    </div>
  );
}
