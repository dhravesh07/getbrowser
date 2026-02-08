"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { blogPosts } from "@/lib/blog-data";

export default function BlogPreviewSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.1 });

  const previewPosts = blogPosts.slice(0, 3);
  const featured = previewPosts[0];
  const secondary = previewPosts.slice(1);

  return (
    <section className="section-padding relative overflow-hidden bg-void-surface">
      <div className="container-custom relative">

        {/* -------------------------------------------------------- */}
        {/* SECTION HEADER — tag + heading left, "View All" right    */}
        {/* -------------------------------------------------------- */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <ScrollReveal animation="fadeUp">
              <span className="tag mb-4 block">From the Blog</span>
            </ScrollReveal>
            <ScrollReveal animation="fadeUp" delay={1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-parchment leading-tight">
                Latest Writings
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal animation="fadeUp" delay={2}>
            <Link
              href="/blog"
              className="font-sans text-sm text-saffron hover:text-saffron-light transition-colors duration-300 tracking-wide shrink-0 group flex items-center gap-2"
            >
              View All
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Top rule */}
        <ScrollReveal animation="fadeIn" delay={2}>
          <div className="h-px bg-copper/10 mb-0" />
        </ScrollReveal>

        {/* -------------------------------------------------------- */}
        {/* FEATURED POST — full width, newspaper front page feel    */}
        {/* -------------------------------------------------------- */}
        <motion.div
          ref={gridRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={staggerItem}>
            <Link
              href={`/blog/${featured.slug}`}
              className="block group py-10 md:py-12"
            >
              <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                {/* Left column: title + excerpt */}
                <div className="md:col-span-8">
                  <span className="tag text-[10px] mb-4 block">
                    {featured.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl lg:text-[2.1rem] text-parchment leading-snug mb-4 group-hover:text-saffron transition-colors duration-300 max-w-2xl">
                    {featured.title}
                  </h3>
                  <p className="font-sans text-parchment-muted text-[15px] leading-relaxed max-w-xl line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <span className="font-sans text-xs text-parchment-faint mt-5 block">
                    By {featured.author}
                  </span>
                </div>

                {/* Right column: date, read time, read link */}
                <div className="md:col-span-4 flex flex-row md:flex-col md:items-end gap-3 md:gap-4 md:pt-2">
                  <span className="font-sans text-xs text-parchment-faint tracking-wide">
                    {featured.date}
                  </span>
                  <span className="font-sans text-xs text-parchment-faint tracking-wide">
                    {featured.readTime}
                  </span>
                  <span className="font-sans text-sm text-saffron group-hover:text-saffron-light transition-colors duration-300 flex items-center gap-1.5 mt-auto md:mt-4">
                    Read
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
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
                  </span>
                </div>
              </article>
            </Link>
          </motion.div>

          {/* Divider between featured and secondary */}
          <motion.div variants={staggerItem}>
            <div className="h-px bg-copper/10" />
          </motion.div>

          {/* -------------------------------------------------------- */}
          {/* SECONDARY POSTS — two side by side, simpler format       */}
          {/* -------------------------------------------------------- */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {secondary.map((post, index) => (
              <motion.div
                key={post.slug}
                variants={staggerItem}
                className={
                  index === 0
                    ? "md:border-r md:border-copper/10 md:pr-10"
                    : "md:pl-10"
                }
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group py-8 md:py-10"
                >
                  <article>
                    <span className="tag text-[10px] mb-3 block">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg md:text-xl text-parchment leading-snug mb-3 group-hover:text-saffron transition-colors duration-300">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-3">
                        <span className="font-sans text-xs text-parchment-faint">
                          {post.date}
                        </span>
                        <span className="w-px h-3 bg-copper/15" />
                        <span className="font-sans text-xs text-parchment-faint">
                          {post.readTime}
                        </span>
                      </div>
                      <span className="font-sans text-sm text-saffron group-hover:text-saffron-light transition-colors duration-300 flex items-center gap-1">
                        Read
                        <svg
                          className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"
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
                      </span>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom rule */}
          <motion.div variants={staggerItem}>
            <div className="h-px bg-copper/10" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
