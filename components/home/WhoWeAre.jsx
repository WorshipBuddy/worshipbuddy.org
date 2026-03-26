"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { FaMusic, FaChurch, FaHandsHelping } from "react-icons/fa";

const values = [
  {
    icon: FaMusic,
    title: "Built for Worship",
    description:
      "Every tool we build is designed by worship leaders, for worship leaders. We understand the unique needs of church music ministry.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: FaChurch,
    title: "Free for Every Church",
    description:
      "As a 501(c)(3) nonprofit, we believe every church — regardless of size or budget — deserves professional-grade worship tools.",
    color: "text-purple-600 bg-purple-50",
  },
  {
    icon: FaHandsHelping,
    title: "Community Driven",
    description:
      "Our platform grows through the feedback and contributions of worship teams worldwide. Your input shapes our roadmap.",
    color: "text-orange-600 bg-orange-50",
  },
];

export default function WhoWeAre() {
  return (
    <section className="section-light py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Who We Are
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 text-balance">
            No ads. No purchases.{" "}
            <span className="gradient-text">Just worship.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            WorshipBuddy is a nonprofit organization on a mission to equip every worship
            team with free, powerful software — from song management to live presentation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <AnimatedSection
              key={value.title}
              delay={index * 0.15}
              className="card-hover p-8"
            >
              <div className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-5`}>
                <value.icon className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {value.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
