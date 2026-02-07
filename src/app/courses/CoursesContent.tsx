"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { staggerContainer, staggerItem } from "@/lib/animations";

const courses = [
  {
    title: "Vedic Astrology Foundations",
    subtitle: "Complete Beginner Course",
    description: "Master the fundamentals of Jyotish Shastra. Learn about the 12 Rashis (zodiac signs), 12 Bhavs (houses), and the Navagraha (9 planets). Build a solid foundation for advanced study.",
    modules: 12,
    duration: "24 hours",
    level: "Beginner",
    topics: ["12 Rashis", "12 Bhavs", "Navagraha", "Kundli Basics"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 3" />
        <circle cx="24" cy="24" r="4" fill="currentColor" fillOpacity="0.3" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <line key={a} x1="24" y1="7" x2="24" y2="10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" transform={`rotate(${a} 24 24)`} />
        ))}
      </svg>
    ),
  },
  {
    title: "Planetary Science (Grah Vigyaan)",
    subtitle: "Deep Dive into Navagraha",
    description: "Comprehensive study of all 9 celestial bodies -- Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. Understand their nature, effects, and remedies in detail.",
    modules: 18,
    duration: "36 hours",
    level: "Intermediate",
    topics: ["Sun & Moon", "Mars & Mercury", "Jupiter & Venus", "Saturn, Rahu & Ketu"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="24" cy="24" rx="18" ry="6" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" transform="rotate(-25 24 24)" />
        <circle cx="24" cy="24" r="3" fill="currentColor" fillOpacity="0.4" />
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((a, i) => {
          const rad = (a - 90) * (Math.PI / 180);
          return <circle key={i} cx={24 + 14 * Math.cos(rad)} cy={24 + 14 * Math.sin(rad)} r="1.5" fill="currentColor" fillOpacity={0.3 + i * 0.07} />;
        })}
      </svg>
    ),
  },
  {
    title: "Kundli Reading & Interpretation",
    subtitle: "Birth Chart Mastery",
    description: "Learn to read and interpret birth charts (Kundli) like an expert. Cover Lagna analysis, Dasha systems, transit predictions, and Yogas that shape destiny.",
    modules: 15,
    duration: "30 hours",
    level: "Intermediate",
    topics: ["Lagna Analysis", "Dasha Systems", "Transit Reading", "Yoga Identification"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="6" width="36" height="36" stroke="currentColor" strokeWidth="1.5" />
        <line x1="6" y1="6" x2="42" y2="42" stroke="currentColor" strokeWidth="1" />
        <line x1="42" y1="6" x2="6" y2="42" stroke="currentColor" strokeWidth="1" />
        <line x1="24" y1="6" x2="24" y2="42" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
        <line x1="6" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Numerology Mastery",
    subtitle: "The Science of Numbers",
    description: "Discover the mystical relationship between numbers and life events. Learn name numerology, date numerology, Lo Shu grid, and predictive number analysis.",
    modules: 10,
    duration: "20 hours",
    level: "Beginner",
    topics: ["Name Numerology", "Date Analysis", "Lo Shu Grid", "Predictive Numbers"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <text x="8" y="22" fill="currentColor" fontSize="14" fontWeight="bold" fillOpacity="0.7">1</text>
        <text x="22" y="18" fill="currentColor" fontSize="10" fillOpacity="0.5">9</text>
        <text x="32" y="26" fill="currentColor" fontSize="12" fillOpacity="0.6">7</text>
        <text x="14" y="38" fill="currentColor" fontSize="11" fillOpacity="0.5">3</text>
        <text x="28" y="40" fill="currentColor" fontSize="13" fontWeight="bold" fillOpacity="0.7">8</text>
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    title: "Predictive Astrology",
    subtitle: "Advanced Forecasting Techniques",
    description: "Master advanced prediction methods including Vimshottari Dasha, Ashtakavarga, and transit analysis. Learn to forecast major life events with precision.",
    modules: 14,
    duration: "28 hours",
    level: "Advanced",
    topics: ["Vimshottari Dasha", "Ashtakavarga", "Transit Analysis", "Annual Predictions"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M24 6v36M6 24h36" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.4" />
        <circle cx="24" cy="24" r="2" fill="currentColor" fillOpacity="0.6" />
        <path d="M24 24L32 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 24L18 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Occult Science & Remedies",
    subtitle: "Hidden Wisdom & Practical Solutions",
    description: "Explore esoteric practices, gemstone therapy, mantra remedies, and Yantra science. Learn practical solutions for planetary afflictions and life challenges.",
    modules: 12,
    duration: "24 hours",
    level: "Advanced",
    topics: ["Gemstone Therapy", "Mantra Remedies", "Yantra Science", "Practical Solutions"],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <path d="M24 6L30 18L42 20L33 29L35 42L24 36L13 42L15 29L6 20L18 18L24 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1" />
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1" />
        <circle cx="24" cy="24" r="2" fill="currentColor" fillOpacity="0.5" />
      </svg>
    ),
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermediate: "bg-astro-gold/10 text-astro-gold border-astro-gold/20",
  Advanced: "bg-cosmic-400/10 text-cosmic-300 border-cosmic-400/20",
};

export default function CoursesContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.05 });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-astro-gold/[0.06] blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cosmic-600/[0.08] blur-[100px]" />
          <div className="absolute inset-0 star-field opacity-30" />
        </div>

        <div className="container-custom relative z-10 text-center pt-24">
          <TextReveal>
            <span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-4 block">
              Learn from the Best
            </span>
          </TextReveal>
          <TextReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Our <span className="gold-text">Courses</span>
            </h1>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="max-w-xl mx-auto text-base md:text-lg text-cosmic-200/50 leading-relaxed mb-8">
              Comprehensive courses on Vedic Astrology, Numerology, and Occult
              Science. Structured modules with video lessons, PDF resources, and
              hands-on practice.
            </p>
          </TextReveal>
          <TextReveal delay={0.6}>
            <div className="flex items-center justify-center gap-6 text-sm">
              {[
                { n: "6", l: "Courses" },
                { n: "81", l: "Modules" },
                { n: "162", l: "Hours" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-bold gold-text">{s.n}</div>
                  <div className="text-xs text-cosmic-200/30 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </TextReveal>
        </div>
      </section>

      {/* Course catalog */}
      <section className="section-padding !pt-8">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Complete <span className="gold-text">Course Catalog</span>
              </h2>
              <p className="text-cosmic-200/40 max-w-lg mx-auto">
                From foundations to advanced techniques -- choose the path that
                aligns with your learning goals.
              </p>
            </div>
          </ScrollReveal>

          <motion.div
            ref={gridRef}
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {courses.map((course) => (
              <motion.div key={course.title} variants={staggerItem}>
                <div className="astro-card-hover p-6 md:p-8 h-full group">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-astro-gold/10 border border-astro-gold/20 flex items-center justify-center text-astro-gold group-hover:bg-astro-gold/15 group-hover:border-astro-gold/30 transition-all duration-500">
                      {course.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Level badge */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${levelColors[course.level]}`}>
                          {course.level}
                        </span>
                        <span className="text-[10px] text-cosmic-200/30">
                          {course.modules} modules &bull; {course.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-astro-gold transition-colors duration-300">
                        {course.title}
                      </h3>
                      <p className="text-xs text-astro-gold/50 mb-3">
                        {course.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-cosmic-200/40 leading-relaxed mb-4">
                        {course.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {course.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-[10px] px-2.5 py-1 rounded-full bg-cosmic-800/50 text-cosmic-200/40 border border-cosmic-700/30"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-xs font-medium text-astro-gold/50 group-hover:text-astro-gold transition-all duration-300">
                        <span>View Course Details</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why learn with us */}
      <section className="section-padding relative">
        <div className="absolute inset-0 star-field opacity-15" />
        <div className="container-custom relative">
          <ScrollReveal>
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Why Learn With <span className="gold-text">Ankyotissh</span>
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Video Modules", desc: "Structured HD video lessons organized into comprehensive modules for systematic learning.", icon: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" },
              { title: "PDF Resources", desc: "Downloadable study materials, charts, and reference guides to complement your video learning.", icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
              { title: "Expert Guidance", desc: "Learn directly from Acharya Prateek Bhola with decades of experience in Vedic Astrology.", icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347" },
              { title: "Flexible Learning", desc: "Study at your own pace with lifetime access. Available on all devices with flexible payment options.", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((f, i) => (
              <ScrollReveal key={f.title} animation="fadeUp" delay={i}>
                <div className="astro-card p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-astro-gold/10 border border-astro-gold/20 flex items-center justify-center text-astro-gold mx-auto mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{f.title}</h4>
                  <p className="text-xs text-cosmic-200/40 leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding !pt-0">
        <div className="container-custom max-w-2xl">
          <ScrollReveal>
            <div className="astro-card rounded-3xl p-10 md:p-14 text-center gold-border">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-astro-gold/15 border border-astro-gold/25 flex items-center justify-center animate-glow-gold">
                <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="8" fill="#F5A623" fillOpacity="0.3" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                    <line key={a} x1="24" y1="6" x2="24" y2="12" stroke="#F5A623" strokeWidth="2" strokeLinecap="round" transform={`rotate(${a} 24 24)`} />
                  ))}
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
                Ready to Begin Your Astrological Journey?
              </h2>
              <p className="text-cosmic-200/40 leading-relaxed mb-8">
                Choose your course and start unlocking the cosmic blueprint.
                All courses include lifetime access, expert guidance, and
                comprehensive study materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Link href="/blog" className="btn-primary text-sm">
                    <span>Start with Free Content</span>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/membership" className="btn-secondary text-sm">
                    Join Membership
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
