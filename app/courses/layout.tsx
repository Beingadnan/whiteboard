import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Courses - MBA, MCA, BBA | UGC Approved Programs",
  description: "Explore online courses: Online MBA, MCA, BBA, BCA, M.Com, B.Com, BA, MA. UGC-entitled degree programs with live/recorded lectures. EMI options available. Get admission in top universities.",
  keywords: [
    "Online MBA",
    "Online MCA",
    "Online BBA",
    "Online BCA",
    "Online M.Com",
    "Online B.Com",
    "Online BA",
    "Online MA",
    "UGC approved courses",
    "UGC entitled programs",
    "online degree programs",
    "distance education",
    "online learning",
    "online MBA India",
    "online MCA India",
    "online BBA India",
    "best online courses",
    "UGC approved online degree",
    "online education India",
    "distance learning India",
    "online degree admission",
    "online course admission",
    "UGC recognized courses",
    "online degree programs India",
    "top online courses",
    "online education platform"
  ],
  openGraph: {
    title: "Online Courses - MBA, MCA, BBA | White Board Education",
    description: "Explore UGC-approved online courses: MBA, MCA, BBA. Live/recorded lectures with EMI options.",
    url: "/courses",
  },
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

