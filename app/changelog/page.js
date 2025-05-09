import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Changelog() {
  return (
    <main className="min-h-screen">
      <div className="page-container">
        <div className="page-header">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Changelog</h1>
          <p className="page-subtitle">
            Track the latest updates and improvements to WorshipBuddy
          </p>
        </div>

        <div className="space-y-12">
          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Version 2.0.0</h2>
            <div className="space-y-6">
              <p className="text-gray-400">Released: March 2024</p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Major Updates</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Complete UI redesign with modern, minimalist aesthetic</li>
                  <li>New dark theme for better visibility in worship settings</li>
                  <li>Improved song library organization</li>
                  <li>Enhanced setlist management features</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">New Features</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Custom song import functionality</li>
                  <li>Advanced search and filtering options</li>
                  <li>Improved chord display and transposition</li>
                  <li>Team collaboration tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Version 1.5.0</h2>
            <div className="space-y-6">
              <p className="text-gray-400">Released: January 2024</p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Improvements</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Performance optimizations</li>
                  <li>Bug fixes and stability improvements</li>
                  <li>Updated song database</li>
                  <li>Enhanced mobile responsiveness</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Version 1.0.0</h2>
            <div className="space-y-6">
              <p className="text-gray-400">Released: November 2023</p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Initial Release</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Basic song library management</li>
                  <li>Setlist creation and organization</li>
                  <li>Simple chord transposition</li>
                  <li>Basic team features</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Upcoming Features</h2>
            <div className="space-y-6">
              <p>
                We're constantly working on new features and improvements. Here's what's coming next:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Advanced analytics and reporting</li>
                <li>Integration with popular worship software</li>
                <li>Mobile app development</li>
                <li>Enhanced collaboration tools</li>
              </ul>
              <p className="text-sm text-gray-400 mt-4">
                Note: Release dates are subject to change based on development progress and user feedback.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
} 