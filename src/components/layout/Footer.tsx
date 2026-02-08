"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const footerLinks = {
  platform: [
    { name: "Courses", href: "/courses" },
    { name: "Webinars", href: "/webinars" },
    { name: "Digital Products", href: "/products" },
    { name: "Membership", href: "/membership" },
  ],
  content: [
    { name: "Blog", href: "/blog" },
    { name: "Vedic Astrology", href: "/blog" },
    { name: "Numerology", href: "/blog" },
    { name: "Planetary Science", href: "/blog" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/about" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Use", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-void-deep border-t border-copper/8">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <ScrollReveal animation="fadeUp" className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <Image
                src="/images/logo.png"
                alt="Ankyotissh"
                width={32}
                height={32}
                className="rounded-sm"
              />
              <span className="text-parchment text-sm font-serif font-semibold tracking-wide">
                Ankyotissh
              </span>
            </div>
            <p className="text-sm text-parchment-faint leading-relaxed max-w-sm mb-6">
              Unlock the ancient wisdom of Vedic Astrology, Numerology, and
              Occult Science through modern digital learning. Guided by Acharya
              Prateek Bhola.
            </p>
            <div className="flex items-center gap-4">
              {["Facebook", "Instagram", "YouTube"].map((name) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="text-sm text-parchment-faint hover:text-saffron transition-colors duration-300 font-sans"
                >
                  {name}
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Link columns */}
          {(
            [
              ["Platform", footerLinks.platform, 1],
              ["Content", footerLinks.content, 2],
              ["Company", footerLinks.company, 3],
            ] as const
          ).map(([title, links, delay]) => (
            <ScrollReveal key={title} animation="fadeUp" delay={delay}>
              <h4 className="text-sm font-sans font-semibold text-parchment-muted mb-4 tracking-widest uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      className="text-sm text-parchment-faint hover:text-saffron-light transition-colors duration-300"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-copper/8 mt-14" />
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-parchment-faint font-sans">
            &copy; {new Date().getFullYear()} Ankyotissh. All rights reserved.
          </p>
          <p className="text-sm text-parchment-faint/70 font-sans tracking-wider">
            Jyotish Shastra &middot; Grah Vigyaan &middot; India
          </p>
        </div>
      </div>
    </footer>
  );
}
