"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";

const courseFeatures = [
  {
    title: "Video Modules",
    description: "Structured video lessons organized into comprehensive modules for systematic learning.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "PDF Resources",
    description: "Downloadable study materials and reference guides to complement your video learning.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Interactive Content",
    description: "Engage with interactive exercises and quizzes to test your understanding of astrological concepts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
  },
  {
    title: "Flexible Pricing",
    description: "Choose from individual courses or bundled packages with flexible payment plans in INR.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
];

export default function CoursesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/8 blur-[100px]" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
        </div>

        <div className="container-custom relative z-10 text-center pt-24">
          <TextReveal>
            <span className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 block">
              Learn from the Best
            </span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="gradient-text">Courses</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="max-w-xl mx-auto text-base md:text-lg text-white/40 leading-relaxed mb-10">
              Comprehensive courses on Vedic Astrology, Numerology, and Occult
              Science. Structured modules with videos, PDFs, and interactive
              content.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Coming soon notice */}
      <section className="section-padding !pt-0">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-3xl p-10 md:p-14 text-center gradient-border"
              >
                {/* Animated icon */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-purple to-accent-orange flex items-center justify-center"
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </motion.div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Courses Coming Soon
                </h2>
                <p className="text-white/40 leading-relaxed mb-8 max-w-md mx-auto">
                  Keep a lookout for our courses, they&apos;re coming soon.
                  We&apos;re preparing comprehensive learning experiences in
                  Vedic Astrology, Numerology, and Occult Science.
                </p>

                <MagneticButton>
                  <Link href="/blog" className="btn-primary">
                    <span>Read Our Blog Meanwhile</span>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course features preview */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(49,122,231,0.05)_0%,transparent_50%)]" />

        <div className="container-custom relative">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              What to Expect
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courseFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} animation="fadeUp" delay={i}>
                <div className="glass-card-hover p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-400 mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
