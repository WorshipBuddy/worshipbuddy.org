"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaBookOpen, FaHeadphones, FaBroadcastTower, FaTimes } from "react-icons/fa";

const BB = "#A6492E";
const BB_LIGHT = "#F4E4DC";
const STORAGE_KEY = "bb_intro_seen_v1";

const highlights = [
  { icon: FaBookOpen, text: "The full Bible — offline, in your favorite version" },
  { icon: FaHeadphones, text: "Lifelike audio narration & guided reading plans" },
  { icon: FaBroadcastTower, text: "Follow along live when your church presents a verse" },
];

export default function BibleBuddyIntroModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setOpen(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* localStorage unavailable — skip */
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={dismiss}
            aria-hidden="true"
          />

          {/* card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Introducing BibleBuddy"
            className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            {/* header band */}
            <div
              className="relative px-8 pt-10 pb-8 text-center"
              style={{ background: BB }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(244,228,220,0.22)_0%,_transparent_65%)]" />
              <button
                onClick={dismiss}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <FaTimes size={14} />
              </button>

              <div className="relative z-10 flex justify-center mb-4">
                <div className="rounded-[20px] overflow-hidden shadow-xl ring-1 ring-white/25">
                  <Image
                    src="/bible-buddy-icon.png"
                    alt="BibleBuddy app icon"
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover"
                  />
                </div>
              </div>

              <span className="relative z-10 inline-block font-mono text-[10px] font-medium uppercase tracking-widest text-white/80 mb-2">
                New in the WorshipBuddy Suite
              </span>
              <h2 className="relative z-10 text-2xl font-bold font-heading text-white">
                Meet BibleBuddy
              </h2>
            </div>

            {/* body */}
            <div className="px-8 py-7">
              <p className="text-center text-gray-500 text-sm leading-relaxed mb-6">
                A beautiful, offline-first Bible reader made for your church —
                free forever, no ads, no in-app purchases.
              </p>

              <ul className="space-y-3 mb-7">
                {highlights.map((h) => (
                  <li key={h.text} className="flex items-center gap-3">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: BB_LIGHT, color: BB }}
                    >
                      <h.icon size={14} />
                    </span>
                    <span className="text-sm text-gray-700">{h.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <Link
                  href="/bible-buddy"
                  onClick={dismiss}
                  className="btn btn-lg w-full justify-center text-white"
                  style={{ background: BB }}
                >
                  Explore BibleBuddy
                </Link>
                <button
                  onClick={dismiss}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Maybe later
                </button>
              </div>

              <p className="text-center font-mono text-[10px] uppercase tracking-widest text-gray-400 mt-5">
                Coming soon to iOS &amp; Android
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
