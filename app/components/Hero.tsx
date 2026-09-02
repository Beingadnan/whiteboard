"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sora, Manrope } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Generated Campus Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-campus-bg.jpg"
          alt="Modern Campus Background"
          className="w-full h-full object-cover object-center opacity-30 dark:opacity-20 filter scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/85 to-white dark:from-slate-950/90 dark:via-slate-900/90 dark:to-slate-950"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Trusted by 10,000+ Students</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className={`${sora.className} text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.2] tracking-tight text-slate-900 dark:text-slate-50`}>
                Your Dream{" "}
                <span className="bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                  University Awaits
                </span>
                <span className="block mt-1 font-bold text-2xl sm:text-3xl md:text-4xl text-slate-800 dark:text-slate-200">
                  Start Your Journey Today
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                Get expert guidance to secure admission in top UGC-approved universities. Personalized counseling, transparent fees, and dedicated placement assistance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <a
                href="https://wa.me/919335512881"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 text-base"
              >
                <span>Get Free Consultation</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <Link
                href="/universities"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-50 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-[#0f4c75] dark:hover:border-[#1e7aa8] transition-all duration-300 shadow-sm hover:shadow-md text-base"
              >
                Explore Universities
              </Link>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  2022
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Established</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  10K+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Students Helped</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Universities</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#0f4c75] to-[#dc2626] bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {/* Main Card */}
            <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200/80 dark:border-slate-800">
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#0f4c75] to-[#1e7aa8] text-white rounded-2xl p-3 shadow-xl flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">UGC-DEB</div>
                  <div className="text-[10px] text-blue-100">Recognized</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-[#dc2626] to-[#ea580c] text-white rounded-2xl p-3 shadow-xl flex items-center gap-2">
                <span className="text-xl">⭐</span>
                <div className="text-left">
                  <div className="text-xs font-bold leading-tight">100% Online</div>
                  <div className="text-[10px] text-rose-100">Flexible Exams</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Admissions Open 2026-27</span>
                </div>
                <span className="text-[11px] font-semibold text-[#0f4c75] dark:text-[#38bdf8]">Top Programs</span>
              </div>

              {/* Course Cards with Unsplash images */}
              <div className="space-y-3">
                <Link href="/courses/mba-amity-university" className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-[#0f4c75]/50 transition-all group">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80"
                      alt="Online MBA"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-slate-900 dark:text-white truncate group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors">
                      Online MBA
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">2 Years • NAAC A+ Accredited</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">₹4,150/mo</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">0% EMI</div>
                  </div>
                </Link>

                <Link href="/courses/online-mca-amity-university" className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-[#0f4c75]/50 transition-all group">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=200&q=80"
                      alt="Online MCA"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-slate-900 dark:text-white truncate group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors">
                      Online MCA (AI & Cloud)
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">2 Years • High Placement</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">₹3,540/mo</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">0% EMI</div>
                  </div>
                </Link>

                <Link href="/courses/online-bba-amity-university" className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:border-[#0f4c75]/50 transition-all group">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80"
                      alt="Online BBA"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm text-slate-900 dark:text-white truncate group-hover:text-[#0f4c75] dark:group-hover:text-[#38bdf8] transition-colors">
                      Online BBA
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">3 Years • Business Strategy</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">₹2,300/mo</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">0% EMI</div>
                  </div>
                </Link>
              </div>

              {/* CTA at bottom */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <Link
                  href="/courses"
                  className="block w-full text-center py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl hover:shadow-lg hover:opacity-95 transition-all"
                >
                  Explore All 50+ Degrees →
                </Link>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-400/20 to-rose-400/20 rounded-3xl blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

