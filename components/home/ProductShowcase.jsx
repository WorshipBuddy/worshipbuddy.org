"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { FaMusic, FaCalendarAlt, FaDesktop } from "react-icons/fa";

const products = [
  {
    name: "WorshipBuddy",
    tagline: "Your church's music library",
    description:
      "Host all your church's music in one place — originals, purchased songs, and multiple language versions. Manage everything through the admin portal and share it with your team.",
    icon: FaMusic,
    href: "/worship-buddy",
    color: "from-blue-500 to-cyan-500",
    iconBg: "text-blue-600 bg-blue-50",
  },
  {
    name: "ChurchBuddy",
    tagline: "Scheduling that actually works",
    description:
      "Coordinate ministry teams, manage services, assign roles, and keep your entire church organized.",
    icon: FaCalendarAlt,
    href: "/church-buddy",
    color: "from-purple-500 to-pink-500",
    iconBg: "text-purple-600 bg-purple-50",
  },
  {
    name: "PresenterBuddy",
    tagline: "Present with confidence",
    description:
      "Professional presentation software for worship — from a simple lyrics display to a full production suite with NDI & remote control.",
    icon: FaDesktop,
    href: "/presenter-buddy",
    color: "from-orange-500 to-amber-500",
    iconBg: "text-orange-600 bg-orange-50",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="section-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <p className="text-brand font-semibold text-sm uppercase tracking-wider mb-3">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-6 text-balance">
            Everything your church needs.{" "}
            <span className="gradient-text">One platform.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Three powerful tools designed to work together seamlessly.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={product.name} delay={index * 0.15}>
              <Link href={product.href} className="block group">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="card p-8 h-full relative overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className={`w-14 h-14 rounded-2xl ${product.iconBg} flex items-center justify-center mb-6`}>
                    <product.icon className="text-2xl" />
                  </div>

                  <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2 group-hover:text-brand transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <span className="inline-flex items-center text-sm font-semibold text-brand group-hover:gap-2 transition-all duration-200">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
