"use client";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import StructuredData from "./components/StructuredData";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    university: "",
    state: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const [isReviewsPaused, setIsReviewsPaused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          source: 'Home Page Enquiry'
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        // Close modal and reset form
        setShowModal(false);
        setFormData({ name: "", email: "", phone: "", course: "", university: "", state: "" });
        
        // Redirect if there's a redirect URL
        if (redirectUrl) {
          router.push(redirectUrl);
          setRedirectUrl(null);
        } else {
          alert("Thank you for your enquiry! We'll get back to you soon.");
        }
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

  const openModal = (url: string) => {
    setRedirectUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setRedirectUrl(null);
    setFormData({ name: "", email: "", phone: "", course: "", university: "", state: "" });
  };

  const featuredUniversities = [
    {
      id: 1,
      name: "Amity University",
      image: "https://collegesgyan.com/wp-content/uploads/2024/03/Untitled-design-10-e1710144513893.webp",
      description: "Leading private university with diverse programs and state-of-the-art facilities."
    },
    {
      id: 2,
      name: "Uttaranchal University (UU)",
      image: "https://www.admissionindia.net/uploads/colleges/10/logo.jpg",
      description: "Premier university offering quality education in engineering, management, and more."
    },
    {
      id: 3,
      name: "Sikkim Manipal University (SMU)",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      description: "Renowned university with excellent academic programs and placement opportunities."
    },
    {
      id: 4,
      name: "Manipal University Jaipur (MUJ)",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Manipal_University_Jaipur_logo.png",
      description: "World-class education in engineering, management, and humanities."
    }
  ];

  // Auto-scroll functionality with infinite loop
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = scrollContentRef.current;
    if (!container || !content) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const cardWidth = 320; // base card width
    const gap = 24; // gap between cards
    const singleSetWidth = (cardWidth + gap) * featuredUniversities.length;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // When we've scrolled one full set, reset to create seamless infinite loop
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosition;
        }
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling after a brief delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, featuredUniversities.length]);

  // Auto-scroll for reviews section
  useEffect(() => {
    const container = reviewsScrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.4; // pixels per frame
    const cardWidth = 350; // base card width
    const gap = 24; // gap between cards
    const reviewsCount = 5; // number of reviews
    const singleSetWidth = (cardWidth + gap) * reviewsCount;

    const scroll = () => {
      if (!isReviewsPaused) {
        scrollPosition += scrollSpeed;
        
        // When we've scrolled one full set, reset to create seamless infinite loop
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPosition;
        }
      }
      
      animationId = requestAnimationFrame(scroll);
    };

    // Start scrolling after a brief delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(scroll);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isReviewsPaused]);

  const onlineCourses = [
    {
      id: 1,
      title: "Online MBA",
      category: "Business",
      duration: "2 year | 4 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Master of Business Administration for aspiring business leaders."
    },
    {
      id: 2,
      title: "Online MCA",
      category: "Technology",
      duration: "2 year | 4 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Master of Computer Applications for IT professionals."
    },
    {
      id: 3,
      title: "Online BBA",
      category: "Business",
      duration: "3 year | 6 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Bachelor of Business Administration for business enthusiasts."
    },
    {
      id: 4,
      title: "Online BCA",
      category: "Technology",
      duration: "3 year | 6 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Bachelor of Computer Applications for tech careers."
    },
    {
      id: 6,
      title: "Online B.Com",
      category: "Commerce",
      duration: "3 year | 6 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Bachelor of Commerce for commerce and finance careers."
    },
    {
      id: 7,
      title: "Online M.Com",
      category: "Commerce",
      duration: "2 year | 4 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Master of Commerce for advanced commerce studies."
    },
    {
      id: 8,
      title: "Online BA",
      category: "Arts",
      duration: "3 year | 6 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Bachelor of Arts for humanities and social sciences."
    },
    {
      id: 9,
      title: "Online MA",
      category: "Arts",
      duration: "2 year | 4 semester",
      approved: "UGC-entitled degree programme",
      mode: "Online (Live/Recorded Lectures)",
      payment: "EMI options available",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Master of Arts for advanced humanities studies."
    }
  ];


  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "White Board Education",
    "alternateName": "Whiteboard Education",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://whiteboardeducation.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://whiteboardeducation.com"}/Logo.png`,
    "description": "Leading education counseling platform helping students get admission in top universities like Amity University, Manipal University Jaipur (MUJ), Sikkim Manipal University (SMU), GLA University, Uttaranchal University, MIT University, Mangalayatan University. Offering online MBA, MCA, BBA, BCA courses with UGC approval.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": []
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "White Board Education",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://whiteboardeducation.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://whiteboardeducation.com"}/courses?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Online Courses - MBA, MCA, BBA, BCA",
    "description": "UGC-approved online courses including MBA, MCA, BBA, BCA with live/recorded lectures and EMI options",
    "itemListElement": onlineCourses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "White Board Education"
        },
        "educationalLevel": course.duration.includes("year") ? "Undergraduate" : "Postgraduate",
        "timeRequired": course.duration,
        "courseCode": course.title.replace(/\s+/g, "").toUpperCase(),
        "inLanguage": "en-IN",
        "teaches": course.title,
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        }
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": process.env.NEXT_PUBLIC_SITE_URL || "https://whiteboardeducation.com"
      }
    ]
  };

  const universityListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Universities - Amity, MUJ, SMU, GLA, Uttaranchal, MIT, Mangalayatan",
    "description": "List of top partner universities including Amity University, Manipal University Jaipur (MUJ), Sikkim Manipal University (SMU), GLA University, Uttaranchal University, MIT University, and Mangalayatan University",
    "itemListElement": featuredUniversities.map((university, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CollegeOrUniversity",
        "name": university.name,
        "description": university.description,
        "url": `${process.env.NEXT_PUBLIC_SITE_URL || "https://whiteboardeducation.com"}/universities`
      }
    }))
  };

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={courseListSchema} />
      <StructuredData data={universityListSchema} />
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen">
        <Hero />
      
      {/* Top Universities Section - Scrollable */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900" aria-label="Top Universities">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              Top Universities
          </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Partner with prestigious universities offering world-class education and excellent placement opportunities.
            </p>
          </div>

          {/* Scrollable Container */}
          <div 
            className="relative mb-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Scrollable Wrapper */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-hidden scrollbar-hide pb-4 -mx-6 px-6"
              style={{ scrollBehavior: 'auto', willChange: 'scroll-position' }}
            >
              <div ref={scrollContentRef} className="flex gap-6 min-w-max">
                {/* Duplicate universities for infinite scroll - need at least 2 sets for seamless loop */}
                {[...featuredUniversities, ...featuredUniversities].map((university, index) => (
                  <div
                    key={`${university.id}-${index}`}
                    className="group flex-shrink-0 w-[320px] md:w-[380px] bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${(index % featuredUniversities.length) * 100}ms both`
                    }}
                  >
                    <div className="relative w-full h-48 bg-gradient-to-br from-[#0f4c75] to-[#dc2626] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${university.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                        role="img"
                        aria-label={`${university.name} university image`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c75]/80 to-[#dc2626]/80 transition-opacity duration-300 group-hover:opacity-70"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 z-10 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                          {university.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5 min-h-[3rem]">
                        {university.description}
                      </p>
                      <button
                        onClick={() => openModal("/universities")}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        Join Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-1.5 w-12 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-[#0f4c75] to-[#dc2626] rounded-full ${isPaused ? '' : 'animate-scroll-indicator'}`}></div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isPaused ? 'Hover to pause • Auto-scrolling' : 'Auto-scrolling'}
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/universities"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore All Universities
            </Link>
          </div>
        </div>
      </section>

      {/* Courses We Offer Section - EduKyu Style */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900" aria-label="Online Courses">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              Online Courses - MBA, MCA, BBA
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Explore our wide range of UGC-entitled online degree programs designed to help you achieve your career goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {onlineCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Course Image */}
                  <div className="relative w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${course.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    role="img"
                    aria-label={`${course.title} course image`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#dc2626] text-white text-xs font-bold rounded-md">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4 line-clamp-1">
                    {course.title}
                  </h3>
                  
                  {/* Course Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-[#0f4c75] dark:text-[#1e7aa8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-[#0f4c75] dark:text-[#1e7aa8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.approved}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-[#0f4c75] dark:text-[#1e7aa8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{course.mode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <svg className="w-4 h-4 text-[#0f4c75] dark:text-[#1e7aa8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.payment}</span>
                    </div>
                  </div>

                  {/* View Program Button */}
                  <button
                    onClick={() => openModal("/courses")}
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-lg hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 text-sm"
                  >
                    View Program
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
                Get Started Today
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Fill out the form and our education counselors will get back to you within 24 hours to help you choose the right program for your career goals.
              </p>
              <div className="space-y-4">
                {[
                  "Free career counseling",
                  "Personalized program recommendations",
                  "Admission guidance",
                  "Scholarship information"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-900 dark:text-slate-50 mb-2">
                    Name <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 dark:text-slate-50 mb-2">
                    Email <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-900 dark:text-slate-50 mb-2">
                    Phone <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                    placeholder="+91 123 456 7890"
                  />
                </div>
                <div>
                  <label htmlFor="university" className="block text-sm font-bold text-slate-900 dark:text-slate-50 mb-2">
                    University <span className="text-[#dc2626]">*</span>
                  </label>
                  <select
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  >
                    <option value="">Select a university</option>
                    {featuredUniversities.map((university) => (
                      <option key={university.id} value={university.name}>
                        {university.name}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="course" className="block text-sm font-bold text-slate-900 dark:text-slate-50 mb-2">
                    Course <span className="text-[#dc2626]">*</span>
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  >
                    <option value="">Select a course</option>
                    {onlineCourses.map((course) => (
                      <option key={course.id} value={course.title}>
                        {course.title}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-bold text-slate-900 dark:text-slate-50 mb-2">
                    State/Province <span className="text-[#dc2626]">*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  >
                    <option value="">Select your state</option>
                    <option value="delhi">Delhi</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-bold rounded-xl hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-5 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-md text-xs font-semibold text-[#0f4c75] dark:text-[#1e7aa8] uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
                Your Trusted Education Partner
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We provide personalized guidance, transparent processes, and continuous support to help you make the right educational choices.
              </p>
              <div className="space-y-4">
                {[
                  "Personalized online admission support",
                  "Honest and transparent guidance",
                  "Career-focused counseling",
                  "Student-first approach",
                  "Support at every step"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/home/hero-education.svg'), linear-gradient(135deg, #0f4c75 0%, #dc2626 100%)",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c75]/40 to-[#dc2626]/40"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎓</div>
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      Transform Your Future
                    </h3>
                    <p className="text-white/90 drop-shadow">
                      Start your journey today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800" aria-label="Student Reviews">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Real experiences from students who transformed their careers with us
            </p>
          </div>

          {/* Scrollable Reviews Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsReviewsPaused(true)}
            onMouseLeave={() => setIsReviewsPaused(false)}
          >
            <div 
              ref={reviewsScrollRef}
              className="overflow-x-hidden scrollbar-hide pb-4 -mx-6 px-6"
              style={{ scrollBehavior: 'auto', willChange: 'scroll-position' }}
            >
              <div className="flex gap-6 min-w-max">
                {/* Duplicate reviews for infinite scroll */}
                {[
                  {
                    id: 1,
                    name: "Priya Sharma",
                    course: "Online MBA",
                    university: "Amity University",
                    rating: 5,
                    review: "White Board Education made my admission process so smooth! The counselors were extremely helpful and guided me through every step. I'm now pursuing my MBA from Amity University and couldn't be happier. Highly recommend their services!",
                    location: "Delhi"
                  },
                  {
                    id: 2,
                    name: "Rahul Kumar",
                    course: "Online MCA",
                    university: "Manipal University Jaipur",
                    rating: 5,
                    review: "Excellent support throughout the entire process. The team helped me understand all the course details and fee structure clearly. The admission was completed without any hassle. Great experience overall!",
                    location: "Mumbai"
                  },
                  {
                    id: 3,
                    name: "Anjali Patel",
                    course: "Online MCA",
                    university: "Sikkim Manipal University",
                    rating: 5,
                    review: "I was confused about which university to choose, but the career counseling session helped me make the right decision. The counselors are knowledgeable and patient. Thank you White Board Education for your guidance!",
                    location: "Ahmedabad"
                  },
                  {
                    id: 4,
                    name: "Vikram Singh",
                    course: "Online BBA",
                    university: "Uttaranchal University",
                    rating: 5,
                    review: "The entire team is professional and responsive. They answered all my queries promptly and helped me with document verification. The process was transparent and I got admission in my preferred course. Very satisfied!",
                    location: "Lucknow"
                  },
                  {
                    id: 5,
                    name: "Sneha Reddy",
                    course: "Online MBA",
                    university: "Amity University",
                    rating: 5,
                    review: "Best decision I made! The counselors provided detailed information about all universities and courses. They helped me choose the best option based on my career goals. The admission process was seamless. Highly recommend!",
                    location: "Bangalore"
                  },
                  // Duplicate for infinite scroll
                  {
                    id: 6,
                    name: "Priya Sharma",
                    course: "Online MBA",
                    university: "Amity University",
                    rating: 5,
                    review: "White Board Education made my admission process so smooth! The counselors were extremely helpful and guided me through every step. I'm now pursuing my MBA from Amity University and couldn't be happier. Highly recommend their services!",
                    location: "Delhi"
                  },
                  {
                    id: 7,
                    name: "Rahul Kumar",
                    course: "Online MCA",
                    university: "Manipal University Jaipur",
                    rating: 5,
                    review: "Excellent support throughout the entire process. The team helped me understand all the course details and fee structure clearly. The admission was completed without any hassle. Great experience overall!",
                    location: "Mumbai"
                  },
                  {
                    id: 8,
                    name: "Anjali Patel",
                    course: "Online MCA",
                    university: "Sikkim Manipal University",
                    rating: 5,
                    review: "I was confused about which university to choose, but the career counseling session helped me make the right decision. The counselors are knowledgeable and patient. Thank you White Board Education for your guidance!",
                    location: "Ahmedabad"
                  },
                  {
                    id: 9,
                    name: "Vikram Singh",
                    course: "Online BBA",
                    university: "Uttaranchal University",
                    rating: 5,
                    review: "The entire team is professional and responsive. They answered all my queries promptly and helped me with document verification. The process was transparent and I got admission in my preferred course. Very satisfied!",
                    location: "Lucknow"
                  },
                  {
                    id: 10,
                    name: "Sneha Reddy",
                    course: "Online MBA",
                    university: "Amity University",
                    rating: 5,
                    review: "Best decision I made! The counselors provided detailed information about all universities and courses. They helped me choose the best option based on my career goals. The admission process was seamless. Highly recommend!",
                    location: "Bangalore"
                  }
                ].map((review: { id: number; name: string; course: string; university: string; rating: number; review: string; location: string }, index: number) => (
                  <div
                    key={review.id}
                    className="group flex-shrink-0 w-[350px] md:w-[400px] bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
                    }}
                  >
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 text-sm md:text-base">
                      "{review.review}"
                    </p>

                    {/* Student Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-slate-900 dark:text-slate-50 mb-1">
                          {review.name}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                          {review.course} • {review.university}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                          📍 {review.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <div className="h-1.5 w-12 bg-slate-300 dark:bg-slate-600 rounded-full overflow-hidden">
                <div className={`h-full bg-gradient-to-r from-[#0f4c75] to-[#dc2626] rounded-full ${isReviewsPaused ? '' : 'animate-scroll-indicator'}`}></div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {isReviewsPaused ? 'Hover to pause • Auto-scrolling' : 'Auto-scrolling reviews'}
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Student Form Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-20 p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="relative bg-white dark:bg-slate-800 rounded-2xl p-5 md:p-6 shadow-2xl border border-slate-200 dark:border-slate-700 max-w-lg w-full max-h-[85vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="mb-4 pr-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                Get Started Today
              </h2>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                Fill out the form and our counselors will get back to you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-900 dark:text-slate-50 mb-1">
                  Name <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-900 dark:text-slate-50 mb-1">
                  Email <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="modal-phone" className="block text-xs font-semibold text-slate-900 dark:text-slate-50 mb-1">
                  Phone <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                  placeholder="+91 123 456 7890"
                />
              </div>
              <div>
                <label htmlFor="modal-university" className="block text-xs font-semibold text-slate-900 dark:text-slate-50 mb-1">
                  University <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  id="modal-university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                >
                  <option value="">Select a university</option>
                  {featuredUniversities.map((university) => (
                    <option key={university.id} value={university.name}>
                      {university.name}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="modal-course" className="block text-xs font-semibold text-slate-900 dark:text-slate-50 mb-1">
                  Course <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  id="modal-course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                >
                  <option value="">Select a course</option>
                  {onlineCourses.map((course) => (
                    <option key={course.id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="modal-state" className="block text-xs font-semibold text-slate-900 dark:text-slate-50 mb-1">
                  State <span className="text-[#dc2626]">*</span>
                </label>
                <select
                  id="modal-state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-slate-900 dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] focus:border-[#0f4c75] transition-all"
                >
                  <option value="">Select your state</option>
                  <option value="delhi">Delhi</option>
                  <option value="maharashtra">Maharashtra</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="tamil-nadu">Tamil Nadu</option>
                  <option value="uttar-pradesh">Uttar Pradesh</option>
                  <option value="bihar">Bihar</option>
                  <option value="west-bengal">West Bengal</option>
                  <option value="odisha">Odisha</option>
                  <option value="andhra-pradesh">Andhra Pradesh</option>
                  <option value="kerala">Kerala</option>
                  <option value="punjab">Punjab</option>
                  <option value="haryana">Haryana</option>
                  <option value="rajasthan">Rajasthan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2.5 text-sm bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-lg hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit & Continue"}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2.5 text-sm bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
