import type { Metadata } from "next";
import ClientLayout from "@/components/layout/ClientLayout";
import ProductsContent from "./ProductsContent";

export const metadata: Metadata = {
  title: "Digital Products - Astrology Resources & Tools",
  description:
    "Access premium digital products including downloadable charts, guides, and tools for your astrological practice. Resources by Acharya Prateek Bhola.",
  openGraph: {
    title: "Digital Products | Ankyotissh",
    description:
      "Access premium digital products including downloadable charts, guides, and tools.",
  },
};

export default function ProductsPage() {
  return (
    <ClientLayout>
      <ProductsContent />
    </ClientLayout>
  );
}
