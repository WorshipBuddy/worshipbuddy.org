"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaHeart,
  FaRegHeart,
  FaChevronLeft,
  FaMusic,
  FaBook,
  FaHeadphones,
  FaLayerGroup,
  FaCog,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

/* ────────────────────────────────────────────
   Music Theory: Chromatic scale & transposition
   Matches VirtualSongbook's SongbookScreen.js
   ──────────────────────────────────────────── */

const KEY_NAMES = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

const SHARP_DISPLAY = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const FLAT_DISPLAY  = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const SHARP_KEY_SET = new Set([1, 2, 4, 6, 7, 9, 11]);

function getNoteName(noteIdx, keyIdx) {
  return SHARP_KEY_SET.has(keyIdx) ? SHARP_DISPLAY[noteIdx] : FLAT_DISPLAY[noteIdx];
}

function transpose(noteIdx, semitones) {
  return ((noteIdx + semitones) % 12 + 12) % 12;
}

function displayChord(noteIdx, suffix, semitones, keyIdx) {
  const transposed = transpose(noteIdx, semitones);
  const newKey = transpose(keyIdx, semitones);
  return getNoteName(transposed, newKey) + suffix;
}

/* ────────────────────────────────────────────
   Song Data — real chord progressions
   Chord format: [chromatic_index, suffix]
     0=C, 1=C#, 2=D, 3=Eb, 4=E, 5=F,
     6=F#, 7=G, 8=Ab, 9=A, 10=Bb, 11=B
   ──────────────────────────────────────────── */

const SONGS = [
  { id: 1, number: 1, title: "Way Maker", artist: "Sinach", baseKey: 7, themes: ["Worship", "Faith"], favorited: true },
  { id: 2, number: 2, title: "Goodness of God", artist: "Bethel Music", baseKey: 9, themes: ["Worship", "Love"], favorited: false },
  { id: 3, number: 3, title: "Build My Life", artist: "Housefires", baseKey: 4, themes: ["Worship"], favorited: true },
  { id: 4, number: 4, title: "Great Are You Lord", artist: "All Sons & Daughters", baseKey: 7, themes: ["Worship", "Praise"], favorited: false },
  { id: 5, number: 5, title: "Gracia Sublime Es", artist: "Tradición", baseKey: 0, themes: ["Worship"], favorited: false },
  { id: 6, number: 6, title: "Holy Spirit", artist: "Francesca Battistelli", baseKey: 2, themes: ["Faith"], favorited: false },
];

