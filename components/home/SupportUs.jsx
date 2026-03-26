"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { FaHeart } from "react-icons/fa";

export default function SupportUs() {
  return (
    <section className="section-light py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative card overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-20 text-center">
            <AnimatedSection>
              <motion.div
                className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaHeart className="text-2xl text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4 text-balance">
                Help us keep worship <span className="gradient-text">free</span>
              </h2>

              <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                WorshipBuddy is a 501(c)(3) nonprofit. Every donation is tax-deductible
                and goes directly toward building and maintaining free tools for churches worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/donate" className="btn-primary text-center">
                  <span>Support Our Mission</span>
                </Link>
                <Link href="/about" className="btn-outline text-center">
                  Learn About Us
                </Link>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                EIN 93-3532161 · All donations are tax-deductible
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
