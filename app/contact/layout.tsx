import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | Successmentorix",
  description: "Contact Successmentorix for admission queries, course information, and career counseling. Call us, email us, or fill out the contact form. We're here to help you achieve your educational goals.",
  keywords: [
    "contact successmentorix",
    "education consultant contact",
    "admission help contact",
    "career counseling contact"
  ],
  openGraph: {
    title: "Contact Us - Successmentorix",
    description: "Get in touch with us for admission queries and career counseling.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

