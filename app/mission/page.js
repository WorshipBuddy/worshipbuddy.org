import Link from "next/link";

export default function Mission() {
  return (
    <main className="min-h-screen">
      <div className="page-container">
        <div className="page-header">
          <h1 className="page-title">Our Mission</h1>
          <p className="page-subtitle">
            Empowering worship teams with innovative tools to enhance their ministry
          </p>
        </div>

        <div className="space-y-12">
          <section className="section-card">
            <h2>Our Vision</h2>
            <p>
              At WorshipBuddy, we believe that technology should enhance, not hinder,
              the worship experience. Our vision is to create tools that make it easier
              for worship teams to focus on what matters most - leading their congregation
              in meaningful worship.
            </p>
          </section>

          <section className="section-card">
            <h2>What We Do</h2>
            <div className="space-y-4">
              <p>
                We develop free, open-source applications that help worship teams:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and manage their song library efficiently</li>
                <li>Create and share setlists seamlessly</li>
                <li>Display lyrics and chords professionally</li>
                <li>Coordinate team schedules effectively</li>
              </ul>
            </div>
          </section>

          <section className="section-card">
            <h2>Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3>Accessibility</h3>
                <p>
                  We believe in making our tools available to everyone, regardless of
                  church size or budget.
                </p>
              </div>
              <div>
                <h3>Community</h3>
                <p>
                  We foster a community of worship leaders who share ideas and
                  contribute to making our tools better.
                </p>
              </div>
              <div>
                <h3>Innovation</h3>
                <p>
                  We continuously improve our tools based on user feedback and
                  emerging needs in worship ministry.
                </p>
              </div>
              <div>
                <h3>Excellence</h3>
                <p>
                  We strive for excellence in everything we do, from code quality to
                  user experience.
                </p>
              </div>
            </div>
          </section>

          <section className="section-card">
            <h2>Join Our Journey</h2>
            <p className="mb-6">
              Whether you&apos;re a worship leader, developer, or supporter, there are many
              ways to get involved in our mission.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/feedback" className="btn-primary">
                Share Your Ideas
              </Link>
              <a
                href="https://github.com/worshipbuddy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Contribute on GitHub
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}