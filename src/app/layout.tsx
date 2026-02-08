import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ankyotissh.com"),
  title: {
    default: "Ankyotissh | Vedic Astrology, Numerology & Occult Science",
    template: "%s | Ankyotissh",
  },
  description:
    "Unlock the ancient wisdom of Vedic Astrology, Numerology, and Occult Science through modern digital learning. Courses, webinars, and resources by Acharya Prateek Bhola.",
  keywords: [
    "Vedic Astrology",
    "Jyotish Shastra",
    "Numerology",
    "Occult Science",
    "Astrology Courses",
    "Acharya Prateek Bhola",
    "Ankyotissh",
    "Horoscope",
    "Kundli",
    "Planetary Astrology",
    "Rahu Ketu",
    "Zodiac Signs",
  ],
  authors: [{ name: "Acharya Prateek Bhola" }],
  creator: "Ankyotissh",
  publisher: "Ankyotissh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.ankyotissh.com",
    siteName: "Ankyotissh",
    title: "Ankyotissh | Vedic Astrology, Numerology & Occult Science",
    description:
      "Unlock the ancient wisdom of Vedic Astrology, Numerology, and Occult Science through modern digital learning.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankyotissh | Vedic Astrology, Numerology & Occult Science",
    description:
      "Unlock the ancient wisdom of Vedic Astrology, Numerology, and Occult Science through modern digital learning.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
