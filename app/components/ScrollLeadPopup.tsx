"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";

export default function ScrollLeadPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Online MBA",
    university: "Amity University Online"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimerActiveRef = useRef(false);

  // Check if user has already submitted the form previously
  useEffect(() => {
    try {
      const submitted = localStorage.getItem("mentorix_lead_submitted");
      if (submitted === "true") {
        setIsSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const openPopup = useCallback(() => {
    setIsOpen(true);
    isTimerActiveRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start3MinTimer = useCallback(() => {
    if (isSubmitted || isOpen || isTimerActiveRef.current) return;

    isTimerActiveRef.current = true;
    timerRef.current = setTimeout(() => {
      openPopup();
    }, 180000); // 3 minutes (180,000 ms)
  }, [isSubmitted, isOpen, openPopup]);

  // Start timer on component mount and handle scroll/activity
  useEffect(() => {
    if (isSubmitted) return;

    // Start 3-minute timer on page load
    start3MinTimer();

    const handleScroll = () => {
      if (!isOpen && !isTimerActiveRef.current && !isSubmitted) {
        start3MinTimer();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isSubmitted, isOpen, start3MinTimer]);

  const handleClose = () => {
    setIsOpen(false);
    isTimerActiveRef.current = false;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    // Re-arm timer for 3 minutes after user dismisses
    start3MinTimer();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error("Please enter your name and phone number.", { icon: false });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-student-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || "popup-user@mentorix.com",
          course: formData.course,
          university: formData.university,
          source: "Auto 3-Min Lead Popup"
        })
      });

      const data = await response.json();
      if (data.success) {
        try {
          localStorage.setItem("mentorix_lead_submitted", "true");
        } catch {
          // ignore
        }
        setIsSubmitted(true);
        setIsOpen(false);
        toast.success("🎉 Request Received! A senior university counselor will call you in 15 mins.", { icon: false });
      } else {
        toast.error("❌ Something went wrong. Please try again.", { icon: false });
      }
    } catch {
      toast.error("❌ Submission failed. Please try again.", { icon: false });
    } finally {
      setIsSubmitting(false);
    }
  };

  // If already submitted or not open, don't render the modal
  if (isSubmitted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/65 backdrop-blur-md transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-lg my-auto max-h-[92vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 transform scale-100 scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Ambient */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-[#0f4c75]/15 to-[#dc2626]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

        {/* High-Contrast Accessible Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-200 dark:border-slate-700 shadow-sm z-20 group"
          aria-label="Close Popup"
        >
          <span className="text-sm sm:text-base font-bold group-hover:scale-110 transition-transform">✕</span>
        </button>

        {/* Header Content */}
        <div className="pr-8 mb-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100/90 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-[10px] sm:text-[11px] font-bold text-[#0f4c75] dark:text-[#38bdf8] mb-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Free 1-on-1 Admission Counseling
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
            Compare Top Universities & Fees
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Get personalized advice, 2026 fee structures & 0% No-Cost EMI assistance.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4 text-[10px] sm:text-[11px] font-semibold text-slate-700 dark:text-slate-300">
          <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50">
            ✓ 100% Free
          </span>
          <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[#0f4c75] dark:text-[#38bdf8] border border-blue-200/50 dark:border-blue-800/50">
            ✓ 0% Interest EMI
          </span>
          <span className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-400 border border-purple-200/50 dark:border-purple-800/50">
            ✓ 15-Min Callback
          </span>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Full Name <span className="text-[#dc2626]">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              required
              className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Phone Number <span className="text-[#dc2626]">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 Mobile Number"
                required
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Interested Course
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] text-slate-900 dark:text-white"
              >
                <option value="Online MBA">Online MBA</option>
                <option value="Online MCA">Online MCA</option>
                <option value="Online BBA">Online BBA</option>
                <option value="Online BCA">Online BCA</option>
                <option value="Online B.Com / M.Com">Commerce (B.Com / M.Com)</option>
                <option value="Online BA / MA">Humanities (BA / MA)</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Preferred University
              </label>
              <select
                name="university"
                value={formData.university}
                onChange={handleChange}
                className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75] text-slate-900 dark:text-white"
              >
                <option value="Amity University Online">Amity University Online</option>
                <option value="Manipal University Jaipur">Manipal University Jaipur</option>
                <option value="Sikkim Manipal University">Sikkim Manipal University</option>
                <option value="Uttaranchal University">Uttaranchal University</option>
                <option value="MIT University">MIT University</option>
                <option value="Mangalayatan University">Mangalayatan University</option>
                <option value="Any / Best Recommended">Any / Best Recommended</option>
              </select>
            </div>
          </div>

          <div className="pt-1.5">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-xl hover:opacity-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Submitting..." : "Get Free Expert Guidance Now →"}
            </button>
          </div>

          <p className="text-[10px] text-center text-slate-400 dark:text-slate-500 pt-0.5">
            🔒 100% Privacy Protected. No Spam Calls.
          </p>
        </form>
      </div>
    </div>
  );
}
