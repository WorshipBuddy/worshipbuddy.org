"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    //{ name: "PresenterBuddy", href: "/presenter-buddy" },
    { name: "ScheduleBuddy", href: "/schedule-buddy" },
    { name: "Feedback", href: "/feedback" },
    { name: "Changelog", href: "/changelog" },
    { name: "Guide", href: "https://guide.worshipbuddy.org"},
    { name: "Merch", href: "https://threads.worshipbuddy.org"},
    { name: "Donate", href: "/donate" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1f5f9] backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#10245c]">WorshipBuddy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link ${pathname === item.href ? "active" : ""}`}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.name}
                {item.external && <span className="inline ml-1 text-sm text-gray-400">↗</span>}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#10245c] p-2 rounded-xl transition-colors duration-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block nav-link ${pathname === item.href ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.name}
                {item.external && <span className="inline ml-1 text-sm text-gray-400">↗</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}