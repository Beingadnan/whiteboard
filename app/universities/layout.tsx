import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Universities - Amity, MUJ, SMU, GLA, Uttaranchal, MIT, Mangalayatan | White Board Education",
  description: "Explore top universities like Amity University, Manipal University Jaipur (MUJ), Sikkim Manipal University (SMU), GLA University, Uttaranchal University, MIT University, Mangalayatan University. Get admission guidance, course details, and placement information. UGC approved programs.",
  keywords: [
    "Amity University",
    "Manipal University Jaipur",
    "MUJ",
    "Sikkim Manipal University",
    "SMU",
    "GLA University",
    "Uttaranchal University",
    "UU",
    "MIT University",
    "Mangalayatan University",
    "university admission",
    "top universities India",
    "best private universities",
    "private universities India",
    "university courses",
    "admission guidance",
    "university admission help",
    "online university admission",
    "top ranked universities",
    "UGC approved universities",
    "university admission process",
    "university admission 2024",
    "university admission 2025"
  ],
  openGraph: {
    title: "Top Universities - Amity, MUJ, SMU, GLA, Uttaranchal | White Board Education",
    description: "Explore top universities like Amity, MUJ, SMU, GLA, Uttaranchal, MIT, Mangalayatan. Get admission guidance and course details.",
    url: "/universities",
  },
  alternates: {
    canonical: "/universities",
  },
};

export default function UniversitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

