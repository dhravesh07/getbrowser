"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const productTypes = [
  {
    title: "Charts & Templates",
    description: "Downloadable birth chart templates, planetary position charts, and calculation worksheets.",
    icon: "📊",
  },
  {
    title: "Study Guides",
    description: "Comprehensive reference guides covering Vedic Astrology fundamentals and advanced topics.",
    icon: "📖",
  },
  {
    title: "Calculation Tools",
    description: "Tools and resources for planetary calculations, dasha periods, and transit analysis.",
    icon: "🧮",
  },
  {
    title: "Reference Materials",
    description: "Quick reference cards, glossaries, and visual aids for astrological study.",
    icon: "📋",
  },
];

export default function ProductsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[120px]" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <TextReveal>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
              Resources
            </span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">
              Digital <span className="gradient-text">Products</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="max-w-lg mx-auto text-white/40 leading-relaxed">
              Premium downloadable resources, charts, guides, and tools for your
              astrological practice and learning journey.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Product types */}
      <section className="section-padding !pt-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
            {productTypes.map((product, i) => (
              <ScrollReveal key={product.title} animation="fadeUp" delay={i}>
                <div className="glass-card-hover p-6 h-full">
                  <div className="text-3xl mb-4">{product.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="glass-card rounded-3xl p-10 md:p-12 text-center max-w-2xl mx-auto gradient-border"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                </svg>
              </div>

              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                Products Coming Soon
              </h2>
              <p className="text-white/40 leading-relaxed mb-8">
                We are preparing premium digital resources for astrology
                enthusiasts. Stay connected for updates.
              </p>

              <MagneticButton>
                <Link href="/blog" className="btn-primary text-sm">
                  <span>Read the Blog</span>
                </Link>
              </MagneticButton>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
