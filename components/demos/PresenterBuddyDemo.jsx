"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDesktop,
  FaLayerGroup,
  FaCog,
  FaEdit,
  FaBroadcastTower,
  FaGamepad,
} from "react-icons/fa";

const PB = "#1E6B8A";
const PB_DARK = "#134F67";
const SUCCESS = "#22C55E";
const ERROR = "#EF4444";

const SONGS_LIST = [
  {
    title: "WAY MAKER",
    preview: "You are here, moving in our midst, I worship You, I worship You...",
    number: 1,
    key: "G",
    lines: [
      "You are here, moving in our midst,",
      "I worship You, I worship You.",
      "You are here, working in this place,",
      "I worship You, I worship You.",
      "",
      "Way maker, miracle worker,",
      "Promise keeper, light in the darkness,",
      "My God, that is who You are.",
      "Way maker, miracle worker,",
      "Promise keeper, light in the darkness,",
      "My God, that is who You are.",
      "",
      "You are here, touching every heart,",
      "I worship You, I worship You.",
    ],
  },
  {
    title: "GOODNESS OF GOD",
    preview: "I love You, Lord, Oh Your mercy never failed me, All my days...",
    number: 2,
    key: "A",
    lines: [
      "I love You, Lord,",
      "Oh Your mercy never failed me,",
      "All my days, I've been held",
      "in Your hands.",
      "",
      "From the moment that I wake up,",
      "Until I lay my head,",
      "I will sing of the",
      "goodness of God.",
    ],
  },
  {
    title: "BUILD MY LIFE",
    preview: "Worthy of every song we could ever sing, Worthy of all the praise...",
    number: 3,
    key: "E",
    lines: [
      "Worthy of every song",
      "we could ever sing,",
      "Worthy of all the praise",
      "we could ever bring.",
      "",
      "I'll build my life upon",
      "Your love, it is a",
      "firm foundation.",
    ],
  },
  {
    title: "GREAT ARE YOU LORD",
    preview: "You give life, You are love, You bring light to the darkness...",
    number: 4,
    key: "G",
    lines: [
      "You give life, You are love,",
      "You bring light to the darkness.",
      "You give hope, You restore",
      "every heart that is broken.",
      "",
      "Great are You, Lord.",
      "It's Your breath in our lungs,",
      "So we pour out our praise.",
    ],
  },
  {
    title: "HOLY SPIRIT",
    preview: "There's nothing worth more, that will ever come close, No thing can compare...",
    number: 5,
    key: "D",
    lines: [
      "There's nothing worth more,",
      "that will ever come close,",
      "No thing can compare,",
      "You're our living hope.",
      "",
      "Holy Spirit, You are",
      "welcome here.",
      "Come flood this place",
      "and fill the atmosphere.",
    ],
  },
];

