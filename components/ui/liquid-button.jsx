"use client";

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter
          id="liquid-glass-filter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

/**
 * LiquidButton — glassmorphism button with SVG distortion filter.
 * Designed for use on dark backgrounds (e.g. the WebGL shader hero).
 *
 * Props:
 *   className  – extra Tailwind classes (e.g. text color, border)
 *   children   – button label / content
 *   size       – "sm" | "md" | "lg" (default: "md")
 */
export function LiquidButton({ children, className = "", size = "md", ...props }) {
  const sizeClasses = {
    sm: "h-9 px-5 text-sm",
    md: "h-11 px-7 text-sm",
    lg: "h-13 px-9 text-base",
  };

  return (
    <button
      className={[
        "relative inline-flex items-center justify-center cursor-pointer",
        "gap-2 whitespace-nowrap font-medium rounded-full",
        "transition-[opacity,transform] duration-200",
        "hover:opacity-90 active:scale-[0.97]",
        sizeClasses[size] || sizeClasses.md,
        className,
      ].join(" ")}
      {...props}
    >
      {/* Glass shadow ring */}
      <div
        className="absolute inset-0 rounded-full z-0 transition-all duration-200"
        style={{
          boxShadow: [
            "0 0 6px rgba(0,0,0,0.03)",
            "0 2px 6px rgba(0,0,0,0.08)",
            "inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09)",
            "inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85)",
            "inset 1px 1px 1px -0.5px rgba(255,255,255,0.6)",
            "inset -1px -1px 1px -0.5px rgba(255,255,255,0.6)",
            "inset 0 0 6px 6px rgba(255,255,255,0.12)",
            "inset 0 0 2px 2px rgba(255,255,255,0.06)",
            "0 0 12px rgba(0,0,0,0.15)",
          ].join(","),
        }}
      />

      {/* Backdrop distortion layer */}
      <div
        className="absolute inset-0 isolate -z-10 overflow-hidden rounded-full"
        style={{ backdropFilter: 'url("#liquid-glass-filter")' }}
      />

      {/* Label */}
      <span className="relative z-10 pointer-events-none">{children}</span>

      <GlassFilter />
    </button>
  );
}
