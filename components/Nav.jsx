"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const products = [
  { name: "churchbuddy",    label: "ChurchBuddy",    href: "/church-buddy",    colorClass: "text-cb" },
  { name: "worshipbuddy",   label: "WorshipBuddy",   href: "/worship-buddy",   colorClass: "text-wb" },
  { name: "presenterbuddy", label: "PresenterBuddy", href: "/presenter-buddy", colorClass: "text-pb" },
];

const resources = [
  { name: "About",     href: "/about" },
  { name: "Changelog", href: "/changelog" },
  { name: "Guide ↗",  href: "https://guide.worshipbuddy.org", external: true },
  { name: "Feedback",  href: "/feedback" },
];

// Linear interpolate between two RGB triplets
function lerp(a, b, t) { return a + (b - a) * t; }
function lerpRGB(c1, c2, t) {
  return [
    Math.round(lerp(c1[0], c2[0], t)),
    Math.round(lerp(c1[1], c2[1], t)),
    Math.round(lerp(c1[2], c2[2], t)),
  ];
}
function rgb([r, g, b]) { return `rgb(${r},${g},${b})`; }
function rgba([r, g, b], a) { return `rgba(${r},${g},${b},${a})`; }

const WHITE  = [255, 255, 255];
const INK    = [24,  24,  27 ];  // --text / zinc-900
const MUTED  = [113, 113, 122];  // --muted / zinc-500
const BORDER = [228, 228, 231];  // zinc-200

export default function Nav() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen]  = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setProgress(1);
      return;
    }
    const ZONE = 200; // px window over which transition occurs
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      const start = heroHeight - ZONE; // transition ends right at hero boundary
      setProgress(Math.max(0, Math.min(1, (window.scrollY - start) / ZONE)));
    };
    onScroll(); // set correct value on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href) => pathname === href;

  // All visual values derived from progress (0 → 1)
  const fgInk   = rgb(lerpRGB(WHITE, INK,    progress));
  const fgMuted  = rgb(lerpRGB(WHITE, MUTED,  progress));
  const sepColor = rgb(lerpRGB([255, 255, 255], BORDER, progress));

  const headerStyle = {
    background:         rgba(WHITE, progress * 0.97),
    borderBottomColor:  rgba(BORDER, progress),
    backdropFilter:     `blur(${(progress * 12).toFixed(1)}px)`,
    WebkitBackdropFilter: `blur(${(progress * 12).toFixed(1)}px)`,
    boxShadow: progress > 0.85
      ? `0 1px 3px rgba(0,0,0,${((progress - 0.85) / 0.15 * 0.08).toFixed(3)})`
      : "none",
  };

  return (
    <header
      style={headerStyle}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 h-[60px] flex items-center justify-between">

        {/* ── Logo + wordmark ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-7 h-7 relative">
            {/* Hero logo — cross/waveform mark, fades out as nav transitions */}
            <Image
              src="/wb-hero-logo.png"
              alt="WorshipBuddy"
              width={28}
              height={28}
              className="absolute inset-0 object-contain"
              style={{ opacity: 1 - progress, mixBlendMode: "screen" }}
            />
            {/* Normal logo — fades in and goes dark for white nav */}
            <Image
              src="/worship-buddy-white-logo.png"
              alt=""
              width={28}
              height={28}
              className="absolute inset-0 object-contain"
              style={{ opacity: progress, filter: "brightness(0)" }}
            />
          </div>
          <span style={{ color: fgInk }} className="font-sans font-bold text-[17px] tracking-tight">
            WorshipBuddy
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              style={isActive(p.href) ? undefined : { color: fgMuted }}
              className={`font-mono text-[12px] font-medium px-3 py-1.5 rounded-md transition-colors duration-150 ${
                isActive(p.href)
                  ? `${p.colorClass} bg-surface-card`
                  : "hover:bg-white/10"
              }`}
            >
              {p.label}
            </Link>
          ))}

          <span style={{ backgroundColor: sepColor }} className="w-px h-4 mx-1.5" />

          {resources.map((r) => (
            <Link
              key={r.name}
              href={r.href}
              target={r.external ? "_blank" : undefined}
              rel={r.external ? "noopener noreferrer" : undefined}
              style={{ color: isActive(r.href) ? fgInk : fgMuted }}
              className={`font-sans text-[13px] px-3 py-1.5 rounded-md transition-colors duration-150 ${
                isActive(r.href) ? "font-semibold bg-surface-card" : "hover:bg-white/10"
              }`}
            >
              {r.name}
            </Link>
          ))}
        </nav>

        {/* ── Right side ── */}
        <div className="flex items-center gap-3">
          <Link
            href="/donate"
            style={{
              color:       fgMuted,
              borderColor: rgba(lerpRGB([255, 255, 255], BORDER, progress), Math.max(0.3, progress)),
            }}
            className="hidden sm:inline-flex items-center gap-1.5 font-sans text-[13px] font-medium px-4 py-2 rounded-lg border transition-colors duration-150 hover:border-red-400"
          >
            <FaHeart className="text-[11px] text-red-400" />
            Donate
          </Link>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            style={{ color: fgMuted }}
            className="lg:hidden p-2 -mr-1 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {menuOpen ? (
                <path d="M4 4l12 12M4 16L16 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden border-t border-border bg-white"
          >
            <div className="max-w-content mx-auto px-6 py-4 flex flex-col gap-0.5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted/50 px-2 pt-1 pb-2">
                Products
              </p>
              {products.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className={`font-mono text-[13px] font-medium px-3 py-2.5 rounded-lg transition-colors ${
                    isActive(p.href)
                      ? `${p.colorClass} bg-surface-card`
                      : "text-muted hover:text-ink hover:bg-surface-card"
                  }`}
                >
                  {p.label}
                </Link>
              ))}

              <p className="font-mono text-[10px] uppercase tracking-widest text-muted/50 px-2 pt-4 pb-2">
                Resources
              </p>
              {resources.map((r) => (
                <Link
                  key={r.name}
                  href={r.href}
                  target={r.external ? "_blank" : undefined}
                  rel={r.external ? "noopener noreferrer" : undefined}
                  className="font-sans text-[14px] text-muted hover:text-ink px-3 py-2.5 rounded-lg hover:bg-surface-card transition-colors"
                >
                  {r.name}
                </Link>
              ))}

              <div className="pt-3 mt-2 border-t border-border">
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-2 font-sans text-[14px] font-medium px-4 py-3 rounded-lg border border-border text-muted hover:text-ink hover:border-ink transition-colors duration-150 w-full"
                >
                  <FaHeart className="text-[12px] text-red-400" />
                  Donate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
