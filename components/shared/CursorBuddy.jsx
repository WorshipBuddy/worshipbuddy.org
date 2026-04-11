"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const W = 64;
const H = 50;
const FILL = "#1E293B";
const BROW_STROKE = "rgba(255,255,255,0.4)";
const INK = "#18181B";
const HALO_STROKE = "#FBBF24";

const EYE_L = { cx: 21, cy: 22 };
const EYE_R = { cx: 43, cy: 22 };
const PUPIL_R = 4.2;
const PUPIL_MAX = 4;

const SCALE = 1.25;
const OFFSET_X = 25;
const OFFSET_Y = 15;
const LERP = 0.13;
const LERP_TILT = 0.1;
const LERP_SQ = 0.15;
const TRAIL_LERPS = [0.06, 0.03, 0.015];

/* ═══════════════════════════════════════════
   12-emotion expression tables
   ═══════════════════════════════════════════ */

const BODY_PATHS = {
  idle:      "M32 4C47 4 59 11 59 25C59 39 47 46 32 46C17 46 5 39 5 25C5 11 17 4 32 4Z",
  following: "M32 4C47 4 59 11 59 25C59 39 47 46 32 46C17 46 5 39 5 25C5 11 17 4 32 4Z",
  curious:   "M32 3C48 3 60 10 60 25C60 40 48 47 32 47C16 47 4 40 4 25C4 10 16 3 32 3Z",
  excited:   "M32 0C50 0 62 7 62 25C62 43 50 50 32 50C14 50 2 43 2 25C2 7 14 0 32 0Z",
  sleepy:    "M32 7C44 7 54 13 54 26C54 38 44 44 32 44C20 44 10 38 10 26C10 13 20 7 32 7Z",
  happy:     "M32 2C49 2 61 9 61 25C61 41 49 48 32 48C15 48 3 41 3 25C3 9 15 2 32 2Z",
  sad:       "M32 6C44 6 54 13 54 26C54 37 44 44 32 44C20 44 10 37 10 26C10 13 20 6 32 6Z",
  love:      "M32 0C50 0 62 7 62 25C62 43 50 50 32 50C14 50 2 43 2 25C2 7 14 0 32 0Z",
  dizzy:     "M32 4C47 4 59 11 59 25C59 39 47 46 32 46C17 46 5 39 5 25C5 11 17 4 32 4Z",
  rushing:   "M32 4C47 4 59 11 59 25C59 39 47 46 32 46C17 46 5 39 5 25C5 11 17 4 32 4Z",
  waving:    "M32 2C49 2 61 9 61 25C61 41 49 48 32 48C15 48 3 41 3 25C3 9 15 2 32 2Z",
  startled:  "M32 -1C51 -1 63 6 63 25C63 44 51 51 32 51C13 51 1 44 1 25C1 6 13 -1 32 -1Z",
};

const MOUTHS = {
  idle:      "M25 37Q32 42 39 37Q32 38.5 25 37Z",
  following: "M26 38Q32 41 38 38Q32 38.5 26 38Z",
  curious:   "M28 37Q32 30 36 37Q32 44 28 37Z",
  excited:   "M22 36Q32 47 42 36Q32 39 22 36Z",
  sleepy:    "M28 40Q32 41 36 40Q32 39.5 28 40Z",
  happy:     "M23 37Q32 47 41 37Q32 40 23 37Z",
  sad:       "M25 39Q32 34 39 39Q32 40.5 25 39Z",
  love:      "M24 37Q32 47 40 37Q32 40 24 37Z",
  dizzy:     "M26 38Q32 41 38 38Q32 38.5 26 38Z",
  rushing:   "M27 37Q32 41 37 37Q32 38.5 27 37Z",
  waving:    "M22 36Q32 47 42 36Q32 39 22 36Z",
  startled:  "M27 36Q32 27 37 36Q32 45 27 36Z",
};

const BROWS = {
  idle:      "M14 14Q21 12 28 14M36 14Q43 12 50 14",
  following: "M14 14Q21 12 28 14M36 14Q43 12 50 14",
  curious:   "M14 11Q21 8 28 11M36 11Q43 8 50 11",
  excited:   "M13 8Q20 4 28 8M36 8Q44 4 51 8",
  sleepy:    "M16 16Q21 18 27 14M37 14Q43 18 48 16",
  happy:     "M14 11Q21 9 28 11M36 11Q43 9 50 11",
  sad:       "M15 12Q21 17 27 16M37 16Q43 17 49 12",
  love:      "M13 8Q20 4 28 8M36 8Q44 4 51 8",
  dizzy:     "M15 15Q21 13 27 17M37 12Q43 16 49 11",
  rushing:   "M14 13Q21 12 28 13M36 13Q43 12 50 13",
  waving:    "M14 10Q21 8 28 10M36 10Q43 8 50 10",
  startled:  "M12 7Q19 2 28 7M36 7Q45 2 52 7",
};

