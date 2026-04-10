"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const trustBadges = ["No Ads", "No In-App Purchases", "501(c)(3) Nonprofit", "Free Forever"];

const products = [
  {
    id: "cb",
    name: "ChurchBuddy",
    tagline: "Church management, simplified",
    description: "Coordinate ministry teams, manage services, and assign roles — no spreadsheets.",
    href: "/church-buddy",
    color: "#0B7261",
    lightBg: "bg-cb-light",
    imageLabel: "Team schedule view",
  },
  {
    id: "wb",
    name: "WorshipBuddy",
    tagline: "Your church's music library",
    description: "Full lyrics, chords, transposition, and worship sets for your whole team.",
    href: "/worship-buddy",
    color: "#0C245E",
    lightBg: "bg-wb-light",
    imageLabel: "Song library browser",
  },
  {
    id: "pb",
    name: "PresenterBuddy",
    tagline: "Present with confidence",
    description: "Professional worship presentation — from simple lyrics to full NDI production.",
    href: "/presenter-buddy",
    color: "#1E6B8A",
    lightBg: "bg-pb-light",
    imageLabel: "Live lyrics display",
  },
];

export default function SuiteHero() {
  return (
    <section className="bg-surface pt-[60px]">
      <div className="max-w-content mx-auto px-6 lg:px-8 pt-20 pb-0 text-center">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-wb bg-wb-light px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-wb" />
            Free tools for every church
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.08)}
          className="font-heading text-[clamp(46px,8vw,88px)] leading-[1.04] tracking-[-0.02em] text-ink text-balance mx-auto max-w-4xl mb-6"
        >
          Everything your worship{" "}
          <em className="not-italic text-wb">team needs</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.15)}
          className="font-sans text-[18px] text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Song management, team scheduling, and live presentation — built by
          worship leaders, free forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
        >
          <Link href="#products" className="btn btn-primary btn-lg">
            Explore the suite
          </Link>
          <Link href="/about" className="btn btn-ghost btn-lg">
            Read our story
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.28)}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-16"
        >
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center text-white text-[8px] font-bold">✓</span>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Product cards — 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid md:grid-cols-3 gap-5 pb-24 text-left"
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="card border-l-4 p-0 overflow-hidden hover:shadow-card-hover transition-shadow duration-200 group"
              style={{ borderLeftColor: product.color }}
            >
              {/* Placeholder image */}
              <div className={`${product.lightBg} aspect-[16/10] flex items-center justify-center border-b border-border`}>
                <div className="text-center">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-wider" style={{ color: product.color }}>
                    {product.name}
                  </p>
                  <p className="font-sans text-[13px] text-muted mt-1">
                    {product.imageLabel}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: product.color }} />
                  <span className="font-mono text-[12px] font-semibold tracking-tight" style={{ color: product.color }}>
                    {product.name}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-[17px] text-ink mb-2">
                  {product.tagline}
                </h3>
                <p className="font-sans text-[14px] text-muted leading-relaxed">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
