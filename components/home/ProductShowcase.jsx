"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ── Per-product config ────────────────────────────────────────────────────────
const products = [
  {
    id: "wb",
    slug: "worshipbuddy",
    label: "WorshipBuddy",
    tagline: "Your church's music library",
    description:
      "Host all your church's music in one place — originals, purchased songs, and multiple language versions. Manage everything through the admin portal and share it with your whole team.",
    color: "#0C245E",
    lightBg: "#DCE4F8",
    textColor: "text-wb",
    bgClass: "bg-wb-light",
    btnClass: "btn-wb",
    href: "/worship-buddy",
    features: [
      "Build your church's song library with full lyrics and chords",
      "Transpose any song to any key with one tap",
      "Build and share worship sets with your team",
      "Multi-language song versions for multilingual congregations",
    ],
  },
  {
    id: "cb",
    slug: "churchbuddy",
    label: "ChurchBuddy",
    tagline: "Scheduling that actually works",
    description:
      "Coordinate ministry teams, manage services, assign roles, and keep your entire church organized — without the spreadsheets.",
    color: "#0B7261",
    lightBg: "#CCE9E4",
    textColor: "text-cb",
    bgClass: "bg-cb-light",
    btnClass: "btn-cb",
    href: "/church-buddy",
    features: [
      "Plan services weeks ahead with drag-and-drop scheduling",
      "Assign team members to roles and send automatic reminders",
      "Manage volunteer availability and resolve conflicts",
      "Syncs directly with WorshipBuddy sets",
    ],
  },
  {
    id: "pb",
    slug: "presenterbuddy",
    label: "PresenterBuddy",
    tagline: "Present with confidence",
    description:
      "Professional presentation software for worship — from a simple lyrics display to a full production suite with NDI output and remote control.",
    color: "#1E6B8A",
    lightBg: "#D0E9F2",
    textColor: "text-pb",
    bgClass: "bg-pb-light",
    btnClass: "btn-pb",
    href: "/presenter-buddy",
    features: [
      "Import sets directly from WorshipBuddy — one click",
      "NDI output for multi-screen production setups",
      "Remote control from any device on your network",
      "Works on Mac, Windows, and iPad",
    ],
  },
];

