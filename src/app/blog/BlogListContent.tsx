"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { blogPosts } from "@/lib/blog-data";

export default function BlogListContent() {
  const listRef = useRef<HTMLDivElement>(null);
  const listInView = useInView(listRef, { once: true, amount: 0.1 });

  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-16">
        <div className="container-custom">
          <ScrollReveal animation="fadeUp">
            <span className="tag mb-5 block">Blog</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-parchment-light leading-[1.1] mb-6">
              Writings on the Stars
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={2}>
            <div className="accent-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pb-20">
          <div className="container-custom">
            <ScrollReveal animation="fadeUp">
              <Link href={`/blog/${featured.slug}`} className="group block">
                <article className="border-b border-stone-faint/40 pb-12">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="tag">{featured.category}</span>
                    <span className="text-parchment-faint text-xs font-sans">
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl text-parchment-light leading-[1.15] mb-5 group-hover:text-saffron transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <p className="text-parchment-muted text-base leading-relaxed font-sans max-w-3xl mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={featured.authorImage}
                      alt={featured.author}
                      width={28}
                      height={28}
                      className="rounded-full object-cover"
                    />
                    <span className="text-parchment-dim text-xs font-sans">
                      {featured.author}
                    </span>
                    <span className="w-px h-3 bg-stone-faint mx-1" />
                    <span className="text-saffron text-sm font-sans tracking-wide group-hover:tracking-wider transition-all duration-300">
                      Read article
                    </span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Remaining Posts — List */}
      <section className="pb-32">
        <div className="container-custom">
          <motion.div
            ref={listRef}
            variants={staggerContainer}
            initial="hidden"
            animate={listInView ? "visible" : "hidden"}
          >
            {remaining.map((post) => (
              <motion.div key={post.slug} variants={staggerItem}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <article className="py-8 border-b border-stone-faint/30 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-8">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-saffron text-xs font-sans tracking-wider uppercase">
                          {post.category}
                        </span>
                        <span className="text-parchment-faint text-xs font-sans">
                          {formatDate(post.date)}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl text-parchment leading-snug mb-2 group-hover:text-saffron transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-parchment-muted text-sm font-sans leading-relaxed line-clamp-1">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-saffron/60 text-xs font-sans tracking-wide shrink-0 group-hover:text-saffron transition-colors duration-300">
                      {post.readTime}
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {blogPosts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-parchment-muted font-sans">
                No articles published yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
