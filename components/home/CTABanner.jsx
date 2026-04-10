"use client";

import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="bg-dark border-t border-white/5 py-24 sm:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center">

          {/* Logo in dark context */}
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 relative">
              <Image
                src="/worship-buddy-white-logo.png"
                alt="WorshipBuddy"
                width={48}
                height={48}
                className="object-contain brightness-0 invert opacity-80"
              />
            </div>
          </div>

          <h2 className="font-heading text-[clamp(30px,5vw,56px)] leading-[1.1] text-white text-balance max-w-3xl mx-auto mb-5">
            Ready to transform your worship experience?
          </h2>
          <p className="font-sans text-[17px] mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Join hundreds of churches already using WorshipBuddy tools.
            Free forever — no credit card, no catch.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/worship-buddy" className="btn btn-wb btn-lg">
              Get WorshipBuddy
            </Link>
            <Link href="/church-buddy" className="btn btn-cb btn-lg">
              Get ChurchBuddy
            </Link>
            <Link href="/presenter-buddy" className="btn btn-pb btn-lg">
              Get PresenterBuddy
            </Link>
          </div>

          <p className="font-mono text-[11px] mt-8" style={{ color: "rgba(255,255,255,0.25)" }}>
            501(c)(3) nonprofit · EIN 93-3532161 · Free forever
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
