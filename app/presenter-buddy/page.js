"use client";

import { motion } from "framer-motion";
import { FaApple, FaLinux, FaCheck, FaTimes, FaDesktop, FaBroadcastTower, FaGamepad, FaMusic, FaFileImport, FaMicrophone, FaBible, FaBullhorn, FaSyncAlt, FaEye } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Footer from "@/components/Footer";
import { PresenterLiteDemo, PresenterStudioDemo } from "@/components/demos/PresenterBuddyDemo";

const liteFeatures = [
  { icon: FaMusic, title: "Song Lyrics", desc: "Browse and present songs from the WorshipBuddy songbook library" },
  { icon: FaDesktop, title: "Dual Display", desc: "Controller on your laptop, lyrics projected on your second screen" },
  { icon: FaBible, title: "Bible Verses", desc: "Display scripture passages with multiple Bible versions" },
  { icon: FaBullhorn, title: "Announcements", desc: "Create and manage announcement slides with multi-slide support" },
  { icon: FaSyncAlt, title: "Auto-Scroll", desc: "Configurable auto-scroll speed for hands-free presentations" },
  { icon: FaEye, title: "Live Preview", desc: "See exactly what your audience sees in real-time" },
];

const studioFeatures = [
  { icon: FaBroadcastTower, title: "NDI Output", desc: "Professional video output for streaming and broadcast workflows" },
  { icon: FaDesktop, title: "Stage Display", desc: "Dedicated stage monitor view for worship leaders and musicians" },
  { icon: FaGamepad, title: "Remote Control", desc: "Control presentations from any device on the network via Socket.io" },
  { icon: FaFileImport, title: "Multi-Format Import", desc: "Import from ProPresenter, EasyWorship, MediaShout, OpenLP, PowerPoint, and more" },
  { icon: FaMusic, title: "Audio & Playlists", desc: "Built-in audio channels, playlists, metronome, and audio visualizer" },
  { icon: FaMicrophone, title: "MIDI & OSC", desc: "Professional control protocols for integration with hardware and software" },
];

const comparisonRows = [
  { feature: "Song Lyrics Display", lite: true, studio: true },
  { feature: "Bible Verses", lite: true, studio: true },
  { feature: "Announcements", lite: true, studio: true },
  { feature: "Dual Display Output", lite: true, studio: true },
  { feature: "Auto-Scroll", lite: true, studio: true },
  { feature: "Live Preview", lite: true, studio: true },
  { feature: "Background Images & Video", lite: true, studio: true },
  { feature: "NDI Video Output", lite: false, studio: true },
  { feature: "Stage Display", lite: false, studio: true },
  { feature: "Remote Control", lite: false, studio: true },
  { feature: "MIDI / OSC Control", lite: false, studio: true },
  { feature: "Multi-Format Import", lite: false, studio: true },
  { feature: "Audio Channels & Playlists", lite: false, studio: true },
  { feature: "Recording & Streaming", lite: false, studio: true },
  { feature: "Drawing Tools", lite: false, studio: true },
  { feature: "Google Drive Sync", lite: false, studio: true },
];

// PB colors
const PB = "#1E6B8A";
const PB_LIGHT = "#D0E9F2";
const PB_DARK = "#134F67";

