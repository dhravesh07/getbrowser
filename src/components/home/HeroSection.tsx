"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import Link from "next/link";
import { heroTextReveal } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

/* ------------------------------------------------------------------ */
/*  Zodiac Wheel SVG – 12 signs arranged in a circle with gold lines  */
/* ------------------------------------------------------------------ */
function ZodiacWheel() {
  const signs = [
    "\u2648", "\u2649", "\u264A", "\u264B", "\u264C", "\u264D",
    "\u264E", "\u264F", "\u2650", "\u2651", "\u2652", "\u2653",
  ];
  const r = 240; // radius for symbol placement
  const innerR = 190;
  const outerR = 270;

  return (
    <svg
      viewBox="-300 -300 600 600"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx={0} cy={0} r={outerR} stroke="#F5A623" strokeWidth={1} strokeOpacity={0.25} />
      {/* Inner ring */}
      <circle cx={0} cy={0} r={innerR} stroke="#F5A623" strokeWidth={0.6} strokeOpacity={0.15} />
      {/* Centre dot */}
      <circle cx={0} cy={0} r={3} fill="#FFD700" fillOpacity={0.5} />

      {/* Divider lines from inner to outer ring for each house */}
      {signs.map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        return (
          <line
            key={`div-${i}`}
            x1={Math.cos(angle) * innerR}
            y1={Math.sin(angle) * innerR}
            x2={Math.cos(angle) * outerR}
            y2={Math.sin(angle) * outerR}
            stroke="#F5A623"
            strokeWidth={0.6}
            strokeOpacity={0.18}
          />
        );
      })}

      {/* Cross-hair lines through centre */}
      <line x1={-innerR} y1={0} x2={innerR} y2={0} stroke="#FFD700" strokeWidth={0.4} strokeOpacity={0.1} />
      <line x1={0} y1={-innerR} x2={0} y2={innerR} stroke="#FFD700" strokeWidth={0.4} strokeOpacity={0.1} />

      {/* Zodiac symbols */}
      {signs.map((sign, i) => {
        const angle = (i * 30 + 15 - 90) * (Math.PI / 180); // offset by 15deg to center in house
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <text
            key={sign}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#FFD700"
            fillOpacity={0.45}
            fontSize={22}
            fontFamily="serif"
          >
            {sign}
          </text>
        );
      })}

      {/* Outer decorative dotted circle */}
      <circle
        cx={0} cy={0} r={285}
        stroke="#F5A623"
        strokeWidth={0.5}
        strokeOpacity={0.1}
        strokeDasharray="2 8"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Constellation pattern – decorative lines between gold dots         */
/* ------------------------------------------------------------------ */
const constellationPaths = [
  // Constellation 1 – top-left area
  { dots: [ [8, 12], [14, 18], [11, 26], [18, 22], [24, 15] ] },
  // Constellation 2 – top-right area
  { dots: [ [74, 8], [80, 16], [78, 24], [85, 20], [88, 10] ] },
  // Constellation 3 – bottom-left area
  { dots: [ [12, 72], [18, 78], [22, 74], [16, 82] ] },
  // Constellation 4 – bottom-right area
  { dots: [ [82, 68], [86, 74], [90, 70], [84, 80], [88, 82] ] },
];

