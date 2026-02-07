"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Topic {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const topics: Topic[] = [
  {
    title: "Vedic Astrology",
    description:
      "The ancient Indian system of astrology rooted in the Vedas, offering deep insights into life patterns and cosmic influences.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer zodiac wheel */}
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="24"
          cy="24"
          r="14"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
        {/* 12 zodiac segment lines */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
          (angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 24 + 14 * Math.cos(rad);
            const y1 = 24 + 14 * Math.sin(rad);
            const x2 = 24 + 20 * Math.cos(rad);
            const y2 = 24 + 20 * Math.sin(rad);
            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.5"
              />
            );
          }
        )}
        {/* Center dot */}
        <circle cx="24" cy="24" r="2.5" fill="currentColor" opacity="0.8" />
        {/* Small accent dots at cardinal points */}
        <circle cx="24" cy="6" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="42" cy="24" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="24" cy="42" r="1.5" fill="currentColor" opacity="0.7" />
        <circle cx="6" cy="24" r="1.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Jyotish Shastra",
    description:
      "The science of light -- understanding celestial bodies and their impact on human affairs through time-tested methodologies.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Central star burst */}
        <circle cx="24" cy="24" r="4" fill="currentColor" opacity="0.9" />
        {/* Radiating lines - 8 directions */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 24 + 7 * Math.cos(rad);
          const y1 = 24 + 7 * Math.sin(rad);
          const x2 = 24 + 18 * Math.cos(rad);
          const y2 = 24 + 18 * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth={angle % 90 === 0 ? "2" : "1"}
              strokeLinecap="round"
              opacity={angle % 90 === 0 ? "0.9" : "0.5"}
            />
          );
        })}
        {/* Outer glow circle */}
        <circle
          cx="24"
          cy="24"
          r="21"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.25"
          strokeDasharray="3 3"
        />
        {/* Intermediate glow ring */}
        <circle
          cx="24"
          cy="24"
          r="13"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.3"
        />
        {/* Small twinkle dots */}
        <circle cx="24" cy="4" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="44" cy="24" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="24" cy="44" r="1" fill="currentColor" opacity="0.6" />
        <circle cx="4" cy="24" r="1" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Planetary Science",
    description:
      "Deep study of Navagraha -- the nine celestial bodies including Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Planet body */}
        <circle
          cx="22"
          cy="24"
          r="10"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.15"
        />
        {/* Planet band */}
        <path
          d="M14 20 C18 22, 26 22, 30 20"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
          fill="none"
        />
        {/* Orbit ring - elliptical */}
        <ellipse
          cx="24"
          cy="24"
          rx="21"
          ry="8"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          transform="rotate(-25 24 24)"
          strokeDasharray="4 2"
        />
        {/* Small moon on orbit */}
        <circle cx="40" cy="15" r="2.5" fill="currentColor" opacity="0.7" />
        {/* Planet surface detail */}
        <circle cx="19" cy="22" r="2" fill="currentColor" opacity="0.15" />
        <circle cx="25" cy="27" r="1.5" fill="currentColor" opacity="0.1" />
      </svg>
    ),
  },
  {
    title: "Numerology",
    description:
      "The mystical relationship between numbers and life events. Discover how numbers influence your destiny and decision-making.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mystical circle backdrop */}
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.25"
        />
        {/* Number 3 - top center */}
        <text
          x="24"
          y="16"
          textAnchor="middle"
          fill="currentColor"
          fontSize="10"
          fontWeight="bold"
          opacity="0.9"
          fontFamily="serif"
        >
          3
        </text>
        {/* Number 7 - bottom left */}
        <text
          x="14"
          y="36"
          textAnchor="middle"
          fill="currentColor"
          fontSize="10"
          fontWeight="bold"
          opacity="0.7"
          fontFamily="serif"
        >
          7
        </text>
        {/* Number 9 - bottom right */}
        <text
          x="34"
          y="36"
          textAnchor="middle"
          fill="currentColor"
          fontSize="10"
          fontWeight="bold"
          opacity="0.7"
          fontFamily="serif"
        >
          9
        </text>
        {/* Connecting triangle */}
        <path
          d="M24 8 L38 38 L10 38 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
          opacity="0.3"
        />
        {/* Inner inverted triangle */}
        <path
          d="M17 18 L31 18 L24 32 Z"
          stroke="currentColor"
          strokeWidth="0.5"
          fill="currentColor"
          fillOpacity="0.05"
          opacity="0.35"
        />
        {/* Center number 1 */}
        <text
          x="24"
          y="27"
          textAnchor="middle"
          fill="currentColor"
          fontSize="8"
          fontWeight="bold"
          opacity="0.5"
          fontFamily="serif"
        >
          1
        </text>
      </svg>
    ),
  },
  {
    title: "Occult Science",
    description:
      "Explore hidden knowledge systems and esoteric practices that complement astrological understanding.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Eye outline - almond shape */}
        <path
          d="M4 24 C10 12, 22 8, 24 8 C26 8, 38 12, 44 24 C38 36, 26 40, 24 40 C22 40, 10 36, 4 24Z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Iris */}
        <circle
          cx="24"
          cy="24"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="currentColor"
          fillOpacity="0.12"
        />
        {/* Pupil / Third eye center */}
        <circle cx="24" cy="24" r="3" fill="currentColor" opacity="0.85" />
        {/* Inner light reflection */}
        <circle cx="22" cy="22" r="1" fill="currentColor" opacity="0.4" />
        {/* Radiating lines above (third eye activation) */}
        <line
          x1="24"
          y1="4"
          x2="24"
          y2="1"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="5"
          x2="17.5"
          y2="2"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
          strokeLinecap="round"
        />
        <line
          x1="29"
          y1="5"
          x2="30.5"
          y2="2"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.35"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Horoscope & Kundli",
    description:
      "Birth chart analysis and interpretation. Learn to read and understand the cosmic blueprint of any individual.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer diamond (rotated square - kundli shape) */}
        <rect
          x="24"
          y="4"
          width="28"
          height="28"
          rx="1"
          transform="rotate(45 24 4)"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Inner grid lines - horizontal */}
        <line
          x1="4.2"
          y1="24"
          x2="43.8"
          y2="24"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.5"
        />
        {/* Inner grid lines - vertical */}
        <line
          x1="24"
          y1="4.2"
          x2="24"
          y2="43.8"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.5"
        />
        {/* Diagonal lines forming the inner kundli divisions */}
        <line
          x1="4.2"
          y1="4.2"
          x2="43.8"
          y2="43.8"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.35"
        />
        <line
          x1="43.8"
          y1="4.2"
          x2="4.2"
          y2="43.8"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.35"
        />
        {/* Center small diamond accent */}
        <rect
          x="24"
          y="16"
          width="11.3"
          height="11.3"
          rx="0.5"
          transform="rotate(45 24 16)"
          stroke="currentColor"
          strokeWidth="1"
          fill="currentColor"
          fillOpacity="0.08"
          opacity="0.6"
        />
        {/* Center dot */}
        <circle cx="24" cy="24" r="1.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
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
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Deep indigo/purple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-midnight via-cosmic-950 to-sky-midnight" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,transparent_60%)]" />

      {/* Animated horizontal golden line (cosmic-divider style) */}
      <div className="absolute top-0 left-0 right-0 h-px flex justify-center">
        <motion.div
          style={{ width: lineWidth }}
          className="h-full bg-gradient-to-r from-transparent via-astro-gold/50 to-transparent"
        />
      </div>

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.25em] mb-4 block">
              Areas of Study
            </span>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
              Explore the{" "}
              <span className="gold-text">Branches of Knowledge</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="text-cosmic-200/40 leading-relaxed">
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
              <div className="astro-card-hover p-7 h-full">
                {/* Icon container with gold border */}
                <div className="w-14 h-14 rounded-xl bg-astro-gold/10 border border-astro-gold/20 flex items-center justify-center text-astro-gold mb-5 group-hover:border-astro-gold/40 group-hover:bg-astro-gold/15 group-hover:scale-110 transition-all duration-500">
                  {topic.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-astro-sun transition-colors duration-300">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-cosmic-200/40 leading-relaxed">
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
