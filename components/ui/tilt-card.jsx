"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function TiltCard({ children, className = "", fitContent = false, borderRadius }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0 60px 120px rgba(0,0,0,0.45), 0 30px 60px rgba(0,0,0,0.25)",
      "0 10px 32px rgba(0,0,0,0.10), 0 4px 10px rgba(0,0,0,0.06)",
    ]
  );

  return (
    <div ref={ref} style={{ perspective: "1200px" }} className={className}>
      <motion.div
        style={{ rotateX, scale, boxShadow, borderRadius }}
        // fitContent shrinks the shadow wrapper to the content width (e.g. a phone
        // mockup) so the shadow hugs the element rather than a full-width white box
        className={fitContent ? "w-fit mx-auto" : undefined}
      >
        {children}
      </motion.div>
    </div>
  );
}
