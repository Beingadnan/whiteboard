import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://successmentorix.com'),
  icons: {
    icon: [{ url: "/SMLogo.png", type: "image/png" }],
    apple: "/SMLogo.png",
    shortcut: "/SMLogo.png",
  },
  title: {
    default: "Successmentorix - Top Universities & Online Courses | Amity, MUJ, SMU, Uttaranchal",
    template: "%s | Successmentorix"
  },
  description: "Get admission in top universities like Amity University, Manipal University Jaipur (MUJ), Sikkim Manipal University (SMU), Uttaranchal University, MIT University, Mangalayatan University. Online MBA, MCA, BBA courses with UGC approval. Free career counseling & admission guidance.",
  keywords: [
    "Amity University admission",
    "Manipal University Jaipur admission",
    "Sikkim Manipal University admission",
    "university admission",
    "Uttaranchal University admission",
    "MIT University admission",
    "Mangalayatan University admission",
    "online MBA India",
    "online MCA",
    "online BBA",
    "online BCA",
    "UGC approved courses",
    "UGC entitled programs",
    "education counseling",
    "career counseling",
    "university admission",
    "online degree programs",
    "distance education",
    "online learning",
    "Amity University courses",
    "MUJ courses",
    "SMU courses",
    "online university courses",
    "Uttaranchal University courses",
    "education consultant",
    "admission guidance",
    "online education India",
    "best online universities",
    "top private universities India",
    "online degree India",
    "UGC approved online courses",
    "distance learning programs",
    "online MBA admission",
    "career guidance",
    "education advisor"
  ],
  authors: [{ name: "Successmentorix" }],
  creator: "Successmentorix",
  publisher: "Successmentorix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'Successmentorix',
    title: 'Successmentorix - Top Universities & Online Courses',
    description: 'Get admission in top universities like Amity, MUJ, SMU, Uttaranchal. Online MBA, MCA, BBA courses with UGC approval. Free career counseling.',
    images: [
      {
        url: '/SMLogo.png',
        width: 1200,
        height: 630,
        alt: 'Successmentorix',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Successmentorix - Top Universities & Online Courses',
    description: 'Get admission in top universities like Amity, MUJ, SMU, Uttaranchal. Online MBA, MCA, BBA courses with UGC approval.',
    images: ['/SMLogo.png'],
  },
  alternates: {
    canonical: '/',
  },
  category: 'Education',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
