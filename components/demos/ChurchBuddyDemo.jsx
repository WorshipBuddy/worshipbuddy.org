"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaTimes,
  FaCalendarAlt,
  FaHome,
  FaEllipsisH,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaVideo,
  FaClipboardList,
  FaGraduationCap,
  FaPlay,
  FaCircle,
  FaPhone,
  FaEnvelope,
  FaBook,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaSearch,
  FaChevronDown,
} from "react-icons/fa";

/* ── Shared data ── */

const DAYS_IN_MONTH = 31;
const MONTH = "March";
const YEAR = 2026;
const START_DAY = 0;

const SERVICES = {
  1: [{ name: "Sunday Worship", time: "9:00 AM" }],
  4: [{ name: "Wednesday Night", time: "7:00 PM" }],
  8: [{ name: "Sunday Worship", time: "9:00 AM" }],
  11: [{ name: "Wednesday Night", time: "7:00 PM" }],
  15: [{ name: "Sunday Worship", time: "9:00 AM" }],
  18: [{ name: "Wednesday Night", time: "7:00 PM" }],
  22: [
    { name: "Sunday Worship", time: "9:00 AM" },
    { name: "Youth Service", time: "6:00 PM" },
  ],
  25: [{ name: "Wednesday Night", time: "7:00 PM" }],
  29: [{ name: "Sunday Worship", time: "9:00 AM" }],
};

const PENDING_ASSIGNMENTS = [
  { id: 1, service: "Sunday Worship", date: "Mar 22", time: "9:00 AM", role: "Guitar", team: "Worship Team" },
  { id: 2, service: "Wednesday Night", date: "Mar 25", time: "7:00 PM", role: "Vocals", team: "Worship Team" },
  { id: 3, service: "Sunday Worship", date: "Mar 29", time: "9:00 AM", role: "Guitar", team: "Worship Team" },
];

const UPCOMING_SCHEDULE = [
  { service: "Sunday Worship", date: "Sun, Mar 22", time: "9:00 AM", location: "Main Sanctuary", role: "Guitar", team: "Worship Team", status: "confirmed" },
  { service: "Wednesday Night", date: "Wed, Mar 25", time: "7:00 PM", location: "Fellowship Hall", role: "Vocals", team: "Worship Team", status: "pending" },
  { service: "Sunday Worship", date: "Sun, Mar 29", time: "9:00 AM", location: "Main Sanctuary", role: "Guitar", team: "Worship Team", status: "pending" },
  { service: "Wednesday Night", date: "Wed, Apr 1", time: "7:00 PM", location: "Fellowship Hall", role: "Guitar", team: "Worship Team", status: "confirmed" },
];

const STATUS_STYLES = {
  confirmed: { bg: "bg-[#d1fae5]", text: "text-[#059669]", label: "Confirmed" },
  pending: { bg: "bg-[#fef3c7]", text: "text-[#d97706]", label: "Pending" },
  declined: { bg: "bg-[#fee2e2]", text: "text-[#dc2626]", label: "Declined" },
};

/* ── People data ── */

const PEOPLE = [
  { name: "Sarah Mitchell", role: "Worship Leader", teams: ["Worship Team"], phone: "(555) 123-4567", email: "sarah@grace.church", initials: "SM", color: "bg-[#7c3aed]" },
  { name: "David Rodriguez", role: "Keys", teams: ["Worship Team"], phone: "(555) 234-5678", email: "david@grace.church", initials: "DR", color: "bg-[#2563eb]" },
  { name: "James Thomas", role: "Guitar", teams: ["Worship Team"], phone: "(555) 345-6789", email: "james@grace.church", initials: "JT", color: "bg-[#059669]" },
  { name: "Mark Lewis", role: "Drums", teams: ["Worship Team"], phone: "(555) 456-7890", email: "mark@grace.church", initials: "ML", color: "bg-[#d97706]" },
  { name: "Anna Kim", role: "Bass", teams: ["Worship Team"], phone: "(555) 567-8901", email: "anna@grace.church", initials: "AK", color: "bg-[#dc2626]" },
  { name: "Rachel Park", role: "Vocals", teams: ["Worship Team", "Youth"], phone: "(555) 678-9012", email: "rachel@grace.church", initials: "RP", color: "bg-[#ec4899]" },
  { name: "Mike Wilson", role: "Sound", teams: ["Production"], phone: "(555) 789-0123", email: "mike@grace.church", initials: "MW", color: "bg-[#0891b2]" },
  { name: "Lily Chen", role: "Projection", teams: ["Production"], phone: "(555) 890-1234", email: "lily@grace.church", initials: "LC", color: "bg-[#7c3aed]" },
  { name: "Pastor John", role: "Lead Pastor", teams: ["Leadership"], phone: "(555) 111-2222", email: "pastor@grace.church", initials: "PJ", color: "bg-[#1e40af]" },
];

