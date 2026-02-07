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
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const paragraphs = post.content.split("\n\n");

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-astro-gold/[0.05] blur-[120px]" />
          <div className="absolute inset-0 star-field opacity-15" />
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="container-custom relative z-10 max-w-3xl mx-auto">
          <TextReveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-astro-gold/50 hover:text-astro-gold transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              Back to Blog
            </Link>
          </TextReveal>

          <TextReveal delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-[10px] font-semibold text-astro-gold uppercase tracking-wider px-3 py-1 rounded-full bg-astro-gold/10 border border-astro-gold/20">{post.category}</span>
              <span className="text-xs text-cosmic-200/30">{post.readTime}</span>
            </div>
          </TextReveal>

          <TextReveal delay={0.2}><h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1></TextReveal>
          <TextReveal delay={0.3}><p className="text-lg text-cosmic-200/50 leading-relaxed mb-8">{post.excerpt}</p></TextReveal>

          <TextReveal delay={0.4}>
            <div className="flex items-center gap-4 pb-8">
              <div className="cosmic-divider flex-1" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-astro-gold to-astro-amber flex items-center justify-center"><span className="text-sm font-bold text-sky-deep">AP</span></div>
                <div>
                  <div className="text-sm font-medium text-white">{post.author}</div>
                  <div className="text-xs text-cosmic-200/30">{post.date}</div>
                </div>
              </div>
              <div className="cosmic-divider flex-1" />
            </div>
          </TextReveal>
        </motion.div>
      </section>

      {/* Article content */}
      <section className="pb-20">
        <div className="container-custom max-w-3xl mx-auto">
          {paragraphs.map((paragraph, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={0}>
              <p className="text-cosmic-200/50 leading-relaxed mb-6 text-base">{paragraph}</p>
            </ScrollReveal>
          ))}

          <ScrollReveal animation="fadeUp">
            <div className="mt-12 pt-8">
              <div className="cosmic-divider mb-6" />
              <h4 className="text-xs font-semibold text-astro-gold/50 uppercase tracking-wider mb-4">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (<span key={tag} className="text-xs px-4 py-2 rounded-full bg-cosmic-800/50 border border-astro-gold/10 text-cosmic-200/40">{tag}</span>))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related articles */}
      <section className="section-padding">
        <div className="cosmic-divider" />
        <div className="container-custom max-w-4xl mx-auto pt-16">
          <ScrollReveal><h3 className="text-2xl font-bold text-white mb-8 text-center">More <span className="gold-text">Articles</span></h3></ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((related, i) => (
              <ScrollReveal key={related.slug} animation="fadeUp" delay={i}>
                <Link href={`/blog/${related.slug}`} className="block group">
                  <article className="astro-card-hover p-6">
                    <span className="text-[10px] font-semibold text-astro-gold uppercase tracking-wider px-3 py-1 rounded-full bg-astro-gold/10 border border-astro-gold/20">{related.category}</span>
                    <h4 className="text-base font-semibold text-white mt-4 mb-2 group-hover:text-astro-gold transition-colors line-clamp-2">{related.title}</h4>
                    <p className="text-sm text-cosmic-200/40 line-clamp-2">{related.excerpt}</p>
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
