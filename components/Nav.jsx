"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaHeart } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "WorshipBuddy", href: "/worship-buddy" },
    { name: "ChurchBuddy", href: "/church-buddy" },
    { name: "PresenterBuddy", href: "/presenter-buddy" },
    { name: "About", href: "/about" },
  ];

  const resourcesItems = [
    { name: "Feedback", href: "/feedback" },
    { name: "Changelog", href: "/changelog" },
    { name: "Guide", href: "https://guide.worshipbuddy.org", external: true },
  ];

  const isActive = (href) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-nav border-b border-gray-100"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold font-heading text-brand group-hover:text-brand-dark transition-colors duration-200">
              WorshipBuddy
            </span>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-brand"
                    : "text-gray-600 hover:text-brand hover:bg-gray-50"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 200)}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-brand hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                Resources
                <FaChevronDown
                  className={`text-[10px] transition-transform duration-200 ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl border border-gray-100 shadow-lg py-1 overflow-hidden"
                  >
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-brand hover:bg-gray-50 transition-colors duration-150"
                        target={item.external ? "_blank" : "_self"}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        {item.name}
                        {item.external && (
                          <span className="ml-1 text-xs text-gray-400">↗</span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/donate"
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/donate")
                  ? "text-brand"
                  : "text-gray-600 hover:text-brand hover:bg-gray-50"
              }`}
            >
              <FaHeart className="text-xs text-pink-500" />
              Donate
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-600 hover:text-brand p-2 rounded-lg transition-colors duration-200"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-150 ${
                      isActive(item.href)
                        ? "text-brand bg-blue-50"
                        : "text-gray-600 hover:text-brand hover:bg-gray-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <div className="border-t border-gray-100 pt-3 mt-3">
                <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Resources
                </p>
                {resourcesItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navItems.length + i) * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-500 hover:text-brand hover:bg-gray-50 rounded-lg transition-colors duration-150"
                      onClick={() => setIsOpen(false)}
                      target={item.external ? "_blank" : "_self"}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                      {item.external && (
                        <span className="ml-1 text-xs text-gray-400">↗</span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-3 mt-3">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navItems.length + resourcesItems.length) * 0.05 }}
                >
                  <Link
                    href="/donate"
                    className="flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-600 hover:text-brand hover:bg-gray-50 rounded-lg transition-colors duration-150"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaHeart className="text-sm text-pink-500" />
                    Donate
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
