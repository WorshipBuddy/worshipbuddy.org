"use client";

import Footer from "@/components/Footer";
import { useState } from "react";

export default function Changelog() {
  const [activeSection, setActiveSection] = useState("worshipbuddy");

  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden section-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-heading text-4xl font-bold mb-8 text-white leading-tight py-1">Changelog</h1>
          <p className="text-lg mb-12 text-blue-100/70">
            Track the latest updates and improvements across all WorshipBuddy apps
          </p>
        </div>
      </section>

      <section className="relative section-light pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Toggle Buttons */}
            <div className="flex flex-wrap gap-4 mb-8 sm:justify-start justify-center">
              <button
                type="button"
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === "worshipbuddy"
                    ? "bg-blue-50 text-brand border border-brand/30"
                    : "text-gray-500 border border-gray-100 hover:text-gray-900 hover:border-gray-200"
                }`}
                onClick={() => setActiveSection("worshipbuddy")}
              >
                WorshipBuddy
              </button>
              <button
                type="button"
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === "presenterbuddy"
                    ? "bg-blue-50 text-brand border border-brand/30"
                    : "text-gray-500 border border-gray-100 hover:text-gray-900 hover:border-gray-200"
                }`}
                onClick={() => setActiveSection("presenterbuddy")}
              >
                PresenterBuddy
              </button>
              <button
                type="button"
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === "churchbuddy"
                    ? "bg-blue-50 text-brand border border-brand/30"
                    : "text-gray-500 border border-gray-100 hover:text-gray-900 hover:border-gray-200"
                }`}
                onClick={() => setActiveSection("churchbuddy")}
              >
                ChurchBuddy
              </button>
              <button
                type="button"
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  activeSection === "upcomingfeatures"
                    ? "bg-blue-50 text-brand border border-brand/30"
                    : "text-gray-500 border border-gray-100 hover:text-gray-900 hover:border-gray-200"
                }`}
                onClick={() => setActiveSection("upcomingfeatures")}
              >
                Upcoming Features
              </button>
            </div>

            <div className="space-y-16">
              {/* WorshipBuddy Section */}
              {activeSection === "worshipbuddy" && (
                <div id="worshipbuddy" className="space-y-8">
                  <h2 className="font-heading text-3xl font-bold mb-6 gradient-text">WorshipBuddy</h2>
                  <div className="flex flex-col gap-6">
                    {/* Timeline/Stacked Card Style for Recent Versions */}
                    {[
                      {
                        version: "2.5",
                        date: "July 2025",
                        isLatest: true,
                        highlights: [
                          {
                            label: "New Features",
                            items: [
                              "Keep Awake: Your screen will now stay on during services so you don't lose your place.",
                              "Improved Search: Search songs in the music player by lyrics, title, or number for faster access.",
                            ],
                          },
                          {
                            label: "Bug Fixes",
                            items: [
                              "The 'Like' button is now visible again in the music player.",
                              "Lyrics are now easier to read and display more consistently while using the music player.",
                              "Fixed a crash that could occur on Android devices when using search in the music player.",
                            ],
                          },
                          {
                            label: "Other Improvements",
                            items: ["Refreshed the splash screen for a smoother app launch experience."],
                          },
                          {
                            label: "Known Issues",
                            items: [
                              "Song filters and sharing features aren't currently working in the Spanish and Australia songbooks — we're working on it!",
                            ],
                          },
                        ],
                      },
                      {
                        version: "2.4",
                        date: "April 2025",
                        highlights: [
                          {
                            label: "Major Updates",
                            items: [
                              "Added support for multiple songbooks: Central & South America (Spanish), and South Pacific (Australia).",
                              "Create sets with songs from multiple songbooks.",
                              "New search feature in Spanish songbook: find English equivalents by typing 'English: Song number'.",
                              "Key-based songbook filtering improvements.",
                              "Bug fixes and performance enhancements.",
                            ],
                          },
                        ],
                      },
                      {
                        version: "2.3",
                        date: "January 2025",
                        highlights: [
                          {
                            label: "New Features",
                            items: [
                              "Share sets via hyperlink.",
                              "Accounts: Save your liked music and songs across devices.",
                              "Personalized settings for a tailored experience.",
                            ],
                          },
                          {
                            label: "Bug Fixes",
                            items: ["General bug fixes and stability improvements."],
                          },
                        ],
                      },
                      {
                        version: "2.2",
                        date: "December 2024",
                        highlights: [
                          {
                            label: "New Features",
                            items: ["Mini music player and lock screen controls.", "Performance and bug fixes."],
                          },
                        ],
                      },
                    ].map((entry, idx) => (
                      <div
                        key={entry.version}
                        className="relative card p-6 sm:p-8 flex flex-col gap-2"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <span className="inline-block bg-blue-50 text-brand border border-brand/20 text-sm font-bold px-3 py-1 rounded-full shadow-sm tracking-wide">
                            v{entry.version}
                          </span>
                          <span className="text-gray-500 text-sm font-medium">{entry.date}</span>
                          {entry.isLatest && (
                            <span className="ml-2 inline-block bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                              Latest
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {entry.highlights.map((hl, i) => (
                            <div key={hl.label}>
                              <span className="block text-base font-semibold text-brand mb-1">{hl.label}</span>
                              <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
                                {hl.items.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {/* Show More Button for Earlier Versions */}
                    <ShowMoreChangelog />
                  </div>
                </div>
              )}

              {/* PresenterBuddy Section */}
              {activeSection === "presenterbuddy" && (
                <div id="presenterbuddy" className="space-y-8">
                  <h2 className="font-heading text-3xl font-bold mb-6 gradient-text">PresenterBuddy</h2>
                  <div className="card p-6 sm:p-8 flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-block bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        Developer Beta
                      </span>
                      <span className="text-gray-500 text-sm font-medium">Started: April 6, 2025</span>
                    </div>
                    <p className="text-base text-gray-500 mb-2">
                      <span className="font-bold text-gray-900">PresenterBuddy</span> is free lyric presentation software for
                      worship services. It lets you project lyrics, scripture, and media with ease, and is designed to work
                      hand-in-hand with the WorshipBuddy app. You can create live sets in WorshipBuddy and present them
                      directly through PresenterBuddy, making your workflow simple and connected.
                      <br />
                      <span className="block mt-2">
                        Currently in developer beta testing. To apply for beta testing or if any developers would like to
                        contribute, please email{" "}
                        <a href="mailto:info@worshipbuddy.org" className="text-brand hover:text-brand/80 underline">
                          info@worshipbuddy.org
                        </a>
                        .
                      </span>
                    </p>
                    <div className="mt-2">
                      <span className="block text-base font-semibold text-brand mb-1">Key Features</span>
                      <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
                        <li>
                          <span className="font-bold text-gray-900">Powerful Editing &amp; Limitless Customization:</span>{" "}
                          Robust editor to alter text font, size, color, add outlines, shadows, and more.
                        </li>
                        <li>
                          <span className="font-bold text-gray-900">On-the-Fly Text Editing:</span> Make live changes to your
                          text during presentations with Edit mode.
                        </li>
                        <li>
                          <span className="font-bold text-gray-900">Create &amp; Show:</span> Arrange slides and layouts for
                          lyrics, presentations, and events. Drag images/videos as backgrounds for dynamic visuals.
                        </li>
                        <li>
                          <span className="font-bold text-gray-900">Templates &amp; Dynamic Layouts:</span> Swiftly modify
                          slide styles with templates and resize/organize display areas as needed.
                        </li>
                        <li>
                          <span className="font-bold text-gray-900">Scripture &amp; Lyric Integration:</span> Instantly create
                          slides from scripture or lyrics—just search and auto-generate slides.
                        </li>
                        <li>
                          <span className="font-bold text-gray-900">WorshipBuddy Live Set Integration:</span> Add live sets from
                          the WorshipBuddy app directly to PresenterBuddy.
                        </li>
                        <li>
                          <span className="font-bold text-gray-900">Plays Well With Others:</span> Import from other presentation
                          platforms and export your content in multiple formats at any time.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* ChurchBuddy Section */}
              {activeSection === "churchbuddy" && (
                <div id="churchbuddy" className="space-y-8">
                  <h2 className="font-heading text-3xl font-bold mb-6 gradient-text">ChurchBuddy</h2>
                  <div className="card p-6 sm:p-8 flex flex-col gap-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-block bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                        Public Beta
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mb-2">
                      <span className="font-bold text-gray-900">ChurchBuddy</span> makes it easy to create, share, and manage
                      schedules for your org or ministries—like music, ushers, or cleaning teams—and for services such as
                      Sunday service or Bible study. Build your organization, set up teams, add services, and schedule people
                      in just a few clicks. ChurchBuddy keeps everyone organized and connected. Now in public beta, available
                      on web and iOS.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6">
                    {/* Timeline/Stacked Card Style for Recent Versions */}
                    {[
                      {
                        version: "Current",
                        date: "July 7, 2025",
                        isLatest: true,
                        highlights: [
                          {
                            label: "Latest Release",
                            items: [
                              "New calendar design.",
                              "Bigger login screen.",
                              "Delete org button.",
                              "Button overlap fix.",
                              "Prevent body scroll.",
                              "New mobile navigation bar.",
                              "Consistent font and design.",
                              "Popup layout fix.",
                            ],
                          },
                        ],
                      },
                      {
                        version: "2025-07-02",
                        date: "July 2, 2025",
                        highlights: [
                          {
                            label: "Bug Fixes & Improvements",
                            items: ["Bug fix: not showing owner properly.", "Add team to existing service."],
                          },
                        ],
                      },
                      {
                        version: "2025-06-28",
                        date: "June 28, 2025",
                        highlights: [
                          {
                            label: "New Features",
                            items: ["Edit org button.", "Added viewer option.", "Added pending to user badge."],
                          },
                        ],
                      },
                      {
                        version: "2025-06-21",
                        date: "June 21, 2025",
                        highlights: [
                          {
                            label: "iOS App & Updates",
                            items: [
                              "iOS app release.",
                              "Added logout route and fixed edit email.",
                              "Added allowed hosts.",
                              "Dashboard: popup to see teams the user is scheduled for.",
                            ],
                          },
                        ],
                      },
                      {
                        version: "2025-06-15",
                        date: "June 15, 2025",
                        highlights: [
                          {
                            label: "Features",
                            items: ["Added search feature.", "Added import people."],
                          },
                        ],
                      },
                      {
                        version: "2025-05-30",
                        date: "May 30, 2025",
                        highlights: [
                          {
                            label: "Redesign & UI",
                            items: ["New redesign, buttons, popups.", "Modern layout and UI."],
                          },
                        ],
                      },
                      {
                        version: "2025-04-20",
                        date: "April 20, 2025",
                        highlights: [
                          {
                            label: "Initial Release",
                            items: ["Initial release."],
                          },
                        ],
                      },
                    ].map((entry, idx) => (
                      <div
                        key={entry.version}
                        className="relative card p-6 sm:p-8 flex flex-col gap-2"
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <span className="inline-block bg-blue-50 text-brand border border-brand/20 text-sm font-bold px-3 py-1 rounded-full shadow-sm tracking-wide">
                            {entry.version === "Current" ? "Latest" : `v${entry.version}`}
                          </span>
                          <span className="text-gray-500 text-sm font-medium">{entry.date}</span>
                          {entry.isLatest && (
                            <span className="ml-2 inline-block bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                              Latest
                            </span>
                          )}
                        </div>
                        <div className="space-y-2">
                          {entry.highlights.map((hl, i) => (
                            <div key={hl.label}>
                              <span className="block text-base font-bold text-brand mb-1">{hl.label}</span>
                              <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
                                {hl.items.map((item, j) => (
                                  <li key={j}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upcoming Features Section */}
              {activeSection === "upcomingfeatures" && (
                <div id="upcomingfeatures">
                  <h2 className="font-heading text-3xl font-bold mb-6 gradient-text">Upcoming Features</h2>
                  <div className="card p-6 sm:p-8">
                    {/* WorshipBuddy Features */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                          WorshipBuddy
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
                        <li>Liked songs button</li>
                        <li>Hide album art option</li>
                        <li>Split screen support</li>
                        <li>Quick scroll for song lists</li>
                        <li>Numeric keyboard for iPads</li>
                        <li>Push notifications</li>
                        <li>Worship Together integration</li>
                        <li>Remove downloaded songs easily</li>
                        <li>Resend OTP during sign-up</li>
                        <li>&quot;Shazam&quot;-like song recognition</li>
                      </ul>
                    </div>
                    {/* PresenterBuddy Features */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                          PresenterBuddy
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
                        <li>Integration with WorshipBuddy and live sets</li>
                        <li>Ability to work offline</li>
                        <li>Public beta release (target: end of year)</li>
                      </ul>
                    </div>
                    {/* ChurchBuddy Features */}
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="inline-block bg-blue-50 text-brand text-xs font-bold px-2 py-1 rounded-full shadow-sm uppercase tracking-wider">
                          ChurchBuddy
                        </span>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
                        <li>Add assigned dates to your calendar and set alerts</li>
                        <li>Android native app</li>
                        <li>Org templates for popular ministries (music, ushers, PA, etc.)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function ShowMoreChangelog() {
  const [show, setShow] = useState(false);
  if (!show) {
    return (
      <button
        type="button"
        className="block mx-auto mt-2 px-6 py-2 rounded-full text-sm font-medium text-gray-500 border border-gray-100 hover:text-gray-900 hover:border-gray-200 transition-all duration-200"
        onClick={() => setShow(true)}
      >
        Show Earlier Versions
      </button>
    );
  }
  return (
    <div className="mt-4">
      <div className="card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-full shadow-sm tracking-wide">
            v2.0
          </span>
          <span className="text-gray-500 text-sm font-medium">October 2024</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
          <li>Complete redesign with modern UI.</li>
          <li>Filter songs by themes and create playlists.</li>
          <li>Import songs from outside songbooks.</li>
          <li>Faster music loading and improved help resources.</li>
          <li>Bug fixes and performance improvements.</li>
        </ul>
      </div>
      <div className="card p-6 sm:p-8 mt-4">
        <div className="flex items-center gap-3 mb-1">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-bold px-3 py-1 rounded-full shadow-sm tracking-wide">
            v1.x
          </span>
          <span className="text-gray-500 text-sm font-medium">2023 - 2024</span>
        </div>
        <ul className="list-disc list-inside space-y-1 text-gray-500 ml-4">
          <li>Initial release and rebranding to WorshipBuddy.</li>
          <li>Added music library, set saving, and chord transposition.</li>
          <li>Go Live! feature for real-time set sharing.</li>
          <li>Major bug fixes and performance improvements.</li>
          <li>Enhanced music player, team features, and convention song updates.</li>
        </ul>
      </div>
    </div>
  );
}
