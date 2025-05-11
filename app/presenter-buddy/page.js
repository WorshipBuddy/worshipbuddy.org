import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa6";
import Footer from "@/components/Footer";

export default function PresenterBuddy() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">PresenterBuddy</h1>
          <p className="text-lg mb-12 text-gray-700">
            A powerful presentation tool designed specifically for worship services
          </p>

          <div className="space-y-12">
            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#10245c]">Easy Setup</h3>
                  <p className="text-gray-600">
                    Quickly set up your presentation with our intuitive interface. Import songs, 
                    Bible verses, and announcements with just a few clicks.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#10245c]">Live Preview</h3>
                  <p className="text-gray-600">
                    See exactly what your audience will see with our live preview feature. 
                    Make adjustments in real-time without disrupting the service.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#10245c]">Customizable</h3>
                  <p className="text-gray-600">
                    Customize fonts, colors, and layouts to match your church's branding. 
                    Create a consistent look across all your presentations.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#10245c]">Remote Control</h3>
                  <p className="text-gray-600">
                    Control your presentation from anywhere in the room using your mobile device. 
                    No more running back to the computer to change slides.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Documentation</h2>
              <p className="mb-6 text-gray-700">
                Get started with PresenterBuddy by exploring our comprehensive documentation. Learn about installation, 
                features, and advanced capabilities to make the most of your worship presentations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#10245c]">Key Features</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Multi-language support (20+ languages)</li>
                    <li>• CMG Sans font included</li>
                    <li>• NDI® output support</li>
                    <li>• Cloud sync with Google Drive</li>
                    <li>• Multiple output displays</li>
                    <li>• Advanced animations & transitions</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-3 text-[#10245c]">Import/Export</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Import from PowerPoint, ProPresenter</li>
                    <li>• Support for ChordPro, PDF, Text</li>
                    <li>• Export to PDF and text formats</li>
                    <li>• Project backup and restore</li>
                    <li>• Template management</li>
                    <li>• Custom layouts and styles</li>
                  </ul>
                </div>
              </div>
              <a
                href="https://guide.worshipbuddy.org/introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center inline-flex items-center justify-center gap-2"
              >
                View Full Documentation
              </a>
            </div>

            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">Download</h2>
              <p className="mb-8 text-gray-700">
                PresenterBuddy is available for Mac and Windows devices. Choose your platform below.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="https://pb.worshipbuddy.org/PresenterBuddy%20Apple%20Silicon.dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex items-center justify-center gap-2"
                >
                  <FaApple className="text-xl" />
                  Apple Silicon Mac
                </a>
                <a
                  href="https://pb.worshipbuddy.org/PresenterBuddy%20Intel.dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex items-center justify-center gap-2"
                >
                  <FaApple className="text-xl" />
                  Intel Mac
                </a>
                <a
                  href="https://pb.worshipbuddy.org/PresenterBuddy%20Windows.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex items-center justify-center gap-2"
                >
                  <FaWindows className="text-xl" />
                  Windows
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