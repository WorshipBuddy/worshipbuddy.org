"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

// Products with their colors for the colored dot treatment
const productLinks = [
  { name: "WorshipBuddy",   href: "/worship-buddy",   dot: "#0C245E" },
  { name: "ChurchBuddy",    href: "/church-buddy",    dot: "#0B7261" },
  { name: "PresenterBuddy", href: "/presenter-buddy", dot: "#1E6B8A" },
];

const resourceLinks = [
  { name: "About",           href: "/about" },
  { name: "Feedback",        href: "/feedback" },
  { name: "Changelog",       href: "/changelog" },
  { name: "Guide",           href: "https://guide.worshipbuddy.org", external: true },
  { name: "Donate",          href: "/donate" },
];

const legalLinks = [
  { name: "Privacy & Security", href: "/privacy-security" },
  { name: "Terms of Service",   href: "/terms" },
  { name: "Acceptable Use",     href: "/acceptable-use" },
];

const socialLinks = [
  { name: "Email",     href: "mailto:info@worshipbuddy.org",                icon: FaEnvelope },
  { name: "Instagram", href: "https://www.instagram.com/worshipbuddy/",     icon: FaInstagram, external: true },
  { name: "LinkedIn",  href: "https://www.linkedin.com/company/worshipbuddy/", icon: FaLinkedin, external: true },
];

// Reusable column header — the Tailscale-style ruled label
function ColHeader({ children }) {
  return (
    <div className="pb-3 mb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
      <span className="font-mono text-[11px] font-medium uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
        {children}
      </span>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/5">
      {/* Main grid */}
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 relative">
                <Image
                  src="/worship-buddy-white-logo.png"
                  alt="WorshipBuddy"
                  width={24}
                  height={24}
                  className="object-contain brightness-0 invert opacity-75"
                />
              </div>
              <span className="font-sans font-bold text-[15px] text-white">WorshipBuddy</span>
            </div>
            <p className="font-sans text-[13px] leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.35)" }}>
              A 501(c)(3) nonprofit building free tools for worship teams around the world.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  aria-label={s.name}
                  className="w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-150"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "rgba(255,255,255,0.35)"; }}
                >
                  <s.icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <ColHeader>Products</ColHeader>
            <ul className="space-y-2.5">
              {productLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2.5 font-sans text-[13px] transition-colors duration-150 group"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: l.dot }} />
                    <span className="group-hover:text-white transition-colors duration-150">{l.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <ColHeader>Resources</ColHeader>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="font-sans text-[13px] transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <ColHeader>Legal</ColHeader>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13px] transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-content mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
            © 2026 WorshipBuddy · 501(c)(3) Nonprofit · EIN 93-3532161
          </span>
          <div className="flex gap-5">
            {legalLinks.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="font-mono text-[11px] hover:text-white transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
