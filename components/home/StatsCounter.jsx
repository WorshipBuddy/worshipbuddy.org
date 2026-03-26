"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 500, suffix: "+", label: "Churches Served" },
  { value: 4, suffix: "", label: "Free Products" },
  { value: 100, suffix: "%", label: "Free Forever" },
];

function useCounter(target, inView, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

function StatItem({ value, suffix, label }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const count = useCounter(value, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-2">
        {count}
        <span className="text-blue-300">{suffix}</span>
      </div>
      <div className="text-sm sm:text-base text-blue-100/70 font-medium">
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden section-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
