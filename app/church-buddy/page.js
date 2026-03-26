"use client";

import { FaApple, FaGooglePlay, FaDesktop, FaUsers, FaCalendarAlt, FaClipboardCheck, FaFileExcel, FaFileExport } from "react-icons/fa";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Footer from "@/components/Footer";
import ChurchBuddyDemo from "@/components/demos/ChurchBuddyDemo";

const features = [
  { icon: FaUsers, title: "Ministry Management", desc: "Organize multiple ministries — Musicians, Ushers, PA, and more — all in one place." },
  { icon: FaCalendarAlt, title: "Service Scheduling", desc: "Create and schedule services like Sunday Worship, Bible Study, and special events." },
  { icon: FaClipboardCheck, title: "Role Assignment", desc: "Assign team members to specific roles and services. Everyone knows where they need to be." },
  { icon: FaFileExcel, title: "Excel Import", desc: "Import your existing people data via Excel spreadsheets — no manual re-entry needed." },
  { icon: FaFileExport, title: "Export Schedules", desc: "Export schedules for printing, sharing, or archiving. Keep records organized." },
  { icon: FaDesktop, title: "Web & Mobile", desc: "Access ChurchBuddy from any browser or download the mobile app for on-the-go management." },
];

export default function ChurchBuddy() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 section-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.15)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <p className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-4">Church Scheduling</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Scheduling that{" "}
              <span className="text-purple-300">actually works</span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100/70 mb-8 max-w-2xl mx-auto">
              Coordinate schedules, manage ministries and teams, and ensure smooth
              service transitions. Keep everyone organized and informed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://church.worshipbuddy.org" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2">
                <FaDesktop className="text-lg" /><span>Try ChurchBuddy</span>
              </a>
              <a href="https://apps.apple.com/us/app/churchbuddy-app/id6747605543" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 text-center">
                <FaApple className="text-lg" />iOS App
              </a>
              <a href="https://play.google.com/store/apps/details?id=org.worshipbuddycompany.ScheduleBuddyApp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 text-center">
                <FaGooglePlay className="text-lg" />Android App
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="section-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              See it in <span className="gradient-text">action</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              This is what your team sees — a real calendar with services, assignments, and confirmations.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ChurchBuddyDemo />
          </AnimatedSection>
        </div>
      </section>

      {/* Features */}
      <section className="section-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Keep your church <span className="gradient-text">organized</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From ministry teams to service schedules, ChurchBuddy handles it all.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                    <feature.icon />
                  </div>
                  <h3 className="text-lg font-semibold font-heading text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden section-navy">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
              Get started with ChurchBuddy <span className="text-purple-300">today</span>
            </h2>
            <p className="text-blue-100/70 text-lg mb-8 max-w-2xl mx-auto">Free for every church. Available on the web, iOS, and Android.</p>
            <a href="https://church.worshipbuddy.org" target="_blank" rel="noopener noreferrer" className="btn-white inline-flex items-center gap-2">
              <span>Launch ChurchBuddy</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