const PARAMS = {
  idle:      { eyeRx: 8.5,  eyeRy: 8.5,  eyeShift: 0,   pupil: "track",  sparkle: false },
  following: { eyeRx: 8.5,  eyeRy: 8.5,  eyeShift: 0,   pupil: "track",  sparkle: false },
  curious:   { eyeRx: 9,    eyeRy: 9,    eyeShift: 0,   pupil: "target", sparkle: false },
  excited:   { eyeRx: 9,    eyeRy: 9,    eyeShift: 0,   pupil: "target", sparkle: true  },
  sleepy:    { eyeRx: 9,    eyeRy: 2.5,  eyeShift: 2,   pupil: "drift",  sparkle: false },
  happy:     { eyeRx: 8.5,  eyeRy: 9,    eyeShift: 0,   pupil: "track",  sparkle: false },
  sad:       { eyeRx: 7.5,  eyeRy: 7,    eyeShift: 1.5, pupil: "track",  sparkle: false },
  love:      { eyeRx: 9,    eyeRy: 9,    eyeShift: 0,   pupil: "track",  sparkle: true  },
  dizzy:     { eyeRx: 8.5,  eyeRy: 8,    eyeShift: 0,   pupil: "track",  sparkle: false },
  rushing:   { eyeRx: 9,    eyeRy: 9,    eyeShift: 0,   pupil: "track",  sparkle: false },
  waving:    { eyeRx: 8.5,  eyeRy: 9,    eyeShift: 0,   pupil: "track",  sparkle: false },
  startled:  { eyeRx: 9.5,  eyeRy: 10,   eyeShift: -1,  pupil: "track",  sparkle: false, pupilScale: 0.5 },
};

const HALO_PARAMS = {
  idle:      { opacity: 0.5,  rotate: 0,   offsetY: 0 },
  following: { opacity: 0.55, rotate: 0,   offsetY: 0 },
  curious:   { opacity: 0.65, rotate: 0,   offsetY: -1 },
  excited:   { opacity: 0.85, rotate: 0,   offsetY: -3 },
  sleepy:    { opacity: 0.15, rotate: -8,  offsetY: 4 },
  happy:     { opacity: 0.8,  rotate: 0,   offsetY: -2 },
  sad:       { opacity: 0.25, rotate: -5,  offsetY: 3 },
  love:      { opacity: 0.85, rotate: 0,   offsetY: -3 },
  dizzy:     { opacity: 0.7,  rotate: 0,   offsetY: 0 },
  rushing:   { opacity: 0.45, rotate: -8,  offsetY: 2 },
  waving:    { opacity: 0.75, rotate: 0,   offsetY: -2 },
  startled:  { opacity: 0.9,  rotate: 0,   offsetY: -10 },
};

const FLOAT_ANIMS = {
  idle:      { anim: { y: [0, -3, 0] },                     trans: { repeat: Infinity, duration: 3, ease: "easeInOut" } },
  following: { anim: { y: 0 },                              trans: { type: "spring", stiffness: 300, damping: 25 } },
  curious:   { anim: { y: 0 },                              trans: { type: "spring", stiffness: 300, damping: 25 } },
  excited:   { anim: { y: [0, -5, 0] },                     trans: { repeat: 3, duration: 0.35, ease: "easeInOut" } },
  sleepy:    { anim: { y: [0, -2, 0] },                     trans: { repeat: Infinity, duration: 4.5, ease: "easeInOut" } },
  happy:     { anim: { y: [0, -4, 0] },                     trans: { repeat: 2, duration: 0.5, ease: "easeInOut" } },
  sad:       { anim: { y: [0, 2, 0] },                      trans: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } },
  love:      { anim: { y: [0, -5, 0] },                     trans: { repeat: 3, duration: 0.35, ease: "easeInOut" } },
  dizzy:     { anim: { y: 0 },                              trans: { type: "spring", stiffness: 300, damping: 25 } },
  rushing:   { anim: { y: 0 },                              trans: { type: "spring", stiffness: 300, damping: 25 } },
  waving:    { anim: { y: [0, -3, 0] },                     trans: { repeat: Infinity, duration: 0.45, ease: "easeInOut" } },
  startled:  { anim: { y: [0, -8, 0] },                     trans: { duration: 0.25, ease: "easeOut" } },
};


const SPRING_EXPR = { type: "spring", stiffness: 200, damping: 20 };

/* ═══════════════════════════════════════════
   Mood inference from element text / data attr
   ═══════════════════════════════════════════ */

const MOOD_KEYWORDS = {
  excited: /\b(accept|confirm|yes|start|launch|play|go|submit|enable)\b/i,
  happy:   /\b(download|get|try|sign.?up|install|open|app.?store|google.?play)\b/i,
  sad:     /\b(decline|cancel|delete|remove|close|dismiss|reject|unsubscribe|leave|exit|disable|reset)\b/i,
  love:    /\b(donate|support|sponsor|contribute|give)\b/i,
};

