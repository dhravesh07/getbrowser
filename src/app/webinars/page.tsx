import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
import WebinarsContent from "./WebinarsContent";

export const metadata: Metadata = {
  title: "Webinars - Live Astrology Sessions",
  description:
    "Join live interactive webinars on Vedic Astrology, Numerology, and Planetary Science. Get real-time insights and ask questions to Acharya Prateek Bhola.",
  openGraph: {
    title: "Webinars | Ankyotissh",
    description:
      "Join live interactive webinars on Vedic Astrology, Numerology, and Planetary Science.",
  },
};

export default function WebinarsPage() {
  return (
    <ClientLayout>
      <WebinarsContent />
    </ClientLayout>
  );
}
