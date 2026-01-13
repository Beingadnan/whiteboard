import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - White Board Education | Education Counseling & Admission Guidance",
  description: "Learn about White Board Education - your trusted partner for education counseling and admission guidance. We help students get admission in top universities like Amity, NMIMS, Manipal with personalized support.",
  keywords: [
    "about white board education",
    "education counseling",
    "admission guidance",
    "education consultant",
    "university admission help"
  ],
  openGraph: {
    title: "About Us - White Board Education",
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

