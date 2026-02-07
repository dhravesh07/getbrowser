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

  const bgScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-accent-purple/15 to-accent-orange/10" />
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="absolute inset-0 bg-surface-950/60 backdrop-blur-sm" />

          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center">
            <ScrollReveal>
              <span className="text-xs font-semibold text-primary-300 uppercase tracking-[0.2em] mb-6 block">
                Begin Your Journey
              </span>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 text-balance">
                Ready to Explore the{" "}
                <span className="gradient-text">Cosmic Blueprint?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="max-w-xl mx-auto text-white/40 leading-relaxed mb-10">
                Join Acharya Prateek Bhola and unlock the mysteries of Vedic
                Astrology, Numerology, and Occult Science. Start learning today
                with courses, webinars, and exclusive digital resources.
              </p>
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
