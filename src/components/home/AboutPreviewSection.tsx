"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const expertise = [
  "Vedic Astrology (Jyotish Shastra)",
  "Planetary Science (Grah Vigyaan)",
  "Numerology",
  "Occult Science",
  "Horoscope & Kundli Analysis",
];

export default function AboutPreviewSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const letterFloat = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-void"
    >
      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* -------------------------------------------------- */}
          {/* LEFT PANEL — typographic portrait, ~40% on desktop  */}
          {/* -------------------------------------------------- */}
          <ScrollReveal animation="slideLeft" className="lg:col-span-5">
            <motion.div style={{ y: panelY }}>
              {/* On mobile: a short horizontal band. On desktop: a tall narrow column */}
              <div className="relative bg-void-surface rounded-sm overflow-hidden h-48 lg:h-[540px]">
                {/* Faint texture line running vertically, editorial detail */}
                <div className="absolute right-0 top-0 w-px h-full bg-copper/10 hidden lg:block" />
                <div className="absolute left-6 top-6 bottom-6 w-px bg-copper/[0.06] hidden lg:block" />

                {/* The oversized letter "A" */}
                <motion.div
                  style={{ y: letterFloat }}
                  className="absolute -top-4 lg:-top-6 -left-3 lg:left-4 select-none pointer-events-none"
                >
                  <span
                    className="font-serif font-bold text-saffron/[0.14] leading-none block"
                    style={{ fontSize: "clamp(140px, 18vw, 260px)" }}
                  >
                    A
                  </span>
                </motion.div>

                {/* Second decorative letter, offset, even fainter */}
                <div className="absolute bottom-8 right-6 select-none pointer-events-none hidden lg:block">
                  <span className="font-serif text-copper/[0.06] text-8xl leading-none">
                    P
                  </span>
                </div>

                {/* Name text — vertical on desktop, horizontal on mobile */}
                <div className="absolute bottom-6 left-8 lg:bottom-10 lg:left-10 z-10">
                  <div className="lg:flex lg:flex-col gap-1">
                    <span className="text-parchment-muted font-sans text-[11px] tracking-[0.2em] uppercase block">
                      Acharya
                    </span>
                    <span className="text-parchment font-serif text-xl lg:text-2xl tracking-wide block mt-0.5">
                      Prateek Bhola
                    </span>
                  </div>
                  <div className="accent-line mt-4" />
                </div>

                {/* Small descriptor in top-right corner */}
                <div className="absolute top-5 right-6 z-10 hidden lg:block">
                  <span className="text-parchment-faint font-sans text-[10px] tracking-[0.15em] uppercase">
                    Vedic Astrology Expert
                  </span>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* -------------------------------------------------- */}
          {/* RIGHT SIDE — editorial content, ~60% on desktop     */}
          {/* -------------------------------------------------- */}
          <motion.div
            style={{ y: contentY }}
            className="lg:col-span-7 lg:pt-6"
          >
            <ScrollReveal animation="fadeUp">
              <span className="tag mb-5 block">About the Guru</span>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-parchment leading-tight mb-7 max-w-lg">
                Guided by{" "}
                <span className="gradient-text">Ancient Wisdom</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={2}>
              <p className="font-sans text-parchment-muted text-[15px] leading-[1.8] mb-5 max-w-lg">
                Acharya Prateek Bhola is a dedicated Vedic Astrology practitioner
                and educator, bringing the profound wisdom of Jyotish Shastra to
                modern learners through courses, webinars, and insightful
                articles.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={3}>
              <p className="font-sans text-parchment-muted text-[15px] leading-[1.8] mb-9 max-w-lg">
                His expertise spans Vedic Astrology, Planetary Science,
                Numerology, and Occult Science, offering a holistic approach to
                understanding cosmic influences on human life.
              </p>
            </ScrollReveal>

            {/* Thin accent-line divider */}
            <ScrollReveal animation="fadeUp" delay={3}>
              <div className="accent-line mb-9" />
            </ScrollReveal>

            {/* Expertise list — copper left-border sidebar style */}
            <ScrollReveal animation="fadeUp" delay={4}>
              <ul className="space-y-3 mb-10 max-w-md">
                {expertise.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-px h-5 bg-copper/50 group-hover:h-7 group-hover:bg-saffron transition-all duration-300 shrink-0" />
                    <span className="font-sans text-sm text-parchment-dim group-hover:text-parchment transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={5}>
              <MagneticButton>
                <Link href="/about" className="btn-secondary">
                  Learn More
                </Link>
              </MagneticButton>
            </ScrollReveal>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
