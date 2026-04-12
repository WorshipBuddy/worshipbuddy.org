"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const trustBadges = ["No Ads", "No In-App Purchases", "501(c)(3) Nonprofit", "Free Forever"];


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
          <Link href="/about" className="btn btn-primary btn-lg">
            Read our story
          </Link>
          <Link href="/donate" className="btn btn-ghost btn-lg">
            Support our mission
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

        <div className="pb-24" />
      </div>
    </section>
  );
}
