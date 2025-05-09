import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="page-container">
        <div className="page-header">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-blue">About WorshipBuddy</h1>
          <p className="page-subtitle">
            Learn more about our mission and the team behind WorshipBuddy
          </p>
        </div>

        <div className="space-y-12">
          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-blue">Our Story</h2>
            <p className="mb-4 text-gray-700">
              WorshipBuddy was born out of a need for a simple, efficient way to manage worship songs and setlists. 
              As worship leaders ourselves, we understand the challenges of organizing and presenting songs during services.
            </p>
            <p className="text-gray-700">
              Our goal is to make worship leading easier and more enjoyable, allowing you to focus on what matters most - 
              leading your congregation in worship.
            </p>
          </section>

          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-blue">Our Mission</h2>
            <p className="mb-4 text-gray-700">
              We're committed to providing worship leaders with the tools they need to create meaningful worship experiences. 
              WorshipBuddy is designed to be intuitive, powerful, and completely free.
            </p>
            <p className="text-gray-700">
              We believe that technology should enhance, not hinder, the worship experience. That's why we've created a tool 
              that's both powerful and easy to use.
            </p>
          </section>

          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-primary-blue">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Jobin Thomas</h3>
                <p className="text-gray-600">Founder</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Ajoy Thomas</h3>
                <p className="text-gray-600">Creative Director</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Neha Thomas</h3>
                <p className="text-gray-600">Director of Marketing</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Jason John</h3>
                <p className="text-gray-600">Software Engineering Lead</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Michael George</h3>
                <p className="text-gray-600">Head of Product</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Ansun Sujoe</h3>
                <p className="text-gray-600">Software Engineer</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Joel Prakash</h3>
                <p className="text-gray-600">Frontend Developer</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Timothy Mathew</h3>
                <p className="text-gray-600">Software Engineer Intern</p>
              </div>
              <div className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 rounded-full bg-primary-blue-light flex items-center justify-center mb-4 group-hover:ring-4 group-hover:ring-primary-blue/20 transition-all duration-300">
                  <FaUserCircle className="w-24 h-24 text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900">Joel Roy</h3>
                <p className="text-gray-600">Software Engineer Intern</p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary-blue">Join Our Community</h2>
            <p className="mb-4 text-gray-700">
              WorshipBuddy is more than just an app - it's a community of worship leaders helping each other grow and improve. 
              We welcome your feedback and suggestions to make WorshipBuddy even better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://github.com/worshipbuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                GitHub
              </a>
              <a
                href="https://discord.gg/worshipbuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                Discord
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 