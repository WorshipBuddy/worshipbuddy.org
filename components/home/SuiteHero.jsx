"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-button";

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
    <>
      {/* ── Dark hero with WebGL shader ── */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-[60px]">
        <WebGLShader />

        {/* Subtle overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-dark/40 z-[1]" />

        <div className="relative z-10 w-full max-w-content mx-auto px-6 lg:px-8 py-20">
          {/* Double-border container — nod to the demo layout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="border border-white/10 p-1.5 max-w-3xl mx-auto"
          >
            <div className="border border-white/10 px-8 py-14 text-center">

              {/* Eyebrow */}
              <motion.div {...fadeUp(0.08)} className="mb-7 flex justify-center">
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-white/70 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                  Free tools for every church
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp(0.14)}
                className="font-heading text-[clamp(42px,7vw,80px)] leading-[1.05] tracking-[-0.02em] text-white text-balance mx-auto max-w-2xl mb-6"
              >
                Everything your worship{" "}
                <em className="not-italic text-white/70">team needs</em>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                {...fadeUp(0.2)}
                className="font-sans text-[17px] text-white/70 max-w-lg mx-auto mb-10 leading-relaxed"
              >
                Song management, team scheduling, and live presentation — built by
                worship leaders, free forever.
              </motion.p>

              {/* CTAs */}
              <motion.div
                {...fadeUp(0.26)}
                className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
              >
                <Link href="#products">
                  <LiquidButton size="lg" className="text-white border border-white/20">
                    Explore the suite
                  </LiquidButton>
                </Link>
                <Link href="/about">
                  <LiquidButton size="lg" className="text-white/75 border border-white/15">
                    Read our story
                  </LiquidButton>
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                {...fadeUp(0.32)}
                className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
              >
                {trustBadges.map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 font-mono text-[11px] text-white/60">
                    <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 flex items-center justify-center text-white text-[8px] font-bold">✓</span>
                    {badge}
                  </span>
                ))}
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Product cards — light surface ── */}
      <section id="products" className="bg-surface py-20">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="grid md:grid-cols-3 gap-5 text-left"
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
    </>
  );
}
