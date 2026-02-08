"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

const courses = [
  {
    number: "01",
    title: "Vedic Astrology Foundations",
    level: "Beginner" as const,
    modules: 12,
    hours: 24,
    description:
      "Build a strong foundation in Vedic Astrology, understanding birth charts, planetary positions, and the twelve houses of the horoscope.",
  },
  {
    number: "02",
    title: "Planetary Science (Grah Vigyaan)",
    level: "Intermediate" as const,
    modules: 18,
    hours: 36,
    description:
      "Deep dive into the Navagraha \u2014 Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. Understand their transits, aspects, and effects.",
  },
  {
    number: "03",
    title: "Kundli Reading & Interpretation",
    level: "Intermediate" as const,
    modules: 15,
    hours: 30,
    description:
      "Learn the art of reading and interpreting birth charts. Master dasha systems, yogas, and predictive techniques.",
  },
  {
    number: "04",
    title: "Numerology Mastery",
    level: "Beginner" as const,
    modules: 10,
    hours: 20,
    description:
      "Discover the hidden power of numbers. Learn to calculate life paths, destiny numbers, and their influence on life decisions.",
  },
  {
    number: "05",
    title: "Predictive Astrology",
    level: "Advanced" as const,
    modules: 14,
    hours: 28,
    description:
      "Advanced techniques in Vedic prediction including Vimshottari Dasha, transits, varshphal, and muhurta for timing events.",
  },
  {
    number: "06",
    title: "Occult Science & Remedies",
    level: "Advanced" as const,
    modules: 12,
    hours: 24,
    description:
      "Explore gemstone therapy, mantra science, yantra practices, and Vedic remedies for planetary afflictions.",
  },
];

const levelStyle: Record<string, string> = {
  Beginner: "text-saffron",
  Intermediate: "text-copper",
  Advanced: "text-wine-light",
};

const stats = [
  { value: "6", label: "Courses" },
  { value: "81", label: "Modules" },
  { value: "162+", label: "Hours" },
];

export default function CoursesContent() {
  const catalogRef = useRef<HTMLDivElement>(null);
  const catalogInView = useInView(catalogRef, { once: true, amount: 0.05 });

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-custom">
          <ScrollReveal>
            <span className="font-sans text-sm uppercase tracking-widest text-saffron mb-5 block">
              Learn
            </span>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-parchment leading-[0.95] mb-6">
              Courses
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <p className="font-sans text-lg md:text-xl text-parchment-dim max-w-lg leading-relaxed mb-8">
              Master the ancient sciences through structured, modern learning
              paths.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={3}>
            <div className="accent-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* Course Catalog — Editorial Numbered List */}
      <section className="section-padding !pt-0">
        <div className="container-custom">
          <motion.div
            ref={catalogRef}
            variants={staggerContainer}
            initial="hidden"
            animate={catalogInView ? "visible" : "hidden"}
          >
            {courses.map((course) => (
              <motion.div key={course.number} variants={staggerItem}>
                <div className="group cursor-pointer transition-transform duration-500 ease-out hover:translate-x-2 md:hover:translate-x-4">
                  <div className="flex items-start gap-5 md:gap-8 lg:gap-12 py-7 md:py-9">
                    {/* Large Number */}
                    <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-saffron/70 leading-none select-none shrink-0 w-12 sm:w-16 md:w-20 lg:w-24 transition-colors duration-500 group-hover:text-saffron">
                      {course.number}
                    </span>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-1 md:pt-2">
                      {/* Title Row */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-parchment leading-tight transition-colors duration-500 group-hover:text-parchment">
                          {course.title}
                        </h2>
                        <span
                          className={`font-sans text-sm uppercase tracking-widest mt-1.5 sm:mt-0 shrink-0 ${levelStyle[course.level]}`}
                        >
                          {course.level}
                        </span>
                      </div>

                      {/* Meta */}
                      <p className="font-sans text-sm text-parchment-muted mb-3">
                        {course.modules} modules &middot; {course.hours} hours
                      </p>

                      {/* Description */}
                      <p className="font-sans text-base md:text-lg text-parchment-muted leading-relaxed max-w-2xl">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="h-px bg-parchment-faint/20" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-12 sm:gap-16 md:gap-24">
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-serif text-5xl sm:text-6xl md:text-7xl text-saffron leading-none">
                    {stat.value}
                  </span>
                  <span className="block font-sans text-sm uppercase tracking-widest text-parchment-muted mt-3">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding !pt-0 pb-24 md:pb-32">
        <div className="container-custom max-w-xl text-center">
          <ScrollReveal>
            <p className="font-serif text-2xl sm:text-3xl text-parchment-dim mb-8">
              Ready to begin?
            </p>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <MagneticButton>
              <Link href="/courses" className="btn-primary">
                Browse All Courses
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
