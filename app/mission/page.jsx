import React from "react";
import Footer from "@/components/Footer";

export default function Mission() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text pt-2">Our Mission</h1>
          <p className="text-lg mb-12 text-gray-700">
            Empowering churches worldwide through technology to enhance worship experiences and foster spiritual growth
          </p>

          <div className="space-y-12">
            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Vision</h2>
              <p className="text-gray-700">
                At WorshipBuddy, we believe that technology should enhance, not hinder,
                the worship experience. Our vision is to create tools that make it easier
                for worship teams to focus on what matters most - leading their congregation
                in meaningful worship.
              </p>
            </div>

            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">What We Do</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  We develop free, open-source applications that help worship teams:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Access and manage their song library efficiently</li>
                  <li>Create and share setlists seamlessly</li>
                  <li>Display lyrics and chords professionally</li>
                  <li>Coordinate team schedules effectively</li>
                </ul>
              </div>
            </div>

            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Accessibility</h3>
                  <p className="text-gray-700">
                    We believe in making our tools available to everyone, regardless of
                    church size or budget.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Community</h3>
                  <p className="text-gray-700">
                    We foster a community of worship leaders who share ideas and
                    contribute to making our tools better.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
                  <p className="text-gray-700">
                    We continuously improve our tools based on user feedback and
                    emerging needs in worship ministry.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in everything we do, from code quality to
                    user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Join Our Journey</h2>
              <p className="mb-6 text-gray-700">
                Whether you&apos;re a worship leader, developer, or supporter, there are many
                ways to get involved in our mission.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:info@worshipbuddy.org"
                  className="btn-primary"
                >
                  Contact Us
                </a>
                <a
                  href="https://github.com/worshipbuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Contribute on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}