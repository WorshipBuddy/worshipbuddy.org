import Footer from "@/components/Footer";

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
              ScheduleBuddy is available as a web application, making it accessible from any device.
            </p>
            <a
              href="https://schedule.worshipbuddy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Try ScheduleBuddy
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 