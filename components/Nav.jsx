"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { name: "worshipbuddy",   label: "WorshipBuddy",   href: "/worship-buddy",   colorClass: "text-wb" },
  { name: "churchbuddy",    label: "ChurchBuddy",    href: "/church-buddy",    colorClass: "text-cb" },
  { name: "presenterbuddy", label: "PresenterBuddy", href: "/presenter-buddy", colorClass: "text-pb" },
];

const resources = [
  { name: "About",     href: "/about" },
  { name: "Changelog", href: "/changelog" },
  { name: "Guide",     href: "https://guide.worshipbuddy.org", external: true },
  { name: "Feedback",  href: "/feedback" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-nav"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 h-[60px] flex items-center justify-between">

        {/* ── Logo + wordmark ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-7 h-7 relative">
            <Image
              src="/worship-buddy-white-logo.png"
              alt="WorshipBuddy"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <span className="font-sans font-bold text-[17px] text-ink tracking-tight">
            WorshipBuddy
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {products.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className={`font-mono text-[12px] font-medium px-3 py-1.5 rounded-md transition-colors duration-150 ${
                isActive(p.href)
                  ? `${p.colorClass} bg-surface-card`
                  : "text-muted hover:text-ink hover:bg-surface-card"
              }`}
            >
              {p.name}
            </Link>
          ))}

          <span className="w-px h-4 bg-border mx-1.5" />

          {resources.map((r) => (
            <Link
              key={r.name}
              href={r.href}
              target={r.external ? "_blank" : undefined}
              rel={r.external ? "noopener noreferrer" : undefined}
              className={`font-sans text-[13px] px-3 py-1.5 rounded-md transition-colors duration-150 ${
                isActive(r.href)
                  ? "text-ink font-semibold bg-surface-card"
                  : "text-muted hover:text-ink hover:bg-surface-card"
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
            className="hidden sm:inline-flex font-sans text-[13px] text-muted hover:text-ink transition-colors duration-150"
          >
            Donate
          </Link>
          <Link href="/worship-buddy" className="btn btn-primary px-4 py-2 text-[13px]">
            Get started — free
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 -mr-1 text-muted hover:text-ink transition-colors"
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
                  {p.name}
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
                <Link href="/worship-buddy" className="btn btn-primary btn-lg w-full justify-center">
                  Get started — free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
