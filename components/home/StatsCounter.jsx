"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 500, suffix: "+", label: "Churches served"  },
  { value: 3,   suffix: "",  label: "Integrated tools" },
  { value: 100, suffix: "%", label: "Free forever"     },
];

function useCounter(target, inView, duration = 1800) {
  const [count, setCount] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (!inView || done.current) return;
    done.current = true;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);
  return count;
}

function Stat({ value, suffix, label }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCounter(value, inView);
  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-[clamp(40px,6vw,64px)] font-semibold text-white leading-none mb-2 tabular-nums">
        {count}<span className="text-white/35">{suffix}</span>
      </div>
      <div className="font-sans text-[14px] text-white/40 tracking-wide">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="bg-dark border-t border-white/5 py-20 sm:py-28">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
