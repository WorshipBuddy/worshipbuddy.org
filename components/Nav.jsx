"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaChevronDown, FaShoppingBag, FaHeart } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "ScheduleBuddy", href: "/schedule-buddy" },
    { name: "About", href: "/about" },
  ];

  const resourcesItems = [
    { name: "Feedback", href: "/feedback" },
    { name: "Changelog", href: "/changelog" },
    { name: "Guide", href: "https://guide.worshipbuddy.org", external: true},
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f1f5f9] backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-[#10245c]">WorshipBuddy</span>
          </Link>

          {/* Right-justified Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`nav-link flex items-center space-x-1 ${pathname === item.href ? "active" : ""}`}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.icon && <item.icon className="text-sm" />}
                <span>{item.name}</span>
                {item.external && !item.noArrow && <span className="inline ml-1 text-sm text-gray-400">↗</span>}
              </Link>
            ))}
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="nav-link flex items-center space-x-1"
              >
                <span>Resources</span>
                <FaChevronDown className={`text-xs relative top-[2px] transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${pathname === item.href ? "text-[#10245c] font-medium" : "text-gray-700"}`}
                      onClick={() => setResourcesOpen(false)}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                      {item.external && <span className="inline ml-1 text-sm text-gray-400">↗</span>}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Merch and Donate */}
            <Link
              href="https://worshipbuddyco.printify.me/"
              className={`nav-link flex items-center space-x-1 ${pathname === "https://worshipbuddyco.printify.me/" ? "active" : ""}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaShoppingBag className="text-sm" />
              <span>Merch</span>
            </Link>
            <Link
              href="/donate"
              className={`nav-link flex items-center space-x-1 ${pathname === "/donate" ? "active" : ""}`}
            >
              <FaHeart className="text-sm" />
              <span>Donate</span>
            </Link>
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
                className={`block nav-link flex items-center space-x-2 ${pathname === item.href ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
                target={item.external ? "_blank" : "_self"}
                rel={item.external ? "noopener noreferrer" : undefined}
              >
                {item.icon && <item.icon className="text-sm" />}
                <span>{item.name}</span>
                {item.external && !item.noArrow && <span className="inline ml-1 text-sm text-gray-400">↗</span>}
              </Link>
            ))}
            {/* Mobile Resources Section */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="text-sm font-medium text-gray-500 mb-2 px-2">Resources</div>
              {resourcesItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block nav-link pl-4 ${pathname === item.href ? "active" : ""}`}
                  onClick={() => setIsOpen(false)}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.name}
                  {item.external && <span className="inline ml-1 text-sm text-gray-400">↗</span>}
                </Link>
              ))}
            </div>
            {/* Merch and Donate on Mobile */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <Link
                href="https://worshipbuddyco.printify.me/"
                className={`block nav-link flex items-center space-x-2 ${pathname === "https://worshipbuddyco.printify.me/" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaShoppingBag className="text-sm" />
                <span>Merch</span>
              </Link>
              <Link
                href="/donate"
                className={`block nav-link flex items-center space-x-2 ${pathname === "/donate" ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <FaHeart className="text-sm" />
                <span>Donate</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}