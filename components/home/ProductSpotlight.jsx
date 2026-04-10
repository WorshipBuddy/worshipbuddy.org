"use client";

import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ChurchBuddyDemo from "@/components/demos/ChurchBuddyDemo";
import WorshipBuddyDemo from "@/components/demos/WorshipBuddyDemo";

const products = [
  {
    id: "cb",
    slug: "churchbuddy",
    name: "ChurchBuddy",
    headline: "Church management, simplified",
    description:
      "Coordinate ministry teams, manage services, assign roles, and keep your entire church organized — without the spreadsheets.",
    features: [
      "Plan services weeks ahead with drag-and-drop scheduling",
      "Assign team members to roles and send automatic reminders",
      "Manage volunteer availability and resolve conflicts",
      "Your ChurchBuddy login works across all apps",
    ],
    platforms: "iOS · Android · Web",
    color: "#0B7261",
    lightBg: "bg-cb-light",
    btnClass: "btn-cb",
    href: "/church-buddy",
    imageLabel: "Weekly service schedule with role assignments",
    sectionBg: "bg-white",
    imagePosition: "right",
    Demo: ChurchBuddyDemo,
  },
  {
    id: "wb",
    slug: "worshipbuddy",
    name: "WorshipBuddy",
    headline: "Your church's music, all in one place",
    description:
      "Host all your church's music in one place — originals, purchased songs, and multiple language versions. Manage everything through the admin portal and share it with your whole team.",
    features: [
      "Build your church's song library with full lyrics and chords",
      "Transpose any song to any key with one tap",
      "Build and share worship sets with your team",
      "Multi-language song versions for multilingual congregations",
    ],
    platforms: "iOS · Android",
    color: "#0C245E",
    lightBg: "bg-wb-light",
    btnClass: "btn-wb",
    href: "/worship-buddy",
    imageLabel: "Song detail with chords and transposition",
    sectionBg: "bg-surface",
    imagePosition: "left",
    Demo: WorshipBuddyDemo,
  },
  {
    id: "pb",
    slug: "presenterbuddy",
    name: "PresenterBuddy",
    headline: "From rehearsal lyrics to full production",
    description:
      "Professional presentation software for worship — from a simple lyrics display to a full production suite with NDI output and remote control.",
    features: [
      "Import sets directly from WorshipBuddy — one click",
      "NDI output for multi-screen production setups",
      "Remote control from any device on your network",
      "Works on Mac, Windows, and iPad",
    ],
    platforms: "Windows · Mac",
    color: "#1E6B8A",
    lightBg: "bg-pb-light",
    btnClass: "btn-pb",
    href: "/presenter-buddy",
    imageLabel: "Live presentation with lyrics on screen",
    sectionBg: "bg-white",
    imagePosition: "right",
    Demo: null,
  },
];

const PB_VERSIONS = [
  { id: "lite",   label: "PresenterBuddy",        src: "/images/pb.png"        },
  { id: "studio", label: "PresenterBuddy Studio",  src: "/images/pb-studio.png" },
];

function PresenterVersionSlider() {
  const [active, setActive] = useState("lite");
  const current = PB_VERSIONS.find((v) => v.id === active);

  return (
    <div className="flex flex-col gap-4 -mx-4 lg:-mx-8">
      {/* Screenshot */}
      <div className="relative rounded-lg overflow-hidden border border-border shadow-card-hover">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={current.src}
              alt={current.label}
              width={1600}
              height={1000}
              className="w-full h-auto block"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Toggle */}
      <div className="flex items-center gap-1 self-center bg-surface-card border border-border rounded-lg p-1">
        {PB_VERSIONS.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v.id)}
            className={`font-mono text-[11px] font-medium px-4 py-1.5 rounded-md transition-all duration-150 ${
              active === v.id
                ? "bg-white shadow-card text-pb"
                : "text-muted hover:text-ink"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function PlaceholderImage({ product }) {
  return (
    <div
      className={`${product.lightBg} aspect-[4/3] flex items-center justify-center border border-border rounded-lg`}
    >
      <div className="text-center px-6">
        <p
          className="font-mono text-[12px] font-medium uppercase tracking-wider mb-1"
          style={{ color: product.color }}
        >
          {product.name}
        </p>
        <p className="font-sans text-[14px] text-muted">
          {product.imageLabel}
        </p>
      </div>
    </div>
  );
}

function ProductSection({ product }) {
  const isImageLeft = product.imagePosition === "left";
  const { Demo } = product;

  return (
    <div className={`${product.sectionBg} border-t border-border`}>
      <div className="max-w-content mx-auto px-6 lg:px-8 py-24 sm:py-32">
        <AnimatedSection delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text column */}
            <div className={isImageLeft ? "lg:order-2" : ""}>
              <span
                className="font-mono text-[11px] font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: product.color }}
              >
                {product.name}
              </span>
              <h2 className="font-heading text-[clamp(28px,4vw,52px)] leading-[1.12] text-ink mb-5 text-balance">
                {product.headline}
              </h2>
              <p className="font-sans text-[16px] text-muted leading-relaxed mb-8 max-w-lg">
                {product.description}
              </p>
              <ul className="space-y-3 mb-10">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-[14px] text-ink">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                      style={{ background: product.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link href={product.href} className={`btn ${product.btnClass} btn-lg`}>
                  Learn more about {product.name}
                </Link>
                <span className="font-mono text-[11px] text-muted">
                  {product.platforms}
                </span>
              </div>
            </div>

            {/* Demo / image column */}
            <div className={isImageLeft ? "lg:order-1" : ""}>
              {product.id === "pb" ? (
                <PresenterVersionSlider />
              ) : Demo ? (
                <Demo />
              ) : (
                <PlaceholderImage product={product} />
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default function ProductSpotlight() {
  return (
    <section id="products">
      {products.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
    </section>
  );
}
