import Footer from "@/components/Footer";

export default function Feedback() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Feedback</h1>
          <div className="space-y-8 text-gray-900">
            <p className="text-lg">
              We value your feedback and are constantly working to improve WorshipBuddy. Your input helps us understand how we can better serve worship teams and make the app more useful for everyone.
            </p>
            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Share Your Thoughts</h2>
              <p className="mb-6 text-gray-900">
                Have suggestions for new features or improvements? Found a bug? We'd love to hear from you!
              </p>
              <a
                href="https://github.com/worshipbuddy/worshipbuddy/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Submit Feedback on GitHub
              </a>
            </div>
            <div className="section-card">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Join Our Community</h2>
              <p className="mb-6 text-gray-900">
                Connect with other WorshipBuddy users, share tips and tricks, and stay updated on new features.
              </p>
              <a
                href="https://discord.gg/worshipbuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Join Discord Community
              </a>
            </div>
            <div className="p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Feature Requests</h3>
              <p className="text-gray-900">
                Have an idea for a new feature? Let us know! We're always looking for ways to 
                improve WorshipBuddy.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Bug Reports</h3>
              <p className="text-gray-900">
                Found a bug? Help us fix it by providing details about the issue you encountered.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">General Feedback</h3>
              <p className="text-gray-900">
                Share your thoughts about WorshipBuddy. Your feedback helps us make the app 
                better for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 