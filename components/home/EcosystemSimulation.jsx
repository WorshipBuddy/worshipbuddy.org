"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMusic,
  FaPlus,
  FaCheck,
  FaCalendarAlt,
  FaKey,
  FaChevronRight,
  FaChevronLeft,
  FaChevronDown,
  FaGripVertical,
  FaTrash,
} from "react-icons/fa";

const STEPS = [
  {
    id: "schedule",
    label: "Scheduling Sunday's worship team…",
    product: "ChurchBuddy",
    color: "text-[#10245c]",
    bg: "bg-[#10245c]",
  },
  {
    id: "setlist",
    label: "Building the setlist for Sunday…",
    product: "WorshipBuddy",
    color: "text-blue-500",
    bg: "bg-blue-500",
  },
  {
    id: "present",
    label: "Sunday morning — going live…",
    product: "PresenterBuddy",
    color: "text-orange-500",
    bg: "bg-orange-500",
  },
];

/* ─────────────────────────────────────────────
   ChurchBuddy: Scheduler
   ───────────────────────────────────────────── */

const POSITIONS = [
  { role: "Worship Leader", team: "Worship Team" },
  { role: "Keys", team: "Worship Team" },
  { role: "Guitar", team: "Worship Team" },
  { role: "Drums", team: "Worship Team" },
  { role: "Bass", team: "Worship Team" },
];

const PEOPLE_PER_POSITION = {
  "Worship Leader": [
    { name: "Sarah M.", initials: "SM", status: "available" },
    { name: "James T.", initials: "JT", status: "fatigue-light", fatigueScore: "1.8" },
    { name: "Noah B.", initials: "NB", status: "fatigue-medium", fatigueScore: "3.2" },
    { name: "Anna K.", initials: "AK", status: "unavailable" },
    { name: "Rachel P.", initials: "RP", status: "conflict" },
  ],
  Keys: [
    { name: "David R.", initials: "DR", status: "available" },
    { name: "Lily C.", initials: "LC", status: "available" },
    { name: "Mike W.", initials: "MW", status: "fatigue-light", fatigueScore: "2.1" },
    { name: "Rachel P.", initials: "RP", status: "unavailable" },
    { name: "Emma S.", initials: "ES", status: "conflict" },
  ],
  Guitar: [
    { name: "Mark L.", initials: "ML", status: "available" },
    { name: "James T.", initials: "JT", status: "available" },
    { name: "Ryan H.", initials: "RH", status: "fatigue-light", fatigueScore: "1.4" },
    { name: "Chris D.", initials: "CD", status: "unavailable" },
  ],
  Drums: [
    { name: "Noah B.", initials: "NB", status: "available" },
    { name: "Tyler F.", initials: "TF", status: "available" },
    { name: "Mark L.", initials: "ML", status: "fatigue-medium", fatigueScore: "4.1" },
    { name: "Anna K.", initials: "AK", status: "unavailable" },
    { name: "David R.", initials: "DR", status: "conflict" },
  ],
  Bass: [
    { name: "Anna K.", initials: "AK", status: "available" },
    { name: "Mike W.", initials: "MW", status: "available" },
    { name: "Lily C.", initials: "LC", status: "fatigue-light", fatigueScore: "1.1" },
    { name: "Sarah M.", initials: "SM", status: "conflict" },
  ],
};

const ASSIGNED_PEOPLE = [
  { name: "Sarah M.", initials: "SM" },
  { name: "David R.", initials: "DR" },
  { name: "Mark L.", initials: "ML" },
  { name: "Noah B.", initials: "NB" },
  { name: "Mike W.", initials: "MW" },
];

