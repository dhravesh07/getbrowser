import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
import BlogListContent from "./BlogListContent";

export const metadata: Metadata = {
  title: "Blog - Vedic Astrology Articles & Insights",
  description:
    "Read in-depth articles on Vedic Astrology, Planetary Science, Numerology, and Occult Science by Acharya Prateek Bhola. Explore the wisdom of Jyotish Shastra.",
  openGraph: {
    title: "Blog | Ankyotissh",
    description:
      "Read in-depth articles on Vedic Astrology, Planetary Science, Numerology, and Occult Science.",
  },
};

export default function BlogPage() {
  return (
    <ClientLayout>
      <BlogListContent />
    </ClientLayout>
  );
}
