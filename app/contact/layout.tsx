import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | White Board Education",
  description: "Contact White Board Education for admission queries, course information, and career counseling. Call us, email us, or fill out the contact form. We're here to help you achieve your educational goals.",
  keywords: [
    "contact white board education",
    "education consultant contact",
    "admission help contact",
    "career counseling contact"
  ],
  openGraph: {
    title: "Contact Us - White Board Education",
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

