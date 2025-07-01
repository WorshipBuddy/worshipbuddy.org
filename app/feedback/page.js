import Footer from "@/components/Footer";

export default function Feedback() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">Feedback</h1>
          <p className="text-lg mb-12 text-gray-700">
            We value your feedback and are constantly working to improve WorshipBuddy. Your input helps us understand how we can better serve worship teams and make the app more useful for everyone.
          </p>
          <div className="space-y-8 text-gray-900">
            <div className="section-card">
              <h2 className="text-2xl font-bold mb-4 text-[#10245c]">Share Your Thoughts</h2>
              <p className="text-gray-600">
                Have suggestions for new features or improvements? Found a bug? We&apos;d love to hear from you!
              </p>
            </div>
            {/*
            <div className="section-card">
              <h2 className="text-2xl font-bold mb-4 text-[#10245c]">Join Our Community</h2>
              <p className="mb-6 text-gray-600">
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
            </div>*/}
            <div className="p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold mb-3 text-[#10245c]">Feature Requests</h3>
              <p className="mb-6 text-gray-600">
                Have an idea for a new feature? Let us know! We&apos;re always looking for ways to 
                improve WorshipBuddy.
              </p>
              <a
                href="https://worshipbuddy.canny.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Submit Feature Request
              </a>
            </div>
            <div className="p-6 rounded-xl bg-gray-50">
              <h3 className="text-xl font-bold mb-3 text-[#10245c]">Feedback & Bug Reports</h3>
              <p className="mb-6 text-gray-600">
                Found a bug or have general feedback? Help us improve WorshipBuddy by sharing your thoughts or reporting issues.
              </p>
              <a
                href="https://worshipbuddy.atlassian.net/servicedesk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Submit Feedback or Bug Report
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}