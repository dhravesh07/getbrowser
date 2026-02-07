import ClientLayout from "@/components/layout/ClientLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TopicsSection from "@/components/home/TopicsSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import BlogPreviewSection from "@/components/home/BlogPreviewSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <ClientLayout>
      <HeroSection />
      <ServicesSection />
      <TopicsSection />
      <AboutPreviewSection />
      <BlogPreviewSection />
      <CTASection />
    </ClientLayout>
  );
}
