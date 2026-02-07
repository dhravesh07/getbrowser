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

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Star field background */}
      <div className="absolute inset-0 star-field opacity-40" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(245,166,35,0.04)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(124,58,237,0.05)_0%,transparent_50%)]" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Decorative profile card */}
          <ScrollReveal animation="slideLeft">
            <motion.div style={{ y: imageY }} className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-astro-gold/15 via-cosmic-700/10 to-transparent rounded-3xl blur-3xl" />

                {/* Main card with astro-card styling and gold border */}
                <div className="relative h-full astro-card gold-border rounded-3xl p-8 flex flex-col justify-between overflow-hidden">
                  {/* Star field inside card */}
                  <div className="absolute inset-0 star-field opacity-20" />

                  {/* Rotating zodiac orbit rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none">
                    <motion.svg
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      viewBox="0 0 300 300"
                      className="w-full h-full"
                    >
                      <circle
                        cx="150"
                        cy="150"
                        r="140"
                        fill="none"
                        stroke="rgba(245,166,35,0.15)"
                        strokeWidth="1"
                        strokeDasharray="8 6"
                      />
                      {/* Zodiac marker dots on outer ring */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30 * Math.PI) / 180;
                        const x = 150 + 140 * Math.cos(angle);
                        const y = 150 + 140 * Math.sin(angle);
                        return (
                          <circle
                            key={`outer-${i}`}
                            cx={x}
                            cy={y}
                            r="2.5"
                            fill={i % 3 === 0 ? "rgba(255,215,0,0.7)" : "rgba(245,166,35,0.4)"}
                          />
                        );
                      })}
                    </motion.svg>
                  </div>

                  {/* Second orbit ring - counter-rotating */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none">
                    <motion.svg
                      animate={{ rotate: -360 }}
                      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                      viewBox="0 0 200 200"
                      className="w-full h-full"
                    >
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="rgba(255,215,0,0.1)"
                        strokeWidth="1"
                      />
                      {/* Inner ring markers */}
                      {[...Array(8)].map((_, i) => {
                        const angle = (i * 45 * Math.PI) / 180;
                        const x = 100 + 90 * Math.cos(angle);
                        const y = 100 + 90 * Math.sin(angle);
                        return (
                          <circle
                            key={`inner-${i}`}
                            cx={x}
                            cy={y}
                            r="1.5"
                            fill="rgba(245,166,35,0.5)"
                          />
                        );
                      })}
                    </motion.svg>
                  </div>

                  {/* Third innermost orbit ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 pointer-events-none">
                    <motion.svg
                      animate={{ rotate: 360 }}
                      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                      viewBox="0 0 120 120"
                      className="w-full h-full"
                    >
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="rgba(255,215,0,0.08)"
                        strokeWidth="0.8"
                        strokeDasharray="4 4"
                      />
                    </motion.svg>
                  </div>

                  {/* Center content */}
                  <div className="relative z-10 text-center flex-1 flex flex-col items-center justify-center">
                    {/* Gold avatar */}
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-astro-gold via-astro-sun to-astro-amber flex items-center justify-center mb-6 animate-glow-gold shadow-lg shadow-astro-gold/20">
                      <span className="text-3xl font-bold text-sky-deep">A</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Acharya{" "}
                      <span className="gold-text">Prateek Bhola</span>
                    </h3>
                    <p className="text-sm text-cosmic-200/60">
                      Vedic Astrology Expert
                    </p>
                  </div>

                  {/* Bottom stats */}
                  <div className="relative z-10 grid grid-cols-3 gap-3 mt-6">
                    {[
                      { label: "Courses", icon: "\u2727" },
                      { label: "Webinars", icon: "\u2726" },
                      { label: "Articles", icon: "\u2729" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="text-center p-3 rounded-xl bg-astro-gold/5 border border-astro-gold/10"
                      >
                        <div className="text-lg mb-1 text-astro-gold">{item.icon}</div>
                        <div className="text-[10px] text-cosmic-200/50">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Right: Content side */}
          <motion.div style={{ y: contentY }}>
            <ScrollReveal animation="slideRight">
              <span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-4 block">
                About the Guru
              </span>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Guided by{" "}
                <span className="gold-text">Ancient Knowledge</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={2}>
              <p className="text-cosmic-200/50 leading-relaxed mb-6">
                Acharya Prateek Bhola is a dedicated Vedic Astrology practitioner
                and educator, bringing the profound wisdom of Jyotish Shastra to
                modern learners. Through courses, webinars, and insightful
                articles, he makes complex astrological concepts accessible and
                practical for seekers at every level.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={3}>
              <p className="text-cosmic-200/50 leading-relaxed mb-8">
                His expertise spans Vedic Astrology, Planetary Science,
                Numerology, and Occult Science, offering a holistic approach to
                understanding cosmic influences on human life. Under his guidance,
                students discover the celestial patterns that shape destiny.
              </p>
            </ScrollReveal>

            {/* Cosmic divider */}
            <ScrollReveal animation="slideRight" delay={3}>
              <div className="cosmic-divider mb-8" />
            </ScrollReveal>

            {/* Expertise tags */}
            <ScrollReveal animation="slideRight" delay={4}>
              <div className="flex flex-wrap gap-2 mb-8">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-4 py-2 rounded-full bg-astro-gold/5 border border-astro-gold/15 text-astro-gold/80 transition-colors duration-300 hover:bg-astro-gold/10 hover:border-astro-gold/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slideRight" delay={5}>
              <MagneticButton>
                <Link href="/about" className="btn-primary">
                  <span>Learn More</span>
                </Link>
              </MagneticButton>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
