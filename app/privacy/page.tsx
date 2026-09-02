import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SuccessMentorix",
  description: "SuccessMentorix Privacy Policy – Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-[#1e7aa8]/15 to-[#ea580c]/15 rounded-full blur-[100px] -top-[150px] -right-[150px] animate-pulse" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-6 py-2.5 mb-6 bg-[#0f4c75]/10 dark:bg-[#1e7aa8]/10 border border-[#0f4c75]/20 dark:border-[#1e7aa8]/20 rounded-full text-sm font-semibold text-[#0f4c75] dark:text-[#1e7aa8]">
            Legal
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-slate-50 mb-6">
            Privacy{" "}
            <span className="bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 space-y-8">

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">1. Information We Collect</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              We collect information you provide directly to us when you fill out forms on our website, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Full name and contact details (email address, phone number)</li>
              <li>Academic and professional background</li>
              <li>Course and university preferences</li>
              <li>Any messages or queries you send us</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Provide personalized education counselling and course recommendations</li>
              <li>Process admission-related enquiries and applications</li>
              <li>Communicate updates about courses, universities, and offers</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">3. Information Sharing</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with our partner universities solely for facilitating your admission, and only with your consent. We may also disclose information when required by law.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">4. Data Security</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">5. Cookies</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our website uses cookies to enhance your browsing experience. You can control cookies through your browser settings. Disabling cookies may affect certain features of our website.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">6. Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Access and review your personal information we hold</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@successmentorix.com" className="text-[#0f4c75] dark:text-[#1e7aa8] hover:underline font-medium">
                info@successmentorix.com
              </a>
              {" "}or visit our{" "}
              <Link href="/contact" className="text-[#0f4c75] dark:text-[#1e7aa8] hover:underline font-medium">
                Contact page
              </Link>.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
