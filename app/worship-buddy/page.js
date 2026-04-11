"use client";

import { motion } from "framer-motion";
import {
  FaApple, FaGooglePlay, FaMusic, FaKey, FaClipboardList,
  FaPlusCircle, FaShareAlt, FaGlobe, FaLock, FaCog,
} from "react-icons/fa";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Footer from "@/components/Footer";
import WorshipBuddyDemo from "@/components/demos/WorshipBuddyDemo";

const features = [
  { icon: FaPlusCircle, title: "Build Your Library", description: "Add your church's own original songs, purchased music, or arrangements your team uses. Your library is uniquely yours." },
  { icon: FaCog, title: "Admin Portal", description: "Manage your entire music catalog from a centralized admin portal. Add songs, edit lyrics, organize collections, and control access for your team." },
  { icon: FaGlobe, title: "Multi-Language Versions", description: "Create multiple versions of the same song in different languages or arrangements. Perfect for multilingual congregations." },
  { icon: FaKey, title: "Instant Transposition", description: "Transpose any song to any key with a single tap. Chords update in real-time across the entire song — no manual rewriting." },
  { icon: FaClipboardList, title: "Set Management", description: "Build worship sets for any service. Drag, reorder, and share sets with your team so everyone's prepared before they walk in." },
  { icon: FaShareAlt, title: "Team Access", description: "Your whole worship team gets access to your church's library. Everyone sees the same songs, same keys, same sets." },
  { icon: FaMusic, title: "Lyrics & Chords", description: "Store complete lyrics with chord notations. Customize song structures, add notes, and keep every detail your musicians need." },
  { icon: FaLock, title: "Your Music, Your Control", description: "Whether it's 10 songs or 500 — your library belongs to your church. Private, secure, and always accessible." },
];

export default function WorshipBuddyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 section-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Your church&apos;s music,{" "}
              <span className="text-blue-300">all in one place.</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto">
              WorshipBuddy gives your church a home for all its music — original songs,
              purchased music, and every arrangement your team needs. Manage it all through
              a simple admin portal and put it in every musician&apos;s hands.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="https://apps.apple.com/us/app/worshipbuddy/id6754536842" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2" data-buddy-mood="happy" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'WorshipBuddy', platform: 'iOS' })}>
                <FaApple className="text-xl" />
                <span>Download iOS App</span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.Worshipbuddy.Songbook" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2" data-buddy-mood="happy" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'WorshipBuddy', platform: 'Android' })}>
                <FaGooglePlay className="text-lg" />
                <span>Download Android App</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-blue-100/60">
              <span className="flex items-center gap-2" data-buddy-mood="startled"><span className="w-2 h-2 rounded-full bg-green-400" />No Ads</span>
              <span className="flex items-center gap-2" data-buddy-mood="startled"><span className="w-2 h-2 rounded-full bg-green-400" />No In-App Purchases</span>
              <span className="flex items-center gap-2" data-buddy-mood="startled"><span className="w-2 h-2 rounded-full bg-green-400" />Free Forever</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="section-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4" data-buddy-mood="curious">
              See it in <span className="gradient-text">action</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Browse songs, tap into lyrics with chords, and transpose to any key — just like the real app.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div data-buddy-target>
              <WorshipBuddyDemo />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">How it <span className="gradient-text">works</span></h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Three steps to get your entire worship team on the same page.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Build Your Library", desc: "Use the admin portal to add your church's songs — originals, purchased music, hymns, or anything your team sings. Add lyrics, chords, and multiple language versions." },
              { step: "02", title: "Organize & Manage", desc: "Create collections, tag songs, and build worship sets for upcoming services. The admin portal gives you full control over your catalog." },
              { step: "03", title: "Share With Your Team", desc: "Your musicians open the app and instantly see your church's library, this week's sets, and every song in the right key. No setup on their end." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <div className="card-hover p-8 h-full text-center">
                  <div className="text-5xl font-bold gradient-text mb-4 opacity-40">{item.step}</div>
                  <h3 className="text-xl font-semibold font-heading text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Everything you need to <span className="gradient-text">manage your music</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Built by worship leaders who got tired of scattered chord charts and last-minute texts.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.08}>
                <div className="card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
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

      {/* Download CTA */}
      <section className="relative py-24 overflow-hidden section-navy">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
              Give your team a better way to <span className="text-blue-300">prepare for worship</span>
            </h2>
            <p className="text-blue-100/70 text-lg mb-8 max-w-2xl mx-auto">Available on iOS and Android. Free forever, no ads, no in-app purchases.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/us/app/worshipbuddy/id6754536842" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2" data-buddy-mood="happy" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'WorshipBuddy', platform: 'iOS' })}>
                <FaApple className="text-xl" /><span>App Store</span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.Worshipbuddy.Songbook" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2" data-buddy-mood="happy" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'WorshipBuddy', platform: 'Android' })}>
                <FaGooglePlay className="text-lg" /><span>Google Play</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
