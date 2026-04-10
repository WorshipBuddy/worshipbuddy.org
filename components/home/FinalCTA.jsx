"use client";

import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function FinalCTA() {
  return (
    <section className="bg-dark border-t border-white/5 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-[clamp(30px,5vw,56px)] leading-[1.1] text-white text-balance max-w-2xl mx-auto mb-5">
            Ready to get started?
          </h2>
          <p className="font-sans text-[17px] mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Free forever. No credit card. No catch.
          </p>

          <Link href="#products" className="btn btn-primary btn-lg">
            Explore the suite
          </Link>

          <p className="font-mono text-[11px] mt-8" style={{ color: "rgba(255,255,255,0.25)" }}>
            501(c)(3) nonprofit · EIN 93-3532161
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