/* ── Streaming data ── */

const STREAMS = [
  { id: 1, title: "Sunday Worship Live", date: "Mar 22, 9:00 AM", status: "live", viewers: 142, platform: "YouTube" },
  { id: 2, title: "Youth Service", date: "Mar 22, 6:00 PM", status: "upcoming", viewers: 0, platform: "YouTube" },
  { id: 3, title: "Wednesday Night", date: "Mar 18, 7:00 PM", status: "past", viewers: 87, platform: "YouTube" },
  { id: 4, title: "Sunday Worship", date: "Mar 15, 9:00 AM", status: "past", viewers: 156, platform: "Facebook" },
  { id: 5, title: "Prayer Meeting", date: "Mar 12, 6:30 PM", status: "past", viewers: 43, platform: "YouTube" },
];

/* ── Scheduler data ── */

const SCHEDULE_SERVICES = [
  {
    id: 1,
    name: "Sunday Worship",
    date: "Mar 29, 9:00 AM",
    positions: [
      { role: "Worship Leader", person: "Sarah M.", status: "confirmed" },
      { role: "Keys", person: "David R.", status: "confirmed" },
      { role: "Guitar", person: null, status: "empty" },
      { role: "Drums", person: "Mark L.", status: "pending" },
      { role: "Bass", person: "Anna K.", status: "confirmed" },
      { role: "Vocals", person: null, status: "empty" },
      { role: "Sound", person: "Mike W.", status: "confirmed" },
      { role: "Projection", person: null, status: "empty" },
    ],
  },
  {
    id: 2,
    name: "Wednesday Night",
    date: "Apr 1, 7:00 PM",
    positions: [
      { role: "Worship Leader", person: "Sarah M.", status: "confirmed" },
      { role: "Keys", person: null, status: "empty" },
      { role: "Guitar", person: "James T.", status: "pending" },
      { role: "Sound", person: null, status: "empty" },
    ],
  },
];

const AVAILABLE_PEOPLE = [
  { name: "James T.", initials: "JT", score: "Available" },
  { name: "Rachel P.", initials: "RP", score: "Available" },
  { name: "Lily C.", initials: "LC", score: "Scheduled 2×" },
];

/* ── Sunday School data ── */

const SS_CLASSES = [
  {
    id: 1,
    name: "Little Lambs",
    ageGroup: "Ages 3-5",
    teacher: "Mrs. Johnson",
    room: "Room 101",
    students: [
      { name: "Emma W.", grade: "Pre-K", attendance: "95%", homework: "Complete" },
      { name: "Liam S.", grade: "Pre-K", attendance: "88%", homework: "Complete" },
      { name: "Olivia T.", grade: "K", attendance: "92%", homework: "Incomplete" },
      { name: "Noah B.", grade: "Pre-K", attendance: "78%", homework: "Complete" },
    ],
  },
  {
    id: 2,
    name: "Kingdom Kids",
    ageGroup: "Ages 6-9",
    teacher: "Mr. Davis",
    room: "Room 203",
    students: [
      { name: "Sophia R.", grade: "1st", attendance: "97%", homework: "Complete" },
      { name: "Jackson M.", grade: "2nd", attendance: "85%", homework: "Incomplete" },
      { name: "Ava L.", grade: "3rd", attendance: "91%", homework: "Complete" },
      { name: "Ethan P.", grade: "2nd", attendance: "90%", homework: "Complete" },
      { name: "Mia K.", grade: "1st", attendance: "82%", homework: "Incomplete" },
    ],
  },
  {
    id: 3,
    name: "Bible Explorers",
    ageGroup: "Ages 10-12",
    teacher: "Mrs. Carter",
    room: "Room 305",
    students: [
      { name: "Aiden J.", grade: "5th", attendance: "93%", homework: "Complete" },
      { name: "Isabella F.", grade: "6th", attendance: "96%", homework: "Complete" },
      { name: "Lucas H.", grade: "5th", attendance: "75%", homework: "Incomplete" },
    ],
  },
];

/* ──────────────────────────────────────────── */
/* ── Home Tab ── */
/* ──────────────────────────────────────────── */

