"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const productLinks = [
  { name: "WorshipBuddy", href: "/worship-buddy" },
  { name: "ChurchBuddy", href: "/church-buddy" },
  { name: "PresenterBuddy", href: "/presenter-buddy" },
];

const resourceLinks = [
  { name: "About", href: "/about" },
  { name: "Feedback", href: "/feedback" },
  { name: "Changelog", href: "/changelog" },
  { name: "Guide", href: "https://guide.worshipbuddy.org", external: true },
  { name: "Donate", href: "/donate" },
];

const legalLinks = [
  { name: "Privacy & Security", href: "/privacy-security" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Acceptable Use", href: "/acceptable-use" },
];

const socialLinks = [
  { name: "Email", href: "mailto:info@worshipbuddy.org", icon: FaEnvelope },
  { name: "Instagram", href: "https://www.instagram.com/worshipbuddy/", icon: FaInstagram, external: true },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/worshipbuddy/", icon: FaLinkedin, external: true },
];

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold font-heading mb-3">WorshipBuddy</h3>
            <p className="text-sm text-blue-100/70 leading-relaxed mb-4">
              A 501(c)(3) nonprofit building free tools for worship teams around the world.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-blue-100/70 hover:text-white hover:bg-white/20 transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-100/90">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-blue-100/60 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-100/90">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-blue-100/60 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                    {link.external && <span className="ml-1 text-xs text-blue-100/30">↗</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-blue-100/90">Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-blue-100/60 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-xs text-blue-100/40">
            © {new Date().getFullYear()} WorshipBuddy — A 501(c)(3) nonprofit organization (EIN 93-3532161). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