function inferMood(el) {
  if (!el) return "curious";
  const attr =
    el.getAttribute?.("data-buddy-mood") ||
    el.closest?.("[data-buddy-mood]")?.getAttribute("data-buddy-mood");
  if (attr && PARAMS[attr]) return attr;
  const text = (el.textContent || "").toLowerCase().trim();
  if (!text) return "curious";
  for (const [mood, re] of Object.entries(MOOD_KEYWORDS)) {
    if (re.test(text)) return mood;
  }
  return "curious";
}

/* ═══════════════════════════════════════════
   Blink hook
   ═══════════════════════════════════════════ */

function useBlink() {
  const [on, setOn] = useState(false);
  const timer = useRef(null);
  const schedule = useCallback(() => {
    timer.current = setTimeout(() => {
      setOn(true);
      setTimeout(() => { setOn(false); schedule(); }, 140);
    }, 2500 + Math.random() * 4500);
  }, []);
  useEffect(() => { schedule(); return () => clearTimeout(timer.current); }, [schedule]);
  return on;
}

/* ═══════════════════════════════════════════
   Particle sub-components
   ═══════════════════════════════════════════ */

function SleepyParticles({ active }) {
  const [zees, setZees] = useState([]);
  const d1 = useRef(null);
  const d2 = useRef(null);
  useEffect(() => {
    if (!active) { clearTimeout(d1.current); clearTimeout(d2.current); setZees([]); return; }
    d1.current = setTimeout(() => {
      const spawn = () => {
        setZees(p => [...p.slice(-3), { id: Date.now(), offset: -6 + Math.random() * 12 }]);
        d2.current = setTimeout(spawn, 1800 + Math.random() * 1200);
      };
      spawn();
    }, 2000);
    return () => { clearTimeout(d1.current); clearTimeout(d2.current); };
  }, [active]);
  return (
    <AnimatePresence>
      {zees.map(z => (
        <motion.div key={z.id}
          style={{ position: "absolute", top: -4, right: z.offset, fontSize: 12, fontWeight: 800, fontFamily: "'Satoshi', sans-serif", color: "#94A3B8", pointerEvents: "none", userSelect: "none" }}
          initial={{ opacity: 0, y: 0, scale: 0.4, rotate: -10 }}
          animate={{ opacity: [0, 0.7, 0], y: -28, scale: [0.4, 1, 0.6], rotate: 10 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          onAnimationComplete={() => setZees(p => p.filter(i => i.id !== z.id))}
        >z</motion.div>
      ))}
    </AnimatePresence>
  );
}

function ExcitedSparkles({ trigger }) {
  const [sparks, setSparks] = useState([]);
  const prev = useRef(false);
  useEffect(() => {
    if (trigger && !prev.current) {
      setSparks([45, 135, 225, 315].map((deg, i) => {
        const rad = ((deg + Math.random() * 30 - 15) * Math.PI) / 180;
        return { id: Date.now() + i, x: Math.cos(rad) * 28, y: Math.sin(rad) * 28 };
      }));
      setTimeout(() => setSparks([]), 700);
    }
    prev.current = trigger;
  }, [trigger]);
  return (
    <AnimatePresence>
      {sparks.map(s => (
        <motion.div key={s.id}
          style={{ position: "absolute", top: "50%", left: "50%", width: 6, height: 6, background: "#FBBF24", borderRadius: 1, transform: "rotate(45deg)", pointerEvents: "none" }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], x: s.x, y: s.y, scale: [0, 1.4, 0] }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
      ))}
    </AnimatePresence>
  );
}

function PoofCloud({ active }) {
  if (!active) return null;
  return Array.from({ length: 10 }, (_, i) => {
    const angle = (i / 10) * Math.PI * 2 + Math.random() * 0.5;
    const dist = 28 + Math.random() * 20;
    const size = 10 + Math.random() * 10;
    return (
      <motion.div key={i}
        style={{
          position: "absolute", top: "50%", left: "50%",
          width: size, height: size, borderRadius: "50%",
          background: "rgba(255,255,255,0.5)", pointerEvents: "none",
          boxShadow: "0 0 6px rgba(255,255,255,0.3)",
        }}
        initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
        animate={{ opacity: [0, 0.8, 0], x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, scale: [0, 1.5 + Math.random() * 0.8, 0] }}
        transition={{ duration: 0.65 + Math.random() * 0.25, ease: "easeOut", delay: i * 0.025 }}
      />
    );
  });
}

function ClickParticles({ mood }) {
  if (mood === "excited" || mood === "happy") {
    return [30, 100, 200, 280, 340].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      return (
        <motion.div key={i}
          style={{ position: "absolute", top: "50%", left: "50%", width: 7, height: 7, background: "#FBBF24", borderRadius: 1, transform: "rotate(45deg)", pointerEvents: "none" }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], x: Math.cos(rad) * 32, y: Math.sin(rad) * 32, scale: [0, 1.6, 0] }}
          transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.04 }}
        />
      );
    });
  }
  if (mood === "love") {
    return Array.from({ length: 5 }, (_, i) => (
      <motion.div key={i}
        style={{ position: "absolute", top: "15%", left: `${20 + i * 12}%`, fontSize: 14, color: "#F97066", pointerEvents: "none", userSelect: "none" }}
        initial={{ opacity: 0, y: 0, scale: 0 }}
        animate={{ opacity: [0, 1, 0], y: -35 - i * 4, scale: [0, 1.3, 0.4], rotate: -10 + Math.random() * 20 }}
        transition={{ duration: 1, ease: "easeOut", delay: i * 0.08 }}
      >&#9829;</motion.div>
    ));
  }
  if (mood === "sad") {
    return (
      <motion.div
        style={{ position: "absolute", top: "42%", left: "30%", width: 5, height: 8, background: "#93C5FD", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", pointerEvents: "none" }}
        initial={{ opacity: 0, y: 0, scale: 0 }}
        animate={{ opacity: [0, 0.9, 0], y: 20, scale: [0, 1, 0.3] }}
        transition={{ duration: 0.9, ease: "easeIn" }}
      />
    );
  }
  return null;
}

/* ═══════════════════════════════════════════
   Main component
   ═══════════════════════════════════════════ */

export default function CursorBuddy() {
  const [active, setActive] = useState(false);
  const [emotion, setEmotion] = useState("idle");
  const [pupils, setPupils] = useState({ x: 0, y: 0 });
  const [hiccup, setHiccup] = useState(false);
  const [clickEffect, setClickEffect] = useState(null);
  const [headphones, setHeadphones] = useState(false);
  const [eyeWiden, setEyeWiden] = useState(false);
  const [speechBubble, setSpeechBubble] = useState(false);
  const [poofCloud, setPoofCloud] = useState(false);

  const buddyRef = useRef(null);
  const innerRef = useRef(null);
  const squashRef = useRef(null);
  const trailRefs = useRef([null, null, null]);

  const pos = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const tiltCur = useRef(0);
  const tiltTarget = useRef(0);
  const sqXCur = useRef(1);
  const sqYCur = useRef(1);
  const sqXTarget = useRef(1);
  const sqYTarget = useRef(1);
  const opacityCur = useRef(0);
  const opacityTarget = useRef(0);
  const scaleCur = useRef(0);
  const scaleTarget = useRef(0);
  const trailPos = useRef([{ x: -200, y: -200 }, { x: -200, y: -200 }, { x: -200, y: -200 }]);

  const emoRef = useRef("idle");
  const visRef = useRef(false);
  const targetElRef = useRef(null);
  const behaviorLock = useRef(false);
  const burstUntil = useRef(0);
  const mouseVel = useRef(0);
  const lastMoveX = useRef(0);
  const lastMoveY = useRef(0);
  const lastMoveT = useRef(0);
  const prevXRef = useRef(0);
  const driftAngle = useRef(0);
  const wavingStart = useRef(0);
  const idleT = useRef(null);
  const sleepyT = useRef(null);
  const hiccupT = useRef(null);
  const lastCheck = useRef(0);
  const lastPupil = useRef(0);
  const hasGreeted = useRef(false);
  const greetingWave = useRef(false);

  const blinking = useBlink();

  const microBounce = useCallback(() => {
    if (scaleTarget.current === 1) {
      scaleTarget.current = 1.15;
      setTimeout(() => { scaleTarget.current = 1; }, 200);
    }
  }, []);

  const setEmo = useCallback((e) => {
    if (burstUntil.current > performance.now()) return;
    if (behaviorLock.current && e !== "rushing") return;
    if (emoRef.current === e) return;
    emoRef.current = e;
    setEmotion(e);
    microBounce();
  }, [microBounce]);

  const setBurstEmo = useCallback((e) => {
    burstUntil.current = performance.now() + 400;
    emoRef.current = e;
    setEmotion(e);
    microBounce();
  }, [microBounce]);

  const computePupils = useCallback((cx, cy) => {
    const p = PARAMS[emoRef.current];
    if (!p || p.pupil === "drift") return;
    const bx = pos.current.x + W / 2;
    const by = pos.current.y + H / 2;
    let dx = cx - bx;
    let dy = cy - by;
    if (p.pupil === "target" && targetElRef.current) {
      dx = targetElRef.current.cx - bx;
      dy = targetElRef.current.cy - by;
    }
    const angle = Math.atan2(dy, dx);
    const mag = Math.min(Math.hypot(dx, dy) / 80, 1);
    setPupils({ x: Math.cos(angle) * mag * PUPIL_MAX, y: Math.sin(angle) * mag * PUPIL_MAX });
  }, []);

  /* ── desktop detection ── */
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setActive(mq.matches);
    const h = (e) => setActive(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  /* ── homepage auto-appear with poof + speech bubble ── */
  useEffect(() => {
    if (window.location.pathname !== "/") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;
    const t = setTimeout(() => {
      if (visRef.current) {
        setSpeechBubble(true);
        setTimeout(() => setSpeechBubble(false), 5000);
        return;
      }
      const x = window.innerWidth * 0.75;
      const y = window.innerHeight * 0.3;
      pos.current.x = x;
      pos.current.y = y;
      target.current.x = x;
      target.current.y = y;
      trailPos.current.forEach(tp => { tp.x = x; tp.y = y; });
      visRef.current = true;
      opacityTarget.current = 1;
      scaleTarget.current = 1.4;
      setTimeout(() => { scaleTarget.current = 1; }, 400);
      greetingWave.current = true;
      wavingStart.current = performance.now();
      emoRef.current = "waving";
      setEmotion("waving");
      burstUntil.current = performance.now() + 1500;
      setPoofCloud(true);
      setTimeout(() => setPoofCloud(false), 800);
      setTimeout(() => {
        setSpeechBubble(true);
        setTimeout(() => setSpeechBubble(false), 5000);
      }, 1500);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  /* ── main rAF loop ── */
  useEffect(() => {
    if (!active) return;
    let raf;
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * LERP;
      pos.current.y += (target.current.y - pos.current.y) * LERP;

      if (emoRef.current === "waving") {
        const elapsed = (performance.now() - wavingStart.current) / 1000;
        if (greetingWave.current) {
          if (elapsed < 1.2) {
            tiltTarget.current = Math.sin(elapsed * 10) * 18;
          } else {
            greetingWave.current = false;
            hasGreeted.current = true;
            emoRef.current = "happy";
            setEmotion("happy");
            burstUntil.current = performance.now() + 500;
            tiltTarget.current = 0;
            setTimeout(() => {
              if (emoRef.current === "happy") {
                burstUntil.current = 0;
                emoRef.current = "idle";
                setEmotion("idle");
              }
            }, 2000);
          }
        } else {
          if (elapsed < 1.0) {
            tiltTarget.current = Math.sin(elapsed * 10) * 18;
          } else {
            opacityTarget.current = 0;
            scaleTarget.current = 0;
            if (opacityCur.current < 0.02 && visRef.current) {
              visRef.current = false;
              emoRef.current = "idle";
              setEmotion("idle");
            }
          }
        }
      }

      const scrollTilt = scrollDir.current * Math.min(scrollVel.current * 0.008, 12);
      const scrollBob = scrollDir.current * Math.min(scrollVel.current * 0.003, 4);
      target.current.y += scrollBob * 0.3;

      tiltCur.current += ((tiltTarget.current + scrollTilt) - tiltCur.current) * LERP_TILT;
      sqXCur.current += (sqXTarget.current - sqXCur.current) * LERP_SQ;
      sqYCur.current += (sqYTarget.current - sqYCur.current) * LERP_SQ;
      opacityCur.current += (opacityTarget.current - opacityCur.current) * 0.15;
      scaleCur.current += (scaleTarget.current - scaleCur.current) * 0.15;

      if (buddyRef.current) {
        buddyRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scaleCur.current})`;
        buddyRef.current.style.opacity = opacityCur.current;
      }
      if (innerRef.current) {
        innerRef.current.style.transform = `scale(${SCALE}) rotate(${tiltCur.current}deg)`;
      }
      if (squashRef.current) {
        squashRef.current.style.transform = `scaleX(${sqXCur.current}) scaleY(${sqYCur.current})`;
      }

      trailPos.current.forEach((trail, i) => {
        trail.x += (target.current.x - trail.x) * TRAIL_LERPS[i];
        trail.y += (target.current.y - trail.y) * TRAIL_LERPS[i];
        const el = trailRefs.current[i];
        if (el) {
          const sz = 16 - i * 4;
          el.style.transform = `translate3d(${trail.x + W / 2 - sz / 2}px, ${trail.y + H / 2 - sz / 2}px, 0)`;
          const speed = Math.max(mouseVel.current, scrollVel.current);
          el.style.opacity = speed > 50 ? `${Math.min(0.2 - i * 0.05, speed / 1000)}` : "0";
        }
      });

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  /* ── sleepy drift ── */
  useEffect(() => {
    if (emotion !== "sleepy") return;
    const id = setInterval(() => {
      driftAngle.current += 0.04;
      setPupils({ x: Math.cos(driftAngle.current) * 2, y: Math.sin(driftAngle.current) * 2 });
    }, 60);
    return () => clearInterval(id);
  }, [emotion]);

  /* ── hiccup timer ── */
  useEffect(() => {
    if (emotion !== "following") { clearTimeout(hiccupT.current); return; }
    const check = () => {
      if (Math.random() < 0.05) { setHiccup(true); setTimeout(() => setHiccup(false), 300); }
      hiccupT.current = setTimeout(check, 30000);
    };
    hiccupT.current = setTimeout(check, 30000);
    return () => clearTimeout(hiccupT.current);
  }, [emotion]);

  /* ── click burst ── */
  useEffect(() => {
    if (!active) return;
    const onClick = (e) => {
      const el = e.target?.closest?.("a, button, [role='button']") || e.target;
      if (!el || el === document.body) return;
      const mood = inferMood(el);
      if (mood === "curious") return;
      setBurstEmo(mood);
      setClickEffect({ mood, id: Date.now() });
      setTimeout(() => setClickEffect(null), 1000);
    };
    document.addEventListener("pointerdown", onClick);
    return () => document.removeEventListener("pointerdown", onClick);
  }, [active, setBurstEmo]);

  /* ── scroll motion effects ── */
  const scrollVel = useRef(0);
  const scrollDir = useRef(0);
  useEffect(() => {
    if (!active) return;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let decayT = null;
    const onScroll = () => {
      const now = performance.now();
      const dt = now - lastT;
      if (dt > 5) {
        const dy = window.scrollY - lastY;
        scrollVel.current = Math.abs(dy / dt) * 1000;
        scrollDir.current = dy > 0 ? 1 : -1;
      }
      lastY = window.scrollY;
      lastT = now;
      clearTimeout(decayT);
      decayT = setTimeout(() => { scrollVel.current = 0; scrollDir.current = 0; }, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); clearTimeout(decayT); };
  }, [active]);

  /* ── tab visibility → restore buddy or startled ── */
  useEffect(() => {
    if (!active) return;
    const onVis = () => {
      if (document.visibilityState !== "visible") return;
      if (visRef.current) {
        const prev = emoRef.current;
        setBurstEmo("startled");
        setTimeout(() => {
          if (emoRef.current === "startled") {
            burstUntil.current = 0;
            emoRef.current = prev;
            setEmotion(prev);
          }
        }, 600);
      } else if (hasGreeted.current) {
        visRef.current = true;
        opacityTarget.current = 1;
        scaleTarget.current = 1;
        emoRef.current = "happy";
        setEmotion("happy");
        burstUntil.current = performance.now() + 600;
        setTimeout(() => { if (emoRef.current === "happy") { burstUntil.current = 0; } }, 600);
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [active, setBurstEmo]);

  /* ── custom event: headphones accessory ── */
  useEffect(() => {
    const onHP = () => {
      setHeadphones(true);
      setBurstEmo("happy");
      setTimeout(() => setHeadphones(false), 4000);
    };
    window.addEventListener("buddy-headphones", onHP);
    return () => window.removeEventListener("buddy-headphones", onHP);
  }, [setBurstEmo]);

  /* ── custom event: eye widen (donate sliders) ── */
  useEffect(() => {
    let t = null;
    const onWiden = () => {
      setEyeWiden(true);
      setBurstEmo("startled");
      clearTimeout(t);
      t = setTimeout(() => setEyeWiden(false), 1500);
    };
    window.addEventListener("buddy-eye-widen", onWiden);
    return () => { window.removeEventListener("buddy-eye-widen", onWiden); clearTimeout(t); };
  }, [setBurstEmo]);

  /* ── pointer tracking + emotion engine ── */
  useEffect(() => {
    if (!active) return;

    const onMove = (e) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      let ox = OFFSET_X;
      let oy = OFFSET_Y;
      if (e.clientX + ox + W > vw - 10) ox = -ox - W;
      if (e.clientY + oy + H > vh - 10) oy = -oy - H;
      target.current.x = e.clientX + ox;
      target.current.y = e.clientY + oy;

      if (emoRef.current === "waving" && !greetingWave.current) {
        emoRef.current = "happy";
        setEmotion("happy");
        burstUntil.current = performance.now() + 500;
        opacityTarget.current = 1;
        scaleTarget.current = 1.15;
        visRef.current = true;
        setTimeout(() => { scaleTarget.current = 1; }, 300);
      }

      const dx = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;
      tiltTarget.current = Math.max(-25, Math.min(25, dx * 1.0));

      const now = performance.now();
      const dt = now - lastMoveT.current;
      if (dt > 5) {
        mouseVel.current =
          (Math.hypot(e.clientX - lastMoveX.current, e.clientY - lastMoveY.current) / dt) * 1000;
      }
      lastMoveX.current = e.clientX;
      lastMoveY.current = e.clientY;
      lastMoveT.current = now;

      if (mouseVel.current > 1200 && !behaviorLock.current) {
        behaviorLock.current = true;
        emoRef.current = "rushing";
        setEmotion("rushing");
      } else if (behaviorLock.current && emoRef.current === "rushing" && mouseVel.current < 600) {
        behaviorLock.current = false;
      }

      if (emoRef.current === "rushing") {
        sqXTarget.current = 1 + Math.min(mouseVel.current * 0.00005, 0.06);
        sqYTarget.current = 1 - Math.min(mouseVel.current * 0.00003, 0.04);
      } else {
        const speed = Math.abs(dx);
        sqXTarget.current = 1 + Math.min(speed * 0.001, 0.04);
        sqYTarget.current = 1 - Math.min(speed * 0.0007, 0.03);
      }

      if (!visRef.current) {
        visRef.current = true;
        pos.current.x = e.clientX + ox;
        pos.current.y = e.clientY + oy;
        trailPos.current.forEach(t => { t.x = e.clientX + ox; t.y = e.clientY + oy; });
        opacityTarget.current = 1;
        scaleTarget.current = 1.15;
        setTimeout(() => { scaleTarget.current = 1; }, 300);

        if (!hasGreeted.current) {
          greetingWave.current = true;
          wavingStart.current = performance.now();
          emoRef.current = "waving";
          setEmotion("waving");
          burstUntil.current = performance.now() + 1500;
        } else {
          setBurstEmo("happy");
        }
      }

      clearTimeout(idleT.current);
      clearTimeout(sleepyT.current);
      if (!greetingWave.current && (emoRef.current === "idle" || emoRef.current === "sleepy")) {
        setEmo("following");
      }
      idleT.current = setTimeout(() => {
        setEmo("idle");
        sleepyT.current = setTimeout(() => setEmo("sleepy"), 4000);
      }, 1200);

      if (now - lastCheck.current > 55 && !behaviorLock.current && !greetingWave.current) {
        lastCheck.current = now;
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const moodEl = el?.closest?.("[data-buddy-mood]");
        if (moodEl) {
          const mood = moodEl.getAttribute("data-buddy-mood");
          if (PARAMS[mood]) { setEmo(mood); targetElRef.current = null; }
        } else {
          const interactive = el?.closest?.("a, button, [role='button']");
          if (interactive) {
            const mood = inferMood(interactive);
            if (mood !== "curious") { setEmo(mood); targetElRef.current = null; }
            else {
              const cur = emoRef.current;
              if (cur !== "idle" && cur !== "sleepy") setEmo("following");
            }
          } else {
            const targets = document.querySelectorAll("[data-buddy-target]");
            let best = null;
            let bestD = Infinity;
            for (const t of targets) {
              const r = t.getBoundingClientRect();
              const cx = r.left + r.width / 2;
              const cy = r.top + r.height / 2;
              const d = Math.hypot(e.clientX - cx, e.clientY - cy);
              const th = Math.max(r.width, r.height) * 0.65;
              if (d < th && d < bestD) { best = { cx, cy, d, th }; bestD = d; }
            }
            if (best) {
              targetElRef.current = { cx: best.cx, cy: best.cy };
              setEmo(1 - best.d / best.th > 0.45 ? "excited" : "curious");
            } else {
              targetElRef.current = null;
              const cur = emoRef.current;
              if (cur !== "idle" && cur !== "sleepy") setEmo("following");
            }
          }
        }
      }

      if (now - lastPupil.current > 40) {
        lastPupil.current = now;
        computePupils(e.clientX, e.clientY);
      }
    };

    const onLeave = () => {
      if (visRef.current && emoRef.current !== "waving" && !greetingWave.current) {
        emoRef.current = "waving";
        setEmotion("waving");
        wavingStart.current = performance.now();
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      clearTimeout(idleT.current);
      clearTimeout(sleepyT.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  if (!active) return null;

  const p = PARAMS[emotion] || PARAMS.idle;
  const widenMul = eyeWiden ? 1.25 : 1;
  const eyeRx = blinking ? 1 : p.eyeRx * widenMul;
  const eyeRy = blinking ? 0.6 : p.eyeRy * widenMul;
  const eyeShift = blinking ? 2.5 : p.eyeShift;
  const rawPupilR = blinking ? 0 : PUPIL_R * (p.pupilScale || 1);
  const pupilR = Math.min(rawPupilR, Math.max(0, eyeRy - 1.5));
  const showSparkle = p.sparkle && !blinking;
  const hp = HALO_PARAMS[emotion] || HALO_PARAMS.idle;

  const float = hiccup
    ? { anim: { y: [0, -12, 0] }, trans: { duration: 0.25, ease: "easeInOut" } }
    : FLOAT_ANIMS[emotion] || FLOAT_ANIMS.following;

  return (
    <>
      {[0, 1, 2].map(i => (
        <div
          key={`trail-${i}`}
          ref={el => { trailRefs.current[i] = el; }}
          style={{
            position: "fixed", top: 0, left: 0,
            width: 16 - i * 4, height: 16 - i * 4,
            borderRadius: "50%", background: FILL,
            opacity: 0, pointerEvents: "none",
            zIndex: 99998, willChange: "transform, opacity",
          }}
        />
      ))}

      <div
        ref={buddyRef}
        style={{
          position: "fixed", top: 0, left: 0,
          zIndex: 99999, pointerEvents: "none",
          willChange: "transform, opacity", opacity: 0,
        }}
      >
        <SleepyParticles active={emotion === "sleepy"} />
        <ExcitedSparkles trigger={emotion === "excited"} />
        <PoofCloud active={poofCloud} />

        {clickEffect && (
          <div key={clickEffect.id} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <ClickParticles mood={clickEffect.mood} />
          </div>
        )}

        <div ref={innerRef} style={{ willChange: "transform" }}>
          {/* Halo */}
          <motion.div
            style={{
              position: "absolute", top: -16, left: "50%", marginLeft: -22,
              width: 44, height: 14, pointerEvents: "none",
            }}
            animate={{ rotate: hp.rotate || 0, y: hp.offsetY || 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.svg
              width={44} height={14} viewBox="0 0 44 14" fill="none"
              style={{ overflow: "visible" }}
            >
              <motion.ellipse
                cx={22} cy={7} rx={11} ry={3}
                fill="none" stroke={HALO_STROKE}
                animate={{ opacity: [hp.opacity, hp.opacity * 1.4, hp.opacity], strokeWidth: [2, 3, 2] }}
                transition={{ duration: 0.3, opacity: { repeat: Infinity, duration: 2, ease: "easeInOut" }, strokeWidth: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
              />
            </motion.svg>
          </motion.div>

          {/* Headphones accessory */}
          <AnimatePresence>
            {headphones && (
              <motion.svg
                width={W + 12} height={24} viewBox="0 0 76 24" fill="none"
                style={{ position: "absolute", top: -4, left: -6, pointerEvents: "none" }}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <path d="M14 20C14 12 24 4 38 4C52 4 62 12 62 20" stroke="#475569" strokeWidth={3} strokeLinecap="round" fill="none" />
                <rect x="7" y="15" width="11" height="9" rx="3" fill="#475569" />
                <rect x="58" y="15" width="11" height="9" rx="3" fill="#475569" />
              </motion.svg>
            )}
          </AnimatePresence>

          {/* Speech bubble */}
          <AnimatePresence>
            {speechBubble && (
              <motion.div
                style={{
                  position: "absolute", top: -28, left: W - 6,
                  background: FILL, borderRadius: 8, padding: "3px 9px",
                  whiteSpace: "nowrap", pointerEvents: "none",
                  fontFamily: "'Satoshi', sans-serif", fontSize: 11, fontWeight: 600,
                  color: "white",
                }}
                initial={{ opacity: 0, scale: 0.5, x: -6 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                Hi there!
                <div style={{
                  position: "absolute", left: -4, top: "50%", marginTop: -3,
                  width: 0, height: 0,
                  borderTop: "4px solid transparent",
                  borderBottom: "4px solid transparent",
                  borderRight: "5px solid " + FILL,
                }} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Float animation wrapper */}
          <motion.div animate={float.anim} transition={float.trans}>
            <div ref={squashRef} style={{ willChange: "transform" }}>
              <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" style={{ overflow: "visible" }}>
                <motion.ellipse cx={32} cy={49} fill="#000"
                  animate={{ rx: [20, 14, 20], ry: [2.5, 1, 2.5], opacity: [0.08, 0.03, 0.08] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />

                <motion.path
                  fill={FILL} stroke="rgba(255,255,255,0.18)" strokeWidth={1}
                  animate={{ d: BODY_PATHS[emotion] }} transition={SPRING_EXPR}
                />

                <motion.ellipse cx={17} cy={13} rx={5} ry={7} fill="white" transform="rotate(-20 17 13)"
                  animate={{ opacity: [0.06, 0.22, 0.06] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />

                <motion.path
                  stroke={BROW_STROKE} strokeWidth={2} strokeLinecap="round" fill="none"
                  animate={{ d: BROWS[emotion] }} transition={SPRING_EXPR}
                />

                {/* Left eye */}
                <motion.ellipse cx={EYE_L.cx} fill="white"
                  animate={{ rx: eyeRx, ry: eyeRy, cy: EYE_L.cy + eyeShift }} transition={SPRING_EXPR}
                />
                <motion.circle fill={INK}
                  animate={{ cx: EYE_L.cx + pupils.x, cy: EYE_L.cy + pupils.y + eyeShift, r: pupilR }}
                  transition={{ type: "tween", duration: 0.08, r: SPRING_EXPR }}
                />
                <motion.circle r={1.2} fill="white"
                  animate={{ cx: EYE_L.cx + pupils.x + 1.5, cy: EYE_L.cy + pupils.y + eyeShift - 1.5, opacity: showSparkle ? 1 : 0 }}
                  transition={{ duration: 0.08, opacity: { duration: 0.15 } }}
                />

                {/* Right eye */}
                <motion.ellipse cx={EYE_R.cx} fill="white"
                  animate={{ rx: eyeRx, ry: eyeRy, cy: EYE_R.cy + eyeShift }} transition={SPRING_EXPR}
                />
                <motion.circle fill={INK}
                  animate={{ cx: EYE_R.cx + pupils.x, cy: EYE_R.cy + pupils.y + eyeShift, r: pupilR }}
                  transition={{ type: "tween", duration: 0.08, r: SPRING_EXPR }}
                />
                <motion.circle r={1.2} fill="white"
                  animate={{ cx: EYE_R.cx + pupils.x + 1.5, cy: EYE_R.cy + pupils.y + eyeShift - 1.5, opacity: showSparkle ? 1 : 0 }}
                  transition={{ duration: 0.08, opacity: { duration: 0.15 } }}
                />

                {/* Mouth */}
                <motion.path
                  fill="white" stroke="rgba(255,255,255,0.6)" strokeWidth={0.8} strokeLinejoin="round"
                  animate={{ d: MOUTHS[emotion] }} transition={SPRING_EXPR}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
