import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">WorshipBuddy</h3>
            <p className="text-gray-600">
              Helping worship leaders stay organized, one song at a time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-gray-600 hover:text-gray-900">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-gray-600 hover:text-gray-900">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="https://guide.worshipbuddy.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Guide <span className="inline ml-1 text-sm text-gray-400">↗</span>
                </Link>
              </li>
              <li>
                <Link href="https://threads.worshipbuddy.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Merch <span className="inline ml-1 text-sm text-gray-400">↗</span>
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@worshipbuddy.org"
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <FaEnvelope className="text-xl" /> Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/worshipbuddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <FaInstagram className="text-xl" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/worshipbuddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
                >
                  <FaLinkedin className="text-xl" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} WorshipBuddy - A 501(c)(3) organization with EIN 93-3532161 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}