export function PresenterLiteDemo() {
  const [selectedSong, setSelectedSong] = useState(0);
  const [activeTab, setActiveTab] = useState("songs");
  const [activeLine, setActiveLine] = useState(5);
  const [isScrolling, setIsScrolling] = useState(false);
  const [queueSongs, setQueueSongs] = useState([]);

  const song = SONGS_LIST[selectedSong];

  useEffect(() => {
    if (!isScrolling) return;
    const timer = setInterval(() => {
      setActiveLine((i) => {
        const nextReal = song.lines.findIndex((l, idx) => idx > i && l !== "");
        return nextReal !== -1 ? nextReal : 0;
      });
    }, 2500);
    return () => clearInterval(timer);
  }, [isScrolling, song]);

  const addToQueue = (idx) => {
    if (!queueSongs.includes(idx)) setQueueSongs((q) => [...q, idx]);
  };

  const projectionLines = [];
  if (song) {
    let start = activeLine;
    while (start > 0 && song.lines[start - 1] !== "") start--;
    for (let i = start; i < song.lines.length && song.lines[i] !== ""; i++) {
      projectionLines.push(song.lines[i]);
    }
  }

  return (
    <div className="border rounded-xl overflow-hidden shadow-lg bg-white" style={{ borderColor: "#E4E4E7" }}>
      {/* macOS title bar */}
      <div className="relative flex items-center justify-center py-2 bg-[#F6F6F6] border-b" style={{ borderColor: "#E4E4E7" }}>
        <div className="absolute left-4 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-xs font-medium text-gray-500">PresenterBuddy</span>
      </div>

      {/* App header */}
      <div className="px-5 flex items-center justify-between" style={{ backgroundColor: PB, height: 48 }}>
        <span className="text-[15px] font-semibold text-white" style={{ fontFamily: "'JetBrains Mono', monospace" }}>presenterbuddy</span>
        <div className="flex items-center gap-3 text-white/60">
          <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="1.5"/><path strokeWidth="1.5" d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01"/></svg>
          <FaCog className="text-[15px]" />
        </div>
      </div>

      <div className="flex" style={{ height: 560 }}>
        {/* ─── LEFT PANEL ─── */}
        <div className="flex flex-col bg-white border-r" style={{ width: "26%", borderColor: "#E4E4E7" }}>
          <div className="flex border-b" style={{ borderColor: "#E4E4E7" }}>
            {["Songs", "Bible", "Announcements"].map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t.toLowerCase())}
                className="py-2.5 text-xs font-medium transition-colors"
                style={{
                  flex: t === "Announcements" ? "1.4" : "1",
                  color: activeTab === t.toLowerCase() ? PB : "#71717A",
                  borderBottom: activeTab === t.toLowerCase() ? `2px solid ${PB}` : "2px solid transparent",
                }}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="px-4 pt-3 pb-2">
            <h3 className="text-sm font-bold mb-2" style={{ color: "#18181B" }}>Song Search</h3>
            <div className="px-3 py-2 rounded-lg border text-xs" style={{ borderColor: PB, color: "#A1A1AA" }}>
              Search songs, lyrics, or numbers...
            </div>
          </div>

          <div className="flex-1 overflow-y-auto min-h-0">
            {SONGS_LIST.map((s, i) => (
              <div
                key={s.number}
                onClick={() => { setSelectedSong(i); setActiveLine(5); }}
                className="flex items-start gap-2 px-4 py-3 cursor-pointer transition-colors border-b"
                style={{
                  borderColor: "#F0F0EC",
                  backgroundColor: i === selectedSong ? "#D0E9F2" : "transparent",
                }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold leading-snug" style={{ color: "#18181B" }}>
                    {s.number}. {s.title}
                  </p>
                  <p className="text-[11px] leading-snug mt-0.5 line-clamp-2" style={{ color: "#71717A" }}>
                    {s.preview}
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); addToQueue(i); }}
                  className="flex-shrink-0 w-7 h-7 rounded-full text-white flex items-center justify-center text-sm font-bold hover:opacity-80 transition"
                  style={{ backgroundColor: PB }}
                >
                  +
                </button>
              </div>
            ))}
            <p className="text-[11px] text-center py-2" style={{ color: "#A1A1AA" }}>Showing 100 of 1167 songs</p>
          </div>

          <div className="border-t px-4 py-3" style={{ borderColor: "#E4E4E7" }}>
            <p className="text-[11px] font-semibold mb-1.5" style={{ color: "#71717A" }}>Preview</p>
            <p className="text-xs font-bold mb-1" style={{ color: "#18181B" }}>{song.number}. {song.title}</p>
            <div className="max-h-[100px] overflow-y-auto mb-3">
              {song.lines.map((l, i) => (
                <p key={i} className="text-[11px] leading-relaxed" style={{ color: "#52525B" }}>{l || "\u00A0"}</p>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-full text-[11px] font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: PB }}>Present Now</button>
              <button className="flex-1 py-2 rounded-full text-[11px] font-semibold text-white transition hover:opacity-90" style={{ backgroundColor: PB }}>Add to Queue</button>
            </div>
          </div>
        </div>

        {/* ─── CENTER PANEL ─── */}
        <div className="flex-1 flex flex-col bg-white border-r" style={{ borderColor: "#E4E4E7" }}>
          <div className="px-4 py-3 border-b" style={{ borderColor: "#E4E4E7" }}>
            <h3 className="text-[15px] font-bold" style={{ color: "#18181B" }}>Presentation</h3>
          </div>

          <div className="flex-1 flex min-h-0">
            {/* Controls strip */}
            <div className="flex flex-col items-center gap-2.5 px-3 py-4 border-r" style={{ width: 90, borderColor: "#E4E4E7" }}>
              <button className="w-full py-2 rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: ERROR }}>Hide</button>
              <button
                onClick={() => setIsScrolling(!isScrolling)}
                className="w-full py-2 rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: PB }}
              >
                {isScrolling ? "Stop" : "Scroll"}
              </button>

              <div className="flex flex-col items-center gap-1.5 mt-1">
                <span className="text-[10px] font-medium" style={{ color: "#71717A" }}>Speed</span>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: PB }}>+</div>
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: PB }}>−</div>
                <span className="text-[10px] font-medium" style={{ color: "#71717A" }}>90px/s</span>
              </div>

              <button className="w-full py-2 rounded-full text-[11px] font-bold text-white mt-1" style={{ backgroundColor: ERROR }}>Edit</button>
              <button className="w-full py-2 rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: SUCCESS }}>New</button>

              <div className="mt-3 w-full text-center">
                <p className="text-[9px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "#71717A" }}>Language<br/>Controls</p>
                <button className="w-full py-2 rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: PB }}>Spanish</button>
              </div>
              <button className="w-full py-2 rounded-full text-[11px] font-bold text-white mt-auto" style={{ backgroundColor: PB }}>
                <span className="leading-tight block">Add to<br/>queue</span>
              </button>
            </div>

            {/* Lyrics with line numbers */}
            <div className="flex-1 overflow-y-auto py-3 px-2">
              <p className="text-[13px] font-bold px-2 pb-3" style={{ color: "#18181B" }}>{song.number}. {song.title}</p>
              {song.lines.map((line, i) => (
                <div
                  key={i}
                  onClick={() => setActiveLine(i)}
                  className="flex items-start gap-2 px-2 py-[4px] cursor-pointer rounded transition-colors"
                  style={{ backgroundColor: i === activeLine ? "#D0E9F2" : "transparent" }}
                >
                  <span className="text-[11px] w-5 text-right flex-shrink-0 select-none tabular-nums" style={{ color: "#A1A1AA" }}>{i + 1}</span>
                  <span className="text-[13px] leading-snug" style={{ color: i === activeLine ? PB_DARK : "#18181B" }}>{line || "\u00A0"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT PANEL ─── */}
        <div className="flex flex-col bg-white" style={{ width: "30%" }}>
          <div className="p-4">
            <div className="w-full bg-black rounded-lg overflow-hidden flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedSong}-${activeLine}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center px-4"
                >
                  {projectionLines.map((line, i) => (
                    <p key={i} className="text-white font-bold leading-snug" style={{ fontSize: 11 }}>
                      {line}
                    </p>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="text-[11px] text-center mt-2" style={{ color: "#71717A" }}>
              Presentation: {song.title}
            </p>
          </div>

          <div className="px-4 pb-3">
            <label className="flex items-center gap-2 text-xs" style={{ color: "#18181B" }}>
              <input type="checkbox" checked readOnly className="w-4 h-4" style={{ accentColor: PB }} />
              Project one stanza at a time
            </label>
          </div>

          <div className="flex-1 border-t flex flex-col min-h-0" style={{ borderColor: "#E4E4E7" }}>
            <div className="flex items-center border-b" style={{ borderColor: "#E4E4E7" }}>
              <button className="px-4 py-2.5 text-xs font-medium" style={{ color: PB, borderBottom: `2px solid ${PB}` }}>Queue</button>
              <button className="px-4 py-2.5 text-xs font-medium" style={{ color: "#71717A", borderBottom: "2px solid transparent" }}>History</button>
              <div className="flex-1" />
              <button className="py-1.5 px-3 mr-3 rounded-full text-[11px] font-semibold text-white whitespace-nowrap" style={{ backgroundColor: PB }}>Add WorshipBuddy Set</button>
            </div>
            <div className="flex-1 px-4 py-3">
              <p className="text-[13px] font-bold mb-2" style={{ color: "#18181B" }}>Presentation Queue</p>
              {queueSongs.length === 0 ? (
                <p className="text-[11px] leading-relaxed" style={{ color: "#71717A" }}>
                  No songs in queue. Click the + button on any song to add it.
                </p>
              ) : (
                <div className="space-y-1">
                  {queueSongs.map((idx) => (
                    <div key={idx} className="text-xs px-2 py-1.5 rounded" style={{ color: "#18181B", backgroundColor: "#F4F4F0" }}>
                      {SONGS_LIST[idx].title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const S_BG = "#1a1a2e";
const S_PANEL = "#16213e";
const S_BORDER = "#2a2d3a";
const S_PRIMARY = "#0f3460";
const S_ACCENT = "#e94560";
const S_CYAN = "#00cec9";

const STUDIO_SLIDES = [
  { label: "Verse 1 1", text: "Amazing grace,\nhow sweet the sound," },
  { label: "Verse 1 2", text: "That saved a wretch\nlike me." },
  { label: "Verse 1 3", text: "I once was lost,\nbut now am found," },
  { label: "Verse 1 4", text: "Was blind,\nbut now I see." },
  { label: "Chorus", text: "My chains are gone,\nI've been set free." },
  { label: "For Transition", text: "My God, my Savior\nhas ransomed me." },
  { label: "Verse 2 1", text: "'Twas grace that taught\nmy heart to fear," },
  { label: "Verse 2 2", text: "And grace my fears\nrelieved." },
  { label: "Verse 2 3", text: "How precious did\nthat grace appear," },
  { label: "Verse 2 4", text: "The hour I\nfirst believed." },
];

const STUDIO_SONG_LIB = [
  { num: 1129, title: "HE IS GREATER" },
  { num: 1130, title: "SET MY SOUL ON FIRE" },
  { num: 1131, title: "INDESCRIBABLE" },
  { num: 1132, title: "FIRE, THE HOLY FIRE" },
  { num: 1133, title: "SING PRAISES" },
  { num: 1134, title: "JESUS, STRONG AND KIND" },
  { num: 1135, title: "YET NOT I, BUT THROUGH CHRIST IN ME" },
  { num: 1136, title: "AT HOME IN MOUNT ZION" },
  { num: 1137, title: "AMAZING GRACE" },
  { num: 1138, title: "BIGGER THAN ANY MOUNTAIN" },
];

export function PresenterStudioDemo() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [modeTab, setModeTab] = useState("show");
  const [selectedSongIdx, setSelectedSongIdx] = useState(8);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % STUDIO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const selectedSong = STUDIO_SONG_LIB[selectedSongIdx];

  return (
    <div className="border rounded-xl overflow-hidden shadow-lg" style={{ borderColor: S_BORDER, backgroundColor: S_BG }}>
      {/* macOS title bar */}
      <div className="relative flex items-center justify-center py-2" style={{ backgroundColor: "#121420", borderBottom: `1px solid ${S_BORDER}` }}>
        <div className="absolute left-4 flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="text-xs font-medium text-gray-400">PresenterBuddy Studio</span>
      </div>

      {/* Header bar */}
      <div className="px-4 flex items-center justify-between" style={{ height: 40, backgroundColor: S_PANEL, borderBottom: `1px solid ${S_BORDER}` }}>
        <span className="text-[13px] font-bold text-white">PresenterBuddy</span>
        <div className="flex items-center gap-5">
          {[
            { id: "show", icon: FaDesktop, label: "Show" },
            { id: "edit", icon: FaEdit, label: "Edit" },
            { id: "stage", icon: FaLayerGroup, label: "Stage" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setModeTab(t.id)}
              className="flex items-center gap-1.5 text-[11px] font-medium transition-colors"
              style={{ color: modeTab === t.id ? "#fff" : "#6b7280" }}
            >
              <t.icon className="text-[10px]" />
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <FaCog className="text-sm text-gray-500" />
        </div>
      </div>

      <div className="flex" style={{ height: 520 }}>
        {/* ─── LEFT SIDEBAR ─── */}
        <div className="flex flex-col" style={{ width: "15%", backgroundColor: S_PANEL, borderRight: `1px solid ${S_BORDER}` }}>
          <div className="px-3 py-2" style={{ borderBottom: `1px solid ${S_BORDER}` }}>
            <p className="text-[10px] text-gray-400 mb-1">← Example</p>
            <p className="text-[11px] font-semibold text-white">Welcome</p>
            <p className="text-[11px] text-gray-400">Example</p>
          </div>
          <div className="flex-1" />
          <div className="px-3 py-2" style={{ borderTop: `1px solid ${S_BORDER}` }}>
            <p className="text-[10px] text-gray-500 mb-1">+ New section</p>
            <div className="px-2 py-1.5 rounded text-[10px]" style={{ backgroundColor: S_BG, color: "#6b7280", border: `1px solid ${S_BORDER}` }}>
              Search...
            </div>
            <div className="mt-2 space-y-1">
              {[
                { label: "All", count: 2170, color: S_CYAN },
                { label: "English Songbook", count: 1165, color: "#3b82f6" },
                { label: "Spanish Songbook", count: 1004, color: "#8b5cf6" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-1.5 text-[9px]">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                  <span className="text-gray-400 flex-1 truncate">{c.label}</span>
                  <span className="text-gray-600">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── CENTER ─── */}
        <div className="flex-1 flex flex-col" style={{ borderRight: `1px solid ${S_BORDER}` }}>
          {/* Slide grid */}
          <div className="flex-1 p-3 overflow-y-auto" style={{ backgroundColor: S_BG }}>
            <div className="grid grid-cols-5 gap-2">
              {STUDIO_SLIDES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="rounded overflow-hidden transition-all"
                  style={{
                    border: i === activeSlide ? `2px solid ${S_CYAN}` : `1px solid ${S_BORDER}`,
                    backgroundColor: "#0d0f18",
                  }}
                >
                  <div className="aspect-video flex items-center justify-center p-1">
                    <p className="text-[7px] sm:text-[8px] text-gray-300 text-center leading-snug whitespace-pre-line">{s.text}</p>
                  </div>
                  <div className="flex items-center justify-between px-1.5 py-0.5" style={{ backgroundColor: S_PANEL }}>
                    <span className="text-[7px] text-gray-500">{i + 1}</span>
                    <span className="text-[7px] font-medium" style={{ color: s.label === "Chorus" ? S_ACCENT : "#9ca3af" }}>{s.label}</span>
                  </div>
                </button>
              ))}
            </div>
            <button className="mt-2 text-[10px] text-gray-500 flex items-center gap-1">
              + New layout
            </button>
          </div>

          {/* Song library */}
          <div style={{ borderTop: `1px solid ${S_BORDER}`, backgroundColor: S_PANEL, height: 200 }} className="flex flex-col">
            <div className="px-3 py-1.5 text-[9px] text-gray-400 truncate" style={{ borderBottom: `1px solid ${S_BORDER}` }}>
              ● {selectedSong.num}; {selectedSong.title}; Various Artists
            </div>
            <div className="flex gap-3 px-3 py-1.5" style={{ borderBottom: `1px solid ${S_BORDER}` }}>
              {["Songs", "Scripture", "Media", "Templates", "Functions"].map((t) => (
                <span key={t} className="text-[10px] font-medium" style={{ color: t === "Songs" ? S_CYAN : "#6b7280" }}>{t}</span>
              ))}
            </div>
            <div className="flex-1 overflow-y-auto px-1">
              {STUDIO_SONG_LIB.map((s, i) => (
                <div
                  key={s.num}
                  onClick={() => setSelectedSongIdx(i)}
                  className="flex items-center gap-2 px-2 py-1 cursor-pointer transition-colors rounded text-[10px]"
                  style={{
                    backgroundColor: i === selectedSongIdx ? S_ACCENT + "33" : "transparent",
                    color: i === selectedSongIdx ? S_ACCENT : "#9ca3af",
                  }}
                >
                  <span style={{ color: "#6366f1" }}>{s.num}</span>
                  <span className="flex-1 truncate">{s.num}. {s.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDEBAR ─── */}
        <div className="flex flex-col" style={{ width: "22%", backgroundColor: S_PANEL }}>
          {/* Clear all + slide counter */}
          <div className="flex items-center justify-between px-3 py-2" style={{ borderBottom: `1px solid ${S_BORDER}` }}>
            <span className="text-[9px] text-gray-500">✕ Clear all</span>
          </div>
          <div className="flex items-center justify-between px-3 py-1.5" style={{ borderBottom: `1px solid ${S_BORDER}` }}>
            <span className="text-[11px] font-semibold text-white truncate">{selectedSong.num}. {selectedSong.title}</span>
            <span className="text-[9px] text-gray-500 ml-1 whitespace-nowrap">{activeSlide + 1}/{STUDIO_SLIDES.length}</span>
          </div>

          {/* Groups / Metadata tabs */}
          <div className="flex px-3 py-1.5" style={{ borderBottom: `1px solid ${S_BORDER}` }}>
            <span className="text-[10px] font-medium text-white mr-3">Groups</span>
            <span className="text-[10px] font-medium text-gray-500">Metadata</span>
          </div>

          {/* Slide list */}
          <div className="flex-1 overflow-y-auto px-1 py-1">
            {STUDIO_SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className="w-full text-left px-2 py-1.5 rounded text-[10px] transition-colors mb-0.5"
                style={{
                  backgroundColor: i === activeSlide ? S_CYAN + "22" : "transparent",
                  color: i === activeSlide ? S_CYAN : "#9ca3af",
                  fontWeight: s.label === "Chorus" ? 700 : 400,
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Song metadata */}
          <div className="px-3 py-2" style={{ borderTop: `1px solid ${S_BORDER}` }}>
            <p className="text-[11px] font-bold text-white mb-2">{selectedSong.num}. {selectedSong.title}</p>
            <div className="space-y-1 text-[9px]">
              {[
                ["Category", "English Songbook"],
                ["Slides", String(STUDIO_SLIDES.length)],
                ["Template", "Default"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-gray-500">{k}</span>
                  <span className="text-gray-300">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