function ConstellationField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {constellationPaths.map((c, ci) => (
          <g key={ci}>
            {/* Lines connecting dots */}
            {c.dots.slice(1).map((dot, di) => (
              <line
                key={`l-${ci}-${di}`}
                x1={c.dots[di][0]}
                y1={c.dots[di][1]}
                x2={dot[0]}
                y2={dot[1]}
                stroke="#F5A623"
                strokeWidth={0.08}
                strokeOpacity={0.25}
              />
            ))}
            {/* Dots */}
            {c.dots.map((dot, di) => (
              <circle
                key={`d-${ci}-${di}`}
                cx={dot[0]}
                cy={dot[1]}
                r={0.2}
                fill="#FFD700"
                fillOpacity={0.5}
              />
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Hero Section                                                  */
/* ------------------------------------------------------------------ */
export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  /* ---- twinkling stars data (memoised so positions don't shift) ---- */
  const stars = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 0.5,          // 0.5-3px
        duration: 2 + Math.random() * 4,           // 2-6s
        delay: Math.random() * 5,
      })),
    [],
  );

  /* ---- floating planet symbols ---- */
  const planets = [
    { symbol: "\u2609", top: "14%", left: "12%", size: "text-3xl", dur: 7, delay: 0 },   // Sun
    { symbol: "\u263E", top: "20%", right: "10%", size: "text-4xl", dur: 9, delay: 1 },   // Moon
    { symbol: "\u2643", bottom: "22%", left: "8%", size: "text-2xl", dur: 11, delay: 2 },  // Jupiter
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F0A2E 0%, #1A1145 40%, #140D38 70%, #0F0A2E 100%)",
      }}
    >
      {/* ========================= BACKGROUND LAYER ========================= */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {/* Cosmic radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(245,166,35,0.08) 0%, rgba(26,17,69,0.4) 50%, transparent 70%)",
          }}
        />

        {/* Nebula smudge */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-20"
          style={{ background: "linear-gradient(135deg, #3B1F8E 0%, #6B21A8 50%, #1A1145 100%)" }}
        />

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,10,46,0.85)_75%)]" />
      </motion.div>

      {/* ========================= STAR FIELD ========================= */}
      <div className="star-field absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.9, 0.15] }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              backgroundColor: "#FFD700",
              boxShadow: `0 0 ${s.size * 2}px rgba(255,215,0,0.4)`,
            }}
          />
        ))}
      </div>

      {/* ========================= CONSTELLATION LINES ========================= */}
      <ConstellationField />

      {/* ========================= ZODIAC WHEEL (spinning) ========================= */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="w-[520px] h-[520px] md:w-[680px] md:h-[680px] lg:w-[780px] lg:h-[780px] opacity-60"
        >
          <ZodiacWheel />
        </motion.div>
      </div>

      {/* ========================= ORBIT RINGS ========================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ring 1 – outermost, slowest */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[850px] md:h-[850px]"
        >
          <div className="w-full h-full rounded-full border border-[#F5A623]/[0.08]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD700]/60 shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
        </motion.div>

        {/* Ring 2 – middle, medium speed, reverse */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[600px] md:h-[600px]"
        >
          <div className="w-full h-full rounded-full border border-[#F5A623]/[0.1]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD700]/70 shadow-[0_0_6px_rgba(255,215,0,0.4)]" />
        </motion.div>

        {/* Ring 3 – innermost, fastest */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[380px] md:h-[380px]"
        >
          <div className="w-full h-full rounded-full border border-[#F5A623]/[0.12]" />
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD700]/80 shadow-[0_0_6px_rgba(255,215,0,0.5)]" />
        </motion.div>
      </div>

      {/* ========================= FLOATING PLANET SYMBOLS ========================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {planets.map((p, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
              y: [0, -18, 0],
            }}
            transition={{
              duration: p.dur,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className={`absolute ${p.size} select-none`}
            style={{
              top: p.top,
              left: p.left,
              right: (p as Record<string, unknown>).right as string | undefined,
              bottom: (p as Record<string, unknown>).bottom as string | undefined,
              color: "#FFD700",
              textShadow: "0 0 20px rgba(255,215,0,0.3)",
            }}
          >
            {p.symbol}
          </motion.span>
        ))}
      </div>

      {/* ========================= CONTENT ========================= */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 container-custom text-center pt-24 md:pt-32"
      >
        {/* Badge */}
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#F5A623]/20 bg-[#F5A623]/[0.06] backdrop-blur-sm mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_6px_rgba(255,215,0,0.6)] animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#F5A623]/80">
            Vedic Astrology &bull; Numerology &bull; Occult Science
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            variants={heroTextReveal}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-white">Unlock the</span>
            <br />
            <span className="gold-text">Ancient Wisdom</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={2}
          className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10 text-white/50"
        >
          Explore the depths of Vedic Astrology, Jyotish Shastra, and Planetary
          Science through modern digital learning &mdash; guided by{" "}
          <span className="text-[#F5A623]/90 font-medium">
            Acharya Prateek Bhola
          </span>
          .
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton>
            <Link href="/courses" className="btn-primary">
              <span>Explore Courses</span>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="/blog" className="btn-secondary">
              Read the Blog
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Cosmic divider */}
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={4}
          className="cosmic-divider my-12 md:my-16 mx-auto max-w-xs flex items-center gap-3"
        >
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
          <span className="text-[#FFD700]/40 text-xs">&diams;</span>
          <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
        </motion.div>

        {/* Stat blocks */}
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={5}
          className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "Vedic", label: "Astrology" },
            { value: "Jyotish", label: "Shastra" },
            { value: "Grah", label: "Vigyaan" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="astro-card text-center p-4 rounded-xl border border-[#F5A623]/10 bg-[#F5A623]/[0.03] backdrop-blur-sm"
            >
              <div className="text-lg md:text-xl font-bold gold-text">
                {stat.value}
              </div>
              <div className="text-[11px] text-white/35 mt-1 tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ========================= SCROLL INDICATOR ========================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#F5A623]/30">
            Scroll
          </span>
          <div className="w-5 h-9 rounded-full border border-[#F5A623]/20 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-[#FFD700]/60 shadow-[0_0_4px_rgba(255,215,0,0.4)]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