const SONG_LYRICS = {
  1: {
    sections: [
      {
        label: "Verse 1",
        lines: [
          { chords: [[7, ""]], text: "You are here moving in our midst" },
          { chords: [[0, ""]], text: "I worship You I worship You" },
          { chords: [[7, ""]], text: "You are here working in this place" },
          { chords: [[0, ""]], text: "I worship You I worship You" },
        ],
      },
      {
        label: "Chorus",
        lines: [
          { chords: [[7, ""]], text: "Way maker miracle worker" },
          { chords: [[2, ""]], text: "Promise keeper light in the darkness" },
          { chords: [[4, "m"], [0, ""]], text: "My God that is who You are" },
        ],
      },
      {
        label: "Verse 2",
        lines: [
          { chords: [[7, ""]], text: "You are here touching every heart" },
          { chords: [[0, ""]], text: "I worship You I worship You" },
          { chords: [[7, ""]], text: "You are here turning lives around" },
          { chords: [[0, ""]], text: "I worship You I worship You" },
        ],
      },
    ],
  },
  2: {
    sections: [
      {
        label: "Verse 1",
        lines: [
          { chords: [[9, ""]], text: "I love You Lord" },
          { chords: [[2, ""]], text: "Oh Your mercy never fails me" },
          { chords: [[9, ""]], text: "All my days I've been held in Your hands" },
          { chords: [[4, ""]], text: "From the moment that I wake up" },
          { chords: [[2, ""]], text: "Until I lay my head" },
          { chords: [[9, ""]], text: "I will sing of the goodness of God" },
        ],
      },
      {
        label: "Chorus",
        lines: [
          { chords: [[9, ""]], text: "All my life You have been faithful" },
          { chords: [[2, ""]], text: "All my life You have been so so good" },
          { chords: [[6, "m"]], text: "With every breath that I am able" },
          { chords: [[2, ""], [4, ""]], text: "Oh I will sing of the goodness of God" },
        ],
      },
    ],
  },
  3: {
    sections: [
      {
        label: "Verse 1",
        lines: [
          { chords: [[4, ""]], text: "Worthy of every song we could ever sing" },
          { chords: [[11, ""]], text: "Worthy of all the praise we could ever bring" },
          { chords: [[1, "m"]], text: "Worthy of every breath we could ever breathe" },
          { chords: [[9, ""]], text: "We live for You" },
        ],
      },
      {
        label: "Chorus",
        lines: [
          { chords: [[4, ""]], text: "Holy there is no one like You" },
          { chords: [[11, ""]], text: "There is none beside You" },
          { chords: [[1, "m"], [9, ""]], text: "Open up my eyes in wonder" },
          { chords: [[4, ""]], text: "Build my life upon Your love it is a firm foundation" },
        ],
      },
    ],
  },
  4: {
    sections: [
      {
        label: "Verse 1",
        lines: [
          { chords: [[7, ""]], text: "You give life You are love" },
          { chords: [[4, "m"]], text: "You bring light to the darkness" },
          { chords: [[0, ""]], text: "You give hope You restore" },
          { chords: [[2, ""]], text: "Every heart that is broken" },
        ],
      },
      {
        label: "Chorus",
        lines: [
          { chords: [[7, ""]], text: "Great are You Lord" },
          { chords: [[4, "m"]], text: "It's Your breath in our lungs" },
          { chords: [[0, ""], [2, ""]], text: "So we pour out our praise to You only" },
        ],
      },
    ],
  },
  5: {
    sections: [
      {
        label: "Verso 1",
        lines: [
          { chords: [[0, ""]], text: "Gracia sublime es del Señor" },
          { chords: [[5, ""]], text: "Que a un pecador salvó" },
          { chords: [[0, ""]], text: "Fui ciego mas hoy puedo ver" },
          { chords: [[7, ""], [0, ""]], text: "Perdido y Él me halló" },
        ],
      },
      {
        label: "Verso 2",
        lines: [
          { chords: [[0, ""]], text: "Su gracia me enseñó a temer" },
          { chords: [[5, ""]], text: "Mis dudas ahuyentó" },
          { chords: [[0, ""]], text: "Oh cuán precioso fue a mi ser" },
          { chords: [[7, ""], [0, ""]], text: "Cuando Él me transformó" },
        ],
      },
    ],
  },
  6: {
    sections: [
      {
        label: "Verse 1",
        lines: [
          { chords: [[2, ""]], text: "There's nothing worth more" },
          { chords: [[7, ""]], text: "That will ever come close" },
          { chords: [[9, ""]], text: "Nothing can compare" },
          { chords: [[7, ""]], text: "You're our living hope" },
        ],
      },
      {
        label: "Chorus",
        lines: [
          { chords: [[2, ""]], text: "Holy Spirit You are welcome here" },
          { chords: [[11, "m"]], text: "Come flood this place and fill the atmosphere" },
          { chords: [[7, ""]], text: "Your glory God is what our hearts long for" },
          { chords: [[9, ""], [2, ""]], text: "To be overcome by Your presence Lord" },
        ],
      },
    ],
  },
};

const THEMES = ["All", "Worship", "Faith", "Love", "Praise"];

/* ────────────────────────────────────────────
   Songbook List View
   ──────────────────────────────────────────── */

