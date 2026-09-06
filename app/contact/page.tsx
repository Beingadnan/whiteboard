"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import StructuredData from "../components/StructuredData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    course: "Online MBA",
    subject: "Admission Inquiry",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Contact Page Direct Inquiry"
        })
      });

      const data = await response.json();

      if (data.success) {
        toast.success("🎉 Thank you! Your message has been received. Our counselor will call you in 15 mins.", { icon: false });
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          course: "Online MBA",
          subject: "Admission Inquiry",
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

  const contactCards = [
    {
      icon: "📞",
      title: "Call Our Advisors",
      line1: "+91 93355 12881",
      line2: "+91 81125 92546",
      actionText: "Call Now",
      actionHref: "tel:+919335512881"
    },
    {
      icon: "💬",
      title: "WhatsApp Chat",
      line1: "+91 93355 12881",
      line2: "Instant 24/7 Chat Support",
      actionText: "Start Chat →",
      actionHref: "https://wa.me/919335512881"
    },
    {
      icon: "📍",
      title: "Headquarters",
      line1: "12/279 Gandhi Nagar, Shukla Ganj",
      line2: "Unnao, Uttar Pradesh, India",
      actionText: "Get Directions",
      actionHref: "https://maps.google.com/?q=Unnao,Uttar+Pradesh"
    },
    {
      icon: "🕒",
      title: "Counseling Hours",
      line1: "Mon - Sat: 10:00 AM - 7:00 PM",
      line2: "Sunday: On-Demand Appointments",
      actionText: "Open Today",
      actionHref: "#form"
    }
  ];

  const contactFaqs = [
    {
      q: "How soon will I receive a call from an admission counselor?",
      a: "Our senior academic advisors usually call back within 15 minutes during active working hours (10:00 AM to 7:00 PM, Monday to Saturday)."
    },
    {
      q: "Can I get a detailed PDF brochure with semester-by-semester fees?",
      a: "Yes! Simply mention your preferred university and degree program in the form below, and we will send the complete curriculum, semester fee breakdown, and EMI options directly to your WhatsApp."
    },
    {
      q: "Are the consultation and admission services really 100% free?",
      a: "Yes, 100%. We are authorized admission partners with the universities. We do not charge students any counseling or processing fees."
    }
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SuccessMentorix",
    "url": "https://successmentorix.com/contact",
    "description": "Contact SuccessMentorix for free university counseling and online degree admission guidance."
  };

  return (
    <>
      <StructuredData data={contactSchema} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#0f4c75] selection:text-white">
        {/* Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200/80 dark:border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-r from-blue-400/15 via-indigo-400/10 to-rose-400/15 blur-3xl pointer-events-none -z-10"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/90 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-xs sm:text-sm font-semibold text-[#0f4c75] dark:text-[#38bdf8] mb-6 shadow-sm">
              💬 Fast 15-Min Response Time
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18] mb-4">
              We’re Here to Help You{" "}
              <span className="bg-gradient-to-r from-[#0f4c75] via-[#1e7aa8] to-[#dc2626] bg-clip-text text-transparent">
                Take the Next Big Step
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Have questions about eligibility, university accreditations, or semester fee installments? Reach out to our dedicated counseling desk.
            </p>
          </div>
        </section>

        {/* 4 Contact Channels */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-2xl mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {card.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {card.line1}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {card.line2}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                  <a
                    href={card.actionHref}
                    target={card.actionHref.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0f4c75] dark:text-[#38bdf8] hover:underline inline-flex items-center gap-1"
                  >
                    <span>{card.actionText}</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form & Side Context */}
        <section id="form" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Context Side */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f4c75] dark:text-[#38bdf8]">
                Direct Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                Send Us a Message & Get Instant University Guidance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Whether you need comparison advice between Amity and Manipal, need 0% EMI financing verification, or have questions regarding UGC validity, our team is at your service.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>100% Free Counseling:</strong> Zero service charges for students.
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>Guaranteed Callback:</strong> Within 15 minutes during working hours.
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <div className="text-xs text-slate-700 dark:text-slate-300">
                    <strong>Direct Admission:</strong> Hassle-free documentation assistance.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Schedule a Free Counseling Callback
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
                Fill in your details below and an academic counselor will connect with you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Adnan Khan"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 Mobile Number"
                      required
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@email.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Reason
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    >
                      <option value="Admission Inquiry">Admission Inquiry</option>
                      <option value="Fee & 0% EMI Verification">Fee & 0% EMI Verification</option>
                      <option value="University Comparison">University Comparison</option>
                      <option value="Scholarship Guidance">Scholarship Guidance</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Interested Degree Program
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    >
                      <option value="Online MBA">Online MBA</option>
                      <option value="Online MCA">Online MCA</option>
                      <option value="Online BBA">Online BBA</option>
                      <option value="Online BCA">Online BCA</option>
                      <option value="Online B.Com / M.Com">Commerce (B.Com / M.Com)</option>
                      <option value="Online BA / MA">Arts (BA / MA)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Preferred University
                    </label>
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                    >
                      <option value="">Any / Best Recommended</option>
                      <option value="Amity University Online">Amity University Online</option>
                      <option value="Manipal University Jaipur">Manipal University Jaipur</option>
                      <option value="Sikkim Manipal University">Sikkim Manipal University</option>
                      <option value="Uttaranchal University">Uttaranchal University</option>
                      <option value="MIT University">MIT University</option>
                      <option value="Mangalayatan University">Mangalayatan University</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Questions / Note (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your background, budget, or preferred specialization..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0f4c75]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-gradient-to-r from-[#0f4c75] to-[#dc2626] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg hover:opacity-95 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry for Free Counseling →"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Common questions answered regarding admissions and counseling
            </p>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 pr-4">
                    {faq.q}
                  </span>
                  <span className={`text-base font-bold text-[#0f4c75] dark:text-[#38bdf8] transition-transform duration-200 ${openFAQ === index ? "rotate-180" : ""}`}>
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
