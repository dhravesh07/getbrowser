"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";

const services = [
  {
    title: "Courses",
    description:
      "Comprehensive courses on Vedic Astrology, Numerology, and Occult Science. Learn from structured modules with videos, PDFs, and interactive content.",
    href: "/courses",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Graduation cap base */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 9.5l10-5 10 5-10 5-10-5z" />
        {/* Cap tassel side */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 9.5v5.5c0 1.5-3.5 3.5-8 3.5s-8-2-8-3.5V9.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 9.5v3" />
        {/* Star decorations */}
        <circle cx="5" cy="5" r="0.6" fill="currentColor" />
        <circle cx="19" cy="4.5" r="0.5" fill="currentColor" />
        <circle cx="12" cy="2" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Blog",
    description:
      "In-depth articles on planetary astrology, Rahu and Ketu influences, rising signs, and the wisdom of Jyotish Shastra by Acharya Prateek Bhola.",
    href: "/blog",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Open book left page */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 4.5c2-1 4.5-1.5 6-1.5 2 0 3.5.5 4 1v15c-.5-.5-2-1-4-1-1.5 0-4 .5-6 1.5V4.5z" />
        {/* Open book right page */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M22 4.5c-2-1-4.5-1.5-6-1.5-2 0-3.5.5-4 1v15c.5-.5 2-1 4-1 1.5 0 4 .5 6 1.5V4.5z" />
        {/* Cosmic rays emanating from spine */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 2v-0.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.5 1.5l0.5 0.8" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.5 1.5l-0.5 0.8" />
        {/* Small cosmic dots */}
        <circle cx="8" cy="1" r="0.4" fill="currentColor" />
        <circle cx="16" cy="0.8" r="0.35" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Webinars",
    description:
      "Join live interactive sessions and webinars on astrology topics. Get real-time insights, ask questions, and deepen your understanding.",
    href: "/webinars",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Video camera body */}
        <rect x="2" y="6" width="14" height="12" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* Camera lens / record indicator */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10l5-3v10l-5-3" />
        {/* Constellation dots on the camera body */}
        <circle cx="6" cy="10" r="0.6" fill="currentColor" />
        <circle cx="10" cy="13" r="0.6" fill="currentColor" />
        <circle cx="8" cy="10.5" r="0.5" fill="currentColor" />
        {/* Constellation lines */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M6 10l2 0.5 2 2.5" />
      </svg>
    ),
  },
  {
    title: "AI Avatar",
    description:
      "Experience AI-powered astrology learning tools. Interact with our intelligent avatar for personalized astrological insights and guidance.",
    href: "/courses",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Central star burst */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
        {/* Upper-right sparkle */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 2l0.75 2.25L22 5l-2.25 0.75L19 8l-0.75-2.25L16 5l2.25-0.75L19 2z" />
        {/* Lower-left sparkle */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 14l0.6 1.8L9.4 16.4l-1.8 0.6L7 18.8l-0.6-1.8L4.6 16.4l1.8-0.6L7 14z" />
        {/* Lower-right sparkle */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l0.5 1.5L19 18l-1.5 0.5L17 20l-0.5-1.5L15 18l1.5-0.5L17 16z" />
        {/* Radiating dots */}
        <circle cx="3" cy="10" r="0.5" fill="currentColor" />
        <circle cx="21" cy="12" r="0.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Digital Products",
    description:
      "Access downloadable resources, charts, guides, and tools for your astrological practice. Premium digital products for serious learners.",
    href: "/products",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Scroll body */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 3c-1.5 0-3 1-3 2.5S5.5 8 7 8h1V19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H7z" />
        {/* Scroll curl top */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5C4 6.88 5.34 8 7 8" />
        {/* Chart lines on scroll */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 10h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 13h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 16h5" />
        {/* Astro symbol on scroll */}
        <circle cx="11" cy="10" r="0" />
        <circle cx="9" cy="13" r="0.7" stroke="currentColor" strokeWidth={1} fill="none" />
        <path strokeLinecap="round" strokeWidth={0.8} d="M8.5 12.3l1 1.4" />
      </svg>
    ),
  },
  {
    title: "Membership",
    description:
      "Get exclusive access to premium content, live sessions, and community features with our membership plans. Flexible subscription options available.",
    href: "/membership",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        {/* Star badge outer shape */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 4.8 5.3.8-3.85 3.75.9 5.3L12 14.25l-4.75 2.4.9-5.3L4.3 7.6l5.3-.8L12 2z" />
        {/* Badge ribbon left */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 16l-1.5 6 3.5-2" />
        {/* Badge ribbon right */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 16l1.5 6-3.5-2" />
        {/* Inner star detail */}
        <circle cx="12" cy="9" r="2" strokeWidth={1} />
        {/* Small accent dots */}
        <circle cx="12" cy="9" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section-padding relative overflow-hidden bg-sky-midnight">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 star-field" />

      <div className="container-custom relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-4 block">
              What We Offer
            </span>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
              Your Gateway to{" "}
              <span className="gold-text">Cosmic Knowledge</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <div className="cosmic-divider mx-auto mb-6" />
            <p className="text-cosmic-200/40 leading-relaxed">
              From structured courses to live webinars, digital resources to
              AI-powered tools — everything you need to master Vedic Astrology
              and Occult Science.
            </p>
          </ScrollReveal>
        </div>

        {/* Services grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Link href={service.href} className="block group">
                <div
                  className="astro-card-hover p-7 h-full hover:shadow-astro-gold/20 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-astro-gold to-astro-amber flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-500"
                  >
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-astro-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-cosmic-200/40 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-white/30 group-hover:text-astro-gold transition-all duration-300">
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
