"use client";

import { motion } from "framer-motion";
import { FaUserCircle, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Footer from "@/components/Footer";

const teamSections = [
  {
    label: "Operations",
    members: [
      { name: "Jobin Thomas", role: "Founder", image: "/images/jobin.jpg" },
      { name: "Ajoy Thomas", role: "General Counsel", image: "/images/ajoy.jpg" },
      { name: "Neha Thomas", role: "Director of Marketing", image: "/images/neha.jpeg" },
    ],
  },
  {
    label: "Product",
    members: [
      { name: "Michael George", role: "Director of Product", image: "/images/mikey.jpeg" },
      { name: "Jibin Modayil", role: "Product Owner", image: "/images/jibin.png" },
    ],
  },
  {
    label: "Engineering",
    members: [
      { name: "Jason John", role: "Director of Engineering", image: "/images/jason.JPEG" },
      { name: "Joel Thomas", role: "Software Engineer", image: "/images/jt.png" },
      { name: "Ansun Sujoe", role: "Software Engineer", image: "/images/ansun.png" },
      { name: "Joel Prakash", role: "Frontend Developer", image: "/images/jp.jpg" },
      { name: "Joel Roy", role: "Software Engineer Intern", image: "/images/jr.jpg" },
    ],
  },
];

const timeline = [
  { year: "2023", title: "The Beginning", desc: "WorshipBuddy was born out of a simple need — give worship teams a better way to manage their songs and setlists without the chaos of scattered chord charts and last-minute texts." },
  { year: "2024", title: "Growing Community", desc: "Hundreds of churches adopted WorshipBuddy. We built out the infrastructure to scale globally — new server regions, a robust admin portal, and the foundation for everything to come." },
  { year: "2025", title: "Expanding the Platform", desc: "Launched ChurchBuddy for ministry scheduling and team coordination, and released PresenterBuddy Studio — a full production suite with NDI, stage display, and remote control." },
  { year: "2026", title: "Going Global", desc: "Launched PresenterBuddy for every church that needs clean, simple lyric presentation. Expanded worldwide with multi-language support, regional servers, and a growing community across five continents." },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="section-navy relative min-h-[50vh] flex items-center overflow-hidden pt-20">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <p className="text-[#DCE4F8] font-semibold text-sm uppercase tracking-wider mb-4">About Us</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Built by worship leaders,{" "}
              <span className="text-[#DCE4F8]">for worship leaders</span>
            </h1>
            <p className="text-lg text-[#DCE4F8]/70 max-w-2xl mx-auto">
              We understand the challenges of organizing and presenting songs during services.
              Our mission is to make worship leading easier and more enjoyable.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission */}
      <section className="section-light py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="card p-8 sm:p-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  At WorshipBuddy, our mission is to empower churches worldwide through the
                  transformative potential of technology, enriching their worship experiences,
                  fostering community engagement, and facilitating spiritual growth.
                </p>
                <p>
                  We recognize that in an increasingly digital world, the role of technology
                  in worship is pivotal. Our nonprofit is dedicated to bridging the gap between
                  faith and innovation, ensuring that churches of all sizes and backgrounds
                  have access to cutting-edge tools and resources.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                {[
                  { title: "Innovation for Worship", desc: "Leveraging the latest advancements to enhance every aspect of the worship experience." },
                  { title: "Community Building", desc: "Enabling churches to connect with their congregations through meaningful digital tools." },
                  { title: "Spiritual Growth", desc: "Offering resources that facilitate Bible study, prayer, and deeper faith." },
                ].map((item, i) => (
                  <div key={item.title} className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <h3 className="font-heading text-sm font-semibold text-brand mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 sm:-translate-x-px" />

            {timeline.map((item, i) => (
              <AnimatedSection
                key={item.year}
                delay={i * 0.1}
                direction={i % 2 === 0 ? "right" : "left"}
                className={`relative flex items-start gap-6 mb-12 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 hidden sm:block ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <div className="card p-6 inline-block">
                    <p className="text-brand font-bold text-sm mb-1">{item.year}</p>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 w-3 h-3 rounded-full bg-brand mt-2 shrink-0 ring-4 ring-white sm:mx-0 ml-[10px]" />

                <div className="flex-1 sm:hidden">
                  <div className="card p-5">
                    <p className="text-brand font-bold text-sm mb-1">{item.year}</p>
                    <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>

                <div className="flex-1 hidden sm:block" />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-light py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A passionate group of worship leaders, engineers, and creatives building tools for the Church.
            </p>
          </AnimatedSection>

          <div className="space-y-14">
            {teamSections.map((section) => (
              <div key={section.label}>
                <AnimatedSection>
                  <p className="text-xs font-bold text-brand uppercase tracking-widest mb-6 text-center">{section.label}</p>
                </AnimatedSection>
                <div className={`grid gap-5 sm:gap-6 mx-auto ${
                  section.members.length <= 2
                    ? "grid-cols-2 max-w-md"
                    : section.members.length === 3
                    ? "grid-cols-2 sm:grid-cols-3 max-w-2xl"
                    : section.members.length === 4
                    ? "grid-cols-2 sm:grid-cols-4 max-w-3xl"
                    : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 max-w-4xl"
                }`}>
                  {section.members.map((member, i) => (
                    <AnimatedSection key={member.name} delay={i * 0.06}>
                      <motion.div
                        whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(13, 36, 94, 0.12)" }}
                        className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm transition-all duration-300 group"
                      >
                        <div className="w-20 h-20 rounded-full mx-auto mb-3 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 ring-2 ring-white shadow-md group-hover:ring-brand/20 transition-all duration-300">
                          {member.image ? (
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <FaUserCircle className="w-12 h-12 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <h3 className="font-heading text-sm font-semibold text-gray-900 mb-0.5">{member.name}</h3>
                        <p className="text-xs text-brand/70 font-medium">{member.role}</p>
                      </motion.div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