// ── Mockup components ─────────────────────────────────────────────────────────
function WBMockup() {
  return (
    <div className="h-full flex flex-col p-5 bg-white">
      <div className="flex items-center gap-2 mb-4">
        <span className="badge badge-wb">My Library</span>
        <span className="badge badge-neutral">Sets</span>
        <span className="badge badge-neutral">Admin</span>
      </div>
      {[
        { title: "How Great Is Our God",  artist: "Chris Tomlin",     key: "G",  active: true  },
        { title: "Goodness of God",       artist: "Bethel Music",     key: "A",  active: false },
        { title: "Way Maker",             artist: "Sinach",           key: "Bb", active: false },
        { title: "Build My Life",         artist: "Pat Barrett",      key: "D",  active: false },
        { title: "What a Beautiful Name", artist: "Hillsong Worship", key: "E",  active: false },
      ].map((song) => (
        <div key={song.title} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 ${song.active ? "bg-wb-light" : ""}`}>
          <div className={`w-7 h-7 rounded-md flex items-center justify-center text-[12px] shrink-0 ${song.active ? "bg-wb text-white" : "bg-surface-card text-muted"}`}>♪</div>
          <div className="flex-1 min-w-0">
            <p className={`font-sans font-medium text-[13px] truncate ${song.active ? "text-wb" : "text-ink"}`}>{song.title}</p>
            <p className="font-sans text-[11px] text-muted">{song.artist}</p>
          </div>
          <span className={`font-mono text-[11px] px-2 py-0.5 rounded shrink-0 ${song.active ? "bg-wb text-white" : "bg-surface-card text-muted"}`}>{song.key}</span>
        </div>
      ))}
    </div>
  );
}

function CBMockup() {
  return (
    <div className="h-full flex flex-col p-5 bg-[#FFFBEB]">
      <div className="flex items-center gap-2 mb-4">
        <span className="badge badge-cb">April 2026</span>
        <span className="badge badge-neutral">+ Add Service</span>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-3">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map((d) => (
          <div key={d} className="font-mono text-[9px] text-center text-muted py-1">{d}</div>
        ))}
        {["","","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"].map((d, i) => (
          <div key={i} className={`font-sans text-[11px] text-center py-1.5 rounded ${d === "6" || d === "13" ? "bg-cb text-white font-semibold" : "text-muted"}`}>{d}</div>
        ))}
      </div>
      <div className="bg-white rounded-lg p-3 border border-cb-light mb-2">
        <p className="font-sans font-semibold text-[12px] text-cb-dark mb-1.5">Sunday Service — 9:30am</p>
        <div className="flex gap-1.5 flex-wrap">
          <span className="font-mono text-[10px] bg-cb-light text-cb-dark px-2 py-0.5 rounded">Worship Lead: Alex</span>
          <span className="font-mono text-[10px] bg-cb-light text-cb-dark px-2 py-0.5 rounded">Keys: Maria</span>
          <span className="font-mono text-[10px] bg-cb-light text-cb-dark px-2 py-0.5 rounded">Drums: Jason</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-3 border border-border">
        <p className="font-sans font-semibold text-[12px] text-muted mb-1.5">Sunday Service — 11:00am</p>
        <span className="font-mono text-[10px] bg-surface-card text-muted px-2 py-0.5 rounded">3 roles assigned</span>
      </div>
    </div>
  );
}

function PBMockup() {
  return (
    <div className="h-full flex flex-col bg-[#0F0A2A]">
      <div className="flex items-center gap-2 px-4 h-9 border-b border-[#3730A3]/30 shrink-0" style={{ background: "#1E1B4B" }}>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: "#2D2B5A", color: "#A5B4FC" }}>presenterbuddy</span>
        <span className="font-mono text-[10px] ml-auto" style={{ color: "rgba(255,255,255,0.25)" }}>Slide 2 / 8</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-6 text-center">
        <p className="font-heading text-[22px] sm:text-[28px] text-white leading-snug mb-3">
          The splendor of the King,<br/>clothed in majesty
        </p>
        <p className="font-sans text-[13px] mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
          Let all the earth rejoice, all the earth rejoice
        </p>
        <div className="flex gap-2">
          <div className="w-8 h-1 rounded-full bg-pb" />
          <div className="w-8 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
          <div className="w-8 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.15)" }} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 px-4 py-3 border-t border-[#3730A3]/20">
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px]" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}>‹</button>
        <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px]" style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}>›</button>
        <span className="font-mono text-[10px] ml-2" style={{ color: "rgba(255,255,255,0.25)" }}>NDI · Remote · Live</span>
      </div>
    </div>
  );
}

const MOCKUPS = { wb: <WBMockup />, cb: <CBMockup />, pb: <PBMockup /> };

// ── Main component ────────────────────────────────────────────────────────────
export default function ProductShowcase() {
  const [active, setActive] = useState("wb");
  const current = products.find((p) => p.id === active);

  return (
    <section id="products" className="bg-white border-t border-border">
      <div className="max-w-content mx-auto">

        {/* ── Tab bar ── */}
        <div className="flex border-b border-border overflow-x-auto no-scrollbar">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              style={active === p.id ? { borderBottomColor: p.color, background: p.lightBg } : {}}
              className={`flex flex-col items-start px-6 sm:px-8 py-4 border-b-2 transition-all duration-150 shrink-0 min-w-[160px] sm:min-w-[200px] text-left cursor-pointer ${
                active === p.id ? "border-b-2" : "border-transparent hover:bg-surface-card"
              }`}
            >
              <span
                className="font-mono text-[12px] sm:text-[13px] font-semibold tracking-tight mb-0.5"
                style={{ color: active === p.id ? p.color : "#71717A" }}
              >
                {p.slug}
              </span>
              <span className="font-sans text-[12px] text-muted hidden sm:block leading-snug">
                {p.tagline}
              </span>
            </button>
          ))}
        </div>

        {/* ── Content panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="grid lg:grid-cols-2 min-h-[440px] lg:min-h-[520px]"
          >
            {/* Text */}
            <div className="px-6 sm:px-10 lg:px-14 py-10 lg:py-16 flex flex-col justify-center">
              <span
                className="font-mono text-[11px] font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: current.color }}
              >
                PRODUCT
              </span>
              <h2 className="font-heading text-[clamp(28px,4vw,46px)] leading-[1.12] text-ink mb-4 text-balance">
                {current.tagline}
              </h2>
              <p className="font-sans text-[16px] text-muted leading-relaxed mb-8 max-w-lg">
                {current.description}
              </p>
              <ul className="space-y-3 mb-10">
                {current.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 font-sans text-[14px] text-ink">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-[7px] shrink-0"
                      style={{ background: current.color }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <div>
                <Link href={current.href} className={`btn ${current.btnClass} btn-lg`}>
                  Get {current.label} — free
                </Link>
              </div>
            </div>

            {/* Mockup */}
            <div
              className="relative border-t lg:border-t-0 lg:border-l border-border overflow-hidden min-h-[360px] lg:min-h-0"
              style={{ background: current.id === "pb" ? "#0F0A2A" : current.lightBg }}
            >
              {/* Mini chrome bar */}
              <div
                className="flex items-center gap-2 px-4 h-9 border-b shrink-0"
                style={{
                  borderColor: current.id === "pb" ? "rgba(124,58,237,0.2)" : current.color + "22",
                  background: current.id === "pb" ? "#1E1B4B" : "rgba(255,255,255,0.55)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="h-[calc(100%-36px)]">
                {MOCKUPS[active]}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
