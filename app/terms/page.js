import Footer from "@/components/Footer";

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">WorshipBuddy Terms of Service</h1>
          <p className="text-lg mb-12 text-gray-700">
            Effective Date: 9/23/2023<br />
            Last Updated: 1/1/2026
          </p>

          <div className="space-y-12">
            <div className="section-card animate-fade-in">
              <p className="text-gray-600 mb-4">
                These Terms of Service (&quot;Terms&quot;) govern access to and use of WorshipBuddy&apos;s websites, mobile apps, desktop apps, APIs, and related services (collectively, the &quot;Services&quot;). The Services include: WorshipBuddy, WorshipBuddyAPI, ChurchBuddy, ChurchBuddy App, PresenterBuddy Studio, PresenterBuddy, and BibleBuddy.
              </p>
              <p className="text-gray-600 font-semibold">
                By accessing or using the Services, you agree to these Terms.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">1) Who we are</h2>
              <p className="text-gray-600 mb-4">
                WorshipBuddy is a nonprofit organization whose mission is to empower churches through technology and provide tools that enrich worship experiences, foster community engagement, and support spiritual growth.
              </p>
              <p className="text-gray-600">
                WorshipBuddy is a 501(c)(3) nonprofit (EIN shown on our site footer).
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">2) Privacy and security</h2>
              <p className="text-gray-600 mb-4">
                Our Privacy & Security practices are described in our &quot;Privacy & Security for our Suite of Apps&quot; page, including that we don&apos;t run ads, we don&apos;t sell data, we collect what&apos;s necessary to operate the Services, data is stored on secured AWS infrastructure with encryption in transit and at rest, and you can request account deletion.
              </p>
              <p className="text-gray-600">
                <a href="/privacy-security" className="text-[#10245c] hover:underline">View Privacy & Security Policy</a>
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">3) Eligibility and accounts</h2>
              <ul className="list-disc space-y-2 text-gray-600 ml-4">
                <li>You may use certain Services without creating an account (for example, WorshipBuddy can be used with or without an account).</li>
                <li>If you create an account, you agree to provide accurate information and keep it updated.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account.</li>
              </ul>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">4) Service-specific notes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">4.1 WorshipBuddy</h3>
                  <p className="text-gray-600">
                    WorshipBuddy is designed to help worship leaders manage songs and setlists. If you create an account, we may store limited data needed for features like liked songs and sets across devices.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">4.2 ChurchBuddy</h3>
                  <p className="text-gray-600">
                    ChurchBuddy may require an email for login and scheduling-related features.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">4.3 PresenterBuddy / PresenterBuddy Studio</h3>
                  <p className="text-gray-600">
                    PresenterBuddy tools are designed for displaying lyrics and related presentation workflows and generally do not require personal information to function.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">4.4 WorshipBuddyAPI</h3>
                  <p className="text-gray-600">
                    WorshipBuddyAPI provides programmatic access to certain features and data. Public API access is not available at this time.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-[#10245c]">4.5 ChurchBuddy Donations (Stripe integration)</h3>
                  <p className="text-gray-600 mb-4">
                    ChurchBuddy may provide optional features for churches/organizations to accept donations.
                  </p>
                  <ul className="list-disc space-y-2 text-gray-600 ml-4 mb-4">
                    <li><span className="font-semibold">Connected account model:</span> If your organization enables donations, you connect a Stripe account through Stripe Connect. Donation processing occurs through Stripe, and funds are intended to be collected by your connected organization&apos;s Stripe account and paid out to the bank account configured in that Stripe account.</li>
                    <li><span className="font-semibold">Our role:</span> ChurchBuddy primarily provides the software interface and donation reporting/administration tools. We are not a bank and do not provide financial, legal, or tax advice.</li>
                    <li><span className="font-semibold">Your responsibilities:</span> You (the organization) are responsible for:
                      <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>providing accurate organization information in Stripe onboarding,</li>
                        <li>your donation page disclosures (e.g., what funds are for),</li>
                        <li>compliance with applicable laws (including charitable solicitation rules, tax receipting, and donor acknowledgements),</li>
                        <li>handling refund/dispute policies (as applicable) and donor communications.</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-gray-600">
                    We may disable donation features for organizations that violate these Terms or the Acceptable Use Policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">5) Donations to WorshipBuddy Company (separate from Stripe)</h2>
              <p className="text-gray-600">
                WorshipBuddy Company may accept donations to support its nonprofit mission through third-party donation platforms linked from our website/apps. Such donations are governed by the donation platform&apos;s checkout terms and any donor disclosures we provide.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">6) Acceptable Use</h2>
              <p className="text-gray-600 mb-4">
                You agree not to misuse the Services. Your use is also governed by our Acceptable Use Policy:
              </p>
              <p className="text-gray-600">
                <a href="/acceptable-use" className="text-[#10245c] hover:underline">View Acceptable Use Policy</a>
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">7) Intellectual property</h2>
              <ul className="list-disc space-y-2 text-gray-600 ml-4">
                <li>The Services and their content (excluding user-provided content) are owned by WorshipBuddy Company or its licensors and are protected by intellectual property laws.</li>
                <li>You may not copy, modify, distribute, sell, lease, reverse engineer, or attempt to extract source code except as permitted by law or where we provide open-source components under their licenses.</li>
              </ul>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">8) User content</h2>
              <p className="text-gray-600 mb-4">
                If you upload, submit, or store content (e.g., song notes, schedules, media, text), you retain ownership of your content. You grant WorshipBuddy a limited license to host, process, and display your content solely to provide and improve the Services.
              </p>
              <p className="text-gray-600">
                You represent that you have the rights to provide any content you submit and that it does not violate law or third-party rights.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">9) Third-party services</h2>
              <p className="text-gray-600 mb-4">
                We may integrate third-party services (e.g., error reporting/analytics) to operate and improve the Services. We use trusted tools for crash/error reporting and analytics with minimal data.
              </p>
              <p className="text-gray-600">
                Payment processing for donations uses Stripe where enabled.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">10) Availability, changes, and termination</h2>
              <ul className="list-disc space-y-2 text-gray-600 ml-4">
                <li>We may update, modify, suspend, or discontinue parts of the Services at any time.</li>
                <li>We may suspend or terminate access if we reasonably believe you violated these Terms, the AUP, or applicable law.</li>
                <li>You may stop using the Services at any time and may request account deletion as described in our Privacy & Security policy.</li>
              </ul>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">11) Disclaimers</h2>
              <p className="text-gray-600">
                The Services are provided &quot;AS IS&quot; and &quot;AS AVAILABLE.&quot; We do not guarantee uninterrupted, error-free operation.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">12) Limitation of liability</h2>
              <p className="text-gray-600">
                To the maximum extent permitted by law, WorshipBuddy Company will not be liable for indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, or goodwill.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">13) Indemnification</h2>
              <p className="text-gray-600">
                You agree to indemnify and hold harmless WorshipBuddy Company and its team from claims arising out of your misuse of the Services, your content, or your violation of these Terms or applicable law.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">14) Governing law and disputes</h2>
              <p className="text-gray-600">
                These Terms are governed by the laws of Texas, United States, without regard to conflict of law principles. Any disputes will be resolved in the courts located in Dallas, Texas, unless otherwise required by law.
              </p>
            </div>

            <div className="section-card animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-[#10245c]">15) Contact</h2>
              <p className="text-gray-600">
                Questions about these Terms: <a href="mailto:support@worshipbuddy.org" className="text-[#10245c] hover:underline">support@worshipbuddy.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
