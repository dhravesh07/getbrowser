"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 star-field opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.06)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,166,35,0.03)_0%,transparent_50%)]" />

      <div className="container-custom relative">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <ScrollReveal>
              <span className="text-xs font-semibold text-astro-gold uppercase tracking-[0.2em] mb-4 block">
                From the Blog
              </span>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
                Latest{" "}
                <span className="gold-text">Astrological Insights</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={2}>
            <Link
              href="/blog"
              className="btn-secondary text-xs !px-6 !py-2.5 shrink-0"
            >
              View All Articles
            </Link>
          </ScrollReveal>
        </div>

        {/* Cosmic divider below header */}
        <ScrollReveal delay={2}>
          <div className="cosmic-divider mb-12" />
        </ScrollReveal>

        {/* Blog grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {previewPosts.map((post) => (
            <motion.div key={post.slug} variants={staggerItem}>
              <Link href={`/blog/${post.slug}`} className="block group h-full">
                <article className="astro-card-hover p-6 h-full flex flex-col">
                  {/* Category badge and read time */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-semibold text-astro-gold uppercase tracking-wider px-3 py-1 rounded-full bg-astro-gold/10 border border-astro-gold/20">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-cosmic-200/30">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-astro-gold transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-cosmic-200/40 leading-relaxed mb-5 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Gold divider between content and footer */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-astro-gold/20 to-transparent mb-4" />

                  {/* Author & date */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {/* Author avatar with gold gradient circle */}
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-astro-gold via-astro-sun to-astro-amber flex items-center justify-center shadow-sm shadow-astro-gold/20">
                        <span className="text-[10px] font-bold text-sky-deep">
                          AP
                        </span>
                      </div>
                      <span className="text-xs text-cosmic-200/50">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-xs text-cosmic-200/25">{post.date}</span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
