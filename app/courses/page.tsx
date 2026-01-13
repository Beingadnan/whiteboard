"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StructuredData from "../components/StructuredData";

export default function Courses() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: "all", name: "All Courses", icon: "📚" },
    { id: "engineering", name: "Engineering", icon: "⚙️" },
    { id: "business", name: "Business", icon: "💼" },
    { id: "arts", name: "Arts & Humanities", icon: "🎨" },
    { id: "science", name: "Science", icon: "🔬" },
    { id: "law", name: "Law", icon: "⚖️" },
    { id: "medicine", name: "Medicine", icon: "🏥" }
  ];

  const courses = [
    {
      id: 1,
      title: "Master of Business Administration (MBA)",
      category: "business",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Premier MBA program designed to develop business leaders with global perspective and strategic thinking.",
      highlights: ["UGC Accredited", "Top 3% Globally", "Industry Projects", "Career Services"],
      rating: 4.9,
      students: "3K+",
      fee: "₹2,99,000",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Online MBA",
      category: "business",
      university: "Manipal University Jaipur",
      duration: "2 Years",
      level: "Postgraduate",
      description: "UGC-recognized online MBA program with NAAC A++ accreditation, offering flexible learning for working professionals.",
      highlights: ["NAAC A++", "13 Specializations", "Global Network", "Campus Immersion"],
      rating: 4.8,
      students: "2K+",
      fee: "₹1,75,000",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Online MBA",
      category: "business",
      university: "Sikkim Manipal University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "NAAC A+ accredited online MBA program from Sikkim Manipal University, established in 1995.",
      highlights: ["NAAC A+", "UGC Recognized", "Affordable", "Flexible Learning"],
      rating: 4.6,
      students: "1.5K+",
      fee: "₹1,10,000",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Online MBA",
      category: "business",
      university: "Uttaranchal University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Affordable online MBA program from Uttaranchal University, NAAC A+ accredited.",
      highlights: ["NAAC A+", "UGC Recognized", "Affordable", "AICTE Approved"],
      rating: 4.7,
      students: "1K+",
      fee: "₹98,000",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Online BBA",
      category: "business",
      university: "Amity University",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Comprehensive Bachelor of Business Administration program designed to develop business acumen and management skills.",
      highlights: ["Industry-Relevant", "Practical Learning", "Career Support", "Flexible Online"],
      rating: 4.7,
      students: "2K+",
      fee: "₹1,65,000",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Online MCA",
      category: "technology",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Master of Computer Applications program designed for IT professionals seeking advanced technical skills.",
      highlights: ["Advanced Skills", "Industry Projects", "Expert Faculty", "Career Support"],
      rating: 4.8,
      students: "1.5K+",
      fee: "₹1,70,000",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "Online BCA",
      category: "technology",
      university: "Amity University",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Bachelor of Computer Applications program providing comprehensive knowledge in computer science and applications.",
      highlights: ["Programming Skills", "Hands-on Projects", "Industry-Relevant", "Career Support"],
      rating: 4.7,
      students: "2.5K+",
      fee: "₹1,50,000",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Online M.Com",
      category: "commerce",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Master of Commerce program designed to develop expertise in commerce, finance, and accounting.",
      highlights: ["Advanced Commerce", "Industry-Relevant", "Expert Faculty", "Career Support"],
      rating: 4.6,
      students: "1K+",
      fee: "₹1,20,000",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Online B.Com",
      category: "commerce",
      university: "Amity University",
      duration: "3 Years",
      level: "Undergraduate",
      description: "Bachelor of Commerce program providing comprehensive knowledge in commerce, accounting, and business.",
      highlights: ["Commerce Foundation", "Practical Learning", "Career Support", "Flexible Online"],
      rating: 4.7,
      students: "3K+",
      fee: "₹99,000",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 10,
      title: "Online MA",
      category: "arts",
      university: "Amity University",
      duration: "2 Years",
      level: "Postgraduate",
      description: "Master of Arts program offering specialization in various humanities and social science disciplines.",
      highlights: ["Multiple Specializations", "Research-Oriented", "Expert Faculty", "Flexible Learning"],
      rating: 4.6,
      students: "800+",
      fee: "₹1,30,000",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  // Structured Data for SEO
  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Online Courses - MBA, B.Tech, MCA, BBA, BCA | UGC Approved",
    "description": "UGC-approved online courses including MBA, B.Tech, MCA, BBA, BCA, M.Com, B.Com, BA, MA with live/recorded lectures and EMI options. Get admission in top universities like Amity, MUJ, SMU, GLA, Uttaranchal, MIT, Mangalayatan.",
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": course.university || "White Board Education"
        },
        "educationalLevel": course.level,
        "timeRequired": course.duration,
        "courseCode": course.title.replace(/\s+/g, "").toUpperCase(),
        "inLanguage": "en-IN",
        "teaches": course.title,
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": course.rating.toString(),
          "ratingCount": "50"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR"
        }
      }
    }))
  };

  return (
    <>
      <StructuredData data={coursesSchema} />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
      <section className="relative py-32 md:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#1e7aa8]/15 to-[#ea580c]/15 rounded-full blur-[100px] -top-[200px] -right-[200px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-6 py-2.5 mb-6 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 border border-[#0f4c75]/20 dark:border-[#1e7aa8]/20 rounded-full text-sm font-semibold text-[#0f4c75] dark:text-[#1e7aa8] tracking-tight">
              Courses We Offer
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              Explore Our
              <span className="block bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
                {" "}Course Catalog
              </span>
            </h1>
            <p className="text-xl md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Discover a wide range of programs designed to help you achieve your academic and career goals. 
              From undergraduate to postgraduate, find the perfect course for your future.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-[72px] z-50 backdrop-blur-sm bg-white/95 dark:bg-slate-900/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-[#0f4c75] dark:hover:border-[#0f4c75]"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 mb-4 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-md text-xs font-semibold text-[#0f4c75] dark:text-[#1e7aa8] uppercase tracking-wider">
              Available Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              {selectedCategory === "all" ? "All Courses" : categories.find(c => c.id === selectedCategory)?.name}
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-400">
              {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"} available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* Course Image */}
                {course.image && (
                  <div className="relative w-full h-40 bg-gradient-to-br from-[#0f4c75] to-[#dc2626] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${course.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c75]/60 to-[#dc2626]/60"></div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                        {course.level}
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                {/* Course Header */}
                <div className="mb-5">
                  <div className="flex items-start justify-between mb-4">
                    {!course.image && (
                      <span className="px-3 py-1.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white text-xs font-bold rounded-full uppercase tracking-wide">
                        {course.level}
                      </span>
                    )}
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-base">★</span>
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-50">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2 leading-tight">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#0f4c75] dark:text-[#1e7aa8] font-semibold">
                    {course.university}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Highlights */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-medium rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Duration</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-50">
                      {course.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Students</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-slate-50">
                      {course.students}
                    </div>
                  </div>
                </div>

                {/* Fee */}
                <div className="mb-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Course Fee</div>
                  <div className="text-base font-bold text-slate-900 dark:text-slate-50">
                    {course.fee}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/courses/${course.id}`}
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  View Details
                </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                No courses found
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Courses */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <span className="inline-block px-4 py-1.5 mb-5 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-md text-xs font-semibold text-[#0f4c75] dark:text-[#1e7aa8] uppercase tracking-wider">
                Why Choose Our Courses
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
                Quality Education for Your Future
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Our courses are designed in collaboration with industry experts and top universities 
                to ensure you receive the best education and career opportunities.
              </p>
              <div className="space-y-4">
                {[
                  "Industry-relevant curriculum",
                  "Experienced faculty members",
                  "Hands-on practical training",
                  "Career placement assistance",
                  "Flexible learning options"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#1e7aa8] to-[#dc2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="bg-gradient-to-br from-[#0f4c75]/10 to-[#dc2626]/10 dark:from-[#1e7aa8]/10 dark:to-[#ea580c]/10 rounded-2xl p-10 border border-[#0f4c75]/20 dark:border-[#1e7aa8]/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-2xl">
                      📖
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-50">Comprehensive Curriculum</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Updated course content aligned with industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-2xl">
                      👨‍🏫
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-50">Expert Instructors</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Learn from industry veterans and academic experts</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-2xl">
                      🎯
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-50">Career-Focused</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Programs designed to enhance your employability</p>
                    </div>
                  </div>
                </div>
              </div>
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
              Ready to Enroll in Your Dream Course?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Get expert guidance on course selection and admission process. Start your journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career-counselling"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0f4c75] font-semibold rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Contact Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

