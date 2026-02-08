"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface Service {
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    title: "Courses",
    description:
      "Comprehensive courses on Vedic Astrology, Numerology, and Occult Science",
    href: "/courses",
  },
  {
    title: "Blog",
    description:
      "In-depth articles on planetary astrology, rising signs, and Jyotish Shastra",
    href: "/blog",
  },
  {
    title: "Webinars",
    description: "Live interactive sessions on astrology topics",
    href: "/webinars",
  },
  {
    title: "AI Avatar",
    description: "AI-powered astrology learning tools",
    href: "/courses",
  },
  {
    title: "Digital Products",
    description:
      "Downloadable resources, charts, guides for astrological practice",
    href: "/products",
  },
  {
    title: "Membership",
    description: "Exclusive access to premium content and community",
    href: "/membership",
  },
];

/* ------------------------------------------------------------------ */
/*  Kundli Diamond — decorative SVG drawn with thin copper lines      */
/* ------------------------------------------------------------------ */
function KundliDiamond() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer diamond */}
      <rect
        x="100"
        y="10"
        width="127"
        height="127"
        rx="1"
        transform="rotate(45 100 10)"
        stroke="#B87333"
        strokeWidth="0.6"
        opacity="0.10"
      />
      {/* Inner diamond */}
      <rect
        x="100"
        y="40"
        width="85"
        height="85"
        rx="0.5"
        transform="rotate(45 100 40)"
        stroke="#B87333"
        strokeWidth="0.4"
        opacity="0.07"
      />
      {/* Cross lines — horizontal */}
      <line
        x1="10"
        y1="100"
        x2="190"
        y2="100"
        stroke="#B87333"
        strokeWidth="0.4"
        opacity="0.06"
      />
      {/* Cross lines — vertical */}
      <line
        x1="100"
        y1="10"
        x2="100"
        y2="190"
        stroke="#B87333"
        strokeWidth="0.4"
        opacity="0.06"
      />
      {/* Diagonal lines */}
      <line
        x1="10"
        y1="10"
        x2="190"
        y2="190"
        stroke="#B87333"
        strokeWidth="0.3"
        opacity="0.05"
      />
      <line
        x1="190"
        y1="10"
        x2="10"
        y2="190"
        stroke="#B87333"
        strokeWidth="0.3"
        opacity="0.05"
      />
      {/* Center dot */}
      <circle cx="100" cy="100" r="2" fill="#B87333" opacity="0.08" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Arrow Icon                                                         */
/* ------------------------------------------------------------------ */
function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-4 h-4 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Small Card (for services 2-6)                                      */
/* ------------------------------------------------------------------ */
function SmallCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div variants={staggerItem}>
      <Link href={service.href} className="block group h-full">
        <div className="relative h-full p-6 border border-copper/[0.08] rounded-sm bg-void-card/50 transition-all duration-500 hover:border-saffron/40">
          {/* Top row: number + arrow */}
          <div className="flex items-start justify-between mb-4">
            <span className="font-serif text-sm text-parchment-faint tracking-wide">
              0{index}
            </span>
            <span className="text-parchment-faint opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <ArrowIcon />
            </span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-xl text-parchment mb-2 group-hover:text-saffron-light transition-colors duration-300">
            {service.title}
          </h3>

          {/* Description */}
          <p className="font-sans text-base text-parchment-muted leading-relaxed">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  ServicesSection                                                     */
/* ------------------------------------------------------------------ */
export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="section-padding relative overflow-hidden bg-void-surface">
      {/* Grain */}
      <div className="grain-overlay pointer-events-none absolute inset-0" />

      <div className="container-custom relative">
        {/* Section header — left-aligned */}
        <div className="max-w-xl mb-16 md:mb-20">
          <ScrollReveal>
            <span className="tag mb-4 block">What We Offer</span>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-parchment leading-tight">
              Pathways to
              <br />
              <span className="gradient-text">Cosmic Knowledge</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="accent-line mt-6" />
          </ScrollReveal>
        </div>

        {/* Bento grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5"
        >
          {/* ---- Featured card (Courses) — spans 2 rows on desktop ---- */}
          <motion.div
            variants={staggerItem}
            className="lg:col-span-5 lg:row-span-2"
          >
            <Link href={featured.href} className="block group h-full">
              <div className="relative h-full min-h-[320px] lg:min-h-full p-8 md:p-10 border border-copper/[0.08] rounded-sm bg-void-card transition-all duration-500 hover:border-saffron/40 overflow-hidden flex flex-col justify-end">
                {/* Kundli diamond background decoration */}
                <div className="absolute inset-0 pointer-events-none">
                  <KundliDiamond />
                </div>

                {/* Featured badge */}
                <div className="relative z-10 mb-auto">
                  <span className="inline-block text-sm font-sans uppercase tracking-[0.2em] text-saffron/70 border border-saffron/20 px-3 py-1 rounded-sm">
                    Featured
                  </span>
                </div>

                {/* Content at bottom */}
                <div className="relative z-10 mt-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="block font-serif text-4xl md:text-5xl text-parchment-faint/70 mb-3">
                        01
                      </span>
                      <h3 className="font-serif text-3xl md:text-4xl text-parchment mb-3 group-hover:text-saffron-light transition-colors duration-300">
                        {featured.title}
                      </h3>
                      <p className="font-sans text-base text-parchment-muted leading-relaxed max-w-xs">
                        {featured.description}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-parchment-faint opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowIcon className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* ---- Top-right pair ---- */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <SmallCard service={rest[0]} index={2} />
            <SmallCard service={rest[1]} index={3} />
          </div>

          {/* ---- Bottom-right trio — asymmetric widths ---- */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {/* First card takes more space */}
            <div className="sm:col-span-2">
              <SmallCard service={rest[2]} index={4} />
            </div>
            <div className="sm:col-span-1">
              <SmallCard service={rest[3]} index={5} />
            </div>
          </div>

          {/* ---- Full-width bottom card ---- */}
          <motion.div variants={staggerItem} className="lg:col-span-12">
            <Link href={rest[4].href} className="block group">
              <div className="relative p-6 md:p-8 border border-copper/[0.08] rounded-sm bg-void-card/50 transition-all duration-500 hover:border-saffron/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-sm text-parchment-faint tracking-wide">
                      06
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-parchment group-hover:text-saffron-light transition-colors duration-300">
                        {rest[4].title}
                      </h3>
                      <p className="font-sans text-base text-parchment-muted mt-1">
                        {rest[4].description}
                      </p>
                    </div>
                  </div>
                  <span className="text-parchment-faint opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
