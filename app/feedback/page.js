import Footer from "@/components/Footer";

export default function Feedback() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden section-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Feedback
          </h1>
          <p className="text-lg text-blue-100/70">
            We value your feedback and are constantly working to improve WorshipBuddy. Your input helps us understand how we can better serve worship teams and make the app more useful for everyone.
          </p>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="card p-8">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">Share Your Thoughts</h2>
            <p className="text-gray-500">
              Have suggestions for new features or improvements? Found a bug? We&apos;d love to hear from you!
            </p>
          </div>

          <div className="card p-8">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Feature Requests</h3>
            <p className="text-gray-500 mb-6">
              Have an idea for a new feature? Let us know! We&apos;re always looking for ways to improve WorshipBuddy.
            </p>
            <a
              href="https://worshipbuddy.canny.io"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 hover:shadow-lg"
            >
              Submit Feature Request
            </a>
          </div>

          <div className="card p-8">
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Feedback &amp; Bug Reports</h3>
            <p className="text-gray-500 mb-6">
              Found a bug or have general feedback? Help us improve WorshipBuddy by sharing your thoughts or reporting issues.
            </p>
            <a
              href="https://worshipbuddy.atlassian.net/servicedesk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary gap-2 hover:shadow-lg"
            >
              Submit Feedback or Bug Report
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
