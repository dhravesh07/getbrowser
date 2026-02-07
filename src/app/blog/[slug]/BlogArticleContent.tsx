"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextReveal from "@/components/ui/TextReveal";
import type { BlogPost } from "@/lib/blog-data";
import { blogPosts } from "@/lib/blog-data";

interface Props {
  post: BlogPost;
}

export default function BlogArticleContent({ post }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary-500/8 blur-[120px]" />
          <div className="absolute inset-0 dot-pattern opacity-15" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="container-custom relative z-10 max-w-3xl mx-auto"
        >
          {/* Back link */}
          <TextReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/60 transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to Blog
            </Link>
          </TextReveal>

          {/* Category */}
          <TextReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold text-primary-400 uppercase tracking-wider px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20">
                {post.category}
              </span>
              <span className="text-xs text-white/30">{post.readTime}</span>
            </div>
          </TextReveal>

          {/* Title */}
          <TextReveal delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
          </TextReveal>

          {/* Excerpt */}
          <TextReveal delay={0.3}>
            <p className="text-lg text-white/40 leading-relaxed mb-8">
              {post.excerpt}
            </p>
          </TextReveal>

          {/* Author & date */}
          <TextReveal delay={0.4}>
            <div className="flex items-center gap-4 pb-8 border-b border-white/[0.06]">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                <span className="text-sm font-bold text-white">AP</span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  {post.author}
                </div>
                <div className="text-xs text-white/30">{post.date}</div>
              </div>
            </div>
          </TextReveal>
        </motion.div>
      </section>

      {/* Article content */}
      <section className="pb-20">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="prose prose-invert prose-lg max-w-none">
            {paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} animation="fadeUp" delay={0}>
                <p className="text-white/50 leading-relaxed mb-6 text-base">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Tags */}
          <ScrollReveal animation="fadeUp">
            <div className="mt-12 pt-8 border-t border-white/[0.06]">
              <h4 className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-4">
                Tags
              </h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-padding border-t border-white/[0.06]">
        <div className="container-custom max-w-4xl mx-auto">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              More Articles
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related, i) => (
              <ScrollReveal key={related.slug} animation="fadeUp" delay={i}>
                <Link
                  href={`/blog/${related.slug}`}
                  className="block group"
                >
                  <article className="glass-card-hover p-6">
                    <span className="text-[10px] font-semibold text-primary-400 uppercase tracking-wider px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20">
                      {related.category}
                    </span>
                    <h4 className="text-base font-semibold text-white mt-4 mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-sm text-white/40 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
