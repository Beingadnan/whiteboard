import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Successmentorix | Education Counseling & Admission Guidance",
  description: "Learn about Successmentorix - your trusted partner for education counseling and admission guidance. We help students get admission in top universities like Amity, Manipal, SMU with personalized support.",
  keywords: [
    "about successmentorix",
    "education counseling",
    "admission guidance",
    "education consultant",
    "university admission help"
  ],
  openGraph: {
    title: "About Us - Successmentorix",
    description: "Your trusted partner for education counseling and admission guidance in top universities.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

