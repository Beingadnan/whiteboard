"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";
import { toast } from "react-toastify";

interface University {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  programs: string[];
  location: string;
  rating: number;
  reviewsCount: number;
  students: string;
  established: string;
  image: string;
  naacGrade: string;
  ugcApproved: boolean;
  highlightPill: string;
  startingFee: string;
  emiAvailable: boolean;
  keyHighlights: string[];
}

export default function Universities() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Quick enquiry modal or inline state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "",
    state: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const universities: University[] = [
    {
      id: 1,
      slug: "amity-university",
      name: "Amity University Online",
      shortName: "Amity",
      tagline: "India's #1 Ranked Online University by QS World Ranking",
      description: "Amity University Online provides UGC-accredited online degrees with globally recognized curriculum, international faculty, and strong industry placements across 300+ corporate partners.",
      programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online B.Com", "Online MA"],
      location: "Noida / Pan India",
      rating: 4.9,
      reviewsCount: 2450,
      students: "50,000+",
      established: "2005",
      image: "/university/amity-noida-campus.jpg",
      naacGrade: "A+ Grade",
      ugcApproved: true,
      highlightPill: "QS Top 3% Globally",
      startingFee: "₹16,500/Sem",
      emiAvailable: true,
      keyHighlights: [
        "First in India to receive UGC approval for online degrees",
        "WES recognized in USA & Canada for global mobility",
        "300+ Fortune 500 hiring partners & virtual job fairs",
        "Live interactive lectures with international faculty"
      ]
    },
    {
      id: 2,
      slug: "manipal-university-jaipur",
      name: "Manipal University Jaipur",
      shortName: "MUJ Online",
      tagline: "NAAC A++ Accredited Excellence with 70-Year Legacy",
      description: "Manipal University Jaipur Online offers world-class flexible learning with high-demand specializations, state-of-the-art LMS, and premier placement opportunities in top tech and management giants.",
      programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online B.Com", "Online M.Com"],
      location: "Jaipur, Rajasthan",
      rating: 4.8,
      reviewsCount: 1890,
      students: "25,000+",
      established: "2011",
      image: "/university/manipal_campus_premium.jpg",
      naacGrade: "NAAC A++",
      ugcApproved: true,
      highlightPill: "Top Ranked Tech & MBA",
      startingFee: "₹17,500/Sem",
      emiAvailable: true,
      keyHighlights: [
        "Prestigious NAAC A++ accreditation with high CGPA",
        "13+ In-demand MBA & MCA specializations",
        "Free access to Coursera certifications and Coursera for Campus",
        "Dedicated placement cell with mock interview bootcamps"
      ]
    },
    {
      id: 3,
      slug: "sikkim-manipal-university",
      name: "Sikkim Manipal University",
      shortName: "SMU",
      tagline: "Pioneer in Distance & Online Education Since 1995",
      description: "A pioneer in distance higher education with decades of excellence, offering UGC-DEB recognized online MBA, MCA, and graduate programs designed for working professionals.",
      programs: ["Distance MBA", "Online MCA", "Distance BBA", "Online BCA", "Online B.Com"],
      location: "Gangtok, Sikkim",
      rating: 4.7,
      reviewsCount: 1620,
      students: "35,000+",
      established: "1995",
      image: "/university/sikkim-manipal-campus.jpg",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      highlightPill: "Most Affordable & Trusted",
      startingFee: "₹12,500/Sem",
      emiAvailable: true,
      keyHighlights: [
        "Over 28 years of academic excellence and trusted alumni network",
        "UGC and AICTE recognized programs valid globally and for Govt jobs",
        "Cost-effective fee structure with simple no-cost EMI options",
        "Robust alumni network of 5,00,000+ professionals worldwide"
      ]
    },
    {
      id: 4,
      slug: "uttaranchal-university",
      name: "Uttaranchal University",
      shortName: "Uttaranchal Online",
      tagline: "Affordable Quality Higher Education in Dehradun",
      description: "Recognized with NAAC A+ accreditation, Uttaranchal University Online delivers modern curriculum, industry-oriented project work, and flexible weekend exam schedules.",
      programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online BA"],
      location: "Dehradun, Uttarakhand",
      rating: 4.7,
      reviewsCount: 1150,
      students: "15,000+",
      established: "2013",
      image: "/university/uttaranchal_campus_premium.jpg",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      highlightPill: "High Return on Investment",
      startingFee: "₹10,200/Sem",
      emiAvailable: true,
      keyHighlights: [
        "NAAC A+ Accredited institution recognized by UGC & AICTE",
        "Affordable semester fee plans starting from ₹10,200",
        "Career services department assisting with resume and interviews",
        "Complete digital library with access to thousands of e-journals"
      ]
    },
    {
      id: 5,
      slug: "mit-university",
      name: "MIT University (MIT Pune / MIT)",
      shortName: "MIT",
      tagline: "Excellence in Engineering, Tech & Applied Management",
      description: "Prestigious institution renowned for technical innovation, practical project based learning, and deep corporate integrations across leading manufacturing and tech sectors.",
      programs: ["Executive MBA", "B.Tech / Technology", "MCA", "Applied Management"],
      location: "Pune / Chennai",
      rating: 4.9,
      reviewsCount: 1420,
      students: "18,000+",
      established: "1983",
      image: "/university/%20MITUniversity.jpeg",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      highlightPill: "Top Engineering & Leadership",
      startingFee: "₹24,000/Sem",
      emiAvailable: true,
      keyHighlights: [
        "Renowned academic legacy with state-of-the-art tech curriculum",
        "Collaborations with multinational corporations for live capstones",
        "Active incubation center and entrepreneurship mentorship",
        "High average placement packages in top tech firms"
      ]
    },
    {
      id: 6,
      slug: "mangalayatan-university",
      name: "Mangalayatan University",
      shortName: "Mangalayatan",
      tagline: "Empowering Futures with Accessible Higher Education",
      description: "A progressive UGC-approved university offering student-friendly degree programs with holistic career guidance, affordable fee structure, and accessible digital learning.",
      programs: ["Online MBA", "Online MCA", "Online BBA", "Online BCA", "Online BA", "Online B.Com"],
      location: "Aligarh, Uttar Pradesh",
      rating: 4.6,
      reviewsCount: 980,
      students: "12,000+",
      established: "2006",
      image: "/university/MangalayatanUniversity.png",
      naacGrade: "NAAC A+",
      ugcApproved: true,
      highlightPill: "Flexible & Student Centric",
      startingFee: "₹9,500/Sem",
      emiAvailable: true,
      keyHighlights: [
        "UGC-DEB and AICTE approved programs with degree equivalence",
        "Tailored for working individuals, housewives, and remote learners",
        "Easy online examination portal with flexible slots",
        "Dedicated student relationship managers for end-to-end guidance"
      ]
    }
  ];

  const filteredUniversities = useMemo(() => {
    return universities.filter((uni) => {
      const matchesSearch =
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.programs.some(p => p.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedFilter === "all") return matchesSearch;
      if (selectedFilter === "naac_a_plus") return matchesSearch && uni.naacGrade.includes("A+");
      if (selectedFilter === "mba") return matchesSearch && uni.programs.some(p => p.toLowerCase().includes("mba"));
      if (selectedFilter === "tech") return matchesSearch && uni.programs.some(p => p.toLowerCase().includes("mca") || p.toLowerCase().includes("bca") || p.toLowerCase().includes("tech"));
      if (selectedFilter === "budget") return matchesSearch && (uni.id === 3 || uni.id === 4 || uni.id === 6);
      return matchesSearch;
    });
  }, [universities, searchQuery, selectedFilter]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/submit-student-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Universities Directory Page"
        })
      });
      const data = await res.json();
      if (data.success) {
        toast.success("🎉 Consultation booked! Our university advisor will call you shortly.", { icon: false });
        setFormData({ name: "", email: "", phone: "", university: "", course: "", state: "" });
      } else {
        toast.error("❌ Something went wrong. Please try again.", { icon: false });
      }
    } catch {
      toast.error("❌ Submission failed. Please try again.", { icon: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  const accreditationsList = [
    { title: "UGC Approved", desc: "University Grants Commission recognized" },
    { title: "NAAC A+ / A++", desc: "Highest National Quality Standards" },
    { title: "AICTE Approved", desc: "Technical & Management Education" },
    { title: "DEB Recognized", desc: "Distance Education Bureau verified" },
    { title: "WES Approved", desc: "Accepted in USA, Canada & Global" },
    { title: "AIU Member", desc: "Association of Indian Universities" }
  ];

  const faqs = [
    {
      q: "Are online degree programs valid for government and private sector jobs?",
      a: "Yes, 100%. As per UGC notification, online degrees awarded by UGC-DEB recognized universities hold equal value and validity as on-campus degrees for all Central/State government jobs, higher studies, and corporate hiring."
    },
    {
      q: "How are examinations conducted in online universities?",
      a: "Examinations are conducted online via AI-proctored secure examination portals. You can take exams safely from your home with flexible scheduling options on weekends."
    },
    {
      q: "Can I pay the fees in monthly installments or via EMI?",
      a: "Yes! All our partner universities provide flexible semester payment plans and 0% interest No-Cost EMI options through leading banking partners."
    },
    {
      q: "Do online universities provide placement assistance?",
      a: "Yes. Top online universities like Amity, MUJ, and SMU offer dedicated career services including resume optimization, virtual job fairs, mock interviews, and direct interviews with 300+ hiring partners."
    }
  ];

  const universitiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Online & Distance Universities in India - Amity, MUJ, SMU, Uttaranchal, MIT",
    "description": "Explore and compare top UGC-approved online universities in India offering MBA, MCA, BBA, BCA, and Commerce degrees with flexible EMI and placement support.",
    "itemListElement": universities.map((u, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "CollegeOrUniversity",
        "name": u.name,
        "description": u.description,
        "address": { "@type": "PostalAddress", "addressLocality": u.location },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": u.rating.toString(),
          "reviewCount": u.reviewsCount.toString()
        }
      }
    }))
  };

  return (
    <>
      <StructuredData data={universitiesSchema} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-rose-400/10 blur-3xl pointer-events-none -z-10"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm font-semibold text-[#0f4c75] dark:text-[#38bdf8] mb-4 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                UGC-DEB & NAAC A+ Approved Universities
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
                Explore India's Top Ranked{" "}
                <span className="bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                  Universities & Colleges
                </span>
              </h1>

              <p className="mt-3.5 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Compare accredited online and distance degrees, check updated 2026 fee structures, and get 100% free personalized admission counseling.
              </p>

              {/* Quick Stat Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800">
                <div className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                  <div className="text-xl sm:text-2xl font-black text-[#0f4c75] dark:text-[#38bdf8]">50+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">UGC Recognized</div>
                </div>
                <div className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                  <div className="text-xl sm:text-2xl font-black text-[#dc2626] dark:text-rose-400">100%</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Online Exams</div>
                </div>
                <div className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                  <div className="text-xl sm:text-2xl font-black text-[#0f4c75] dark:text-[#38bdf8]">0% EMI</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Flexible Payment</div>
                </div>
                <div className="p-3 bg-white/80 dark:bg-slate-900/80 rounded-xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">300+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Hiring Partners</div>
                </div>
              </div>

              {/* Search and Filters Bar */}
              <div className="mt-8 space-y-4">
                <div className="relative max-w-xl mx-auto">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by university name, location, or degree (e.g. MBA, Amity, Manipal)..."
                    className="w-full pl-11 pr-4 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0f4c75] dark:focus:ring-[#1e7aa8] transition-all text-sm sm:text-base placeholder:text-slate-400"
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

                {/* Filter Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  {[
                    { id: "all", label: "All Universities" },
                    { id: "naac_a_plus", label: "⭐ NAAC A+ / A++" },
                    { id: "mba", label: "🎓 MBA Colleges" },
                    { id: "tech", label: "💻 MCA & Tech" },
                    { id: "budget", label: "💰 Under ₹15k/Sem" }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setSelectedFilter(filter.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                        selectedFilter === filter.id
                          ? "bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-md shadow-blue-900/20"
                          : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accreditation Ribbon */}
        <section className="py-6 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {accreditationsList.map((acc, index) => (
                <div key={index} className="flex-shrink-0 flex items-center gap-2.5 px-3 py-1.5 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-100">{acc.title}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{acc.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Universities List Grid */}
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Featured Partner Universities
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Showing {filteredUniversities.length} {filteredUniversities.length === 1 ? "institution" : "institutions"} verified for 2026-2027 admissions
              </p>
            </div>
            <a
              href="https://wa.me/919335512881"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>💬 Need help choosing? Chat with counselor</span>
              <span>→</span>
            </a>
          </div>

          {filteredUniversities.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-slate-200 dark:border-slate-800">
              <div className="text-4xl mb-3">🔍</div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">No universities match your search</h3>
              <p className="text-sm text-slate-500 mt-1">Try searching for a different keyword or reset filters.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedFilter("all"); }}
                className="mt-4 px-4 py-2 bg-[#0f4c75] text-white text-xs font-semibold rounded-lg"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredUniversities.map((uni) => (
                <div
                  key={uni.id}
                  className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Image Banner with Badges */}
                  <div>
                    <div className="relative w-full h-48 sm:h-52 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{
                          backgroundImage: `url(${uni.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>

                      {/* Pill Badges on Top of Image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
                        <span className="px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8] shadow-sm">
                          {uni.naacGrade}
                        </span>
                        <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-bold text-[11px] rounded-full shadow-sm">
                          {uni.highlightPill}
                        </span>
                      </div>

                      {/* Bottom Image Meta */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="inline-flex items-center gap-1 font-semibold text-amber-300">
                            ★ {uni.rating}
                          </span>
                          <span className="text-slate-300 text-[11px]">({uni.reviewsCount} reviews)</span>
                          <span className="text-slate-400">•</span>
                          <span className="text-slate-200 font-medium text-[11px]">{uni.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6 space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors">
                          <Link href={`/universities/${uni.slug}`}>
                            {uni.name}
                          </Link>
                        </h3>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                          {uni.tagline}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                        {uni.description}
                      </p>

                      {/* Programs Badges */}
                      <div>
                        <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-2">
                          Top Offered Degrees
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {uni.programs.slice(0, 4).map((prog, pi) => (
                            <span
                              key={pi}
                              className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200/50 dark:border-slate-700/50"
                            >
                              {prog}
                            </span>
                          ))}
                          {uni.programs.length > 4 && (
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                              +{uni.programs.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Key Highlights list */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1.5">
                        {uni.keyHighlights.slice(0, 2).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                            <span className="line-clamp-1">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer with Pricing & Action */}
                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <div className="flex items-center justify-between mb-3.5">
                      <div>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium">Fee Starts From</span>
                        <span className="text-base font-bold text-slate-900 dark:text-white">
                          {uni.startingFee}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 rounded-md">
                          0% EMI Available
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        href={`/universities/${uni.slug}`}
                        className="w-full text-center px-3 py-2.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white text-xs font-semibold rounded-xl hover:shadow-md hover:opacity-95 transition-all"
                      >
                        View Programs
                      </Link>
                      <a
                        href={`https://wa.me/919335512881?text=Hi%2C%20I%20want%20to%20know%20more%20about%20admission%20and%20fees%20for%20${encodeURIComponent(uni.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-3 py-2.5 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5"
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

        {/* Why Choose UGC Online Degrees Section */}
        <section className="py-16 sm:py-20 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8] uppercase tracking-wider">
                Benefits of Online Higher Education
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
                Why Pursue an Online Degree in 2026?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
                Accelerate your career without leaving your job or relocating.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "📜",
                  title: "100% Equivalent Degree",
                  desc: "UGC approved degrees hold identical weightage for Central & State Government jobs and higher studies."
                },
                {
                  icon: "💼",
                  title: "Study While Working",
                  desc: "Flexible self-paced weekend lectures allow working professionals to earn while upgrading skills."
                },
                {
                  icon: "💰",
                  title: "70% Cost Effective",
                  desc: "Save heavily on hostel, commuting, and tuition fees with low-cost installment structures."
                },
                {
                  icon: "🚀",
                  title: "Corporate Placements",
                  desc: "Access exclusive virtual job fairs, dedicated mentorship, and interviews with 300+ Fortune 500 MNCs."
                }
              ].map((benefit, bi) => (
                <div
                  key={bi}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-[#0f4c75]/40 transition-all hover:shadow-lg group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{benefit.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Consultation Booking Strip */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-[#0f4c75] to-[#1e7aa8] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold text-amber-300">
                  Free 1-on-1 Guidance
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                  Confused About Which University Is Best For You?
                </h2>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-xl">
                  Speak with our certified university counselors. We evaluate your background, budget, and career goals to find the best match with zero admission consultation fees.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-200">
                  <span className="flex items-center gap-1.5">✓ 100% Free Counseling</span>
                  <span className="flex items-center gap-1.5">✓ Scholarship Assistance</span>
                  <span className="flex items-center gap-1.5">✓ Instant Call Back</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white">Get Free Counseling Call</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Fill details below and our counselor will reach out within 15 minutes.</p>

                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Full Name *"
                    required
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="Phone Number *"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="Email Address *"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    >
                      <option value="">Preferred University</option>
                      {universities.map(u => (
                        <option key={u.id} value={u.name}>{u.shortName}</option>
                      ))}
                    </select>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    >
                      <option value="">Preferred Course</option>
                      <option value="Online MBA">Online MBA</option>
                      <option value="Online MCA">Online MCA</option>
                      <option value="Online BBA">Online BBA</option>
                      <option value="Online BCA">Online BCA</option>
                      <option value="Online B.Com / M.Com">Commerce (B.Com/M.Com)</option>
                      <option value="Online BA / MA">Arts (BA/MA)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting..." : "Connect With University Counselor"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Clear answers to help you make informed decisions about university admissions
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 pr-4">
                    {faq.q}
                  </span>
                  <span className={`text-lg font-bold text-[#0f4c75] dark:text-[#38bdf8] transition-transform duration-200 ${openFAQ === index ? "rotate-180" : ""}`}>
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
