"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";

const values = [
  {
    label: "Built for Worship",
    description:
      "Every tool is designed by worship leaders, for worship leaders. We understand the unique rhythms of church music ministry.",
    dot: "bg-wb",
  },
  {
    label: "Free for Every Church",
    description:
      "As a 501(c)(3) nonprofit, we believe every church — regardless of size or budget — deserves professional-grade tools.",
    dot: "bg-cb",
  },
  {
    label: "Community Driven",
    description:
      "Our platform grows through the feedback of worship teams worldwide. Your input shapes what we build next.",
    dot: "bg-pb",
  },
];

export default function WhoWeAre() {
  return (
    <section className="bg-surface border-t border-border py-24 sm:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-8">

        <AnimatedSection className="mb-14">
          <span className="section-label mb-3 block">Who We Are</span>
          <h2 className="font-heading text-[clamp(30px,5vw,52px)] leading-[1.1] text-ink text-balance max-w-2xl mb-5">
            No ads. No purchases. Just worship.
          </h2>
          <p className="font-sans text-[17px] text-muted max-w-xl leading-relaxed">
            WorshipBuddy is a nonprofit on a mission to equip every worship team with
            free, powerful software — from song management to live presentation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <AnimatedSection key={v.label} delay={i * 0.12} className="card p-8">
              <div className={`w-2 h-2 rounded-full ${v.dot} mb-6`} />
              <h3 className="font-sans font-semibold text-[17px] text-ink mb-3">{v.label}</h3>
              <p className="font-sans text-[15px] text-muted leading-relaxed">{v.description}</p>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
