"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface BlogPost {
  title: string;
  content: string;
  date: string;
  author: string;
  authorImage: string;
  category: string;
  readTime: string;
  tags: string[];
}

interface Props {
  post: BlogPost;
}

export default function BlogArticleContent({ post }: Props) {
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
      {/* Back Link */}
      <section className="pt-32 pb-4">
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-saffron text-sm font-sans hover:text-saffron-light transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              Back to Blog
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Header */}
      <section className="pt-8 pb-12">
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <span className="tag mb-5 block">{post.category}</span>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-parchment-light leading-[1.15] mb-6">
              {post.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={2}>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={post.authorImage}
                alt={post.author}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <div className="font-sans">
                <span className="text-parchment-dim text-base block">{post.author}</span>
                <span className="text-parchment-faint text-sm">
                  {formatDate(post.date)} &middot; {post.readTime}
                </span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={3}>
            <div className="accent-line" />
          </ScrollReveal>
        </div>
      </section>

      {/* Article Body */}
      <section className="pb-16">
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollReveal animation="fadeIn">
            <div className="text-parchment-dim text-lg leading-relaxed font-sans whitespace-pre-line">
              {post.content}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-32">
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollReveal animation="fadeUp">
            <div className="border-t border-stone-faint/40 pt-8">
              <span className="text-parchment-faint text-sm font-sans uppercase tracking-wider mb-4 block">
                Tagged
              </span>
              <p className="text-saffron text-base font-sans leading-relaxed">
                {post.tags.join(", ")}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
