"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const expertise = [
  {
    area: "Vedic Astrology",
    description: "Deep expertise in traditional Jyotish Shastra, including birth chart analysis, dasha systems, and predictive astrology.",
  },
  {
    area: "Planetary Science (Grah Vigyaan)",
    description: "Comprehensive understanding of the nine celestial bodies (Navagraha) and their influence on human life and destiny.",
  },
  {
    area: "Numerology",
    description: "Mastery in the science of numbers and their mystical relationship with life events, personality, and decision-making.",
  },
  {
    area: "Occult Science",
    description: "Knowledge of esoteric practices and hidden wisdom traditions that complement and deepen astrological understanding.",
  },
  {
    area: "Horoscope & Kundli Analysis",
    description: "Expert birth chart interpretation covering career, relationships, health, and spiritual growth.",
  },
];

const values = [
  {
    title: "Authentic Wisdom",
    description: "Rooted in traditional Vedic texts and time-tested methodologies passed down through generations.",
  },
  {
    title: "Modern Approach",
    description: "Making ancient knowledge accessible through digital courses, webinars, and interactive learning tools.",
  },
  {
    title: "Student-Centered",
    description: "Structured learning paths with videos, PDFs, and hands-on practice for effective understanding.",
  },
  {
    title: "Community",
    description: "Building a community of learners who share a passion for cosmic knowledge and self-discovery.",
  },
];

export default function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-500/8 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/8 blur-[100px]" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 container-custom text-center pt-32"
        >
          <TextReveal>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-6 block">
              About Us
            </span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Meet{" "}
              <span className="gradient-text">Acharya Prateek Bhola</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="max-w-xl mx-auto text-base md:text-lg text-white/40 leading-relaxed">
              Dedicated Vedic Astrology practitioner and educator, bringing
              ancient cosmic wisdom to the modern world through digital learning.
            </p>
          </TextReveal>
        </motion.div>
      </section>

      {/* About detail */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Profile card */}
            <ScrollReveal animation="slideLeft">
              <div className="sticky top-28">
                <div className="glass-card rounded-3xl p-8 md:p-10">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-purple to-accent-orange flex items-center justify-center mb-8 animate-glow">
                    <span className="text-4xl font-bold text-white">A</span>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    Acharya Prateek Bhola
                  </h2>
                  <p className="text-sm text-primary-400 mb-6">
                    Vedic Astrology Expert & Educator
                  </p>

                  <p className="text-sm text-white/40 leading-relaxed mb-8">
                    Acharya Prateek Bhola is the founder and lead instructor at
                    Ankyotissh, an educational platform dedicated to Vedic
                    Astrology, Numerology, and Occult Science. Through
                    structured courses, live webinars, and insightful blog
                    articles, he makes profound astrological concepts accessible
                    to learners of all levels.
                  </p>

                  {/* Contact / social */}
                  <div className="flex flex-wrap gap-2">
                    {["Facebook", "Instagram", "YouTube", "LinkedIn"].map(
                      (social) => (
                        <span
                          key={social}
                          className="text-xs px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40"
                        >
                          {social}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div className="space-y-16">
              {/* Mission */}
              <ScrollReveal animation="slideRight">
                <div>
                  <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
                    Our Mission
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
                    Bridging Ancient Wisdom with Modern Learning
                  </h3>
                  <p className="text-white/40 leading-relaxed mb-4">
                    Ankyotissh was founded with a clear vision: to make the
                    profound knowledge of Vedic Astrology and related sciences
                    accessible to everyone, regardless of their background or
                    location.
                  </p>
                  <p className="text-white/40 leading-relaxed">
                    Through digital courses, live interactive webinars,
                    comprehensive blog articles, and AI-powered learning tools,
                    we create a holistic learning environment that respects
                    traditional knowledge while embracing modern technology.
                  </p>
                </div>
              </ScrollReveal>

              {/* Expertise */}
              <div>
                <ScrollReveal animation="slideRight">
                  <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
                    Areas of Expertise
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                    Deep Knowledge Across Disciplines
                  </h3>
                </ScrollReveal>

                <div className="space-y-4">
                  {expertise.map((item, i) => (
                    <ScrollReveal key={item.area} animation="fadeUp" delay={i}>
                      <div className="glass-card-hover p-6 rounded-xl">
                        <h4 className="text-base font-semibold text-white mb-2">
                          {item.area}
                        </h4>
                        <p className="text-sm text-white/40 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div>
                <ScrollReveal animation="slideRight">
                  <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
                    Our Values
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                    What Drives Us
                  </h3>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((item, i) => (
                    <ScrollReveal key={item.title} animation="scaleUp" delay={i}>
                      <div className="glass-card p-6 rounded-xl h-full">
                        <h4 className="text-base font-semibold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-white/40 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <ScrollReveal animation="fadeUp">
                <div className="glass-card rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Ready to Begin Your Journey?
                  </h3>
                  <p className="text-sm text-white/40 mb-6">
                    Explore our courses and start learning Vedic Astrology today.
                  </p>
                  <MagneticButton>
                    <Link href="/courses" className="btn-primary">
                      <span>Explore Courses</span>
                    </Link>
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