function SongbookView({ onSelectSong }) {
  const [search, setSearch] = useState("");
  const [activeTheme, setActiveTheme] = useState("All");
  const [favOnly, setFavOnly] = useState(false);

  const filtered = SONGS.filter((s) => {
    if (favOnly && !s.favorited) return false;
    if (activeTheme !== "All" && !s.themes.includes(activeTheme)) return false;
    if (search && !s.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <span className="text-sm font-bold text-[#0D245E]">WorshipBuddy</span>
        <div className="flex items-center gap-2">
          <button onClick={() => setFavOnly(!favOnly)} className={`text-sm ${favOnly ? "text-red-500" : "text-gray-400"}`}>
            {favOnly ? <FaHeart /> : <FaRegHeart />}
          </button>
          <span className="text-[9px] text-[#0D245E] font-semibold bg-[#0D245E]/10 px-1.5 py-0.5 rounded">English</span>
        </div>
      </div>

      <div className="px-4 mb-2">
        <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-lg px-3 py-1.5">
          <FaSearch className="text-[10px] text-[#94a3b8]" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search songs..."
            className="bg-transparent text-xs text-[#1a202c] w-full outline-none placeholder:text-[#94a3b8]"
          />
        </div>
      </div>

      <div className="px-4 flex gap-1.5 overflow-x-auto mb-3 pb-1 no-scrollbar">
        {THEMES.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTheme(t)}
            className={`px-2.5 py-1 rounded-full text-[10px] font-medium whitespace-nowrap transition-colors ${
              t === activeTheme ? "bg-[#0D245E] text-white" : "bg-[#f1f5f9] text-[#64748b]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto px-1">
        {filtered.map((song, i) => (
          <motion.button
            key={song.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => onSelectSong(song)}
            className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#f8fafc] rounded-lg transition-colors text-left border-b border-[#f1f5f9] last:border-0"
          >
            <span className="text-[10px] font-bold text-[#cbd5e1] w-4 text-right shrink-0">{song.number}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <p className="text-xs font-medium text-[#1a202c] truncate">{song.title}</p>
                {song.favorited && <FaHeart className="text-[8px] text-red-400 shrink-0" />}
              </div>
              <p className="text-[10px] text-[#94a3b8] truncate">{song.artist}</p>
            </div>
            <span className="text-[10px] font-bold text-[#0D245E] bg-[#0D245E]/10 px-1.5 py-0.5 rounded shrink-0">
              {KEY_NAMES[song.baseKey]}
            </span>
          </motion.button>
        ))}
        {filtered.length === 0 && (
          <p className="text-xs text-[#94a3b8] text-center py-8">No songs found</p>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Song Detail / Viewer
   ──────────────────────────────────────────── */

function SongDetailView({ song, onBack }) {
  const [semitoneOffset, setSemitoneOffset] = useState(0);
  const [showChords, setShowChords] = useState(true);

  const lyrics = SONG_LYRICS[song.id];
  if (!lyrics) return null;

  const currentKeyIdx = transpose(song.baseKey, semitoneOffset);

  const handleUp = () => setSemitoneOffset((p) => (p + 1) % 12);
  const handleDown = () => setSemitoneOffset((p) => (p - 1 + 12) % 12);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-[#f1f5f9]">
        <button onClick={onBack} className="flex items-center gap-1.5 text-[#0D245E]">
          <FaChevronLeft className="text-[10px]" />
          <span className="text-xs font-medium">Songbook</span>
        </button>
        <div className="flex items-center gap-3">
          <FaHeart className={`text-xs ${song.favorited ? "text-red-400" : "text-[#cbd5e1]"}`} />
        </div>
      </div>

      <div className="px-4 py-2.5 border-b border-[#f1f5f9]">
        <h3 className="text-sm font-bold text-[#1a202c]">{song.title}</h3>
        <p className="text-[10px] text-[#94a3b8]">{song.artist}</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5">
        {lyrics.sections.map((section, si) => (
          <div key={si}>
            <p className="text-[9px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1.5">{section.label}</p>
            {section.lines.map((line, li) => (
              <div key={li} className="mb-1">
                {showChords && (
                  <motion.div
                    key={`c-${currentKeyIdx}-${si}-${li}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-4"
                  >
                    {line.chords.map(([noteIdx, suffix], ci) => (
                      <span key={ci} className="text-[11px] font-bold text-[#0D245E]">
                        {displayChord(noteIdx, suffix, semitoneOffset, song.baseKey)}
                      </span>
                    ))}
                  </motion.div>
                )}
                <p className="text-[11px] text-[#334155] leading-relaxed">{line.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Transpose bar at the bottom — matches app layout */}
      <div className="px-4 py-2 border-t border-[#f1f5f9] bg-white flex items-center justify-between">
        <button
          onClick={() => setShowChords(!showChords)}
          className={`text-[9px] font-semibold px-2 py-1 rounded-lg transition-colors ${
            showChords ? "bg-[#0D245E]/10 text-[#0D245E]" : "bg-[#f1f5f9] text-[#94a3b8]"
          }`}
        >
          Chords
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDown}
            className="w-7 h-7 rounded-lg bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:bg-[#e2e8f0] transition-colors"
          >
            <FaMinus className="text-[8px]" />
          </button>
          <motion.div
            key={currentKeyIdx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-3 py-1 rounded-lg bg-[#0D245E] text-white text-[11px] font-bold min-w-[48px] text-center"
          >
            {KEY_NAMES[currentKeyIdx]}
          </motion.div>
          <button
            onClick={handleUp}
            className="w-7 h-7 rounded-lg bg-[#f1f5f9] flex items-center justify-center text-[#64748b] hover:bg-[#e2e8f0] transition-colors"
          >
            <FaPlus className="text-[8px]" />
          </button>
        </div>
        <div className="w-[52px]" />
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Music Tab (placeholder)
   ──────────────────────────────────────────── */

function MusicTab() {
  const playlists = [
    { name: "Sunday Morning Worship", songs: 12, duration: "48 min" },
    { name: "Youth Worship Night", songs: 8, duration: "32 min" },
    { name: "Acoustic Favorites", songs: 15, duration: "1h 2m" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2">
        <p className="text-sm font-bold text-[#0D245E]">Music</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        {playlists.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0D245E]/10 flex items-center justify-center">
              <FaHeadphones className="text-sm text-[#0D245E]" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#1a202c]">{p.name}</p>
              <p className="text-[10px] text-[#94a3b8]">{p.songs} songs · {p.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Sets Tab (placeholder)
   ──────────────────────────────────────────── */

function SetsTab() {
  const sets = [
    { name: "Sunday Mar 22 – Morning", songs: ["Way Maker", "Goodness of God", "Build My Life"], live: true },
    { name: "Sunday Mar 22 – Youth", songs: ["Holy Spirit", "Great Are You Lord"], live: false },
    { name: "Wednesday Mar 25", songs: ["Way Maker", "Holy Spirit", "Gracia Sublime Es"], live: false },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <p className="text-sm font-bold text-[#0D245E]">Sets</p>
        <span className="text-[9px] font-semibold text-[#0D245E] bg-[#0D245E]/10 px-2 py-0.5 rounded">Live Sets</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 space-y-2.5">
        {sets.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="bg-white border border-[#e2e8f0] rounded-xl p-3"
          >
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs font-semibold text-[#1a202c]">{s.name}</p>
              {s.live && (
                <span className="text-[8px] font-bold text-white bg-[#10b981] px-1.5 py-0.5 rounded-full">LIVE</span>
              )}
            </div>
            <div className="space-y-1">
              {s.songs.map((title, si) => (
                <div key={title} className="flex items-center gap-2">
                  <span className="text-[9px] font-bold text-[#cbd5e1] w-3 text-right">{si + 1}</span>
                  <p className="text-[10px] text-[#64748b]">{title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Settings Tab (placeholder)
   ──────────────────────────────────────────── */

function SettingsTab() {
  const items = [
    { label: "Organization", value: "Grace Community Church" },
    { label: "Language", value: "English" },
    { label: "Chord Format", value: "Letter" },
    { label: "Theme", value: "Light" },
    { label: "Font Size", value: "Medium" },
    { label: "Key Detector", value: "" },
    { label: "About", value: "v3.2.1" },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2">
        <p className="text-sm font-bold text-[#0D245E]">Settings</p>
      </div>
      <div className="px-4 mb-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#0D245E] flex items-center justify-center text-white text-sm font-bold">JT</div>
        <div>
          <p className="text-xs font-semibold text-[#1a202c]">James Thomas</p>
          <p className="text-[10px] text-[#94a3b8]">james@grace.church</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-[#f1f5f9] last:border-0">
            <span className="text-xs text-[#1a202c]">{item.label}</span>
            <span className="text-[10px] text-[#94a3b8]">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   Main Demo
   ──────────────────────────────────────────── */

const TABS = [
  { id: "songbook", icon: FaBook, label: "Songbook" },
  { id: "music", icon: FaHeadphones, label: "Music" },
  { id: "sets", icon: FaLayerGroup, label: "Sets" },
  { id: "settings", icon: FaCog, label: "Settings" },
];

export default function WorshipBuddyDemo() {
  const [activeTab, setActiveTab] = useState("songbook");
  const [screen, setScreen] = useState("list");
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSelectSong = (song) => {
    setSelectedSong(song);
    setScreen("detail");
  };

  const handleBack = () => {
    setScreen("list");
    setSelectedSong(null);
  };

  const handleTabChange = (id) => {
    setActiveTab(id);
    if (id === "songbook") {
      setScreen("list");
      setSelectedSong(null);
    }
  };

  const renderContent = () => {
    if (activeTab === "songbook") {
      if (screen === "detail" && selectedSong) {
        return (
          <motion.div key="detail" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 30 }} transition={{ duration: 0.2 }} className="h-full">
            <SongDetailView song={selectedSong} onBack={handleBack} />
          </motion.div>
        );
      }
      return (
        <motion.div key="songbook-list" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="h-full">
          <SongbookView onSelectSong={handleSelectSong} />
        </motion.div>
      );
    }
    if (activeTab === "music") {
      return (
        <motion.div key="music" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="h-full">
          <MusicTab />
        </motion.div>
      );
    }
    if (activeTab === "sets") {
      return (
        <motion.div key="sets" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="h-full">
          <SetsTab />
        </motion.div>
      );
    }
    return (
      <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="h-full">
        <SettingsTab />
      </motion.div>
    );
  };

  return (
    <div className="flex justify-center">
      <div className="w-[300px] sm:w-[320px]">
        <div className="rounded-[2.5rem] bg-gradient-to-b from-gray-200 to-gray-300 p-[3px] shadow-xl">
          <div className="rounded-[2.3rem] bg-white overflow-hidden relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-200 rounded-b-2xl z-10" />
            <div className="h-12 bg-white" />

            <div className="h-[480px] sm:h-[520px] overflow-hidden">
              <AnimatePresence mode="wait">
                {renderContent()}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-around py-2 border-t border-[#e2e8f0] bg-white">
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button key={tab.id} onClick={() => handleTabChange(tab.id)} className="flex flex-col items-center gap-0.5">
                    <tab.icon className={`text-xs transition-colors ${isActive ? "text-[#0D245E]" : "text-[#94a3b8]"}`} />
                    <span className={`text-[9px] transition-colors ${isActive ? "text-[#0D245E] font-semibold" : "text-[#94a3b8]"}`}>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-center py-2">
              <div className="w-28 h-1 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-[#94a3b8] mt-4">
          Tap a song to view — transpose with the controls at the bottom
        </p>
      </div>
    </div>
  );
}
