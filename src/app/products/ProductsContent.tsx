"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

const products = [
  {
    num: "01",
    title: "Vedic Astrology Beginner\u2019s Guide",
    description:
      "A comprehensive PDF guide covering the fundamentals of Vedic Astrology.",
    type: "Digital Download",
  },
  {
    num: "02",
    title: "Navagraha Reference Chart",
    description:
      "Quick-reference chart for all nine planetary significations, aspects, and remedies.",
    type: "Printable PDF",
  },
  {
    num: "03",
    title: "Kundli Analysis Workbook",
    description:
      "Practice workbook with example charts and step-by-step interpretation exercises.",
    type: "Digital Workbook",
  },
  {
    num: "04",
    title: "Mantra & Remedies Collection",
    description:
      "Curated collection of Vedic mantras and remedies for each planetary affliction.",
    type: "Digital Guide",
  },
];

export default function ProductsContent() {
  const listRef = useRef<HTMLDivElement>(null);
  const listInView = useInView(listRef, { once: true, amount: 0.15 });

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <span className="tag mb-5 block">Resources</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-parchment-light leading-[1.1] mb-6">
              Digital Products
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={2}>
            <div className="accent-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* Product List */}
      <section className="pb-24 md:pb-32">
        <div className="container-custom">
          <motion.div
            ref={listRef}
            variants={staggerContainer}
            initial="hidden"
            animate={listInView ? "visible" : "hidden"}
          >
            {products.map((product, i) => (
              <motion.div
                key={product.num}
                variants={staggerItem}
                className={`py-10 ${
                  i < products.length - 1
                    ? "border-b border-stone-faint/40"
                    : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10">
                  <span className="text-saffron font-sans text-sm tabular-nums w-6 shrink-0 pt-1">
                    {product.num}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6 mb-2">
                      <h3 className="text-xl sm:text-2xl text-parchment leading-tight">
                        {product.title}
                      </h3>
                      <span className="tag shrink-0">{product.type}</span>
                    </div>
                    <p className="text-parchment-muted text-sm font-sans leading-relaxed max-w-2xl">
                      {product.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom Note */}
      <section className="pb-32">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <div className="border-t border-stone-faint/40 pt-10">
              <p className="text-parchment-faint text-sm font-sans italic">
                More products coming soon.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
