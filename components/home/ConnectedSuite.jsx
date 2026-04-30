"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { FaUsers, FaMusic, FaDesktop, FaArrowRight } from "react-icons/fa";

const PRODUCTS = [
  {
    id: 1,
    name: "ChurchBuddy",
    role: "Your org & login",
    description:
      "Coordinate ministry teams, manage services, assign roles, and keep your entire church organized — without the spreadsheets.",
    features: [
      "Ministry & team management",
      "Service scheduling",
      "Shared login across all apps",
    ],
    color: "#0B7261",
    lightColor: "#CCE9E4",
    href: "/church-buddy",
    relatedIds: [2, 3],
    Icon: FaUsers,
  },
  {
    id: 2,
    name: "WorshipBuddy",
    role: "Songs & sets",
    description:
      "Your church's full song library with lyrics, chords, instant transposition, and worship sets for the whole team.",
    features: [
      "Full lyrics & chord library",
      "Instant key transposition",
      "Set building & sharing",
    ],
    color: "#0C245E",
    lightColor: "#DCE4F8",
    href: "/worship-buddy",
    relatedIds: [1, 3],
    Icon: FaMusic,
  },
  {
    id: 3,
    name: "PresenterBuddy",
    role: "Live presentation",
    description:
      "Professional worship presentation software — from simple lyrics display to full NDI production workflows.",
    features: [
      "Live lyrics display",
      "NDI output support",
      "Syncs with WorshipBuddy sets",
    ],
    color: "#1E6B8A",
    lightColor: "#D0E9F2",
    href: "/presenter-buddy",
    relatedIds: [1, 2],
    Icon: FaDesktop,
  },
];

const RADIUS = 165;

function calcPos(index, total, angle) {
  const deg = ((index / total) * 360 + angle) % 360;
  const rad = (deg * Math.PI) / 180;
  return {
    x: RADIUS * Math.cos(rad),
    y: RADIUS * Math.sin(rad),
    z: Math.round(100 + 50 * Math.cos(rad)),
    // opacity fades toward "back" of orbit for depth perception
    o: Math.max(0.5, Math.min(1, 0.5 + 0.5 * ((1 + Math.sin(rad)) / 2))),
  };
}

