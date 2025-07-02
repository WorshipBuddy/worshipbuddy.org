import Footer from "@/components/Footer";
import { FaApple, FaDesktop } from "react-icons/fa";

export default function ScheduleBuddy() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">ScheduleBuddy</h1>
          <p className="text-lg mb-12 text-gray-700">
            ScheduleBuddy helps worship teams coordinate schedules, manage team members, and ensure smooth service transitions. Keep your team organized and informed with our intuitive scheduling platform.
          </p>
          
          <div className="section-card rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-[#10245c]">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#10245c] mr-3">•</span>
                <span className="text-gray-600">Easy team scheduling and rotation management</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10245c] mr-3">•</span>
                <span className="text-gray-600">Automated availability tracking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#10245c] mr-3">•</span>
                <span className="text-gray-600">Service planning and team assignments</span>
              </li>
            </ul>
          </div>

          <div className="section-card rounded-2xl mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Get Started</h2>
            <p className="mb-6 text-gray-900">
              ScheduleBuddy is available on the web and iOS, making it easy to manage your worship team schedules and service plans from anywhere. Try it online or download the app today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <a
                href="https://schedule.worshipbuddy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FaDesktop className="text-xl" />
                Try ScheduleBuddy
              </a>
              <a
                href="https://apps.apple.com/ca/app/schedulebuddy/id6747605543?uo=2"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FaApple className="text-xl" />
                Download on iOS
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}