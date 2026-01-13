"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/10 to-indigo-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Trusted by 10,000+ Students</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="block text-slate-900 dark:text-slate-50">Your Dream</span>
                <span className="block bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                  University Awaits
                </span>
                <span className="block text-slate-900 dark:text-slate-50">Start Your Journey Today</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                Get expert guidance to secure admission in top universities. We simplify your path to success with personalized counseling and transparent processes.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/917275131439"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span>Get Free Consultation</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/universities"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-[#0f4c75] dark:hover:border-[#1e7aa8] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Explore Universities
              </Link>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Students Helped</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Universities</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Main Card */}
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-200 dark:border-slate-700">
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#0f4c75] to-[#1e7aa8] rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="text-white">
                  <div className="text-2xl font-bold">🎓</div>
                  <div className="text-xs font-semibold mt-1">UGC Approved</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#dc2626] to-[#ea580c] rounded-2xl p-4 shadow-xl animate-pulse">
                <div className="text-white">
                  <div className="text-2xl font-bold">⭐</div>
                  <div className="text-xs font-semibold mt-1">Top Rated</div>
                </div>
              </div>

              {/* Course Cards */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0f4c75] to-[#1e7aa8] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    MBA
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-50">Online MBA</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">2 Years • UGC Approved</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">₹2.99L</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Starting</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-slate-700 dark:to-slate-600 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#dc2626] to-[#ea580c] rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    BBA
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-50">Online BBA</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">3 Years • UGC Approved</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">₹1.65L</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Starting</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    MCA
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-50">Online MCA</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">2 Years • UGC Approved</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">₹1.70L</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Starting</div>
                  </div>
                </div>
              </div>

              {/* CTA at bottom */}
              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                <Link
                  href="/courses"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  View All Courses →
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-3xl blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

