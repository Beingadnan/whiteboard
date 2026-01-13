"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'vision' | 'mission' | 'milestones'>('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: "2022",
      stakeholders: "Started with 1 Stakeholder",
      offices: "1 Office - Noida",
      courses: "5+ Courses",
      students: "100+ Students"
    },
    {
      year: "2023",
      stakeholders: "50+ Stakeholders",
      offices: "2 Offices - Noida/Delhi",
      courses: "15+ Specialised Courses",
      students: "1000+ Students"
    },
    {
      year: "2024",
      stakeholders: "100+ Stakeholders",
      offices: "3 Offices - Noida/Delhi/Mumbai",
      courses: "30+ Specialised Courses",
      students: "5000+ Students"
    },
    {
      year: "2025",
      stakeholders: "150+ Stakeholders",
      offices: "4 Offices - Noida/Delhi/Mumbai/Bangalore",
      courses: "50+ Specialised Courses",
      students: "10000+ Students"
    }
  ];

  const teamMembers = [
    {
      name: "Leadership Team",
      role: "Management",
      description: "Our experienced leadership team drives our vision forward"
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Courses"
    },
    {
      number: "10000+",
      label: "Students"
    },
    {
      number: "7",
      label: "Partner Universities"
    },
    {
      number: "3+",
      label: "Years of Excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-32 md:py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#0f4c75]/15 to-[#dc2626]/15 rounded-full blur-[100px] -top-[200px] -right-[200px] animate-pulse"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
              We build bridges
              <span className="block bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent mt-2">
                between colleges
              </span>
              <span className="block bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
                and students
              </span>
            </h1>
            <p className="text-xl md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
              We are White Board Education, the e-learning platform. Our expertise is in meeting higher educational and career development training needs of students and working professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-8 text-center">
                Together we are strong
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  As an adept team that is passionate about bridging the gap between enthusiastic learners and world-class trainers and between diverse learning needs and excellent educational platforms; we are relentlessly driven to curate a diverse range of value-for-money, interesting and enriching learning experiences for our ever-growing global family of learners.
                </p>
                <p>
                  We are at the forefront of offering industry-relevant programs, in-demand courses and pioneering academic solutions, which effectively cater to a wide gamut of learning and training requirements and pave the way for rewarding careers. White Board Education not only excels at identifying your training and educational needs for your career growth and self-development, but also provides outstanding guidance to help you choose study programs that are aligned with your career goals.
                </p>
                <p>
                  With a successful track record of equipping young minds with the knowledge and the requisite skills needed to succeed in today's dynamic and highly competitive world, the creative minds at White Board Education are resolutely focused on revolutionizing the Indian education sector and grooming learners for professional success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Tabs */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'vision'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Vision
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'mission'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Mission
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'milestones'
                  ? 'bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Miles Achieved
            </button>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'overview' && (
              <div className={`bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-6">
                  About White Board Education
                </h3>
                <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p>
                    Welcome to White Board Education, your trusted partner in educational consultancy. We are passionate about revolutionizing education and empowering learners of all ages. With a deep understanding of the ever-evolving educational landscape, we strive to provide innovative solutions and personalized guidance to help you thrive in a digital and globalized world.
                  </p>
                  <p>
                    At White Board Education, we believe that education is a lifelong journey, and we are committed to making that journey as enriching and fulfilling as possible. Our team of experienced consultants brings a diverse range of expertise, spanning education, technology, curriculum development, and pedagogy.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className={`bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-6">
                  Empowering learners to make informed career choices.
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our vision is to revolutionize education by providing innovative, accessible, and technology-driven learning solutions that empower individuals and organizations to achieve their full potential in a digital and globalized world. We aim to be the leading platform that bridges the gap between students and top universities, making quality education accessible to everyone.
                </p>
              </div>
            )}

            {activeTab === 'mission' && (
              <div className={`bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-6">
                  We come with the mission of being a strong support pillar for each individual to elevate their learning curve and add value to the nation's development.
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our mission is to provide innovative, accessible, and technology-driven learning solutions, empowering individuals and organizations to achieve their full potential in an ever-evolving, digital and globalized world. We are committed to offering industry-relevant programs, in-demand courses, and pioneering academic solutions that pave the way for rewarding careers.
                </p>
              </div>
            )}

            {activeTab === 'milestones' && (
              <div className={`space-y-6 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0f4c75] to-[#dc2626] flex items-center justify-center text-white font-bold text-xl">
                          {milestone.year}
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400 mb-1">{milestone.stakeholders}</div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">{milestone.offices}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="px-4 py-2 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 rounded-lg text-[#0f4c75] dark:text-[#1e7aa8] font-semibold">
                          {milestone.courses}
                        </div>
                        <div className="px-4 py-2 bg-[#dc2626]/10 dark:bg-[#ea580c]/10 rounded-lg text-[#dc2626] dark:text-[#ea580c] font-semibold">
                          {milestone.students}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              Meet Our Amazing Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our passionate team is dedicated to helping students achieve their educational goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Leadership Team", role: "Management", icon: "👔" },
              { name: "Counseling Team", role: "Student Support", icon: "🎓" },
              { name: "Technical Team", role: "Platform Development", icon: "💻" },
              { name: "Sales Team", role: "Partnership & Growth", icon: "📈" },
              { name: "Operations Team", role: "Administration", icon: "⚙️" },
              { name: "Marketing Team", role: "Brand & Communication", icon: "📢" }
            ].map((member, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4 text-center">{member.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 text-center">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center font-semibold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-24 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`bg-gradient-to-br from-[#0f4c75]/10 to-[#dc2626]/10 dark:from-[#1e7aa8]/10 dark:to-[#ea580c]/10 rounded-3xl p-8 md:p-10 border border-[#0f4c75]/20 dark:border-[#1e7aa8]/20 text-center transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-50 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              We believe it takes great people to make a great product. That's why we hire not only the professional fits, but people who embody our company values. We are always looking for passionate individuals to join our mission of transforming education.
            </p>
            <Link
              href="/collaborate"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-4">
              Have a question?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-2">
              Our team is happy to assist you
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Ask about colleges, courses, careers, or anything else. Our highly trained reps are standing by, ready to help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="tel:+918112592546"
              className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-[#0f4c75] dark:text-[#1e7aa8] font-semibold rounded-xl border-2 border-[#0f4c75]/20 dark:border-[#1e7aa8]/30 hover:bg-[#0f4c75]/10 dark:hover:bg-[#1e7aa8]/10 transition-all duration-300"
            >
              Call: +91 7275131439
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
