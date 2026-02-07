"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.85, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Base astro-card background with gold-border */}
          <div className="absolute inset-0 astro-card rounded-3xl" />
          <div className="absolute inset-0 rounded-3xl gold-border" />

          {/* Star field pattern */}
          <div className="absolute inset-0 star-field opacity-30" />

          {/* Radial gold glow effects */}
          <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-astro-gold/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-astro-gold/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Purple nebula glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cosmic-700/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cosmic-700/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-astro-gold/5 via-transparent to-cosmic-700/5" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <ScrollReveal>
              <span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-6 block">
                Begin Your Journey
              </span>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 text-balance">
                Ready to Explore the{" "}
                <span className="gold-text">Cosmic Blueprint?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="max-w-xl mx-auto text-cosmic-200/50 leading-relaxed mb-4">
                Join Acharya Prateek Bhola and unlock the mysteries of Vedic
                Astrology, Numerology, and Occult Science. Start learning today
                with courses, webinars, and exclusive digital resources.
              </p>
            </ScrollReveal>

            {/* Cosmic divider */}
            <ScrollReveal delay={2}>
              <div className="max-w-xs mx-auto cosmic-divider mb-10 mt-6" />
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton>
                  <Link href="/courses" className="btn-primary">
                    <span>Browse Courses</span>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/membership" className="btn-secondary">
                    Join Membership
                  </Link>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
