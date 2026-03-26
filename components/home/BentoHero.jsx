"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import EcosystemSimulation from "./EcosystemSimulation";

export default function BentoHero() {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-surface to-surface" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Free tools for every church
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-gray-900 leading-[1.1] mb-6"
          >
            Everything your worship team{" "}
            <span className="gradient-text">needs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8"
          >
            Song management, church scheduling, and presentation software —
            built by worship leaders, free forever.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="#products" className="btn-primary text-center">
              <span>Explore Products</span>
            </Link>
            <Link href="/about" className="btn-outline text-center">
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Ecosystem simulation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <EcosystemSimulation />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-6 justify-center text-sm text-gray-400"
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            No Ads
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            No In-App Purchases
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            501(c)(3) Nonprofit
          </span>
        </motion.div>
      </div>
    </section>
  );
}
