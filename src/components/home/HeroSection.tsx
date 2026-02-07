"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { heroTextReveal } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-purple/10 blur-[100px] animate-float animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-orange/5 blur-[140px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,10,24,0.8)_70%)]" />
      </motion.div>

      {/* Celestial decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbiting ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        >
          <div className="w-full h-full rounded-full border border-white/[0.03]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-400/60" />
        </motion.div>

        {/* Second orbit */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px]"
        >
          <div className="w-full h-full rounded-full border border-white/[0.02]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent-purple/60" />
        </motion.div>

        {/* Stars */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              top: `${15 + i * 13}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
          <span className="text-xs text-white/60 font-medium tracking-wide uppercase">
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
            <span className="gradient-text">Ancient Wisdom</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={2}
          className="max-w-xl mx-auto text-base md:text-lg text-white/40 leading-relaxed mb-10"
        >
          Explore Vedic Astrology, Jyotish Shastra, and Planetary Science
          through modern digital learning. Guided by Acharya Prateek Bhola.
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

        {/* Stats */}
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          custom={4}
          className="mt-16 md:mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "Vedic", label: "Astrology" },
            { value: "Jyotish", label: "Shastra" },
            { value: "Grah", label: "Vigyaan" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-lg md:text-xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-white/40"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
