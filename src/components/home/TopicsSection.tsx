"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Topic {
  number: string;
  title: string;
  description: string;
}

const topics: Topic[] = [
  {
    number: "01",
    title: "Vedic Astrology",
    description: "Ancient Indian system rooted in the Vedas",
  },
  {
    number: "02",
    title: "Jyotish Shastra",
    description: "The science of light and celestial bodies",
  },
  {
    number: "03",
    title: "Planetary Science",
    description: "Study of Navagraha \u2014 the nine celestial bodies",
  },
  {
    number: "04",
    title: "Numerology",
    description: "Mystical relationship between numbers and life events",
  },
  {
    number: "05",
    title: "Occult Science",
    description: "Hidden knowledge systems and esoteric practices",
  },
  {
    number: "06",
    title: "Horoscope & Kundli",
    description: "Birth chart analysis and cosmic blueprints",
  },
];

/* ------------------------------------------------------------------ */
/*  Single topic row (desktop editorial style)                         */
/* ------------------------------------------------------------------ */
function TopicRow({ topic, isLast }: { topic: Topic; isLast: boolean }) {
  return (
    <motion.div variants={staggerItem}>
      <div className="group py-7 md:py-9">
        <div className="grid grid-cols-12 gap-4 items-baseline">
          {/* Number */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-serif text-2xl md:text-3xl text-saffron/80 tabular-nums">
              {topic.number}
            </span>
          </div>

          {/* Title */}
          <div className="col-span-10 md:col-span-4">
            <h3 className="font-serif text-xl md:text-2xl text-parchment group-hover:text-saffron-light transition-colors duration-300">
              {topic.title}
            </h3>
          </div>

          {/* Description — sits to the right on wider screens */}
          <div className="col-span-10 col-start-3 md:col-span-7 md:col-start-6">
            <p className="font-sans text-sm md:text-base text-parchment-muted leading-relaxed mt-1 md:mt-0">
              {topic.description}
            </p>
          </div>
        </div>
      </div>
      {/* Separator line */}
      {!isLast && (
        <div className="h-px w-full" style={{ background: "rgba(184,115,51,0.12)" }} />
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile scroll card                                                 */
/* ------------------------------------------------------------------ */
function TopicCard({ topic }: { topic: Topic }) {
  return (
    <div className="snap-start flex-shrink-0 w-[280px] p-6 border border-copper/[0.08] rounded-sm bg-void-surface">
      <span className="block font-serif text-3xl text-saffron/70 mb-4">
        {topic.number}
      </span>
      <h3 className="font-serif text-lg text-parchment mb-2">{topic.title}</h3>
      <p className="font-sans text-sm text-parchment-muted leading-relaxed">
        {topic.description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TopicsSection                                                      */
/* ------------------------------------------------------------------ */
export default function TopicsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(listRef, { once: true, amount: 0.1 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Vertical accent line grows as section scrolls into view */
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="section-padding relative overflow-hidden bg-void">
      {/* Grain */}
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      {/* Vertical saffron accent line — desktop only */}
      <div className="hidden lg:block absolute left-8 xl:left-16 top-0 bottom-0 w-px">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-saffron/20 origin-top"
        />
      </div>

      <div className="container-custom relative">
        {/* Section header — left-aligned */}
        <div className="max-w-xl mb-16 md:mb-20">
          <ScrollReveal>
            <span className="tag mb-4 block">Areas of Study</span>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-parchment leading-tight">
              The Branches of
              <br />
              <span className="gradient-text">Vedic Wisdom</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="accent-line mt-6" />
          </ScrollReveal>
        </div>

        {/* Desktop: editorial list layout */}
        <div className="hidden md:block">
          {/* Top border */}
          <div className="h-px w-full mb-0" style={{ background: "rgba(184,115,51,0.12)" }} />

          <motion.div
            ref={listRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {topics.map((topic, i) => (
              <TopicRow
                key={topic.number}
                topic={topic}
                isLast={i === topics.length - 1}
              />
            ))}
          </motion.div>

          {/* Bottom border */}
          <div className="h-px w-full mt-0" style={{ background: "rgba(184,115,51,0.12)" }} />
        </div>

        {/* Mobile: horizontal scroll-snap */}
        <div className="md:hidden">
          <div
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {topics.map((topic) => (
              <TopicCard key={topic.number} topic={topic} />
            ))}
            {/* Spacer to allow last card to snap */}
            <div className="flex-shrink-0 w-1" aria-hidden="true" />
          </div>
          {/* Scroll hint */}
          <div className="flex items-center gap-2 mt-6">
            <div className="flex gap-1">
              {topics.map((_, i) => (
                <div
                  key={i}
                  className={`h-px rounded-full transition-all ${
                    i === 0 ? "w-6 bg-saffron/60" : "w-3 bg-parchment-faint/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-[10px] font-sans uppercase tracking-[0.15em] text-parchment-faint ml-2">
              Scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
