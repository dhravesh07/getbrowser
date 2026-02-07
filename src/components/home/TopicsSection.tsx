"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

const topics = [
  {
    title: "Vedic Astrology",
    description: "The ancient Indian system of astrology rooted in the Vedas, offering deep insights into life patterns and cosmic influences.",
    icon: "🪐",
  },
  {
    title: "Jyotish Shastra",
    description: "The science of light -- understanding celestial bodies and their impact on human affairs through time-tested methodologies.",
    icon: "✨",
  },
  {
    title: "Planetary Science",
    description: "Deep study of Navagraha -- the nine celestial bodies including Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu.",
    icon: "🌍",
  },
  {
    title: "Numerology",
    description: "The mystical relationship between numbers and life events. Discover how numbers influence your destiny and decision-making.",
    icon: "🔢",
  },
  {
    title: "Occult Science",
    description: "Explore hidden knowledge systems and esoteric practices that complement astrological understanding.",
    icon: "🔮",
  },
  {
    title: "Horoscope & Kundli",
    description: "Birth chart analysis and interpretation. Learn to read and understand the cosmic blueprint of any individual.",
    icon: "📜",
  },
];

export default function TopicsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />

      {/* Animated horizontal line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <motion.div
          style={{ width: lineWidth }}
          className="h-full bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"
        />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
              Areas of Study
            </span>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
              Explore the{" "}
              <span className="gradient-text">Branches of Knowledge</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-white/40 leading-relaxed">
              Dive deep into the interconnected disciplines of Vedic wisdom.
              Each branch offers unique perspectives on understanding cosmic
              influences.
            </p>
          </ScrollReveal>
        </div>

        {/* Topics grid */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {topics.map((topic) => (
            <motion.div
              key={topic.title}
              variants={staggerItem}
              className="group"
            >
              <div className="glass-card-hover p-7 h-full">
                <div className="text-3xl mb-4">{topic.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {topic.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {topic.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