const STATUS_STYLES = {
  available: {
    bg: "bg-white",
    border: "",
    label: "Available",
    labelColor: "text-[#059669]",
    dot: "bg-[#10b981]",
  },
  "fatigue-light": {
    bg: "bg-[#dbeafe]",
    border: "border-l-[3px] border-l-[#60a5fa]",
    label: "Scheduled recently",
    labelColor: "text-[#1e40af]",
    dot: "bg-[#60a5fa]",
  },
  "fatigue-medium": {
    bg: "bg-[#93c5fd]",
    border: "border-l-[3px] border-l-[#3b82f6]",
    label: "Scheduled frequently",
    labelColor: "text-[#1e3a8a]",
    dot: "bg-[#3b82f6]",
  },
  unavailable: {
    bg: "bg-[#fef3c7]",
    border: "border-l-[3px] border-l-[#f59e0b]",
    label: "Unavailable",
    labelColor: "text-[#92400e]",
    dot: "bg-[#f59e0b]",
  },
  conflict: {
    bg: "bg-[#fee2e2]",
    border: "border-l-[3px] border-l-[#ef4444]",
    label: "Team Conflict",
    labelColor: "text-[#991b1b]",
    dot: "bg-[#ef4444]",
  },
};

function SchedulerStep({ progress }) {
  const filledCount = Math.min(Math.floor(progress * (POSITIONS.length + 1.5)), POSITIONS.length);
  const activePickerIdx = filledCount < POSITIONS.length ? filledCount : POSITIONS.length - 1;
  const activeRole = POSITIONS[activePickerIdx].role;
  const sidebarPeople = PEOPLE_PER_POSITION[activeRole] || [];

  return (
    <div className="flex gap-4 h-full">
      {/* Service card */}
      <div className="flex-1 bg-white rounded-2xl border border-[#e2e8f0] shadow-card overflow-hidden flex flex-col">
        <div className="bg-[#10245c] px-5 py-3">
          <p className="text-sm font-bold text-white">Sunday Worship</p>
          <p className="text-[11px] text-white/60">Sun, Mar 22 · 9:00 AM</p>
        </div>
        <div className="p-4 flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-[#10245c]" />
            <p className="text-xs font-bold text-[#1a202c]">Worship Team</p>
            <span className="text-[10px] text-[#94a3b8] ml-auto">
              <span className={filledCount === POSITIONS.length ? "text-[#10b981] font-semibold" : ""}>
                {filledCount}/{POSITIONS.length}
              </span>
            </span>
          </div>
          <div className="space-y-1.5">
            {POSITIONS.map((pos, i) => {
              const isFilled = i < filledCount;
              const isActive = i === activePickerIdx && filledCount < POSITIONS.length;
              const person = isFilled ? ASSIGNED_PEOPLE[i] : null;

              return (
                <motion.div
                  key={pos.role}
                  layout
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all duration-500 ${
                    isActive
                      ? "border-2 border-[#10245c]/40 bg-[#10245c]/5"
                      : isFilled
                      ? "bg-[#f8fafc] border border-[#e2e8f0]"
                      : "border border-dashed border-[#f59e0b]/60 bg-[#fef3c7]/30"
                  }`}
                >
                  <span className="text-[11px] text-[#94a3b8] w-[85px] shrink-0 truncate">{pos.role}</span>
                  {isFilled ? (
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex items-center gap-2 flex-1"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#10245c]/10 flex items-center justify-center text-[8px] font-bold text-[#10245c]">
                        {person.initials}
                      </div>
                      <span className="text-[#1a202c] font-medium">{person.name}</span>
                      <FaCheck className="text-[8px] text-[#10b981] ml-auto" />
                    </motion.div>
                  ) : isActive ? (
                    <span className="text-[#10245c]/60 font-medium italic text-[11px]">Select a member →</span>
                  ) : (
                    <span className="text-[#f59e0b]/70 italic text-[11px]">Unassigned</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* People sidebar */}
      <div className="w-[180px] sm:w-[220px] bg-white rounded-2xl border border-[#e2e8f0] shadow-card overflow-hidden flex flex-col shrink-0">
        <div className="px-4 py-2.5 border-b border-[#e2e8f0] bg-[#f8fafc]">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeRole}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="text-[10px] font-bold text-[#10245c] uppercase tracking-wider"
            >
              {activeRole}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRole}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="divide-y divide-[#f1f5f9]"
            >
              {sidebarPeople.map((person, i) => {
                const style = STATUS_STYLES[person.status];
                const isDisabled = person.status === "unavailable" || person.status === "conflict";

                return (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className={`px-3 py-2.5 ${style.bg} ${style.border} ${isDisabled ? "opacity-70" : "hover:bg-[#f8fafc] cursor-pointer"} transition-colors`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#e2e8f0] flex items-center justify-center text-[8px] font-bold text-[#475569] shrink-0">
                        {person.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-medium text-[#1a202c] truncate">{person.name}</p>
                        <div className="flex items-center gap-1">
                          <div className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                          <span className={`text-[9px] ${style.labelColor}`}>{style.label}</span>
                          {person.fatigueScore && (
                            <span className="text-[8px] bg-[#dbeafe] text-[#1e40af] rounded px-1 ml-auto font-bold">
                              {person.fatigueScore}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WorshipBuddy: Set Builder
   ───────────────────────────────────────────── */

const SET_SONGS = [
  { number: 42, title: "Way Maker", version: "English", keyIdx: 7 },
  { number: 15, title: "Goodness of God", version: "English", keyIdx: 9 },
  { number: 103, title: "Gracia Sublime Es", version: "Español", keyIdx: 0 },
  { number: 8, title: "Build My Life", version: "English", keyIdx: 4 },
];

const KEYS = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];

const VIEWERS = [
  { initials: "SM", color: "bg-blue-500" },
  { initials: "JT", color: "bg-orange-500" },
  { initials: "DR", color: "bg-green-500" },
];

const SEARCH_RESULTS = [
  { number: 77, title: "Holy Spirit", version: "English" },
  { number: 22, title: "Great Are You Lord", version: "English" },
  { number: 56, title: "Espíritu Santo", version: "Español" },
];

function SetBuilderStep({ progress }) {
  const visibleSongs = Math.min(Math.floor(progress * (SET_SONGS.length + 2)), SET_SONGS.length);
  const showSearch = progress > 0.65;
  const keyShifted = progress > 0.35;

  return (
    <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-card overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3 border-b border-[#e2e8f0] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-500 flex items-center justify-center">
            <FaMusic className="text-xs text-white" />
          </div>
          <div>
            <span className="text-sm font-bold text-[#1a202c]">Set 2847</span>
            <span className="text-xs text-[#94a3b8] ml-2">Sunday Morning</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-[10px] text-[#059669] font-semibold">Live</span>
          </div>
          <div className="flex -space-x-2">
            {VIEWERS.map((v, i) => (
              <motion.div
                key={v.initials}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.25 }}
                className={`w-6 h-6 rounded-full ${v.color} flex items-center justify-center text-[8px] font-bold text-white border-2 border-white`}
              >
                {v.initials}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Song count */}
      <div className="px-5 py-2 flex items-center justify-between border-b border-[#f1f5f9]">
        <span className="text-xs text-[#64748b]">Songs ({visibleSongs})</span>
        <button className="text-[10px] text-blue-500 font-semibold flex items-center gap-1">
          <FaPlus className="text-[8px]" /> Add Songs
        </button>
      </div>

      {/* Song list */}
      <div className="divide-y divide-[#f1f5f9]">
        {SET_SONGS.map((song, i) => {
          const isVisible = i < visibleSongs;
          const displayKey = (keyShifted && i === 0) ? KEYS[(song.keyIdx + 2) % 12] : KEYS[song.keyIdx];
          const isShifted = keyShifted && i === 0;

          return (
            <motion.div
              key={`${song.number}-${song.version}`}
              initial={{ opacity: 0, y: 12 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 12, height: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="flex items-center gap-3 py-3 px-5"
            >
              <FaGripVertical className="text-[10px] text-[#cbd5e1] shrink-0 cursor-grab" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#94a3b8]">{song.number}.</span>
                  <span className="text-sm font-medium text-[#1a202c] truncate">{song.title}</span>
                  {song.version !== "English" && (
                    <span className="text-[9px] font-semibold text-purple-600 border border-purple-200 bg-purple-50 rounded px-1.5 py-0.5 shrink-0">
                      {song.version}
                    </span>
                  )}
                </div>
              </div>
              <motion.div
                key={displayKey}
                initial={isShifted ? { scale: 1.2 } : {}}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-1.5 shrink-0"
              >
                <FaKey className="text-[9px] text-[#94a3b8] rotate-90" />
                <span className={`text-xs font-bold ${isShifted ? "text-blue-500" : "text-[#475569]"}`}>
                  {displayKey}
                </span>
              </motion.div>
              <FaTrash className="text-[10px] text-[#cbd5e1] shrink-0" />
            </motion.div>
          );
        })}
      </div>

      {/* Search panel */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="border-t border-[#e2e8f0] bg-[#f8fafc] px-5 py-3"
          >
            <div className="flex items-center gap-2 bg-white rounded-xl border border-[#e2e8f0] px-3 py-2 mb-3">
              <FaMusic className="text-[10px] text-[#94a3b8]" />
              <span className="text-xs text-[#94a3b8]">Search songs…</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="text-[9px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-md">English</span>
                <FaChevronDown className="text-[8px] text-[#94a3b8]" />
              </div>
            </div>
            <div className="space-y-1">
              {SEARCH_RESULTS.map((r, i) => (
                <motion.div
                  key={r.number}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-2.5 px-3 py-2 hover:bg-white rounded-xl transition-colors cursor-pointer"
                >
                  <span className="text-[10px] text-[#94a3b8]">{r.number}.</span>
                  <span className="text-xs text-[#1a202c]">{r.title}</span>
                  {r.version !== "English" && (
                    <span className="text-[9px] text-purple-600 border border-purple-200 bg-purple-50 rounded px-1.5 py-0.5">
                      {r.version}
                    </span>
                  )}
                  <FaPlus className="text-[9px] text-blue-500 ml-auto shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PresenterBuddy: Split-screen Lite + Studio
   ───────────────────────────────────────────── */

const STANZAS = [
  { label: "V1", lines: ["Way maker miracle worker", "Promise keeper light in the darkness"] },
  { label: "V1", lines: ["I worship You I worship You", "You are here working in this place"] },
  { label: "C", lines: ["That is who You are", "That is who You are"] },
  { label: "V2", lines: ["Even when I don't see it", "You're working"] },
];

const LITE_SONGS = [
  { num: 1, title: "Way Maker", key: "A" },
  { num: 2, title: "Goodness of God", key: "G" },
  { num: 3, title: "Build My Life", key: "E" },
  { num: 4, title: "Holy Spirit", key: "D" },
];

const STUDIO_SLIDES = [
  { label: "Verse 1a", text: "Way maker miracle…" },
  { label: "Verse 1b", text: "I worship You…" },
  { label: "Chorus", text: "That is who You are…" },
  { label: "Verse 2", text: "Even when I don't see it…" },
];

function PresentStep({ progress }) {
  const stanzaIdx = Math.min(Math.floor(progress * STANZAS.length), STANZAS.length - 1);
  const stanza = STANZAS[stanzaIdx];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* PresenterBuddy Lite */}
      <div className="rounded-2xl border border-[#e2e8f0] shadow-card overflow-hidden bg-[#1e293b]">
        <div className="bg-[#0c245e] px-3 py-1.5 flex items-center justify-between">
          <span className="text-[9px] font-bold text-white">PresenterBuddy</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[8px] text-white/40">Display 2</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
          </div>
        </div>
        <div className="flex h-[200px] sm:h-[240px]">
          {/* Song list */}
          <div className="w-[28%] border-r border-[#334155] flex flex-col bg-[#1e293b]">
            <div className="px-1.5 py-1 border-b border-[#334155]">
              <span className="text-[7px] font-medium text-cyan-400">Songs</span>
            </div>
            <div className="flex-1 overflow-y-auto">
              {LITE_SONGS.map((s, i) => (
                <div
                  key={s.num}
                  className={`px-1.5 py-1 text-[8px] border-b border-[#334155]/50 ${
                    i === 0 ? "bg-cyan-500/10 text-cyan-400" : "text-[#94a3b8]"
                  }`}
                >
                  <span className="text-[#475569] mr-0.5">{s.num}.</span>
                  {s.title}
                  <span className="float-right text-[7px] text-[#475569]">{s.key}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Controller */}
          <div className="flex-1 flex flex-col bg-[#1e293b]">
            <div className="px-2 py-1 border-b border-[#334155] flex items-center justify-between">
              <span className="text-[8px] font-semibold text-white">Way Maker</span>
              <span className="text-[7px] text-cyan-400">Key: A</span>
            </div>
            <div className="flex-1 overflow-y-auto px-1.5 py-1 space-y-0.5">
              {STANZAS.map((s, i) => (
                <div
                  key={i}
                  className={`px-1.5 py-1 rounded text-[7px] transition-all duration-500 ${
                    i === stanzaIdx
                      ? "bg-cyan-500/20 text-white border border-cyan-500/30"
                      : "text-[#64748b]"
                  }`}
                >
                  <span className="text-[6px] font-bold text-[#475569] mr-0.5">[{s.label}]</span>
                  {s.lines[0]}
                </div>
              ))}
            </div>
            <div className="px-2 py-1 border-t border-[#334155] flex items-center gap-1">
              <div className="w-4 h-4 rounded bg-[#334155] flex items-center justify-center text-[7px] text-[#94a3b8]">▲</div>
              <div className="w-4 h-4 rounded bg-[#334155] flex items-center justify-center text-[7px] text-[#94a3b8]">▼</div>
              <div className="flex-1" />
              <div className="px-1.5 py-0.5 rounded text-[7px] font-medium bg-red-500/20 text-red-400">Live</div>
            </div>
          </div>

          {/* Preview */}
          <div className="w-[28%] border-l border-[#334155] flex flex-col bg-[#1e293b]">
            <div className="p-1.5">
              <div className="aspect-video bg-gradient-to-br from-[#0a1a40] to-[#10245c] rounded overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stanzaIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center px-1"
                  >
                    {stanza.lines.map((l, i) => (
                      <p key={i} className="text-white text-[6px] sm:text-[7px] font-semibold leading-snug">{l}</p>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="text-[6px] text-[#475569] text-center mt-0.5">Preview</p>
            </div>
            <div className="flex-1 border-t border-[#334155] px-1.5 py-1">
              <span className="text-[6px] text-[#475569]">Queue</span>
              {LITE_SONGS.slice(0, 2).map((s, i) => (
                <div key={s.num} className={`text-[7px] px-1 py-0.5 ${i === 0 ? "text-cyan-400" : "text-[#475569]"}`}>
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PresenterBuddy Studio */}
      <div className="rounded-2xl border border-[#e2e8f0] shadow-card overflow-hidden bg-[#0f172a]">
        <div className="bg-[#1e293b] px-3 py-1.5 flex items-center justify-between border-b border-[#334155]">
          <span className="text-[9px] font-bold text-white">PresenterBuddy Studio</span>
          <div className="flex items-center gap-2.5">
            {["Show", "Edit", "Stage"].map((t, i) => (
              <span key={t} className={`text-[7px] font-medium ${i === 0 ? "text-purple-400" : "text-[#475569]"}`}>{t}</span>
            ))}
            <div className="ml-1 flex items-center gap-1">
              <span className="text-[7px] text-[#475569]">Output</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            </div>
          </div>
        </div>
        <div className="flex h-[200px] sm:h-[240px]">
          {/* Slide thumbnails */}
          <div className="w-[22%] border-r border-[#334155] bg-[#1e293b] flex flex-col">
            <div className="px-1.5 py-1 border-b border-[#334155]">
              <span className="text-[7px] font-semibold text-[#94a3b8] uppercase tracking-wider">Slides</span>
            </div>
            <div className="flex-1 overflow-y-auto p-1 space-y-1">
              {STUDIO_SLIDES.map((s, i) => (
                <div
                  key={i}
                  className={`rounded overflow-hidden border transition-all duration-500 ${
                    i === stanzaIdx ? "border-purple-500 ring-1 ring-purple-500/30" : "border-[#334155]"
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-0.5">
                    <p className="text-[5px] text-[#64748b] text-center leading-tight">{s.text}</p>
                  </div>
                  <div className="px-1 py-0.5 bg-[#1e293b]">
                    <span className="text-[6px] text-[#475569]">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main canvas */}
          <div className="flex-1 flex flex-col bg-[#0f172a]">
            <div className="flex-1 flex items-center justify-center p-3">
              <div className="w-full aspect-video bg-gradient-to-br from-[#0a1a40] to-[#10245c] rounded-lg overflow-hidden flex items-center justify-center relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stanzaIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center px-3"
                  >
                    {stanza.lines.map((l, i) => (
                      <p key={i} className="text-white text-[8px] sm:text-xs font-semibold leading-relaxed">{l}</p>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="px-2 py-1 border-t border-[#334155] flex items-center justify-between">
              <span className="text-[7px] text-[#475569]">Slide {stanzaIdx + 1}/{STUDIO_SLIDES.length}</span>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-0.5 text-[7px] text-[#10b981]">● NDI</span>
                <span className="flex items-center gap-0.5 text-[7px] text-blue-400">● Remote</span>
              </div>
            </div>
          </div>

          {/* Right panel: output + stage */}
          <div className="w-[22%] border-l border-[#334155] bg-[#1e293b] flex flex-col">
            <div className="p-1.5">
              <div className="aspect-video bg-gradient-to-br from-[#0a1a40] to-[#10245c] rounded overflow-hidden flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={stanzaIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-white text-[5px] sm:text-[6px] text-center px-1 font-medium"
                  >
                    {stanza.lines[0]}
                  </motion.p>
                </AnimatePresence>
              </div>
              <p className="text-[6px] text-[#475569] text-center mt-0.5">Output</p>
            </div>
            <div className="border-t border-[#334155] p-1.5 flex-1">
              <div className="aspect-video bg-[#0f172a] rounded flex flex-col items-center justify-center p-1">
                <p className="text-[5px] text-[#475569] mb-0.5">Next:</p>
                <p className="text-[5px] text-[#64748b] text-center">
                  {STUDIO_SLIDES[(stanzaIdx + 1) % STUDIO_SLIDES.length].text}
                </p>
              </div>
              <p className="text-[6px] text-[#475569] text-center mt-0.5">Stage Monitor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main simulation
   ───────────────────────────────────────────── */

const STEP_DURATION = 8000;

export default function EcosystemSimulation() {
  const [stepIdx, setStepIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const step = STEPS[stepIdx];

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 0.008, 1.01));
    }, STEP_DURATION * 0.008);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (progress > 1) {
      setProgress(0);
      setStepIdx((s) => (s + 1) % STEPS.length);
    }
  }, [progress]);

  const renderStep = useCallback(() => {
    switch (step.id) {
      case "schedule":
        return <SchedulerStep progress={progress} />;
      case "setlist":
        return <SetBuilderStep progress={progress} />;
      case "present":
        return <PresentStep progress={progress} />;
      default:
        return null;
    }
  }, [step.id, progress]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-center gap-8 mb-6">
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setStepIdx(i); setProgress(0); }}
            className={`flex items-center gap-2 text-sm font-medium transition-all duration-500 ${
              i === stepIdx ? `${s.color} scale-105` : "text-[#94a3b8] hover:text-[#64748b]"
            }`}
          >
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i === stepIdx ? s.bg : "bg-[#cbd5e1]"}`} />
            {s.product}
          </button>
        ))}
      </div>

      {/* Context label */}
      <AnimatePresence mode="wait">
        <motion.p
          key={step.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm text-[#94a3b8] mb-5 italic"
        >
          {step.label}
        </motion.p>
      </AnimatePresence>

      {/* Simulation content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="mt-5 h-1 bg-[#f1f5f9] rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${step.bg} rounded-full`}
          style={{ width: `${Math.min(progress, 1) * 100}%` }}
          transition={{ duration: 0.05 }}
        />
      </div>
    </div>
  );
}
