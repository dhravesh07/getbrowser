"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

const expertise = [
  { num: "01", title: "Vedic Astrology" },
  { num: "02", title: "Planetary Science" },
  { num: "03", title: "Numerology" },
  { num: "04", title: "Occult Science" },
  { num: "05", title: "Horoscope & Kundli" },
];

const studentBenefits = [
  { title: "Structured Courses", text: "Step-by-step learning paths from foundational to advanced topics." },
  { title: "Live Webinars", text: "Interactive sessions with real-time Q&A and chart analysis." },
  { title: "Digital Resources", text: "PDF guides, reference charts, and practice workbooks." },
  { title: "Community Access", text: "Connect with fellow learners and share your journey." },
];

export default function AboutContent() {
  const expertiseRef = useRef<HTMLDivElement>(null);
  const expertiseInView = useInView(expertiseRef, { once: true, amount: 0.2 });

  const benefitsRef = useRef<HTMLDivElement>(null);
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <span className="tag mb-5 block">About</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-parchment-light leading-[1.1] mb-6">
              Acharya Prateek Bhola
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={2}>
            <div className="accent-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* Two-Column Bio */}
      <section className="pb-24 md:pb-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — Typographic Initial */}
            <ScrollReveal animation="slideLeft" className="lg:col-span-4">
              <div className="relative overflow-hidden rounded-sm border border-stone-faint/30">
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/acharya-prateek-bhola.jpg"
                    alt="Acharya Prateek Bhola"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <span className="text-parchment-muted text-xs tracking-[0.2em] uppercase font-sans block">
                    Acharya
                  </span>
                  <span className="text-parchment-dim text-sm tracking-[0.12em] uppercase font-sans mt-1 block">
                    Prateek Bhola
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Bio Paragraphs */}
            <div className="lg:col-span-8 space-y-6">
              <ScrollReveal animation="slideRight">
                <p className="text-parchment-muted text-base leading-relaxed font-sans">
                  Acharya Prateek Bhola is a dedicated Vedic Astrology practitioner
                  and educator, bringing the profound wisdom of Jyotish Shastra to
                  modern learners.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="slideRight" delay={1}>
                <p className="text-parchment-muted text-base leading-relaxed font-sans">
                  Through comprehensive courses, interactive webinars, and insightful
                  articles, he makes complex astrological concepts accessible and
                  practical for seekers at every level.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="slideRight" delay={2}>
                <p className="text-parchment-muted text-base leading-relaxed font-sans">
                  His expertise spans Vedic Astrology, Planetary Science, Numerology,
                  and Occult Science, offering a holistic approach to understanding
                  cosmic influences on human life.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-padding border-t border-stone-faint/40">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-parchment-light mb-16">
              Areas of Expertise
            </h2>
          </ScrollReveal>

          <motion.div
            ref={expertiseRef}
            variants={staggerContainer}
            initial="hidden"
            animate={expertiseInView ? "visible" : "hidden"}
          >
            {expertise.map((item, i) => (
              <motion.div
                key={item.num}
                variants={staggerItem}
                className={`flex items-baseline gap-6 sm:gap-10 py-6 ${
                  i < expertise.length - 1 ? "border-b border-stone-faint/40" : ""
                }`}
              >
                <span className="text-saffron font-sans text-sm tabular-nums w-6 shrink-0">
                  {item.num}
                </span>
                <h3 className="text-xl sm:text-2xl text-parchment leading-tight">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Students Get */}
      <section className="section-padding border-t border-stone-faint/40">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-parchment-light mb-16">
              What Students Get
            </h2>
          </ScrollReveal>

          <motion.div
            ref={benefitsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12"
          >
            {studentBenefits.map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <h3 className="text-lg text-parchment mb-2">{item.title}</h3>
                <p className="text-parchment-muted text-sm leading-relaxed font-sans">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <ScrollReveal animation="fadeUp" className="mt-20">
            <MagneticButton>
              <Link href="/courses" className="btn-primary">
                Explore Courses
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
