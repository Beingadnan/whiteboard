import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | SuccessMentorix",
  description: "SuccessMentorix Terms of Service – Read our terms and conditions before using our platform.",
};

export default function TermsOfService() {
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
            Terms of{" "}
            <span className="bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: September 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 space-y-8">

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              By accessing and using the SuccessMentorix website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">2. Services Description</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              SuccessMentorix provides education counselling, admission assistance, and related services including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>University and course recommendations</li>
              <li>Admission process guidance</li>
              <li>Career counselling services</li>
              <li>Documentation and application support</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">3. User Responsibilities</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Provide accurate and complete information when using our services</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not misrepresent your identity or qualifications</li>
              <li>Not engage in any activity that disrupts our services</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">4. Intellectual Property</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of SuccessMentorix and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">5. Disclaimer of Warranties</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our services are provided on an &quot;as is&quot; basis. SuccessMentorix makes no warranties, express or implied, regarding the accuracy, completeness, or suitability of information provided. Admission outcomes depend on individual eligibility and university criteria.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">6. Limitation of Liability</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              SuccessMentorix shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our liability is limited to the amount you paid for our services.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">7. Changes to Terms</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Continued use of our services constitutes acceptance of the revised terms.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">8. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              For questions about these Terms of Service, contact us at{" "}
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
