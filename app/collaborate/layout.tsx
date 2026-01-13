import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner With Us - Education Business Partnership | White Board Education",
  description: "Partner with White Board Education and grow your education business. Join our network of education partners. Earn commissions, get marketing support, and help students achieve their dreams.",
  keywords: [
    "education partnership",
    "education business partner",
    "education franchise",
    "education consultant partnership",
    "partner with education company"
  ],
  openGraph: {
    title: "Partner With Us - Education Business Partnership",
    description: "Join our network of education partners and grow your business.",
    url: "/collaborate",
  },
  alternates: {
    canonical: "/collaborate",
  },
};

export default function CollaborateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

