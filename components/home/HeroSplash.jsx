"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHRASES = ["worship team", "church", "ministry", "congregation"];

const STAGGER        = 0.14;
const REVEAL_DUR     = 0.65;
// 4 steps: "The", "tools", "your", phrase, "needs." — phrase is step index 3, needs. is 4
const CYCLE_DELAY_MS = (5 * STAGGER + REVEAL_DUR + 2) * 1000;
const CYCLE_MS       = 2500;

const wordVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DUR, delay: i * STAGGER, ease: [0.21, 0.47, 0.32, 0.98] },
  }),
  exit: { opacity: 0, y: -18, transition: { duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] } },
};

// Used only during cycling transitions (not the initial reveal)
const phraseVariant = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5,  ease: [0.21, 0.47, 0.32, 0.98] } },
  exit:    { opacity: 0, y: -18, transition: { duration: 0.38, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const scrollVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 5 * STAGGER + REVEAL_DUR + 0.4, duration: 0.9 } },
};

export default function HeroSplash() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [cycling, setCycling]         = useState(false);

  useEffect(() => {
    let intervalId;
    const startTimer = setTimeout(() => {
      setPhraseIndex(1); // skip re-animating PHRASES[0]; cycle starts at "church"
      setCycling(true);
      intervalId = setInterval(() => {
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }, CYCLE_MS);
    }, CYCLE_DELAY_MS);

    return () => {
      clearTimeout(startTimer);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center px-6 pt-[60px] overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-dark/65" />

      {/* Three-line headline */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3">

        {/* Line 1: The tools your */}
        <div className="flex gap-[0.38em]">
          {["The", "tools", "your"].map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariant}
              initial="hidden"
              animate="visible"
              className="font-heading text-white tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px,4vw,52px)", lineHeight: 1.15 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Line 2: Cycling phrase — larger, with breathing room above/below */}
        <div className="py-8 relative flex justify-center items-center"
             style={{ minHeight: "clamp(60px,9.5vw,108px)" }}>
          <AnimatePresence mode="wait">
            {!cycling ? (
              <motion.span
                key="initial"
                custom={3}
                variants={wordVariant}
                initial="hidden"
                animate="visible"
                className="font-heading text-[#DCE4F8] tracking-[-0.03em] whitespace-nowrap absolute"
                style={{ fontSize: "clamp(52px,8vw,96px)", lineHeight: 1.05 }}
              >
                {PHRASES[0]}
              </motion.span>
            ) : (
              <motion.span
                key={phraseIndex}
                variants={phraseVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-heading text-[#DCE4F8] tracking-[-0.03em] whitespace-nowrap absolute"
                style={{ fontSize: "clamp(52px,8vw,96px)", lineHeight: 1.05 }}
              >
                {PHRASES[phraseIndex]}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Line 3: needs. */}
        <motion.span
          custom={4}
          variants={wordVariant}
          initial="hidden"
          animate="visible"
          className="font-heading text-white tracking-[-0.02em]"
          style={{ fontSize: "clamp(28px,4vw,52px)", lineHeight: 1.15 }}
        >
          needs.
</motion.span>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={scrollVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 z-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-300">Scroll</span>
        <motion.svg
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          className="text-zinc-300"
        >
          <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
