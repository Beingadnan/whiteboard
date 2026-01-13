import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Career Counseling - Expert Guidance for Your Future | White Board Education",
  description: "Get free career counseling from expert counselors. Personalized guidance for choosing the right course and university. Book your free session today. Call us for immediate assistance.",
  keywords: [
    "free career counseling",
    "career guidance",
    "career counselor",
    "career advice",
    "education counseling",
    "course selection",
    "career planning"
  ],
  openGraph: {
    title: "Free Career Counseling - Expert Guidance | White Board Education",
    description: "Get free career counseling from expert counselors. Personalized guidance for your future.",
    url: "/career-counselling",
  },
  alternates: {
    canonical: "/career-counselling",
  },
};

export default function CareerCounsellingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