export default function ConnectedSuite() {
  const [activeId, setActiveId] = useState(null);

  // Refs so the RAF loop never goes stale without re-creating itself
  const rotRef     = useRef(0);
  const autoRef    = useRef(true);
  const activeRef  = useRef(null);
  const rafRef     = useRef(null);
  const wrapRefs   = useRef({});   // outer wrapper DOM nodes

  const tick = useCallback(() => {
    if (autoRef.current) {
      rotRef.current = (rotRef.current + 0.25) % 360;
    }

    PRODUCTS.forEach((p, i) => {
      const el = wrapRefs.current[p.id];
      if (!el) return;
      const pos = calcPos(i, PRODUCTS.length, rotRef.current);
      const isActive  = activeRef.current === p.id;
      const isDimmed  = activeRef.current !== null && !isActive;

      el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      el.style.zIndex    = isActive ? "200" : String(pos.z);
      el.style.opacity   = isDimmed ? "0.2" : isActive ? "1" : String(pos.o);
    });

    rafRef.current = requestAnimationFrame(tick);
  }, []); // stable — reads mutable refs only

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  const handleNode = (id) => {
    if (activeRef.current === id) {
      activeRef.current = null;
      autoRef.current   = true;
      setActiveId(null);
    } else {
      activeRef.current = id;
      autoRef.current   = false;
      setActiveId(id);
    }
  };

  const handleBg = () => {
    activeRef.current = null;
    autoRef.current   = true;
    setActiveId(null);
  };

  const activeProduct = PRODUCTS.find((p) => p.id === activeId);

  return (
    <section id="products" className="bg-surface border-t border-border py-24 sm:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-8">

        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-3 block">The Suite</span>
          <h2 className="font-heading text-[clamp(30px,5vw,52px)] leading-[1.1] text-ink text-balance max-w-3xl mx-auto mb-5">
            Built to work together
          </h2>
          <p className="font-sans text-[17px] text-muted max-w-2xl mx-auto leading-relaxed">
            Sign in with ChurchBuddy to set up your org. Build your sets in
            WorshipBuddy. Present them live with PresenterBuddy. One login,
            three tools.
          </p>
        </AnimatedSection>

        {/* ── Desktop orbital ── */}
        <AnimatedSection delay={0.15} className="hidden md:block">
          <div className="flex flex-col items-center" onClick={handleBg}>

            {/* Orbital stage */}
            <div className="relative w-[460px] h-[420px] flex items-center justify-center mx-auto cursor-default">

              {/* Orbit ring */}
              <div className="absolute w-[330px] h-[330px] rounded-full border border-border pointer-events-none" />

              {/* Center hub */}
              <div
                className="relative z-10 w-20 h-20 rounded-lg bg-zinc-100 flex items-center justify-center pointer-events-none border"
                style={{ borderColor: "#0C245E", boxShadow: "0 0 0 12px rgba(24,24,27,0.04), 0 0 0 26px rgba(24,24,27,0.02)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/worship-buddy-white-logo.png"
                  alt="WorshipBuddy"
                  className="w-11 h-11 object-contain"
                />
              </div>

              {/* Nodes — outer wrapper has NO CSS transition so RAF runs clean */}
              {PRODUCTS.map((product, index) => {
                const isActive = activeId === product.id;
                return (
                  <div
                    key={product.id}
                    ref={(el) => { wrapRefs.current[product.id] = el; }}
                    className="absolute cursor-pointer select-none"
                    onClick={(e) => { e.stopPropagation(); handleNode(product.id); }}
                  >
                    {/* Active glow halo */}
                    <div
                      className="absolute -inset-4 rounded-xl transition-opacity duration-200"
                      style={{
                        background: product.lightColor,
                        opacity: isActive ? 0.7 : 0,
                      }}
                    />

                    {/* Node tile — transitions only for click-state visual changes */}
                    <div
                      className="relative w-16 h-16 rounded-lg flex items-center justify-center border-2 transition-[transform,background-color,color] duration-200"
                      style={{
                        background:   isActive ? product.color : product.lightColor,
                        borderColor:  product.color,
                        color:        isActive ? "#fff" : product.color,
                        transform:    isActive ? "scale(1.18)" : "scale(1)",
                      }}
                    >
                      <product.Icon size={20} />
                    </div>

                    {/* Label — sits below the tile, visually stable */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[11px] font-semibold tracking-wide transition-colors duration-200"
                      style={{
                        top:   "70px",
                        color: isActive ? product.color : "#52525B",
                      }}
                    >
                      {product.name}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info panel below orbital */}
            <div className="w-full max-w-lg mx-auto min-h-[200px] flex items-start justify-center mt-2">
              <AnimatePresence mode="wait">
                {!activeProduct ? (
                  <motion.p
                    key="hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-mono text-[11px] text-muted mt-4 tracking-wider"
                  >
                    Select a product to explore
                  </motion.p>
                ) : (
                  <motion.div
                    key={activeProduct.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="w-full card p-6"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-2 h-2 rounded-sm shrink-0" style={{ background: activeProduct.color }} />
                      <span className="font-mono text-[12px] font-semibold tracking-tight" style={{ color: activeProduct.color }}>
                        {activeProduct.name}
                      </span>
                      <span className="font-mono text-[11px] text-muted">— {activeProduct.role}</span>
                    </div>

                    <p className="font-sans text-[14px] text-muted leading-relaxed mb-4">
                      {activeProduct.description}
                    </p>

                    <ul className="flex flex-wrap gap-x-6 gap-y-1.5 mb-5">
                      {activeProduct.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 font-sans text-[13px] text-ink">
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ background: activeProduct.color }} />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-[10px] text-muted uppercase tracking-wider">Works with</span>
                        {activeProduct.relatedIds.map((relId) => {
                          const rel = PRODUCTS.find((p) => p.id === relId);
                          return (
                            <button
                              key={relId}
                              onClick={(e) => { e.stopPropagation(); handleNode(relId); }}
                              className="font-mono text-[10px] px-2 py-0.5 border border-border rounded hover:border-current transition-colors"
                              style={{ color: rel.color }}
                            >
                              {rel.name}
                            </button>
                          );
                        })}
                      </div>
                      <Link
                        href={activeProduct.href}
                        className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium shrink-0"
                        style={{ color: activeProduct.color }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn more <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </AnimatedSection>

        {/* ── Mobile stacked cards ── */}
        <div className="md:hidden flex flex-col gap-4">
          {PRODUCTS.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: product.lightColor, color: product.color }}
                  >
                    <product.Icon size={15} />
                  </div>
                  <div>
                    <p className="font-mono text-[12px] font-semibold" style={{ color: product.color }}>
                      {product.name}
                    </p>
                    <p className="font-sans text-[13px] text-muted">{product.role}</p>
                  </div>
                </div>
                <p className="font-sans text-[14px] text-muted leading-relaxed mb-4">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-1.5 font-sans text-[13px] font-medium"
                  style={{ color: product.color }}
                >
                  Learn more <FaArrowRight size={10} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
