"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

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

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(49,122,231,0.06)_0%,transparent_50%)]" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual side */}
          <ScrollReveal animation="slideLeft">
            <motion.div style={{ y: imageY }} className="relative">
              {/* Decorative card */}
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-purple/10 to-transparent rounded-3xl blur-3xl" />

                {/* Main card */}
                <div className="relative h-full glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
                  {/* Decorative orbits */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full rounded-full border border-white/[0.05]"
                    />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-full h-full rounded-full border border-primary-500/10"
                    />
                  </div>

                  {/* Center content */}
                  <div className="relative z-10 text-center flex-1 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-purple to-accent-orange flex items-center justify-center mb-6 animate-glow">
                      <span className="text-3xl font-bold text-white">A</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Acharya Prateek Bhola
                    </h3>
                    <p className="text-sm text-white/40">
                      Vedic Astrology Expert
                    </p>
                  </div>

                  {/* Bottom stats */}
                  <div className="relative z-10 grid grid-cols-3 gap-3 mt-6">
                    {[
                      { label: "Courses", icon: "📚" },
                      { label: "Webinars", icon: "🎥" },
                      { label: "Articles", icon: "✍️" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                      >
                        <div className="text-lg mb-1">{item.icon}</div>
                        <div className="text-[10px] text-white/40">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Content side */}
          <motion.div style={{ y: contentY }}>
            <ScrollReveal animation="slideRight">
              <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
                About the Guru
              </span>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Guided by{" "}
                <span className="gradient-text">Ancient Knowledge</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={2}>
              <p className="text-white/40 leading-relaxed mb-6">
                Acharya Prateek Bhola is a dedicated Vedic Astrology practitioner
                and educator, bringing the profound wisdom of Jyotish Shastra to
                modern learners. Through courses, webinars, and insightful
                articles, he makes complex astrological concepts accessible and
                practical.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={3}>
              <p className="text-white/40 leading-relaxed mb-8">
                His expertise spans Vedic Astrology, Planetary Science,
                Numerology, and Occult Science, offering a holistic approach to
                understanding cosmic influences on human life.
              </p>
            </ScrollReveal>

            {/* Expertise tags */}
            <ScrollReveal animation="slideRight" delay={4}>
              <div className="flex flex-wrap gap-2 mb-8">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/50"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={5}>
              <Link href="/about" className="btn-primary">
                <span>Learn More</span>
              </Link>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
