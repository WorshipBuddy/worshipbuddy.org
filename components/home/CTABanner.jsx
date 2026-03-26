"use client";

import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTABanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden section-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white mb-6 text-balance">
            Ready to transform your{" "}
            <span className="text-blue-300">worship experience?</span>
          </h2>

          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto mb-10">
            Join hundreds of churches already using WorshipBuddy tools.
            Free forever — no credit card, no catch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/worship-buddy" className="btn-white text-center">
              <span>Get WorshipBuddy</span>
            </Link>
            <Link
              href="/presenter-buddy"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
            >
              Try PresenterBuddy
            </Link>
            <Link
              href="/church-buddy"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
            >
              Try ChurchBuddy
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
