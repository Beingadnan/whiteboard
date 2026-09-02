import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy | SuccessMentorix",
  description: "SuccessMentorix Refund Policy – Learn about our cancellation and refund process.",
};

export default function RefundPolicy() {
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
            Refund{" "}
            <span className="bg-gradient-to-r from-[#0f4c75] via-[#dc2626] to-[#ea580c] bg-clip-text text-transparent">
              Policy
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">1. Overview</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              At SuccessMentorix, we are committed to providing quality education counselling services. This Refund Policy outlines the terms and conditions under which refunds may be granted for our services and partner university fees.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">2. Counselling Service Fees</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Our counselling and consultation service fees are generally non-refundable once the service has been rendered. However, refunds may be considered in the following situations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Service not delivered due to reasons attributable to SuccessMentorix</li>
              <li>Duplicate payment made by the student</li>
              <li>Cancellation made within 24 hours of booking, before the session begins</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">3. University Admission Fees</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              Refund eligibility for university admission and course fees is determined by the respective university&apos;s own refund policy. General guidelines:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li><strong>Before enrollment confirmation:</strong> Full refund may be applicable</li>
              <li><strong>Within 15 days of enrollment:</strong> Partial refund (up to 50%) may be applicable</li>
              <li><strong>After 15 days of enrollment:</strong> No refund, as per university policy</li>
              <li>Registration and processing fees are non-refundable in all cases</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">4. How to Request a Refund</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              To initiate a refund request, please follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Contact us at <a href="mailto:info@successmentorix.com" className="text-[#0f4c75] dark:text-[#1e7aa8] hover:underline font-medium">info@successmentorix.com</a> with the subject line &quot;Refund Request&quot;</li>
              <li>Provide your full name, contact number, and enrollment/payment details</li>
              <li>Clearly state the reason for the refund request</li>
              <li>Attach relevant supporting documents (payment receipt, enrollment confirmation, etc.)</li>
            </ol>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">5. Refund Processing Time</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Once a refund request is approved, it will be processed within 7–10 business days. The refund will be credited to the original payment method. Processing time may vary depending on your bank or payment provider.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">6. Non-Refundable Items</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">The following are strictly non-refundable:</p>
            <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
              <li>Registration and application fees</li>
              <li>Documentation and processing charges</li>
              <li>Fees paid after the refund eligibility window</li>
              <li>Fees for services already fully rendered</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">7. Contact Us</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              For any questions about our Refund Policy, please contact us at{" "}
              <a href="mailto:info@successmentorix.com" className="text-[#0f4c75] dark:text-[#1e7aa8] hover:underline font-medium">
                info@successmentorix.com
              </a>
              {" "}or call us at{" "}
              <a href="tel:+919335512881" className="text-[#0f4c75] dark:text-[#1e7aa8] hover:underline font-medium">
                +91 93355 12881
              </a>. You can also visit our{" "}
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
