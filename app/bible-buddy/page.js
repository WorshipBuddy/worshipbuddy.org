"use client";

import Image from "next/image";
import {
  FaApple, FaGooglePlay, FaHeadphones, FaSearch,
  FaListUl, FaBookmark, FaChartLine, FaUsers, FaWifi,
  FaBroadcastTower, FaMusic, FaClosedCaptioning, FaChurch, FaFingerprint,
} from "react-icons/fa";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Footer from "@/components/Footer";

const BB = "#A6492E";
const BB_LIGHT = "#F4E4DC";

const features = [
  { icon: FaWifi, title: "Offline-First Reading", description: "The full Bible in NIV, KJV, ESV, and NLT lives right on your phone — read anywhere, no signal required. Extra versions download in seconds." },
  { icon: FaHeadphones, title: "Lifelike Audio Bible", description: "Listen to Scripture read in a warm, human-quality voice — on-device narration with natural pauses and expression. No robotic ringing, just the Word." },
  { icon: FaListUl, title: "Reading Plans & Streaks", description: "Follow guided plans, track daily progress, and keep your streak alive. Continue, restart, or start over — your place is always saved." },
  { icon: FaSearch, title: "Instant Scripture Search", description: "Full-text search across your Bible plus jump-to-reference — find any verse or phrase in an instant, fully offline." },
  { icon: FaBookmark, title: "Bookmarks & Highlights", description: "Save the verses that speak to you, organize them, and pick up right where you left off across every device." },
  { icon: FaChartLine, title: "Insights & Year in Review", description: "See chapters read, a calendar heatmap of your habit, and a personal 'year in review' that celebrates your journey in the Word." },
  { icon: FaUsers, title: "Friends & Community", description: "Connect with friends from your church, share what you're reading, and encourage each other to stay in the Word." },
  { icon: FaBroadcastTower, title: "Live 'Read in Church' Sync", description: "When your church presents a passage on screen, it appears on every attendee's phone — in their own version — so no one loses their place." },
];

const integrations = [
  {
    icon: FaBroadcastTower,
    name: "PresenterBuddy",
    color: "#1E6B8A",
    title: "Read in Church, live",
    description:
      "When PresenterBuddy puts a verse on the big screen, BibleBuddy pushes it to the congregation's phones in real time — everyone follows along in their preferred translation.",
  },
  {
    icon: FaMusic,
    name: "WorshipBuddy",
    color: "#0C245E",
    title: "Songs that quote this passage",
    description:
      "See which worship songs reference the verses you're reading, and let a reading plan pull in the week's worship set — Scripture and song, connected.",
  },
  {
    icon: FaClosedCaptioning,
    name: "CaptionBuddy",
    color: "#7A3320",
    title: "Sunday sermon recap",
    description:
      "CaptionBuddy transcribes the sermon, auto-detects every Scripture reference, and saves the notes and passages into BibleBuddy as a shareable recap.",
  },
  {
    icon: FaChurch,
    name: "ChurchBuddy",
    color: "#0B7261",
    title: "Group plans & leaderboards",
    description:
      "Attach reading plans to a sermon series or small group. Group progress and gentle leaderboards keep your whole community moving through the Word together.",
  },
];

const StoreButtons = () => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <span className="btn btn-lg gap-2 bg-white/10 text-white border border-white/20 cursor-default select-none">
        <FaApple className="text-xl" /><span>App Store</span>
      </span>
      <span className="btn btn-lg gap-2 bg-white/10 text-white border border-white/20 cursor-default select-none">
        <FaGooglePlay className="text-lg" /><span>Google Play</span>
      </span>
    </div>
    <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.65)" }}>
      Launching soon on iOS &amp; Android
    </span>
  </div>
);

export default function BibleBuddyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 section-bb">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(244,228,220,0.18)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-8">
              <div className="rounded-[22px] overflow-hidden shadow-2xl ring-1 ring-white/20">
                <Image src="/bible-buddy-icon.png" alt="BibleBuddy app icon" width={96} height={96} className="w-24 h-24 object-cover" priority />
              </div>
            </div>

            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-widest text-white bg-white/10 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              New in the WorshipBuddy Suite
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              The Word, <span style={{ color: BB_LIGHT }}>everywhere you are.</span>
            </h1>
            <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              BibleBuddy is a beautiful, offline-first Bible reader with guided reading
              plans, lifelike audio narration, and live &ldquo;Read in Church&rdquo; sync — so your
              whole congregation follows along in their own version. Free forever.
            </p>

            <StoreButtons />

            <div className="flex flex-wrap gap-4 justify-center text-sm mt-10" style={{ color: "rgba(255,255,255,0.65)" }}>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-300" />No Ads</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-300" />No In-App Purchases</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-300" />Works Offline</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-300" />Free Forever</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block" style={{ color: BB }}>
              What&apos;s inside
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Everything you need to <span style={{ color: BB }}>stay in the Word</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Built for daily reading, deep study, and worship — thoughtfully designed and free forever.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.06}>
                <div className="card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: BB_LIGHT, color: BB }}>
                    <feature.icon />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Suite integrations — the moat */}
      <section className="section-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="font-mono text-[11px] font-medium tracking-widest uppercase mb-3 block" style={{ color: BB }}>
              Better together
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Connected to your whole <span style={{ color: BB }}>Sunday</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              BibleBuddy isn&apos;t just another Bible app — it&apos;s wired into the tools your
              church already uses. One login ties it all together.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {integrations.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <div className="card-hover p-8 h-full flex gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${item.color}14`, color: item.color }}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-[11px] uppercase tracking-wider" style={{ color: item.color }}>{item.name}</span>
                    </div>
                    <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-10 flex items-center justify-center gap-3 text-center">
              <FaFingerprint style={{ color: BB }} />
              <p className="font-sans text-[14px] text-gray-500">
                <span className="font-semibold text-gray-900">One WorshipBuddy account</span> — the same login, church, and friends across every app.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works */}
      <section className="section-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Start reading in <span style={{ color: BB }}>seconds</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">No account required to read — sign in only when you want to sync and connect.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Open & read", desc: "Download BibleBuddy and start reading immediately — the Bible is already on your device, fully offline." },
              { step: "02", title: "Pick a plan", desc: "Choose a reading plan, set a daily reminder, and let BibleBuddy guide you day by day while tracking your streak." },
              { step: "03", title: "Connect your church", desc: "Sign in with your WorshipBuddy account to sync progress, join group plans, and follow along live on Sunday." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="card-hover p-8 h-full text-center">
                  <div className="text-5xl font-bold mb-4 opacity-30" style={{ color: BB }}>{item.step}</div>
                  <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative py-24 overflow-hidden section-bb">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(244,228,220,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <div className="rounded-[18px] overflow-hidden shadow-xl ring-1 ring-white/20">
                <Image src="/bible-buddy-icon.png" alt="BibleBuddy" width={72} height={72} className="w-[72px] h-[72px] object-cover" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
              Bring your church <span style={{ color: BB_LIGHT }}>into the Word together</span>
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              BibleBuddy is coming soon to iOS and Android. Free forever — no ads, no in-app purchases.
            </p>
            <StoreButtons />
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