function HomeTab() {
  const [assignments, setAssignments] = useState(PENDING_ASSIGNMENTS);
  const handleRespond = (id) => setAssignments((prev) => prev.filter((a) => a.id !== id));

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2">
        <p className="text-sm font-bold text-[#1a202c]">Welcome, James</p>
        <p className="text-[10px] text-[#94a3b8]">Grace Community Church</p>
      </div>

      {assignments.length > 0 && (
        <div className="px-4 mb-3">
          <div className="bg-[#fef3c7] border border-[#f59e0b]/30 rounded-xl px-3 py-2">
            <p className="text-[10px] font-semibold text-[#92400e]">
              You have {assignments.length} pending confirmation{assignments.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      )}

      <div className="px-4 mb-2">
        <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Pending Confirmations</p>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        <AnimatePresence>
          {assignments.map((a, i) => (
            <motion.div
              key={a.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100, height: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white border border-[#e2e8f0] rounded-xl p-3"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs font-semibold text-[#1a202c]">{a.service}</p>
                  <p className="text-[10px] text-[#94a3b8]">{a.date} · {a.time}</p>
                </div>
                <span className="text-[9px] font-semibold text-[#10245c] bg-[#10245c]/10 px-2 py-0.5 rounded-full">{a.role}</span>
              </div>
              <p className="text-[10px] text-[#64748b] mb-2.5">{a.team}</p>
              <div className="flex gap-2">
                <button onClick={() => handleRespond(a.id)} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[#10b981] text-white text-[10px] font-semibold hover:bg-[#059669] transition-colors">
                  <FaCheck className="text-[8px]" /> Accept
                </button>
                <button onClick={() => handleRespond(a.id)} className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-white border border-[#ef4444]/30 text-[#ef4444] text-[10px] font-semibold hover:bg-[#fee2e2] transition-colors">
                  <FaTimes className="text-[8px]" /> Decline
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {assignments.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
            <div className="w-10 h-10 rounded-full bg-[#d1fae5] flex items-center justify-center mx-auto mb-2">
              <FaCheck className="text-sm text-[#10b981]" />
            </div>
            <p className="text-xs font-semibold text-[#1a202c]">All caught up!</p>
            <p className="text-[10px] text-[#94a3b8]">No pending confirmations</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/* ── Calendar Tab ── */
/* ──────────────────────────────────────────── */

function CalendarTab() {
  const [selectedDay, setSelectedDay] = useState(22);
  const days = [];
  for (let i = 0; i < START_DAY; i++) days.push(null);
  for (let d = 1; d <= DAYS_IN_MONTH; d++) days.push(d);

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center justify-between">
        <span className="text-sm font-bold text-[#1a202c]">{MONTH} {YEAR}</span>
        <div className="flex items-center gap-3">
          <FaChevronLeft className="text-[10px] text-[#94a3b8]" />
          <FaChevronRight className="text-[10px] text-[#94a3b8]" />
        </div>
      </div>

      <div className="grid grid-cols-7 px-3 mb-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={i} className="text-[9px] text-[#94a3b8] text-center font-medium py-1">{d}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-0.5 px-3 mb-3">
        {days.map((day, i) => {
          const hasService = day && SERVICES[day];
          const isSelected = day === selectedDay;
          const isToday = day === 22;
          return (
            <button
              key={i}
              onClick={() => day && setSelectedDay(day)}
              disabled={!day}
              className={`aspect-square flex flex-col items-center justify-center rounded-lg relative transition-colors ${
                isSelected ? "bg-[#10245c] text-white" : isToday ? "bg-[#10245c]/10 text-[#10245c]" : day ? "hover:bg-[#f8fafc] text-[#1a202c]" : ""
              }`}
            >
              {day && (
                <>
                  <span className="text-[11px] font-medium">{day}</span>
                  {hasService && (
                    <div className="flex gap-0.5 mt-0.5">
                      {SERVICES[day].map((_, si) => (
                        <div key={si} className={`w-1 h-1 rounded-full ${isSelected ? "bg-white" : "bg-[#10245c]"}`} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex-1 px-4 overflow-y-auto">
        {selectedDay && SERVICES[selectedDay] ? (
          <>
            <p className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-2">{MONTH} {selectedDay}</p>
            <div className="space-y-2">
              {SERVICES[selectedDay].map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-3 text-left flex items-center gap-3"
                >
                  <div className="w-1 h-10 rounded-full bg-[#10245c]" />
                  <div>
                    <p className="text-xs font-semibold text-[#1a202c]">{svc.name}</p>
                    <p className="text-[10px] text-[#94a3b8]">{svc.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : selectedDay ? (
          <p className="text-xs text-[#94a3b8] text-center py-4">No services scheduled</p>
        ) : (
          <p className="text-xs text-[#94a3b8] text-center py-4">Select a date</p>
        )}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/* ── Schedule Tab ── */
/* ──────────────────────────────────────────── */

function ScheduleTab() {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2">
        <p className="text-sm font-bold text-[#1a202c]">My Schedule</p>
      </div>
      <div className="px-4 flex gap-2 mb-3">
        <button className="px-3 py-1 rounded-lg text-[10px] font-semibold bg-[#10245c] text-white">Upcoming</button>
        <button className="px-3 py-1 rounded-lg text-[10px] font-medium text-[#94a3b8] bg-[#f8fafc] border border-[#e2e8f0]">Past</button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 space-y-2.5">
        {UPCOMING_SCHEDULE.map((svc, i) => {
          const style = STATUS_STYLES[svc.status];
          return (
            <motion.div
              key={`${svc.service}-${svc.date}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="bg-white border border-[#e2e8f0] rounded-xl p-3"
            >
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <p className="text-xs font-semibold text-[#1a202c]">{svc.service}</p>
                  <p className="text-[10px] text-[#94a3b8]">{svc.date} · {svc.time}</p>
                </div>
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${style.bg} ${style.text}`}>{style.label}</span>
              </div>
              <div className="flex items-center gap-3 text-[10px] text-[#64748b]">
                <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-[8px] text-[#94a3b8]" />{svc.location}</span>
              </div>
              <div className="mt-2 pt-2 border-t border-[#f1f5f9] flex items-center gap-2">
                <span className="text-[9px] font-semibold text-[#10245c] bg-[#10245c]/10 px-2 py-0.5 rounded-full">{svc.role}</span>
                <span className="text-[9px] text-[#94a3b8]">{svc.team}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/* ── More Tab: Menu + Sub-views ── */
/* ──────────────────────────────────────────── */

const MORE_ITEMS = [
  { id: "people", icon: FaUsers, label: "People", desc: "View members & teams", color: "bg-[#7c3aed]" },
  { id: "streaming", icon: FaVideo, label: "Streaming", desc: "Live & past streams", color: "bg-[#dc2626]" },
  { id: "scheduler", icon: FaClipboardList, label: "Scheduler", desc: "Assign positions", color: "bg-[#2563eb]" },
  { id: "sundayschool", icon: FaGraduationCap, label: "Sunday School", desc: "Classes & students", color: "bg-[#059669]" },
];

/* ── People Sub-view ── */

function PeopleView({ onBack }) {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const filtered = PEOPLE.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.role.toLowerCase().includes(search.toLowerCase()));

  if (selected) {
    const p = selected;
    return (
      <div className="flex flex-col h-full">
        <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
          <button onClick={() => setSelected(null)} className="flex items-center gap-1 text-[#10245c]">
            <FaChevronLeft className="text-[9px]" />
            <span className="text-xs font-medium">People</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col items-center mb-4">
            <div className={`w-14 h-14 rounded-full ${p.color} flex items-center justify-center text-white text-lg font-bold mb-2`}>{p.initials}</div>
            <p className="text-sm font-bold text-[#1a202c]">{p.name}</p>
            <p className="text-[10px] text-[#94a3b8]">{p.role}</p>
          </div>
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-2.5">
              <FaPhone className="text-[10px] text-[#94a3b8]" />
              <div>
                <p className="text-[9px] text-[#94a3b8]">Phone</p>
                <p className="text-[11px] font-medium text-[#1a202c]">{p.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-2.5">
              <FaEnvelope className="text-[10px] text-[#94a3b8]" />
              <div>
                <p className="text-[9px] text-[#94a3b8]">Email</p>
                <p className="text-[11px] font-medium text-[#1a202c]">{p.email}</p>
              </div>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-2.5">
              <p className="text-[9px] text-[#94a3b8] mb-1.5">Teams</p>
              <div className="flex flex-wrap gap-1.5">
                {p.teams.map((t) => (
                  <span key={t} className="text-[9px] font-semibold text-[#10245c] bg-[#10245c]/10 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
        <button onClick={onBack} className="flex items-center gap-1 text-[#10245c]">
          <FaChevronLeft className="text-[9px]" />
          <span className="text-xs font-medium">More</span>
        </button>
        <span className="text-sm font-bold text-[#1a202c] ml-1">People</span>
      </div>
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg px-2.5 py-1.5">
          <FaSearch className="text-[9px] text-[#94a3b8]" />
          <input
            type="text"
            placeholder="Search people..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-[11px] bg-transparent outline-none w-full text-[#1a202c] placeholder:text-[#cbd5e1]"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4">
        {filtered.map((p, i) => (
          <motion.button
            key={p.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.03 }}
            onClick={() => setSelected(p)}
            className="w-full flex items-center gap-2.5 py-2 border-b border-[#f1f5f9] last:border-0 text-left hover:bg-[#f8fafc] transition-colors"
          >
            <div className={`w-8 h-8 rounded-full ${p.color} flex items-center justify-center text-white text-[10px] font-bold shrink-0`}>{p.initials}</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-[#1a202c] truncate">{p.name}</p>
              <p className="text-[10px] text-[#94a3b8]">{p.role}</p>
            </div>
            <FaChevronRight className="text-[8px] text-[#cbd5e1]" />
          </motion.button>
        ))}
        {filtered.length === 0 && <p className="text-xs text-[#94a3b8] text-center py-6">No people found</p>}
      </div>
    </div>
  );
}

/* ── Streaming Sub-view ── */

function StreamingView({ onBack }) {
  const [selected, setSelected] = useState(null);

  const statusLabel = { live: "Live Now", upcoming: "Upcoming", past: "Ended" };
  const statusColor = { live: "bg-[#dc2626] text-white", upcoming: "bg-[#fef3c7] text-[#d97706]", past: "bg-[#f1f5f9] text-[#94a3b8]" };

  if (selected) {
    return (
      <div className="flex flex-col h-full">
        <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
          <button onClick={() => setSelected(null)} className="flex items-center gap-1 text-[#10245c]">
            <FaChevronLeft className="text-[9px]" />
            <span className="text-xs font-medium">Streams</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Fake video player */}
          <div className="bg-[#0f172a] aspect-video flex items-center justify-center relative">
            {selected.status === "live" && (
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-[#dc2626] px-2 py-0.5 rounded">
                <FaCircle className="text-[5px] text-white animate-pulse" />
                <span className="text-[9px] font-bold text-white">LIVE</span>
              </div>
            )}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <FaPlay className="text-white text-sm ml-0.5" />
              </div>
              {selected.status === "past" && <p className="text-[10px] text-white/50">Replay available</p>}
            </div>
            {selected.status === "live" && (
              <div className="absolute bottom-2 right-2 text-[9px] text-white/70 bg-black/40 px-2 py-0.5 rounded">
                {selected.viewers} watching
              </div>
            )}
          </div>
          <div className="px-4 py-3">
            <p className="text-sm font-bold text-[#1a202c] mb-1">{selected.title}</p>
            <p className="text-[10px] text-[#94a3b8] mb-2">{selected.date}</p>
            <div className="flex items-center gap-2">
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${statusColor[selected.status]}`}>
                {statusLabel[selected.status]}
              </span>
              <span className="text-[9px] text-[#94a3b8] bg-[#f1f5f9] px-2 py-0.5 rounded-full">{selected.platform}</span>
            </div>
            {selected.status === "past" && (
              <p className="text-[10px] text-[#64748b] mt-3">{selected.viewers} total views</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
        <button onClick={onBack} className="flex items-center gap-1 text-[#10245c]">
          <FaChevronLeft className="text-[9px]" />
          <span className="text-xs font-medium">More</span>
        </button>
        <span className="text-sm font-bold text-[#1a202c] ml-1">Streaming</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2">
        {STREAMS.map((s, i) => (
          <motion.button
            key={s.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setSelected(s)}
            className="w-full bg-white border border-[#e2e8f0] rounded-xl p-3 text-left hover:bg-[#f8fafc] transition-colors"
          >
            <div className="flex items-start justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.status === "live" ? "bg-[#dc2626]" : "bg-[#f1f5f9]"}`}>
                  {s.status === "live" ? (
                    <FaCircle className="text-[6px] text-white animate-pulse" />
                  ) : (
                    <FaVideo className={`text-[10px] ${s.status === "upcoming" ? "text-[#d97706]" : "text-[#94a3b8]"}`} />
                  )}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1a202c]">{s.title}</p>
                  <p className="text-[10px] text-[#94a3b8]">{s.date}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${statusColor[s.status]}`}>
                {statusLabel[s.status]}
              </span>
              {s.status === "live" && (
                <span className="text-[9px] text-[#94a3b8]">{s.viewers} watching</span>
              )}
              {s.status === "past" && (
                <span className="text-[9px] text-[#94a3b8]">{s.viewers} views</span>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ── Scheduler Sub-view ── */

function SchedulerView({ onBack }) {
  const [services, setServices] = useState(SCHEDULE_SERVICES);
  const [expandedId, setExpandedId] = useState(1);
  const [assigning, setAssigning] = useState(null); // { serviceId, posIdx }

  const handleAssign = (person) => {
    if (!assigning) return;
    setServices((prev) =>
      prev.map((svc) => {
        if (svc.id !== assigning.serviceId) return svc;
        const positions = [...svc.positions];
        positions[assigning.posIdx] = { ...positions[assigning.posIdx], person: person.name, status: "pending" };
        return { ...svc, positions };
      })
    );
    setAssigning(null);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
        <button onClick={onBack} className="flex items-center gap-1 text-[#10245c]">
          <FaChevronLeft className="text-[9px]" />
          <span className="text-xs font-medium">More</span>
        </button>
        <span className="text-sm font-bold text-[#1a202c] ml-1">Scheduler</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2.5">
        {services.map((svc) => {
          const filled = svc.positions.filter((p) => p.person).length;
          const isExpanded = expandedId === svc.id;

          return (
            <div key={svc.id} className="bg-white border border-[#e2e8f0] rounded-xl overflow-hidden">
              <button
                onClick={() => setExpandedId(isExpanded ? null : svc.id)}
                className="w-full px-3 py-2.5 flex items-center justify-between text-left"
              >
                <div>
                  <p className="text-xs font-semibold text-[#1a202c]">{svc.name}</p>
                  <p className="text-[10px] text-[#94a3b8]">{svc.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-medium text-[#64748b]">{filled}/{svc.positions.length}</span>
                  <FaChevronDown className={`text-[8px] text-[#94a3b8] transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                </div>
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-2.5 space-y-1.5 border-t border-[#f1f5f9] pt-2">
                      {svc.positions.map((pos, posIdx) => {
                        const isAssigningThis = assigning?.serviceId === svc.id && assigning?.posIdx === posIdx;
                        const isEmpty = pos.status === "empty";
                        return (
                          <div key={`${pos.role}-${posIdx}`}>
                            <div className="flex items-center gap-2 py-1">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${
                                isEmpty ? "bg-[#f1f5f9] text-[#94a3b8] border border-dashed border-[#cbd5e1]" :
                                pos.status === "confirmed" ? "bg-[#d1fae5] text-[#059669]" : "bg-[#fef3c7] text-[#d97706]"
                              }`}>
                                {isEmpty ? "?" : pos.person.split(" ").map((n) => n[0]).join("")}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-[11px] font-medium text-[#1a202c]">{pos.role}</p>
                                <p className="text-[9px] text-[#94a3b8]">{isEmpty ? "Unassigned" : pos.person}</p>
                              </div>
                              {isEmpty && (
                                <button
                                  onClick={() => setAssigning(isAssigningThis ? null : { serviceId: svc.id, posIdx })}
                                  className={`text-[8px] font-semibold px-2 py-1 rounded-lg transition-colors ${isAssigningThis ? "bg-[#10245c] text-white" : "bg-[#10245c]/10 text-[#10245c]"}`}
                                >
                                  {isAssigningThis ? "Cancel" : "Assign"}
                                </button>
                              )}
                              {!isEmpty && (
                                <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${
                                  pos.status === "confirmed" ? "bg-[#d1fae5] text-[#059669]" : "bg-[#fef3c7] text-[#d97706]"
                                }`}>
                                  {pos.status}
                                </span>
                              )}
                            </div>

                            <AnimatePresence>
                              {isAssigningThis && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden"
                                >
                                  <div className="ml-8 mt-1 mb-1.5 space-y-1 bg-[#f8fafc] rounded-lg p-2 border border-[#e2e8f0]">
                                    <p className="text-[8px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">Available</p>
                                    {AVAILABLE_PEOPLE.map((ap) => (
                                      <button
                                        key={ap.name}
                                        onClick={() => handleAssign(ap)}
                                        className="w-full flex items-center gap-2 py-1 px-1 rounded hover:bg-white transition-colors text-left"
                                      >
                                        <div className="w-5 h-5 rounded-full bg-[#10245c] flex items-center justify-center text-white text-[7px] font-bold">{ap.initials}</div>
                                        <div className="flex-1">
                                          <p className="text-[10px] font-medium text-[#1a202c]">{ap.name}</p>
                                        </div>
                                        <span className={`text-[8px] ${ap.score === "Available" ? "text-[#059669]" : "text-[#d97706]"}`}>{ap.score}</span>
                                      </button>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Sunday School Sub-view ── */

function SundaySchoolView({ onBack }) {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  if (selectedStudent) {
    const s = selectedStudent;
    const hwStatus = s.homework === "Complete";
    return (
      <div className="flex flex-col h-full">
        <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
          <button onClick={() => setSelectedStudent(null)} className="flex items-center gap-1 text-[#10245c]">
            <FaChevronLeft className="text-[9px]" />
            <span className="text-xs font-medium">{selectedClass.name}</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col items-center mb-4">
            <div className="w-14 h-14 rounded-full bg-[#059669] flex items-center justify-center text-white text-lg font-bold mb-2">
              {s.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <p className="text-sm font-bold text-[#1a202c]">{s.name}</p>
            <p className="text-[10px] text-[#94a3b8]">{selectedClass.name}</p>
          </div>
          <div className="space-y-2.5">
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-2.5">
              <p className="text-[9px] text-[#94a3b8]">Grade</p>
              <p className="text-[11px] font-semibold text-[#1a202c]">{s.grade}</p>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-2.5">
              <p className="text-[9px] text-[#94a3b8]">Attendance</p>
              <div className="flex items-center gap-2">
                <p className="text-[11px] font-semibold text-[#1a202c]">{s.attendance}</p>
                <div className="flex-1 h-1.5 rounded-full bg-[#e2e8f0]">
                  <div className="h-full rounded-full bg-[#10245c]" style={{ width: s.attendance }} />
                </div>
              </div>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-2.5">
              <p className="text-[9px] text-[#94a3b8]">Home Assignments</p>
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${hwStatus ? "bg-[#d1fae5]" : "bg-[#fee2e2]"}`}>
                  {hwStatus ? <FaCheck className="text-[7px] text-[#059669]" /> : <FaTimes className="text-[7px] text-[#dc2626]" />}
                </div>
                <p className={`text-[11px] font-semibold ${hwStatus ? "text-[#059669]" : "text-[#dc2626]"}`}>{s.homework}</p>
              </div>
            </div>
            <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl px-3 py-2.5">
              <p className="text-[9px] text-[#94a3b8] mb-1.5">Recent Lessons</p>
              {["The Good Samaritan", "David & Goliath", "Noah\u2019s Ark"].map((lesson, li) => (
                <div key={lesson} className="flex items-center gap-2 py-1">
                  <FaBook className="text-[8px] text-[#94a3b8]" />
                  <p className="text-[10px] text-[#1a202c]">{lesson}</p>
                  <span className={`ml-auto text-[8px] font-medium px-1.5 py-0.5 rounded-full ${li === 2 ? "bg-[#fef3c7] text-[#d97706]" : "bg-[#d1fae5] text-[#059669]"}`}>
                    {li === 2 ? "In Progress" : "Done"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedClass) {
    const c = selectedClass;
    return (
      <div className="flex flex-col h-full">
        <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
          <button onClick={() => setSelectedClass(null)} className="flex items-center gap-1 text-[#10245c]">
            <FaChevronLeft className="text-[9px]" />
            <span className="text-xs font-medium">Classes</span>
          </button>
        </div>
        <div className="px-4 py-3 border-b border-[#f1f5f9]">
          <p className="text-sm font-bold text-[#1a202c]">{c.name}</p>
          <div className="flex items-center gap-3 mt-1 text-[10px] text-[#94a3b8]">
            <span className="flex items-center gap-1"><FaChalkboardTeacher className="text-[8px]" />{c.teacher}</span>
            <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-[8px]" />{c.room}</span>
          </div>
          <p className="text-[10px] text-[#64748b] mt-1">{c.ageGroup} · {c.students.length} students</p>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-2">
          {c.students.map((s, i) => {
            const hwStatus = s.homework === "Complete";
            return (
              <motion.button
                key={s.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setSelectedStudent(s)}
                className="w-full flex items-center gap-2.5 py-2.5 border-b border-[#f1f5f9] last:border-0 text-left hover:bg-[#f8fafc] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#059669] flex items-center justify-center text-white text-[9px] font-bold shrink-0">
                  {s.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-[#1a202c]">{s.name}</p>
                  <p className="text-[10px] text-[#94a3b8]">{s.grade} · {s.attendance} attendance</p>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center ${hwStatus ? "bg-[#d1fae5]" : "bg-[#fee2e2]"}`}>
                    {hwStatus ? <FaCheck className="text-[6px] text-[#059669]" /> : <FaTimes className="text-[6px] text-[#dc2626]" />}
                  </div>
                  <FaChevronRight className="text-[7px] text-[#cbd5e1]" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2 flex items-center gap-2 border-b border-[#f1f5f9]">
        <button onClick={onBack} className="flex items-center gap-1 text-[#10245c]">
          <FaChevronLeft className="text-[9px]" />
          <span className="text-xs font-medium">More</span>
        </button>
        <span className="text-sm font-bold text-[#1a202c] ml-1">Sunday School</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2.5">
        {SS_CLASSES.map((c, i) => (
          <motion.button
            key={c.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => setSelectedClass(c)}
            className="w-full bg-white border border-[#e2e8f0] rounded-xl p-3 text-left hover:bg-[#f8fafc] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#059669]/10 flex items-center justify-center shrink-0">
                <FaUserGraduate className="text-sm text-[#059669]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#1a202c]">{c.name}</p>
                <p className="text-[10px] text-[#94a3b8]">{c.ageGroup}</p>
                <div className="flex items-center gap-3 mt-1.5 text-[9px] text-[#64748b]">
                  <span className="flex items-center gap-1"><FaChalkboardTeacher className="text-[7px]" />{c.teacher}</span>
                  <span>{c.students.length} students</span>
                </div>
              </div>
              <FaChevronRight className="text-[8px] text-[#cbd5e1] mt-1" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ── More Tab: Menu ── */

function MoreTab({ onNavigate }) {
  return (
    <div className="flex flex-col h-full">
      <div className="px-4 pt-3 pb-2">
        <p className="text-sm font-bold text-[#1a202c]">More</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 space-y-2">
        {MORE_ITEMS.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onNavigate(item.id)}
            className="w-full flex items-center gap-3 bg-white border border-[#e2e8f0] rounded-xl p-3 text-left hover:bg-[#f8fafc] transition-colors"
          >
            <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center`}>
              <item.icon className="text-white text-sm" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#1a202c]">{item.label}</p>
              <p className="text-[10px] text-[#94a3b8]">{item.desc}</p>
            </div>
            <FaChevronRight className="text-[8px] text-[#cbd5e1]" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────── */
/* ── Main Demo ── */
/* ──────────────────────────────────────────── */

const TABS = [
  { id: "home", icon: FaHome, label: "Home" },
  { id: "calendar", icon: FaCalendarAlt, label: "Calendar" },
  { id: "schedule", icon: FaClock, label: "Schedule" },
  { id: "more", icon: FaEllipsisH, label: "More" },
];

export default function ChurchBuddyDemo() {
  const [activeTab, setActiveTab] = useState("home");
  const [moreSub, setMoreSub] = useState(null);

  const handleTabChange = (id) => {
    setActiveTab(id);
    if (id !== "more") setMoreSub(null);
  };

  const renderMoreContent = () => {
    if (moreSub === "people") return <PeopleView onBack={() => setMoreSub(null)} />;
    if (moreSub === "streaming") return <StreamingView onBack={() => setMoreSub(null)} />;
    if (moreSub === "scheduler") return <SchedulerView onBack={() => setMoreSub(null)} />;
    if (moreSub === "sundayschool") return <SundaySchoolView onBack={() => setMoreSub(null)} />;
    return <MoreTab onNavigate={setMoreSub} />;
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
                {activeTab === "home" && (
                  <motion.div key="home" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="h-full">
                    <HomeTab />
                  </motion.div>
                )}
                {activeTab === "calendar" && (
                  <motion.div key="calendar" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="h-full">
                    <CalendarTab />
                  </motion.div>
                )}
                {activeTab === "schedule" && (
                  <motion.div key="schedule" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="h-full">
                    <ScheduleTab />
                  </motion.div>
                )}
                {activeTab === "more" && (
                  <motion.div key={`more-${moreSub || "menu"}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="h-full">
                    {renderMoreContent()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-around py-2 border-t border-[#e2e8f0] bg-white">
              {TABS.map((tab) => {
                const isActive = tab.id === activeTab;
                return (
                  <button key={tab.id} onClick={() => handleTabChange(tab.id)} className="flex flex-col items-center gap-0.5">
                    <tab.icon className={`text-xs transition-colors ${isActive ? "text-[#10245c]" : "text-[#94a3b8]"}`} />
                    <span className={`text-[9px] transition-colors ${isActive ? "text-[#10245c] font-semibold" : "text-[#94a3b8]"}`}>{tab.label}</span>
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
          Tap the tabs to explore — accept assignments, view services, manage people & more
        </p>
      </div>
    </div>
  );
}
