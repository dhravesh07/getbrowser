import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "Courses - Learn Vedic Astrology Online",
  description:
    "Explore comprehensive courses on Vedic Astrology, Numerology, and Occult Science. Learn from structured modules with videos, PDFs, and interactive content by Acharya Prateek Bhola.",
  openGraph: {
    title: "Courses | Ankyotissh",
    description:
      "Explore comprehensive courses on Vedic Astrology, Numerology, and Occult Science.",
  },
};

export default function CoursesPage() {
  return (
    <ClientLayout>
      <CoursesContent />
    </ClientLayout>
  );
}
