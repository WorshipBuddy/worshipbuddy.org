"use client";

import { FaApple, FaGooglePlay, FaDesktop, FaUsers, FaCalendarAlt, FaClipboardCheck, FaFileExcel, FaFileExport } from "react-icons/fa";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Footer from "@/components/Footer";
import ChurchBuddyDemo from "@/components/demos/ChurchBuddyDemo";
import TiltCard from "@/components/ui/tilt-card";

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
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 section-cb">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(11,114,97,0.25)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <AnimatedSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Church management,{" "}
              <span className="text-[#CCE9E4]">simplified.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#CCE9E4]/70 mb-10 max-w-2xl mx-auto">
              Coordinate schedules, manage ministries and teams, and ensure smooth
              service transitions. Keep everyone organized and informed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a href="https://church.worshipbuddy.org/login" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'ChurchBuddy', platform: 'Web' })}>
                <FaDesktop className="text-lg" /><span>Open Web App</span>
              </a>
              <a href="https://apps.apple.com/us/app/churchbuddy-app/id6747605543" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'ChurchBuddy', platform: 'iOS' })}>
                <FaApple className="text-lg" /><span>Download iOS App</span>
              </a>
              <a href="https://play.google.com/store/apps/details?id=org.worshipbuddycompany.ScheduleBuddyApp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="btn-white text-center gap-2" onClick={() => window.gtag?.('event', 'download_click', { app_name: 'ChurchBuddy', platform: 'Android' })}>
                <FaGooglePlay className="text-lg" /><span>Download Android App</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-[#CCE9E4]/60">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />No Ads</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />No In-App Purchases</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />Free Forever</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="section-light py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              See it in <span style={{ color: "#0B7261" }}>action</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              This is what your team sees — a real calendar with services, assignments, and confirmations.
            </p>
          </AnimatedSection>
          <TiltCard fitContent borderRadius="2.5rem">
            <ChurchBuddyDemo />
          </TiltCard>
          <p className="text-center text-xs text-[#94a3b8] mt-4">
            Tap the tabs to explore — accept assignments, view services, manage people & more
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-gray-900 mb-4">
              Keep your church <span style={{ color: "#0B7261" }}>organized</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">From ministry teams to service schedules, ChurchBuddy handles it all.</p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                <div className="card-hover p-6 h-full">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: "#CCE9E4", color: "#0B7261" }}>
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
      <section className="relative py-24 overflow-hidden section-cb">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
              Get started with ChurchBuddy <span className="text-[#CCE9E4]">today</span>
            </h2>
            <p className="text-[#CCE9E4]/70 text-lg mb-8 max-w-2xl mx-auto">Free for every church. Available on the web, iOS, and Android.</p>
            <a href="https://church.worshipbuddy.org/login" target="_blank" rel="noopener noreferrer" className="btn-white inline-flex items-center gap-2">
              <span>Launch ChurchBuddy</span>
            </a>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
