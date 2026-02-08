"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

const upcomingTopics = [
  { num: "01", title: "Introduction to Birth Charts" },
  { num: "02", title: "Understanding Planetary Transits" },
  { num: "03", title: "Numerology Fundamentals" },
];

export default function WebinarsContent() {
  const topicsRef = useRef<HTMLDivElement>(null);
  const topicsInView = useInView(topicsRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <span className="tag mb-5 block">Live Sessions</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-parchment-light leading-[1.1] mb-6">
              Webinars
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={2}>
            <div className="accent-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* Message */}
      <section className="pb-20">
        <div className="container-custom max-w-3xl">
          <ScrollReveal animation="fadeUp">
            <p className="text-parchment-muted text-base leading-relaxed font-sans">
              Live webinars and interactive sessions are coming soon. Stay tuned
              for announcements on upcoming sessions covering Vedic Astrology,
              Numerology, and more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Notify Me */}
      <section className="pb-24 md:pb-32 border-b border-stone-faint/40">
        <div className="container-custom max-w-3xl">
          <ScrollReveal animation="fadeUp">
            <p className="text-parchment-dim text-sm font-sans mb-8">
              Join our community to get notified about upcoming webinars.
            </p>
            <MagneticButton>
              <button className="btn-secondary">Notify Me</button>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Topics */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-parchment-light mb-16">
              Upcoming Topics
            </h2>
          </ScrollReveal>

          <motion.div
            ref={topicsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={topicsInView ? "visible" : "hidden"}
          >
            {upcomingTopics.map((topic, i) => (
              <motion.div
                key={topic.num}
                variants={staggerItem}
                className={`flex items-baseline gap-6 sm:gap-10 py-7 ${
                  i < upcomingTopics.length - 1
                    ? "border-b border-stone-faint/40"
                    : ""
                }`}
              >
                <span className="text-saffron font-sans text-sm tabular-nums w-6 shrink-0">
                  {topic.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl text-parchment leading-tight mb-1">
                    {topic.title}
                  </h3>
                  <span className="text-parchment-faint text-xs font-sans tracking-wider uppercase">
                    Coming Soon
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
