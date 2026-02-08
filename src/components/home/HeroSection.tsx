"use client";

import { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { heroTextReveal } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

/* ------------------------------------------------------------------ */
/*  Kundli Chart SVG                                                   */
/*  Traditional North Indian horoscope: outer diamond, inner diamond,  */
/*  8 house-division lines connecting outer vertices to adjacent       */
/*  inner vertices — creating the classic 12-bhava grid.               */
/* ------------------------------------------------------------------ */
function KundliChart() {
  const S = 180;
  const s = 70;

  return (
    <svg
      viewBox="-200 -200 400 400"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer diamond */}
      <polygon
        points={`0,-${S} ${S},0 0,${S} -${S},0`}
        stroke="#B87333"
        strokeWidth={1}
        strokeOpacity={0.35}
      />

      {/* Inner diamond */}
      <polygon
        points={`0,-${s} ${s},0 0,${s} -${s},0`}
        stroke="#B87333"
        strokeWidth={0.7}
        strokeOpacity={0.22}
      />

      {/* House division lines — top vertex */}
      <line x1={0} y1={-S} x2={-s} y2={0} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />
      <line x1={0} y1={-S} x2={s} y2={0} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />

      {/* House division lines — right vertex */}
      <line x1={S} y1={0} x2={0} y2={-s} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />
      <line x1={S} y1={0} x2={0} y2={s} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />

      {/* House division lines — bottom vertex */}
      <line x1={0} y1={S} x2={-s} y2={0} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />
      <line x1={0} y1={S} x2={s} y2={0} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />

      {/* House division lines — left vertex */}
      <line x1={-S} y1={0} x2={0} y2={-s} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />
      <line x1={-S} y1={0} x2={0} y2={s} stroke="#D4763C" strokeWidth={0.5} strokeOpacity={0.18} />

      {/* Centre mark */}
      <circle cx={0} cy={0} r={1.5} fill="#B87333" fillOpacity={0.15} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats shown at the bottom of the hero                              */
/* ------------------------------------------------------------------ */
const stats = [
  { number: "12", label: "Zodiac Signs" },
  { number: "9", label: "Navagraha" },
  { number: "27", label: "Nakshatra" },
] as const;

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */
export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-void overflow-hidden grain-overlay"
    >
      {/* -------- Radial glow near the Kundli area -------- */}
      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none
                   left-1/2 -translate-x-1/2
                   lg:left-auto lg:translate-x-0 lg:right-[4%]
                   w-[480px] h-[480px] lg:w-[640px] lg:h-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(184,115,51,0.04) 0%, rgba(184,115,51,0.01) 45%, transparent 70%)",
        }}
      />

      {/* -------- Kundli chart — decorative, absolutely positioned -------- */}
      <div
        className="absolute top-1/2 -translate-y-1/2 pointer-events-none
                   left-1/2 -translate-x-1/2
                   lg:left-auto lg:translate-x-0 lg:right-[2%] xl:right-[6%]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px]
                     lg:w-[500px] lg:h-[500px] xl:w-[560px] xl:h-[560px]
                     opacity-[0.06] lg:opacity-[0.22]"
        >
          <KundliChart />
        </motion.div>
      </div>

      {/* -------- Content -------- */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 container-custom min-h-screen flex flex-col justify-center py-28 md:py-36"
      >
        {/* Left-aligned text block */}
        <div className="max-w-xl lg:max-w-2xl">
          {/* Tag line with logo mark */}
          <motion.div
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            custom={0}
            className="flex items-center gap-3 mb-8"
          >
            <Image
              src="/images/logo.png"
              alt=""
              width={24}
              height={24}
              className="opacity-60"
            />
            <span className="tag">Jyotish Shastra</span>
          </motion.div>

          {/* Display heading */}
          <motion.h1
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <span
              className="block font-serif font-bold text-parchment leading-[0.9] tracking-tight
                         text-6xl sm:text-7xl md:text-8xl xl:text-9xl"
            >
              Vedic
            </span>
            <span
              className="block font-serif font-bold leading-[0.95] tracking-tight mt-1 sm:mt-2 gradient-text
                         text-6xl sm:text-7xl md:text-8xl xl:text-9xl"
            >
              Astrology
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-7 md:mt-8 max-w-sm md:max-w-md text-base md:text-lg font-sans text-parchment-muted leading-relaxed"
          >
            Planetary wisdom, birth chart analysis, and Nakshatra
            science&mdash;guided by{" "}
            <span className="text-parchment-dim">Acharya Prateek Bhola</span>.
          </motion.p>

          {/* Copper accent line — draws itself in */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.4,
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="origin-left w-24 md:w-32 h-px bg-copper/60 my-8"
          />

          {/* CTA buttons */}
          <motion.div
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <Link href="/courses" className="btn-primary">
                Explore Courses
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link href="/blog" className="btn-secondary">
                Read the Blog
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom stats row */}
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={6}
          className="mt-20 lg:mt-28 flex items-center"
        >
          {stats.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && (
                <span className="w-px h-3.5 bg-stone-faint mx-5 sm:mx-7 md:mx-10" />
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-saffron font-serif text-2xl md:text-3xl font-semibold">
                  {stat.number}
                </span>
                <span className="text-parchment-muted font-sans text-sm md:text-base tracking-wide">
                  {stat.label}
                </span>
              </div>
            </Fragment>
          ))}
        </motion.div>
      </motion.div>

      {/* -------- Scroll indicator — bottom-left, vertical -------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-5 sm:left-6 lg:left-8 z-10"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-parchment-faint font-sans [writing-mode:vertical-lr]">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-copper/25 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
