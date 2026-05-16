"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  { value: "500+", label: "Churches served" },
  { value: "3", label: "Integrated tools" },
  { value: "100%", label: "Free forever" },
];

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

export default function MissionStatement() {
  return (
    <section className="bg-white border-t border-border py-24 sm:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-8">

        {/* Top: text + stats */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <AnimatedSection>
            <span className="section-label mb-3 block">Our Mission</span>
            <h2 className="font-heading text-[clamp(30px,5vw,52px)] leading-[1.1] text-ink text-balance max-w-xl mb-5" data-buddy-mood="startled">
              No ads. No purchases. Just worship.
            </h2>
            <p className="font-sans text-[17px] text-muted max-w-lg leading-relaxed">
              WorshipBuddy is a 501(c)(3) nonprofit on a mission to equip every
              worship team with free, powerful software. We believe every church —
              regardless of size or budget — deserves professional-grade tools.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="flex items-center">
            <div className="grid grid-cols-3 gap-8 w-full">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="font-mono text-[clamp(28px,4vw,40px)] font-bold text-ink mb-1">
                    {stat.value}
                  </p>
                  <p className="font-sans text-[14px] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom: value cards */}
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
