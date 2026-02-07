"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { blogPosts, blogCategories } from "@/lib/blog-data";

export default function BlogListContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.05 });

  const filteredPosts = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-astro-gold/[0.05] blur-[120px]" />
          <div className="absolute inset-0 star-field opacity-25" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <TextReveal><span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-4 block">Insights & Articles</span></TextReveal>
          <TextReveal delay={0.2}><h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5">The <span className="gold-text">Astrology Blog</span></h1></TextReveal>
          <TextReveal delay={0.4}><p className="max-w-lg mx-auto text-cosmic-200/50 leading-relaxed">Explore Vedic Astrology, Planetary Science, and Occult Science through in-depth articles by Acharya Prateek Bhola.</p></TextReveal>
        </div>
      </section>

      {/* Category filter */}
      <section className="pb-12">
        <div className="container-custom">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2">
              {blogCategories.map((cat) => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-xs px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === cat ? "bg-astro-gold text-sky-deep shadow-lg shadow-astro-gold/25" : "bg-cosmic-800/40 text-cosmic-200/40 border border-astro-gold/10 hover:text-astro-gold/70 hover:border-astro-gold/20"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-padding !pt-0">
        <div className="container-custom">
          <motion.div ref={gridRef} variants={staggerContainer} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, i) => (
                <motion.div key={post.slug} variants={staggerItem} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                  <Link href={`/blog/${post.slug}`} className="block group h-full">
                    <article className="astro-card-hover p-6 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-semibold text-astro-gold uppercase tracking-wider px-3 py-1 rounded-full bg-astro-gold/10 border border-astro-gold/20">{post.category}</span>
                        <span className="text-[10px] text-cosmic-200/30">{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-semibold text-white mb-3 group-hover:text-astro-gold transition-colors duration-300 line-clamp-2">{post.title}</h2>
                      <p className="text-sm text-cosmic-200/40 leading-relaxed mb-5 line-clamp-3 flex-1">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {post.tags.slice(0, 3).map((tag) => (<span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-cosmic-800/50 text-cosmic-200/30 border border-cosmic-700/30">{tag}</span>))}
                      </div>
                      <div className="cosmic-divider mb-4" />
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-astro-gold to-astro-amber flex items-center justify-center"><span className="text-[10px] font-bold text-sky-deep">AP</span></div>
                          <span className="text-xs text-cosmic-200/40">{post.author}</span>
                        </div>
                        <span className="text-xs text-cosmic-200/20">{post.date}</span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {filteredPosts.length === 0 && (<div className="text-center py-20"><p className="text-cosmic-200/40">No articles found in this category yet.</p></div>)}
        </div>
      </section>
    </>
  );
}
