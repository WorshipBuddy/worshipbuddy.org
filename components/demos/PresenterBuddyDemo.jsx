"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMusic,
  FaBook,
  FaBullhorn,
  FaList,
  FaHistory,
  FaChevronUp,
  FaChevronDown,
  FaExpandAlt,
  FaStop,
  FaDesktop,
  FaLayerGroup,
  FaCog,
  FaEdit,
  FaBroadcastTower,
  FaGamepad,
} from "react-icons/fa";

const SONGS_LIST = [
  { title: "Way Maker", key: "G", number: 1 },
  { title: "Goodness of God", key: "A", number: 2 },
  { title: "Build My Life", key: "E", number: 3 },
  { title: "Great Are You Lord", key: "G", number: 4 },
  { title: "Holy Spirit", key: "D", number: 5 },
];

const STANZAS = [
  { label: "V1", lines: ["You are here moving in our midst", "I worship You I worship You"] },
  { label: "V1", lines: ["You are here working in this place", "I worship You I worship You"] },
  { label: "C", lines: ["Way maker miracle worker", "Promise keeper light in the darkness"] },
  { label: "C", lines: ["My God that is who You are", "That is who You are"] },
  { label: "V2", lines: ["You are here touching every heart", "I worship You I worship You"] },
];

export function PresenterLiteDemo() {
  const [selectedSong, setSelectedSong] = useState(0);
  const [activeTab, setActiveTab] = useState("songs");
  const [lineIdx, setLineIdx] = useState(0);
  const [isLive, setIsLive] = useState(true);

  const stanza = STANZAS[lineIdx];

  useEffect(() => {
    if (!isLive) return;
    const timer = setInterval(() => {
      setLineIdx((i) => (i + 1) % STANZAS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isLive]);

  const handlePrev = () => setLineIdx((i) => Math.max(0, i - 1));
  const handleNext = () => setLineIdx((i) => Math.min(STANZAS.length - 1, i + 1));

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-card bg-gray-900">
      {/* Top bar */}
      <div className="bg-[#0c245e] px-3 py-1.5 flex items-center justify-between">
        <span className="text-[10px] font-bold text-white">PresenterBuddy</span>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-white/50">Display 2</span>
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="flex h-[360px] sm:h-[420px]">
        {/* Left panel - Song list */}
        <div className="w-[30%] border-r border-gray-700 flex flex-col bg-gray-800">
          <div className="flex border-b border-gray-700">
            {[
              { id: "songs", icon: FaMusic, label: "Songs" },
              { id: "bible", icon: FaBook, label: "Bible" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-1.5 text-[9px] font-medium transition-colors ${
                  activeTab === tab.id ? "text-cyan-400 border-b border-cyan-400" : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto">
            {SONGS_LIST.map((song, i) => (
              <button
                key={song.number}
                onClick={() => { setSelectedSong(i); setLineIdx(0); }}
                className={`w-full px-2 py-1.5 text-left text-[10px] transition-colors border-b border-gray-700/50 ${
                  i === selectedSong ? "bg-cyan-500/10 text-cyan-400" : "text-gray-400 hover:bg-gray-700/50"
                }`}
              >
                <span className="text-gray-600 mr-1">{song.number}.</span>
                {song.title}
                <span className="float-right text-[9px] text-gray-600">{song.key}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Center - Controller */}
        <div className="flex-1 flex flex-col bg-gray-800">
          <div className="px-2 py-1.5 border-b border-gray-700 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white">
              {SONGS_LIST[selectedSong].title}
            </span>
            <span className="text-[9px] text-cyan-400">
              Key: {SONGS_LIST[selectedSong].key}
            </span>
          </div>
          <div className="flex-1 overflow-y-auto px-2 py-2 space-y-1">
            {STANZAS.map((s, i) => (
              <button
                key={i}
                onClick={() => setLineIdx(i)}
                className={`w-full text-left px-2 py-1.5 rounded text-[10px] transition-colors ${
                  i === lineIdx
                    ? "bg-cyan-500/20 text-white border border-cyan-500/30"
                    : "text-gray-400 hover:bg-gray-700/30"
                }`}
              >
                <span className="text-[8px] font-bold text-gray-600 mr-1">[{s.label}]</span>
                {s.lines[0]}
              </button>
            ))}
          </div>
          <div className="px-2 py-1.5 border-t border-gray-700 flex items-center gap-1.5">
            <button onClick={handlePrev} className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white text-[10px]">
              <FaChevronUp />
            </button>
            <button onClick={handleNext} className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white text-[10px]">
              <FaChevronDown />
            </button>
            <div className="flex-1" />
            <button
              onClick={() => setIsLive(!isLive)}
              className={`px-2 py-1 rounded text-[9px] font-medium ${
                isLive ? "bg-red-500/20 text-red-400" : "bg-gray-700 text-gray-400"
              }`}
            >
              {isLive ? "Stop" : "Go Live"}
            </button>
          </div>
        </div>

        {/* Right panel - Preview + Queue */}
        <div className="w-[30%] border-l border-gray-700 flex flex-col bg-gray-800">
          {/* Preview */}
          <div className="p-2">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-md overflow-hidden flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lineIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-center px-2"
                >
                  {stanza.lines.map((line, i) => (
                    <p key={i} className="text-white text-[8px] sm:text-[9px] font-semibold leading-snug">
                      {line}
                    </p>
                  ))}
                </motion.div>
              </AnimatePresence>
              {!isLive && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                  <span className="text-[8px] text-gray-500 uppercase tracking-wider">Black</span>
                </div>
              )}
            </div>
            <p className="text-[8px] text-gray-600 text-center mt-1">Preview</p>
          </div>
          {/* Queue */}
          <div className="flex-1 border-t border-gray-700 px-2 py-1.5">
            <div className="flex mb-1.5">
              <span className="text-[8px] font-medium text-gray-500 flex items-center gap-1">
                <FaList className="text-[7px]" /> Queue
              </span>
            </div>
            <div className="space-y-0.5">
              {SONGS_LIST.slice(0, 3).map((s, i) => (
                <div key={s.number} className={`text-[9px] px-1.5 py-0.5 rounded ${i === 0 ? "text-cyan-400" : "text-gray-600"}`}>
                  {s.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STUDIO_SLIDES = [
  { label: "Verse 1a", thumb: "You are here moving…", active: false },
  { label: "Verse 1b", thumb: "I worship You…", active: false },
  { label: "Chorus 1", thumb: "Way maker miracle…", active: true },
  { label: "Chorus 2", thumb: "My God that is…", active: false },
  { label: "Verse 2a", thumb: "You are here touching…", active: false },
];

export function PresenterStudioDemo() {
  const [activeSlide, setActiveSlide] = useState(2);
  const [activeTab, setActiveTab] = useState("show");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((s) => (s + 1) % STUDIO_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = STUDIO_SLIDES[activeSlide];

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-card bg-gray-900">
      {/* Top bar */}
      <div className="bg-gray-800 px-3 py-1.5 flex items-center justify-between border-b border-gray-700">
        <span className="text-[10px] font-bold text-white">PresenterBuddy Studio</span>
        <div className="flex items-center gap-3">
          {[
            { id: "show", icon: FaDesktop, label: "Show" },
            { id: "edit", icon: FaEdit, label: "Edit" },
            { id: "stage", icon: FaLayerGroup, label: "Stage" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 text-[9px] font-medium transition-colors ${
                activeTab === tab.id ? "text-purple-400" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <tab.icon className="text-[8px]" />
              {tab.label}
            </button>
          ))}
          <div className="ml-2 flex items-center gap-1">
            <span className="text-[8px] text-gray-500">Output</span>
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
        </div>
      </div>

      <div className="flex h-[360px] sm:h-[420px]">
        {/* Left - Projects/slides */}
        <div className="w-[25%] border-r border-gray-700 bg-gray-800 flex flex-col">
          <div className="px-2 py-1.5 border-b border-gray-700">
            <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Slides</span>
          </div>
          <div className="flex-1 overflow-y-auto p-1.5 space-y-1">
            {STUDIO_SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`w-full rounded-md overflow-hidden border transition-colors ${
                  i === activeSlide
                    ? "border-purple-500 ring-1 ring-purple-500/30"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-1">
                  <p className="text-[7px] text-gray-400 text-center leading-snug">{s.thumb}</p>
                </div>
                <div className="px-1.5 py-0.5 bg-gray-800">
                  <span className="text-[8px] text-gray-500">{s.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Center - Main canvas */}
        <div className="flex-1 flex flex-col bg-gray-900">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full aspect-video bg-gradient-to-br from-navy-700 to-navy-900 rounded-lg overflow-hidden flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-4"
                >
                  <p className="text-white text-xs sm:text-sm md:text-base font-semibold leading-relaxed">
                    {STUDIO_SLIDES[activeSlide].thumb}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Bottom bar */}
          <div className="px-3 py-1.5 border-t border-gray-700 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[9px] text-gray-500">
              <span>Slide {activeSlide + 1}/{STUDIO_SLIDES.length}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[9px] text-green-400">
                <FaBroadcastTower className="text-[8px]" /> NDI
              </span>
              <span className="flex items-center gap-1 text-[9px] text-blue-400">
                <FaGamepad className="text-[8px]" /> Remote
              </span>
            </div>
          </div>
        </div>

        {/* Right - Tools/preview */}
        <div className="w-[25%] border-l border-gray-700 bg-gray-800 flex flex-col">
          <div className="p-2">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-black rounded-md overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white text-[7px] sm:text-[8px] text-center px-1.5 font-medium"
                >
                  {STUDIO_SLIDES[activeSlide].thumb}
                </motion.p>
              </AnimatePresence>
            </div>
            <p className="text-[8px] text-gray-600 text-center mt-1">Output</p>
          </div>
          <div className="border-t border-gray-700 p-2 flex-1">
            <p className="text-[8px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Stage</p>
            <div className="aspect-video bg-gray-900 rounded-md overflow-hidden flex flex-col items-center justify-center p-2">
              <p className="text-[8px] text-gray-500 mb-1">Next:</p>
              <p className="text-[7px] text-gray-400 text-center">
                {STUDIO_SLIDES[(activeSlide + 1) % STUDIO_SLIDES.length].thumb}
              </p>
            </div>
            <p className="text-[8px] text-gray-600 text-center mt-1">Stage Monitor</p>
          </div>
        </div>
      </div>
    </div>
  );
}
