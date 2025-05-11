import Footer from "@/components/Footer";

export default function Changelog() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">Changelog</h1>
          <p className="text-lg mb-12 text-gray-700">
            Track the latest updates and improvements across all WorshipBuddy apps
          </p>

          <div className="space-y-16">
            {/* WorshipBuddy Section */}
            <div className="section-card">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">WorshipBuddy</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Version 2.0.0</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500">Released: March 2024</p>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">Major Updates</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Complete UI redesign with modern, minimalist aesthetic</li>
                        <li>New dark theme for better visibility in worship settings</li>
                        <li>Improved song library organization</li>
                        <li>Enhanced setlist management features</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">New Features</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Custom song import functionality</li>
                        <li>Advanced search and filtering options</li>
                        <li>Improved chord display and transposition</li>
                        <li>Team collaboration tools</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Version 1.5.0</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500">Released: January 2024</p>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">Improvements</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Performance optimizations</li>
                        <li>Bug fixes and stability improvements</li>
                        <li>Updated song database</li>
                        <li>Enhanced mobile responsiveness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PresenterBuddy Section */}
            <div className="section-card">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">PresenterBuddy</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Version 1.2.0</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500">Released: February 2024</p>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">New Features</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Remote control functionality for presentations</li>
                        <li>Customizable presentation templates</li>
                        <li>Live preview mode</li>
                        <li>Enhanced text formatting options</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Version 1.0.0</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500">Released: December 2023</p>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">Initial Release</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Basic presentation creation</li>
                        <li>Song and verse import</li>
                        <li>Simple slide transitions</li>
                        <li>Basic formatting tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ScheduleBuddy Section */}
            <div className="section-card">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">ScheduleBuddy</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Version 1.1.0</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500">Released: February 2024</p>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">New Features</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Automated availability tracking</li>
                        <li>Email notification system</li>
                        <li>Team rotation management</li>
                        <li>Service planning calendar</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Version 1.0.0</h3>
                  <div className="space-y-6">
                    <p className="text-gray-500">Released: January 2024</p>
                    <div className="space-y-3">
                      <h4 className="text-xl font-semibold text-gray-900">Initial Release</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Basic team scheduling</li>
                        <li>Service assignment creation</li>
                        <li>Team member management</li>
                        <li>Simple calendar view</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Features Section */}
            <div className="section-card">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Upcoming Features</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">WorshipBuddy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Advanced analytics and reporting</li>
                    <li>Integration with popular worship software</li>
                    <li>Mobile app development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">PresenterBuddy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Advanced animation effects</li>
                    <li>Multi-screen support</li>
                    <li>Custom theme builder</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">ScheduleBuddy</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Conflict resolution system</li>
                    <li>Advanced reporting tools</li>
                    <li>Mobile notifications</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Note: Release dates are subject to change based on development progress and user feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 