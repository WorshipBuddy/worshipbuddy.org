import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function PresenterBuddy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="page-container">
        <div className="page-header">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#10245c ]">PresenterBuddy</h1>
          <p className="page-subtitle">
            A powerful presentation tool designed specifically for worship services
          </p>
        </div>

        <div className="space-y-12">
          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#10245c ]">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Easy Setup</h3>
                <p className="text-gray-700">
                  Quickly set up your presentation with our intuitive interface. Import songs, 
                  Bible verses, and announcements with just a few clicks.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Live Preview</h3>
                <p className="text-gray-700">
                  See exactly what your audience will see with our live preview feature. 
                  Make adjustments in real-time without disrupting the service.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Customizable</h3>
                <p className="text-gray-700">
                  Customize fonts, colors, and layouts to match your church's branding. 
                  Create a consistent look across all your presentations.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Remote Control</h3>
                <p className="text-gray-700">
                  Control your presentation from anywhere in the room using your mobile device. 
                  No more running back to the computer to change slides.
                </p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#10245c ]">Download</h2>
            <p className="mb-8 text-gray-700">
              PresenterBuddy is available for both iOS and Android devices. Download now and 
              transform your worship presentations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/app/presenterbuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                <FaApple className="text-xl" />
                Download on iOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=org.worshipbuddy.presenter"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                <FaGooglePlay className="text-xl" />
                Download on Android
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
} 