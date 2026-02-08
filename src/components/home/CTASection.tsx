"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";

/* ------------------------------------------------------------------ */
/*  Kundli Diamond Wireframe — positioned right, partially cropped     */
/*  Built with pure CSS: a rotated div with inner crossing lines       */
/* ------------------------------------------------------------------ */
function KundliWireframe() {
  return (
    <div className="absolute -right-24 md:-right-16 lg:-right-8 top-1/2 -translate-y-1/2 pointer-events-none">
      {/* Outer rotated square */}
      <div
        className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px]"
        style={{ transform: "rotate(45deg)" }}
      >
        {/* Outer border */}
        <div className="absolute inset-0 border border-copper/[0.08] rounded-[2px]" />

        {/* Inner border */}
        <div className="absolute inset-[22%] border border-copper/[0.06] rounded-[1px]" />

        {/* Horizontal center line */}
        <div
          className="absolute left-0 right-0 top-1/2 h-px -translate-y-px"
          style={{ background: "rgba(184,115,51,0.06)" }}
        />

        {/* Vertical center line */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px -translate-x-px"
          style={{ background: "rgba(184,115,51,0.06)" }}
        />

        {/* Diagonal line top-left to bottom-right */}
        <div
          className="absolute top-0 left-0 w-[141.4%] h-px origin-top-left"
          style={{
            transform: "rotate(45deg)",
            background: "rgba(184,115,51,0.04)",
          }}
        />

        {/* Diagonal line top-right to bottom-left */}
        <div
          className="absolute top-0 right-0 w-[141.4%] h-px origin-top-right"
          style={{
            transform: "rotate(-45deg)",
            background: "rgba(184,115,51,0.04)",
          }}
        />

        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-copper/10" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CTASection                                                         */
/* ------------------------------------------------------------------ */
export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0.2, 0.8], [30, -20]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-void-deep py-20 md:py-28 lg:py-36"
    >
      {/* Grain */}
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      {/* Kundli wireframe decoration — right side, partially cropped */}
      <KundliWireframe />

      <div className="container-custom relative">
        <motion.div style={{ y: textY }} className="max-w-3xl">
          {/* Main heading — large serif, the focal point */}
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif leading-[1.1] tracking-tight mb-6">
              <span className="text-parchment">Begin Your</span>
              <br />
              <span className="gradient-text">Journey Into the Stars</span>
            </h2>
          </ScrollReveal>

          {/* Single line of muted description */}
          <ScrollReveal delay={1}>
            <p className="font-sans text-parchment-muted text-base md:text-lg max-w-md mb-10">
              Explore the timeless wisdom of Vedic Astrology through modern,
              structured learning.
            </p>
          </ScrollReveal>

          {/* Single CTA button */}
          <ScrollReveal delay={2}>
            <MagneticButton>
              <Link href="/courses" className="btn-primary">
                Explore Courses
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
