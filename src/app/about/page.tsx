import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About - Acharya Prateek Bhola",
  description:
    "Learn about Acharya Prateek Bhola, a dedicated Vedic Astrology practitioner and educator specializing in Jyotish Shastra, Numerology, and Occult Science.",
  openGraph: {
    title: "About Acharya Prateek Bhola | Ankyotissh",
    description:
      "Learn about Acharya Prateek Bhola, a dedicated Vedic Astrology practitioner and educator.",
  },
};

export default function AboutPage() {
  return (
    <ClientLayout>
      <AboutContent />
    </ClientLayout>
  );
}
