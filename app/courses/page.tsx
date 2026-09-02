"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";
import { courseImages } from "../../lib/courseImages";
import { toast } from "react-toastify";

interface Course {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: "business" | "technology" | "commerce" | "arts";
  categoryLabel: string;
  university: string;
  universitySlug: string;
  duration: string;
  level: "Postgraduate" | "Undergraduate";
  description: string;
  highlights: string[];
  rating: number;
  reviewsCount: number;
  students: string;
  fee: string;
  emi: string;
  image: string;
  tag: string;
}

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    state: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Programs", icon: "🎓" },
    { id: "business", name: "Management (MBA / BBA)", icon: "💼" },
    { id: "technology", name: "Computer & IT (MCA / BCA)", icon: "💻" },
    { id: "commerce", name: "Commerce (M.Com / B.Com)", icon: "📊" },
    { id: "arts", name: "Arts & Humanities (MA / BA)", icon: "📚" }
  ];

  const courses: Course[] = [
    {
      id: 1,
      slug: "mba-amity-university",
      title: "Master of Business Administration (MBA)",
      shortTitle: "Online MBA",
      category: "business",
      categoryLabel: "Management",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Premier MBA program designed to develop business leaders with global perspectives, dual specializations, and leadership frameworks.",
      highlights: ["UGC & WES Accredited", "QS Top 3% Globally", "300+ Hiring Partners", "Live Mentorship"],
      rating: 4.9,
      reviewsCount: 1420,
      students: "15,000+",
      fee: "₹1,99,000",
      emi: "₹4,150/mo",
      image: "/courses/mba_premium.jpg",
      tag: "Most Popular"
    },
    {
      id: 2,
      slug: "online-mba-manipal-university-jaipur",
      title: "Online MBA (Manipal University Jaipur)",
      shortTitle: "Online MBA (MUJ)",
      category: "business",
      categoryLabel: "Management",
      university: "Manipal University Jaipur",
      universitySlug: "manipal-university-jaipur",
      duration: "2 Years",
      level: "Postgraduate",
      description: "NAAC A++ accredited online MBA with 13 specialized electives, Coursera for Campus certifications, and global alumni network.",
      highlights: ["NAAC A++ Highest Grade", "13 Electives Choice", "Coursera Certifications", "Campus Immersion"],
      rating: 4.8,
      reviewsCount: 1250,
      students: "12,000+",
      fee: "₹1,75,000",
      emi: "₹3,650/mo",
      image: "/courses/mba_premium.jpg",
      tag: "Top Rated"
    },
    {
      id: 3,
      slug: "online-mba-sikkim-manipal-university",
      title: "Online MBA (Sikkim Manipal University)",
      shortTitle: "Online MBA (SMU)",
      category: "business",
      categoryLabel: "Management",
      university: "Sikkim Manipal University",
      universitySlug: "sikkim-manipal-university",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Established distance & online MBA program with over 28 years of academic heritage and affordable semester fee plans.",
      highlights: ["UGC-DEB Recognized", "NAAC A+ Accredited", "Over 28 Yr Legacy", "Affordable Fee"],
      rating: 4.7,
      reviewsCount: 980,
      students: "18,000+",
      fee: "₹1,10,000",
      emi: "₹2,290/mo",
      image: "/courses/mba_premium.jpg",
      tag: "High Value"
    },
    {
      id: 4,
      slug: "online-mba-uttaranchal-university",
      title: "Online MBA (Uttaranchal University)",
      shortTitle: "Online MBA (UU)",
      category: "business",
      categoryLabel: "Management",
      university: "Uttaranchal University",
      universitySlug: "uttaranchal-university",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Cost-effective online MBA designed for ambitious professionals with AICTE approval and comprehensive digital learning materials.",
      highlights: ["AICTE Approved", "NAAC A+ University", "Low Semester Installments", "Placement Cell"],
      rating: 4.7,
      reviewsCount: 820,
      students: "8,500+",
      fee: "₹1,40,000",
      emi: "₹2,910/mo",
      image: "/courses/mba_premium.jpg",
      tag: "Affordable"
    },
    {
      id: 5,
      slug: "online-bba-amity-university",
      title: "Bachelor of Business Administration (BBA)",
      shortTitle: "Online BBA",
      category: "business",
      categoryLabel: "Management",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Foundational 3-year undergraduate degree in modern business administration, finance, marketing, and entrepreneurship.",
      highlights: ["Industry Projects", "Practical Case Studies", "Top B-School Faculty", "0% No-Cost EMI"],
      rating: 4.8,
      reviewsCount: 1100,
      students: "9,000+",
      fee: "₹1,65,000",
      emi: "₹2,300/mo",
      image: "/courses/bba_premium.jpg",
      tag: "Top UG Course"
    },
    {
      id: 6,
      slug: "online-mca-amity-university",
      title: "Master of Computer Applications (MCA)",
      shortTitle: "Online MCA",
      category: "technology",
      categoryLabel: "Computer & IT",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Advanced computing program covering Cloud Architecture, AI & ML, Full-Stack Software Engineering, and Cyber Security.",
      highlights: ["Cloud & Full Stack", "TCS iON / HCLTech Specializations", "Virtual Coding Labs", "High Placement Rate"],
      rating: 4.9,
      reviewsCount: 1320,
      students: "11,000+",
      fee: "₹1,70,000",
      emi: "₹3,540/mo",
      image: "/courses/mca_premium.jpg",
      tag: "In-Demand"
    },
    {
      id: 7,
      slug: "online-bca-amity-university",
      title: "Bachelor of Computer Applications (BCA)",
      shortTitle: "Online BCA",
      category: "technology",
      categoryLabel: "Computer & IT",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Comprehensive computing degree teaching Python, Java, Web Development, Data Structures, and Cloud Computing.",
      highlights: ["Hands-on Coding", "Data Analytics Specialization", "Mentorship from Tech Leads", "Global Recognition"],
      rating: 4.7,
      reviewsCount: 1450,
      students: "14,000+",
      fee: "₹1,50,000",
      emi: "₹2,080/mo",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      tag: "Top IT UG"
    },
    {
      id: 8,
      slug: "online-mcom-amity-university",
      title: "Master of Commerce (M.Com)",
      shortTitle: "Online M.Com",
      category: "commerce",
      categoryLabel: "Commerce",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Specialized postgraduate program in Corporate Finance, International Taxation, Financial Reporting, and Banking Operations.",
      highlights: ["Corporate Accounting", "Financial Modeling", "Corporate Law & Tax", "Career Mentoring"],
      rating: 4.6,
      reviewsCount: 650,
      students: "6,000+",
      fee: "₹1,20,000",
      emi: "₹2,500/mo",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
      tag: "Finance Special"
    },
    {
      id: 9,
      slug: "online-bcom-amity-university",
      title: "Bachelor of Commerce (B.Com)",
      shortTitle: "Online B.Com",
      category: "commerce",
      categoryLabel: "Commerce",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Rigorous 3-year commerce education covering financial accounting, auditing, corporate governance, and digital commerce.",
      highlights: ["ACCA Accredited Options", "Commerce Foundations", "Live Doubt Sessions", "Flexible Schedule"],
      rating: 4.7,
      reviewsCount: 1280,
      students: "12,000+",
      fee: "₹99,000",
      emi: "₹1,375/mo",
      image: "/courses/bcom_premium.jpg",
      tag: "Most Economical"
    },
    {
      id: 10,
      slug: "online-ba-amity-university",
      title: "Bachelor of Arts (BA)",
      shortTitle: "Online BA",
      category: "arts",
      categoryLabel: "Humanities",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Interdisciplinary bachelor's degree in humanities, political science, sociology, and English literature.",
      highlights: ["Civil Services Foundation", "Self-Paced Study", "Comprehensive Notes", "UGC Valid"],
      rating: 4.6,
      reviewsCount: 750,
      students: "7,000+",
      fee: "₹95,000",
      emi: "₹1,320/mo",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80",
      tag: "UPSC Friendly"
    },
    {
      id: 11,
      slug: "online-ma-amity-university",
      title: "Master of Arts (MA)",
      shortTitle: "Online MA",
      category: "arts",
      categoryLabel: "Humanities",
      university: "Amity University",
      universitySlug: "amity-university",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Advanced master's degree in humanities with specializations in English, Sociology, and Public Administration.",
      highlights: ["Multiple Specializations", "Research-Oriented", "Expert Faculty", "Flexible Learning"],
      rating: 4.6,
      reviewsCount: 680,
      students: "5,500+",
      fee: "₹1,30,000",
      emi: "₹2,700/mo",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
      tag: "Higher Studies"
    }
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [courses, selectedCategory, selectedLevel, searchQuery]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-student-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Course Catalog Directory"
        })
      });
      const data = await res.json();
      if (data.success) {
        toast.success("🎉 Consultation booked! Our counselor will reach out shortly.", { icon: false });
        setFormData({ name: "", email: "", phone: "", course: "", state: "" });
      } else {
        toast.error("❌ Something went wrong. Please try again.", { icon: false });
      }
    } catch {
      toast.error("❌ Submission failed. Please try again.", { icon: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "UGC Approved Online Degree Programs - MBA, MCA, BBA, BCA, M.Com, B.Com",
    "description": "Explore and compare top UGC-approved online degree programs from recognized universities with updated fee structures, syllabus, and 0% EMI.",
    "itemListElement": courses.map((c, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Course",
        "name": c.title,
        "description": c.description,
        "provider": { "@type": "EducationalOrganization", "name": c.university },
        "educationalLevel": c.level,
        "timeRequired": c.duration
      }
    }))
  };

  return (
    <>
      <StructuredData data={coursesSchema} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
        {/* Header Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-rose-400/10 blur-3xl pointer-events-none -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm font-semibold text-[#0f4c75] dark:text-[#38bdf8] mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                UGC-DEB Approved Degree Programs (2026-2027)
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
                Explore Verified Online &{" "}
                <span className="bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                  Distance Degrees
                </span>
              </h1>

              <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Choose from over 50+ government-approved undergraduate and postgraduate courses. Compare semester fees, specializations, and career pathways.
              </p>

              {/* Search Bar */}
              <div className="mt-8 relative max-w-xl mx-auto">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search courses by degree name, university, or subject (e.g. MBA, Data Science)..."
                  className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0f4c75] text-sm sm:text-base placeholder:text-slate-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Degree Level Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                {[
                  { id: "all", label: "All Levels" },
                  { id: "Postgraduate", label: "🎓 Master's / PG" },
                  { id: "Undergraduate", label: "📘 Bachelor's / UG" }
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setSelectedLevel(lvl.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedLevel === lvl.id
                        ? "bg-[#0f4c75] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Navigation Filter Bar */}
        <section className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-md shadow-blue-900/20"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Listing Grid */}
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Available Degree Programs
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Showing {filteredCourses.length} {filteredCourses.length === 1 ? "program" : "programs"} with verified syllabus & UGC equivalence
              </p>
            </div>
            <a
              href="https://wa.me/919335512881?text=Hi%2C%20I%20need%20counseling%20regarding%20course%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>💬 Need help choosing? Chat with counselor</span>
              <span>→</span>
            </a>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No courses match your criteria</h3>
              <p className="text-sm text-slate-500 mt-1">Try selecting a different category or clearing search filters.</p>
              <button
                onClick={() => { setSelectedCategory("all"); setSelectedLevel("all"); setSearchQuery(""); }}
                className="mt-4 px-4 py-2 bg-[#0f4c75] text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image & Header */}
                  <div>
                    <div className="relative w-full h-44 sm:h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent"></div>

                      {/* Pill Badges on Top */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                        <span className="px-2.5 py-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-full text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8] shadow-sm">
                          {course.categoryLabel}
                        </span>
                        <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-bold text-[11px] rounded-full shadow-sm">
                          {course.tag}
                        </span>
                      </div>

                      {/* Bottom Banner Info */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-amber-300 font-bold">★ {course.rating}</span>
                          <span className="text-slate-300 text-[11px]">({course.reviewsCount})</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-200 font-medium text-[11px]">{course.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 space-y-3.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8]">
                          {course.university}
                        </span>
                        <span className="text-slate-300 dark:text-slate-700">•</span>
                        <span className="text-xs text-slate-500 font-medium">
                          {course.level}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors leading-snug">
                        <Link href={`/courses/${course.slug}`}>
                          {course.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Highlights */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                        {course.highlights.map((h, hi) => (
                          <div key={hi} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between mb-3.5">
                      <div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Total Program Fee</span>
                        <span className="text-base font-bold text-slate-900 dark:text-white">
                          {course.fee}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">No-Cost EMI</span>
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          Starts {course.emi}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="w-full text-center px-3 py-2.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white text-xs font-semibold rounded-xl hover:shadow-md hover:opacity-95 transition-all"
                      >
                        Syllabus & Fees
                      </Link>
                      <a
                        href={`https://wa.me/919335512881?text=Hi%2C%20I%20want%20to%20apply%20for%20${encodeURIComponent(course.title)}%20at%20${encodeURIComponent(course.university)}.`}
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
          )}
        </section>

        {/* Career Support Banner & Lead Form */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-[#0f4c75] to-[#1e7aa8] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-amber-300">
                  Career Counseling Assistance
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Need Personalized Course Recommendations?
                </h2>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                  Get in touch with an expert academic counselor to compare course curriculums, eligibility requirements, and placement statistics across all top online universities.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-200">
                  <span className="flex items-center gap-1.5">✓ 100% Free Consultation</span>
                  <span className="flex items-center gap-1.5">✓ Zero Application Assistance Fee</span>
                  <span className="flex items-center gap-1.5">✓ Loan & EMI Assistance</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Get Instant Course Guidance</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Leave your details and our counselor will call you.</p>

                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name *"
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone (+91) *"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address *"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                  </div>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  >
                    <option value="">Select Interested Course *</option>
                    <option value="Online MBA">Online MBA</option>
                    <option value="Online MCA">Online MCA</option>
                    <option value="Online BBA">Online BBA</option>
                    <option value="Online BCA">Online BCA</option>
                    <option value="Online B.Com / M.Com">Commerce (B.Com / M.Com)</option>
                    <option value="Online BA / MA">Arts (BA / MA)</option>
                  </select>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Get Free Expert Guidance"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
