import Link from "next/link";
import { FaUserCircle, FaGithub, FaDiscord } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">About WorshipBuddy</h1>
          <p className="text-lg mb-12 text-gray-700">
            Learn more about our mission and the team behind WorshipBuddy
          </p>

          <div className="space-y-12">
            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">Our Story</h2>
              <p className="mb-4 text-gray-600">
                WorshipBuddy was born out of a need for a simple, efficient way to manage worship songs and setlists. 
                As worship leaders ourselves, we understand the challenges of organizing and presenting songs during services.
              </p>
              <p className="text-gray-600">
                Our goal is to make worship leading easier and more enjoyable, allowing you to focus on what matters most - 
                leading your congregation in worship.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">Our Mission</h2>
              <p className="mb-4 text-gray-600">
                At WorshipBuddy, our mission is to empower churches worldwide through the transformative potential of technology, enriching their worship experiences, fostering community engagement, and facilitating spiritual growth.
              </p>
              <p className="mb-4 text-gray-600">
                We recognize that in an increasingly digital world, the role of technology in worship is pivotal. Our non-profit is dedicated to bridging the gap between faith and innovation, ensuring that churches of all sizes and backgrounds have access to cutting-edge tools and resources.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <span className="font-semibold">Innovation for Worship:</span> We leverage the latest advancements in technology to enhance every aspect of the worship experience. From immersive audiovisual solutions to user-friendly digital platforms, we provide churches with the tools they need to deliver inspirational and inclusive services.
                </li>
                <li>
                  <span className="font-semibold">Community Building:</span> We understand that strong faith communities are built on meaningful connections. Through our tech solutions, we enable churches to connect with their congregations, fostering a sense of togetherness even in the digital age.
                </li>
                <li>
                  <span className="font-semibold">Spiritual Growth:</span> We believe that technology can be a powerful catalyst for spiritual growth. By offering resources that facilitate Bible study, prayer, and reflection, we help individuals deepen their faith and understanding of Christian teachings.
                </li>
              </ul>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-8 text-[#10245c]">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Jobin Thomas</h3>
                    <p className="text-gray-600 text-center">Founder</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Ajoy Thomas</h3>
                    <p className="text-gray-600 text-center">Creative Director</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Neha Thomas</h3>
                    <p className="text-gray-600 text-center">Director of Marketing</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Jason John</h3>
                    <p className="text-gray-600 text-center">Software Engineering Lead</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Michael George</h3>
                    <p className="text-gray-600 text-center">Head of Product</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Ansun Sujoe</h3>
                    <p className="text-gray-600 text-center">Software Engineer</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Joel Prakash</h3>
                    <p className="text-gray-600 text-center">Frontend Developer</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Timothy Mathew</h3>
                    <p className="text-gray-600 text-center">Software Engineer Intern</p>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#10245c] to-[#1a2f6e] flex items-center justify-center mb-4 mx-auto group-hover:ring-4 group-hover:ring-[#10245c]/20 transition-all duration-300">
                      <FaUserCircle className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 text-center">Joel Roy</h3>
                    <p className="text-gray-600 text-center">Software Engineer Intern</p>
                  </div>
                </div>
              </div>
            </div>
{/*}
            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">Join Our Community</h2>
              <p className="mb-6 text-gray-600">
                WorshipBuddy is more than just an app - it&apos;s a community of worship leaders helping each other grow and improve. 
                We welcome your feedback and suggestions to make WorshipBuddy even better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/worshipbuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex items-center justify-center gap-2"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>
                <a
                  href="https://discord.gg/worshipbuddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center flex items-center justify-center gap-2"
                >
                  <FaDiscord className="text-xl" />
                  Discord
                </a>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}