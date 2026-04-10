"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMusic,
  FaCalendarAlt,
  FaDesktop,
  FaTv,
  FaUsers,
} from "react-icons/fa";
import { HiMusicalNote } from "react-icons/hi2";

const PRODUCTS = [
  {
    id: "worshipbuddy",
    name: "WorshipBuddy",
    tagline: "Song management & music library",
    icon: FaMusic,
    iconBg: "bg-blue-50 text-blue-600",
    toggleActive: "bg-blue-600",
    calc: ({ users, songs }) => 25 + songs * 0.1 + users * 0.08,
  },
  {
    id: "churchbuddy",
    name: "ChurchBuddy",
    tagline: "Scheduling & church management",
    icon: FaCalendarAlt,
    iconBg: "bg-purple-50 text-purple-600",
    toggleActive: "bg-purple-600",
    calc: ({ users }) => 25 + users * 0.3,
  },
  {
    id: "presenterbuddy",
    name: "PresenterBuddy",
    tagline: "Worship presentation software",
    icon: FaDesktop,
    iconBg: "bg-orange-50 text-orange-600",
    toggleActive: "bg-orange-600",
    freeLabel: "Free — uses WorshipBuddy data",
    calc: () => 0,
  },
  {
    id: "presenterbuddystudio",
    name: "PresenterBuddy Studio",
    tagline: "Full production suite with NDI & more",
    icon: FaTv,
    iconBg: "bg-amber-50 text-amber-600",
    toggleActive: "bg-amber-600",
    calc: ({ songs }) => 3 + songs * 0.05,
  },
];

function formatCurrency(amount) {
  if (amount >= 1) return `$${Math.round(amount).toLocaleString()}`;
  return `$${amount.toFixed(2)}`;
}

function Toggle({ enabled, onChange, activeColor }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
        enabled ? activeColor : "bg-gray-200"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          enabled ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function DonationCalculator() {
  const [attendees, setAttendees] = useState(100);
  const [songs, setSongs] = useState(50);
  const [enabled, setEnabled] = useState({
    worshipbuddy: true,
    churchbuddy: true,
    presenterbuddy: true,
    presenterbuddystudio: false,
  });

  const toggleProduct = (id) => {
    setEnabled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const costs = useMemo(() => {
    const inputs = { users: attendees, songs };
    const breakdown = PRODUCTS.map((p) => ({
      ...p,
      monthly: enabled[p.id] ? p.calc(inputs) : 0,
    }));

    const totalMonthly = breakdown.reduce((sum, p) => sum + p.monthly, 0);
    const totalAnnual = totalMonthly * 12;

    return { breakdown, totalMonthly, totalAnnual };
  }, [attendees, songs, enabled]);

  const anyEnabled = Object.values(enabled).some(Boolean);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="card p-6 sm:p-8 space-y-6">
        {/* Attendees */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand/5 flex items-center justify-center">
              <FaUsers className="text-brand" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-gray-900">Church Size</h4>
              <p className="text-sm text-gray-500">How many people attend your church?</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="10000"
              value={attendees}
              onChange={(e) => setAttendees(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-brand"
            />
            <input
              type="number"
              min="1"
              max="99999"
              value={attendees}
              onChange={(e) => setAttendees(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 px-3 py-2 text-center font-semibold text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
            />
          </div>
        </div>

        {/* Songs */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
              <HiMusicalNote className="text-blue-600" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-gray-900">Songs</h4>
              <p className="text-sm text-gray-500">How many songs does your church have?</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="1"
              max="5000"
              value={songs}
              onChange={(e) => setSongs(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-blue-600"
            />
            <input
              type="number"
              min="1"
              max="99999"
              value={songs}
              onChange={(e) => setSongs(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 px-3 py-2 text-center font-semibold text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Product toggles */}
      <div className="grid gap-3">
        {PRODUCTS.map((product) => {
          const isOn = enabled[product.id];
          const monthlyCost = costs.breakdown.find((b) => b.id === product.id)?.monthly ?? 0;

          return (
            <motion.div
              key={product.id}
              layout
              className={`card p-5 overflow-hidden transition-all duration-200 ${
                isOn
                  ? "border-gray-200 shadow-card-hover"
                  : "opacity-60 border-gray-100"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${product.iconBg}`}
                  >
                    <product.icon className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-gray-900 text-sm sm:text-base">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-400 truncate">
                      {product.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <AnimatePresence mode="wait">
                    {isOn && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-sm font-semibold text-gray-700"
                      >
                        {product.freeLabel ? (
                          <span className="text-xs font-medium text-emerald-600">Free</span>
                        ) : (
                          <>{formatCurrency(monthlyCost)}/mo</>
                        )}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <Toggle
                    enabled={isOn}
                    onChange={() => toggleProduct(product.id)}
                    activeColor={product.toggleActive}
                  />
                </div>
              </div>

              <AnimatePresence>
                {isOn && product.freeLabel && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 pt-3 border-t border-gray-100 text-xs text-emerald-600">
                      {product.freeLabel}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Results */}
      <div className="card overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          <div className="p-5 sm:p-6 text-center">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
              Monthly Cost
            </p>
            <motion.p
              key={costs.totalMonthly}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl sm:text-3xl font-bold font-heading text-gray-900"
            >
              {anyEnabled ? formatCurrency(costs.totalMonthly) : "$0"}
            </motion.p>
          </div>

          <div className="p-5 sm:p-6 text-center">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">
              Annual Cost
            </p>
            <motion.p
              key={costs.totalAnnual}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-2xl sm:text-3xl font-bold font-heading text-gray-900"
            >
              {anyEnabled ? formatCurrency(costs.totalAnnual) : "$0"}
            </motion.p>
          </div>

          <div className="p-5 sm:p-6 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50" />
            <div className="relative">
              <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-1">
                Suggested Donation
              </p>
              <motion.p
                key={costs.totalMonthly}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-2xl sm:text-3xl font-bold font-heading text-emerald-700"
              >
                {anyEnabled ? formatCurrency(costs.totalMonthly) : "$0"}
              </motion.p>
              <p className="text-xs text-emerald-600/60 mt-1">per month</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 text-center leading-relaxed">
        These numbers represent the estimated infrastructure cost to serve your church.
        Any amount helps — donate what feels right for your ministry.
      </p>
    </div>
  );
}
