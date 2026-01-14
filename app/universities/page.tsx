"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import StructuredData from "../components/StructuredData";

export default function Universities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const universities = [
    {
      id: 1,
      name: "Amity University",
      description: "A leading private university offering diverse programs across multiple disciplines with state-of-the-art facilities and industry partnerships.",
      programs: ["Engineering", "Business", "Law", "Arts"],
      location: "Multiple Campuses",
      rating: 4.8,
      students: "50K+",
      established: "2005",
      image: "https://collegesgyan.com/wp-content/uploads/2024/03/Untitled-design-10-e1710144513893.webp"
    },
    {
      id: 2,
      name: "Uttaranchal University (UU)",
      description: "A premier university in Uttarakhand offering quality education in engineering, management, law, and applied sciences with modern infrastructure.",
      programs: ["Engineering", "Management", "Law", "Applied Sciences"],
      location: "Dehradun, Uttarakhand",
      rating: 4.7,
      students: "15K+",
      established: "2002",
      image: "https://www.admissionindia.net/uploads/colleges/10/logo.jpg"
    },
    {
      id: 3,
      name: "Sikkim Manipal University (SMU)",
      description: "A renowned distance education university offering flexible learning programs with UGC recognition and industry-aligned curriculum.",
      programs: ["Distance MBA", "Distance BBA", "Distance MCA", "Health Sciences"],
      location: "Gangtok, Sikkim",
      rating: 4.6,
      students: "35K+",
      established: "1995",
      image: "https://upload.wikimedia.org/wikipedia/en/3/30/Logo_of_Sikkim_Manipal_University.jpg"
    },
    {
      id: 4,
      name: "Manipal University Jaipur (MUJ)",
      description: "A leading private university offering world-class education in engineering, management, and humanities with excellent placement records.",
      programs: ["Engineering", "Management", "Design", "Humanities"],
      location: "Jaipur, Rajasthan",
      rating: 4.8,
      students: "12K+",
      established: "2011",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Manipal_University_Jaipur_logo.png"
    },
    {
      id: 5,
      name: "MIT University",
      description: "Madras Institute of Technology - A prestigious institution known for excellence in engineering and technology education with strong industry connections.",
      programs: ["Engineering", "Technology", "Aeronautics", "Automotive"],
      location: "Chennai, Tamil Nadu",
      rating: 4.9,
      students: "8K+",
      established: "1949",
      image: "https://upload.wikimedia.org/wikipedia/en/1/1f/Manipal_University_Jaipur_logo.png"
    },
    {
      id: 6,
      name: "GLA University",
      description: "A leading private university offering quality education in engineering, management, pharmacy, and applied sciences with modern facilities.",
      programs: ["Engineering", "Management", "Pharmacy", "Applied Sciences"],
      location: "Mathura, Uttar Pradesh",
      rating: 4.7,
      students: "20K+",
      established: "2010",
      image: "https://gcetl.in/web2manage/images/Universities/University17187822841556781613phpNa5MIG.jpeg"
    },
    {
      id: 7,
      name: "Mangalayatan University",
      description: "A progressive university offering diverse programs in engineering, management, law, and arts with focus on holistic development.",
      programs: ["Engineering", "Management", "Law", "Arts & Commerce"],
      location: "Aligarh, Uttar Pradesh",
      rating: 4.6,
      students: "10K+",
      established: "2006",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSFLljfmgx0Y26SkW3viqM71aGDPp-NmOog&s"
    }
  ];

  const features = [
    {
      icon: "✅",
      title: "Verified Programs",
      description: "All programs are verified and accredited"
    },
    {
      icon: "🎓",
      title: "Expert Guidance",
      description: "Get personalized counseling from our experts"
    },
    {
      icon: "💼",
      title: "Career Support",
      description: "Comprehensive placement and career assistance"
    },
    {
      icon: "🌍",
      title: "Global Recognition",
      description: "Degrees recognized worldwide"
    }
  ];

  // Structured Data for SEO
  const universitiesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Top Universities - Amity, MUJ, SMU, GLA, Uttaranchal, MIT, Mangalayatan",
    "description": "List of top universities including Amity University, Manipal University Jaipur (MUJ), Sikkim Manipal University (SMU), GLA University, Uttaranchal University, MIT University, and Mangalayatan University",
    "itemListElement": universities.map((university, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CollegeOrUniversity",
        "name": university.name,
        "description": university.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": university.location
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": university.rating.toString(),
          "ratingCount": "100"
        },
        "numberOfStudents": university.students,
        "foundingDate": university.established
      }
    }))
  };

  return (
    <>
      <StructuredData data={universitiesSchema} />
      <div className="min-h-screen bg-white dark:bg-slate-900">
        {/* Hero Section */}
      <section className="relative py-32 md:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#1e7aa8]/15 to-[#ea580c]/15 rounded-full blur-[100px] -top-[200px] -right-[200px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-6 py-2.5 mb-6 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 border border-[#0f4c75]/20 dark:border-[#1e7aa8]/20 rounded-full text-sm font-semibold text-[#0f4c75] dark:text-[#1e7aa8] tracking-tight">
              Top Universities
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              Discover Your
              <span className="block bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
                {" "}Dream University
              </span>
            </h1>
            <p className="text-xl md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Explore our partner universities offering world-class education, cutting-edge programs, 
              and exceptional career opportunities. Find the perfect fit for your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <span className="inline-block px-4 py-1.5 mb-5 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-md text-xs font-semibold text-[#0f4c75] dark:text-[#1e7aa8] uppercase tracking-wider">
              Partner Universities
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              Top-Ranked Institutions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Connect with prestigious universities offering diverse programs and excellent placement opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {universities.map((university, index) => (
              <div
                key={university.id}
                className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* University Image */}
                <div className="relative w-full h-48 bg-gradient-to-br from-[#1e7aa8] to-[#dc2626] overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${university.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0f4c75]/80 to-[#dc2626]/80"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6 z-10">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {university.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${i < Math.floor(university.rating) ? "text-yellow-400" : "text-white/40"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-white drop-shadow">
                        {university.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* University Content */}
                <div className="p-6">

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {university.description}
                  </p>

                  {/* Programs */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wide">
                      Popular Programs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {university.programs.map((program) => (
                        <span
                          key={program}
                          className="px-3 py-1.5 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 text-[#0f4c75] dark:text-[#1e7aa8] text-xs font-semibold rounded-lg"
                        >
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-slate-50">
                        {university.students}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Students</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-slate-50">
                        {university.established}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Established</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900 dark:text-slate-50">
                        {university.location.split(" ")[0]}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">Location</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <Link
                      href={`/universities/${university.id}`}
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl hover:from-[#0a3d5c] hover:to-[#b91c1c] transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Explore Programs
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <span className="inline-block px-4 py-1.5 mb-5 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-md text-xs font-semibold text-[#0f4c75] dark:text-[#1e7aa8] uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
                Your Gateway to Success
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                We partner with top-ranked universities to provide you with the best educational opportunities. 
                Our comprehensive support ensures you make the right choice for your future.
              </p>
              <div className="space-y-4">
                {[
                  "Direct admission assistance",
                  "Scholarship and financial aid guidance",
                  "Visa and documentation support",
                  "Pre-departure orientation programs",
                  "Post-admission support services"
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
                      🎓
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-50">Expert Counseling</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Personalized guidance from experienced counselors</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-2xl">
                      📚
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-50">Wide Program Selection</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Choose from hundreds of programs across disciplines</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-2xl">
                      💼
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-50">Career Support</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Comprehensive placement and career assistance</p>
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
              Ready to Find Your Perfect University?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Get personalized recommendations and expert guidance to make the right choice for your future.
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
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

