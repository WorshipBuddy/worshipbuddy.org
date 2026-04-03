"use client";

import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function SupportUs() {
  return (
    <section className="bg-surface border-t border-border py-24 sm:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="card p-10 sm:p-16 lg:p-20">
          <AnimatedSection>
            <div className="max-w-2xl">
              <span className="section-label mb-4 block">Support the Mission</span>
              <h2 className="font-heading text-[clamp(28px,4vw,46px)] leading-[1.12] text-ink mb-5 text-balance">
                Help us keep worship free
              </h2>
              <p className="font-sans text-[17px] text-muted leading-relaxed mb-8 max-w-xl">
                WorshipBuddy is a 501(c)(3) nonprofit. Every donation is tax-deductible
                and goes directly toward building and maintaining free tools for
                churches worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/donate" className="btn btn-primary btn-lg">
                  Support our mission
                </Link>
                <Link href="/about" className="btn btn-ghost btn-lg">
                  Learn about us
                </Link>
              </div>
              <p className="font-mono text-[11px] text-muted mt-6">
                EIN 93-3532161 · All donations are tax-deductible
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
