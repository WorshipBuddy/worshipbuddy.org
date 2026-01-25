import Footer from "@/components/Footer";

export default function AcceptableUse() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">WorshipBuddy Acceptable Use Policy</h1>
          <p className="text-lg mb-12 text-gray-700">
            Effective Date: 9/23/2023<br />
            Last Updated: 1/1/2026
          </p>

          <div className="space-y-12">
            <div className="section-card animate-fade-in">
              <p className="text-gray-600 mb-4">
                This Acceptable Use Policy (&quot;AUP&quot;) applies to all WorshipBuddy Services (WorshipBuddy, WorshipBuddyAPI, ChurchBuddy, ChurchBuddy App, PresenterBuddy Studio, PresenterBuddy, BibleBuddy).
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">1) General rule</h2>
              <p className="text-gray-600">
                Use the Services lawfully, respectfully, and only for their intended purposes. Do not attempt to interfere with the Services, compromise security, or harm other users.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">2) Prohibited activities</h2>
              <p className="text-gray-600 mb-4">
                You may not use the Services to:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">Illegal, harmful, or deceptive activity</h3>
                  <ul className="list-disc space-y-2 text-gray-600 ml-4">
                    <li>Commit or promote illegal activity, fraud, theft, or impersonation</li>
                    <li>Misrepresent your identity, affiliation, or purpose</li>
                    <li>Phish, scam, or solicit sensitive information unlawfully</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">Violence, extremism, and hate</h3>
                  <ul className="list-disc space-y-2 text-gray-600 ml-4">
                    <li>Support or promote terrorism, violent extremism, or violence</li>
                    <li>Promote hate or harassment against protected groups or individuals</li>
                    <li>Threaten, dox, or harass others</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">Exploitation and abuse</h3>
                  <ul className="list-disc space-y-2 text-gray-600 ml-4">
                    <li>Child sexual abuse material (CSAM) or any sexual exploitation content</li>
                    <li>Non-consensual sexual content or trafficking-related content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">Drugs and regulated goods</h3>
                  <ul className="list-disc space-y-2 text-gray-600 ml-4">
                    <li>Illegal drugs or drug paraphernalia</li>
                    <li>Unlawful sales of regulated goods (weapons, explosives, etc.)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">Security and platform abuse</h3>
                  <ul className="list-disc space-y-2 text-gray-600 ml-4">
                    <li>Attempt to bypass authentication or access systems/data you don&apos;t own</li>
                    <li>Reverse engineer or scrape the Services in a way that harms availability</li>
                    <li>Introduce malware, ransomware, or malicious code</li>
                    <li>Abuse rate limits, run automated attacks, or probe for vulnerabilities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">Privacy violations</h3>
                  <ul className="list-disc space-y-2 text-gray-600 ml-4">
                    <li>Collect personal data about others without permission</li>
                    <li>Upload content that violates privacy rights or intellectual property rights</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">3) Donations / fundraising rules (ChurchBuddy)</h2>
              <p className="text-gray-600 mb-4">
                If you enable donations via ChurchBuddy:
              </p>
              <ul className="list-disc space-y-2 text-gray-600 ml-4">
                <li>Donation features are intended for legitimate churches/organizations and church-related giving purposes.</li>
                <li>You must provide clear, truthful descriptions for donation funds/purposes.</li>
                <li>You must not create donation flows for personal fundraising, unlawful purposes, or prohibited activities.</li>
                <li>You must not attempt to route donation proceeds to unrelated third parties outside your organization&apos;s connected Stripe account.</li>
                <li>You must comply with applicable laws (including charitable solicitation, donor disclosures, and tax acknowledgements).</li>
              </ul>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">4) Restricted jurisdictions / sanctions</h2>
              <p className="text-gray-600">
                We do not permit use of donation features or Services in a manner that violates applicable sanctions laws. We may block or restrict activity linked to sanctioned persons/entities or comprehensively sanctioned jurisdictions and regions.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">5) Enforcement</h2>
              <p className="text-gray-600 mb-4">
                If we determine you violated this AUP, we may:
              </p>
              <ul className="list-disc space-y-2 text-gray-600 ml-4">
                <li>remove or disable content,</li>
                <li>suspend or terminate accounts,</li>
                <li>disable donation features for an organization,</li>
                <li>report suspected illegal activity to appropriate authorities where required.</li>
              </ul>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">6) Reporting concerns</h2>
              <p className="text-gray-600">
                Report abuse or policy violations: <a href="mailto:support@worshipbuddy.org" className="text-[#10245c] hover:underline">support@worshipbuddy.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