export default function PresenterBuddy() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 section-pb">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(30,107,138,0.25)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Present with <span className="text-[#D0E9F2]">confidence.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#D0E9F2]/70 mb-10 max-w-2xl mx-auto">
              From a simple lyrics display to a full production suite — PresenterBuddy has the right tool for every church, no matter the size.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="#lite" className="btn-white text-center"><span>PresenterBuddy</span></a>
              <a href="#studio" className="btn-white text-center"><span>PresenterBuddy Studio</span></a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-[#D0E9F2]/60">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />No Ads</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />No In-App Purchases</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />Free Forever</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PresenterBuddy Lite */}
      <section id="lite" className="section-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: PB_LIGHT, color: PB }}>
              Free &amp; Simple
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">PresenterBuddy</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Everything you need to display lyrics, Bible verses, and announcements on a second screen. Clean, fast, and easy to use.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {liteFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: PB_LIGHT, color: PB }}>
                    <f.icon />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Interactive Lite Demo */}
          <AnimatedSection className="mb-16">
            <p className="text-center text-sm font-medium text-gray-500 mb-4">
              Interactive demo — click songs, browse lyrics, and see real-time projection
            </p>
            <PresenterLiteDemo />
          </AnimatedSection>

          <AnimatedSection className="text-center">
            <p className="text-sm text-gray-400 mb-4">Available for macOS and Windows</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://github.com/WorshipBuddy/PresenterBuddy-Downloads/releases/download/lite-latest/PresenterBuddy-Mac-Installer.dmg" target="_blank" rel="noopener noreferrer" className="btn-primary text-center gap-2" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'PresenterBuddy', version: 'Lite', platform: 'macOS' })}>
                <FaApple className="text-lg" /><span>Mac</span>
              </a>
              <a href="https://github.com/WorshipBuddy/PresenterBuddy-Downloads/releases/download/lite-latest/PresenterBuddy-Windows-Setup.exe" target="_blank" rel="noopener noreferrer" className="btn-primary text-center gap-2" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'PresenterBuddy', version: 'Lite', platform: 'Windows' })}>
                <FaWindows className="text-lg" /><span>Windows</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* PresenterBuddy Studio */}
      <section id="studio" className="section-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6" style={{ background: PB_LIGHT, color: PB_DARK }}>
              Advanced &amp; Comprehensive
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              PresenterBuddy <span style={{ color: PB }}>Studio</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              For teams that need more. A full production suite with NDI output, stage display, remote control, and professional integrations.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {studioFeatures.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <div className="card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: PB_LIGHT, color: PB_DARK }}>
                    <f.icon />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Interactive Studio Demo */}
          <AnimatedSection className="mb-16">
            <p className="text-center text-sm font-medium text-gray-500 mb-4">
              Interactive demo — slide grid, song library, and presentation groups
            </p>
            <PresenterStudioDemo />
          </AnimatedSection>

          <AnimatedSection>
            <div className="card p-8 mb-16">
              <h3 className="text-lg font-semibold font-heading text-gray-900 mb-4">Supported Import Formats</h3>
              <div className="flex flex-wrap gap-2">
                {["ProPresenter", "EasyWorship", "MediaShout", "OpenLP", "OpenSong", "SongBeamer", "Quelea", "SoftProjector", "VideoPsalm", "ChordPro", "PowerPoint", "PDF", "CSV"].map((format) => (
                  <span key={format} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: PB_LIGHT, color: PB_DARK, border: `1px solid ${PB}33` }}>
                    {format}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center">
            <p className="text-sm text-gray-400 mb-4">Available for macOS and Windows</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://github.com/WorshipBuddy/PresenterBuddy-Downloads/releases/download/studio-latest/PresenterBuddy-Studio-arm64.dmg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-150 hover:-translate-y-0.5" style={{ background: PB }} onClick={() => window.gtag?.('event', 'download_click', { app_name: 'PresenterBuddy', version: 'Studio', platform: 'macOS_AppleSilicon' })}>
                <FaApple className="text-lg" />Apple Silicon Mac
              </a>
              <a href="https://github.com/WorshipBuddy/PresenterBuddy-Downloads/releases/download/studio-latest/PresenterBuddy-Studio-x64.dmg" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-150 hover:-translate-y-0.5" style={{ background: PB }} onClick={() => window.gtag?.('event', 'download_click', { app_name: 'PresenterBuddy', version: 'Studio', platform: 'macOS_Intel' })}>
                <FaApple className="text-lg" />Intel Mac
              </a>
              <a href="https://github.com/WorshipBuddy/PresenterBuddy-Downloads/releases/download/studio-latest/PresenterBuddy-Studio-x64.exe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-150 hover:-translate-y-0.5" style={{ background: PB }} onClick={() => window.gtag?.('event', 'download_click', { app_name: 'PresenterBuddy', version: 'Studio', platform: 'Windows' })}>
                <FaWindows className="text-lg" />Windows
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-white py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Compare <span style={{ color: PB }}>PresenterBuddy editions</span>
            </h2>
            <p className="text-gray-500 text-lg">Both editions are free. Choose the one that fits your needs.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Feature</th>
                      <th className="text-center text-sm font-semibold px-6 py-4 w-44 whitespace-nowrap" style={{ color: PB }}>PresenterBuddy</th>
                      <th className="text-center text-sm font-semibold px-6 py-4 w-44 whitespace-nowrap" style={{ color: PB_DARK }}>PresenterBuddy Studio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <motion.tr key={row.feature} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="text-sm text-gray-600 px-6 py-3">{row.feature}</td>
                        <td className="text-center px-6 py-3">
                          {row.lite ? <FaCheck className="mx-auto" style={{ color: PB }} /> : <FaTimes className="text-gray-300 mx-auto" />}
                        </td>
                        <td className="text-center px-6 py-3">
                          {row.studio ? <FaCheck className="mx-auto" style={{ color: PB_DARK }} /> : <FaTimes className="text-gray-300 mx-auto" />}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documentation CTA */}
      <section className="section-pb py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h3 className="text-2xl font-bold font-heading text-white mb-4">Need help getting started?</h3>
            <p className="text-[#D0E9F2]/70 mb-6">Check out our comprehensive documentation for setup guides, features, and tips.</p>
            <a href="https://guide.worshipbuddy.org/introduction" target="_blank" rel="noopener noreferrer" className="btn-white inline-flex items-center gap-2">
              <span>View Documentation ↗</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
