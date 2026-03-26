import Footer from "@/components/Footer";

export default function PrivacySecurity() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden section-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold mb-8 gradient-text leading-tight py-1">Privacy & Security for our Suite of Apps</h1>
          <p className="text-lg text-blue-100/70">
            Your privacy and security are important to us
          </p>
        </div>
      </section>

      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="card p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900">TL;DR</h2>
            <ul className="list-disc space-y-2 text-gray-500 mb-4 ml-4">
              <li>We don&apos;t run ads.</li>
              <li>We don&apos;t sell your data.</li>
              <li>We only collect what&apos;s absolutely necessary to make the apps work.</li>
              <li>You can ask us to delete your account anytime.</li>
              <li>Your data lives on secure AWS servers, locked down and encrypted.</li>
              <li>Only a few trusted team leads can touch production data (and we test everything else with dummy data).</li>
            </ul>
            <p className="text-gray-500 font-semibold">
              We keep it simple: <span className="font-semibold">your information belongs to you, not us.</span>
            </p>
          </div>

          <div className="card p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900">What We Collect and Why</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-gray-900">WorshipBuddy</h3>
                <ul className="list-disc space-y-2 text-gray-500 ml-4">
                  <li>You can use WorshipBuddy with or without an account.</li>
                  <li>If you make an account, we store your liked songs and sets so that they stick across devices or if you get a new device you can easily restore your profile.</li>
                  <li>That&apos;s it. No personal info required unless you choose to create an account.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-gray-900">ChurchBuddy</h3>
                <ul className="list-disc space-y-2 text-gray-500 ml-4">
                  <li>We ask for your email when you sign up.</li>
                  <li>Email is used for login and to identify you as a person so that you can be scheduled for different ministries. In the future, we will use this email to send important updates or product news.</li>
                  <li>We store emails securely in AWS with encryption at rest and SSL in transit.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-semibold mb-3 text-gray-900">PresenterBuddy</h3>
                <p className="text-gray-500">
                  PresenterBuddy is about putting lyrics on screen. No personal info is required.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900">Crash Reporting & Analytics</h2>
            <p className="text-gray-500 mb-4">
              To make the apps better, we use a few trusted third-party tools:
            </p>
            <ul className="list-disc space-y-2 text-gray-500 mb-4 ml-4">
              <li><span className="font-semibold">Sentry:</span> catches crashes and errors so we can fix bugs faster. Data stored and processed here are mostly in aggregate. Isolated bugs can be associated with accounts, which in turn helps us to troubleshoot.</li>
              <li><span className="font-semibold">PostHog:</span> helps us understand how people use the app (things like which features are popular).</li>
            </ul>
            <p className="text-gray-500">
              These services only get the minimum data needed to do their job. No one&apos;s selling your info, and we don&apos;t do retargeting ads.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900">Deleting Your Data</h2>
            <p className="text-gray-500 mb-4">Want your account gone? No problem.</p>
            <ul className="list-disc space-y-2 text-gray-500 ml-4">
              <li>Send us a note at <a href="mailto:support@worshipbuddy.org" className="text-brand hover:text-brand/80">support@worshipbuddy.org</a></li>
              <li>We&apos;ll send a confirmation email.</li>
              <li>Once confirmed, we&apos;ll delete your account and email data from our systems.</li>
            </ul>
          </div>

          <div className="card p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900">Security</h2>
            <p className="text-gray-500 mb-4">
              We take security seriously, even though we keep things simple.
            </p>
            <ul className="list-disc space-y-2 text-gray-500 ml-4">
              <li>Data is stored on AWS servers with encryption at rest and SSL in transit.</li>
              <li>Only a handful of trusted team leads can access production data. Everyone else works with dummy data when testing.</li>
              <li>We don&apos;t share your personal data with anyone else.</li>
            </ul>
          </div>

          <div className="card p-8">
            <h2 className="font-heading text-2xl font-bold mb-6 text-gray-900">Consent</h2>
            <p className="text-gray-500">
              By using WorshipBuddy, ChurchBuddy, or PresenterBuddy, you agree to this policy.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
