"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

const trustBadges = ["No Ads", "No In-App Purchases", "501(c)(3) Nonprofit", "Free Forever"];

export default function BentoHero() {
  return (
    <section className="bg-surface pt-[60px]">
      <div className="max-w-content mx-auto px-6 lg:px-8 pt-20 pb-0 text-center">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0)} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-wb bg-wb-light px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-wb" />
            Free tools for every church
          </span>
        </motion.div>

        {/* Headline — Instrument Serif */}
        <motion.h1
          {...fadeUp(0.08)}
          className="font-heading text-[clamp(46px,8vw,88px)] leading-[1.04] tracking-[-0.02em] text-ink text-balance mx-auto max-w-4xl mb-6"
        >
          Everything your worship{" "}
          <em className="not-italic text-wb">team needs</em>
        </motion.h1>

        {/* Sub */}
        <motion.p
          {...fadeUp(0.15)}
          className="font-sans text-[18px] text-muted max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Song management, scheduling, and presentation software — built by
          worship leaders, free forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.22)}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
        >
          <Link href="/worship-buddy" className="btn btn-primary btn-lg">
            Explore our tools
          </Link>
          <Link href="/about" className="btn btn-ghost btn-lg">
            Read our story
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(0.28)}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-16"
        >
          {trustBadges.map((badge) => (
            <span key={badge} className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
              <span className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center text-white text-[8px] font-bold">✓</span>
              {badge}
            </span>
          ))}
        </motion.div>

        {/* App preview — WorshipBuddy library mockup */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-t-2xl overflow-hidden border border-border border-b-0 shadow-card-hover bg-white">
            {/* Browser chrome */}
            <div className="bg-surface-card border-b border-border px-4 h-9 flex items-center gap-2 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="flex-1 flex justify-center">
                <div className="bg-border/50 rounded h-4 w-52" />
              </div>
            </div>

            {/* App layout */}
            <div className="flex h-[320px] sm:h-[380px]">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-48 border-r border-border bg-surface shrink-0 p-4 gap-0.5">
                <div className="flex items-center gap-2 mb-4 px-1">
                  <Image src="/worship-buddy-white-logo.png" alt="" width={22} height={22} className="object-contain" />
                  <span className="font-sans font-semibold text-[13px] text-ink">WorshipBuddy</span>
                </div>
                {[
                  { label: "My Library", active: true  },
                  { label: "Sets",       active: false  },
                  { label: "Schedule",   active: false  },
                  { label: "Presenter",  active: false  },
                  { label: "Admin",      active: false  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] font-medium cursor-default ${
                      item.active ? "bg-wb-light text-wb" : "text-muted"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.active ? "bg-wb" : "bg-border"}`} />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main panel */}
              <div className="flex-1 p-5 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-sans font-semibold text-[15px] text-ink">My Library</h3>
                    <p className="font-mono text-[11px] text-muted mt-0.5">247 songs · 12 sets</p>
                  </div>
                  <span className="badge badge-wb">worshipbuddy</span>
                </div>

                {/* Song rows */}
                {[
                  { title: "How Great Is Our God",  artist: "Chris Tomlin",     key: "G",  active: true  },
                  { title: "Goodness of God",        artist: "Bethel Music",     key: "A",  active: false },
                  { title: "Way Maker",              artist: "Sinach",           key: "Bb", active: false },
                  { title: "Build My Life",          artist: "Pat Barrett",      key: "D",  active: false },
                  { title: "What a Beautiful Name",  artist: "Hillsong Worship", key: "E",  active: false },
                  { title: "Oceans",                 artist: "Hillsong United",  key: "D",  active: false },
                ].map((song) => (
                  <div
                    key={song.title}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 ${
                      song.active ? "bg-wb-light" : "hover:bg-surface"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-[12px] shrink-0 ${
                      song.active ? "bg-wb text-white" : "bg-surface-card text-muted"
                    }`}>♪</div>
                    <div className="flex-1 min-w-0">
                      <p className={`font-sans font-medium text-[13px] truncate ${song.active ? "text-wb" : "text-ink"}`}>
                        {song.title}
                      </p>
                      <p className="font-sans text-[11px] text-muted truncate">{song.artist}</p>
                    </div>
                    <span className={`font-mono text-[11px] px-2 py-0.5 rounded shrink-0 ${
                      song.active ? "bg-wb text-white" : "bg-surface-card text-muted"
                    }`}>{song.key}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
