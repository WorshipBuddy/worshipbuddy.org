"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";

const nodes = [
  {
    id: "cb",
    name: "ChurchBuddy",
    role: "Your org and login",
    color: "#0B7261",
    lightBg: "bg-cb-light",
  },
  {
    id: "wb",
    name: "WorshipBuddy",
    role: "Songs and sets",
    color: "#0C245E",
    lightBg: "bg-wb-light",
  },
  {
    id: "pb",
    name: "PresenterBuddy",
    role: "Live presentation",
    color: "#1E6B8A",
    lightBg: "bg-pb-light",
  },
];

const connections = [
  "Same login, same org",
  "Sets sync to presenter",
];

export default function ConnectedSuite() {
  return (
    <section className="bg-surface border-t border-border py-24 sm:py-32">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-3 block">The Suite</span>
          <h2 className="font-heading text-[clamp(30px,5vw,52px)] leading-[1.1] text-ink text-balance max-w-3xl mx-auto mb-5">
            Built to work together
          </h2>
          <p className="font-sans text-[17px] text-muted max-w-2xl mx-auto leading-relaxed">
            Sign in with ChurchBuddy to set up your org. Build your sets in
            WorshipBuddy. Present them live with PresenterBuddy. One login,
            three tools.
          </p>
        </AnimatedSection>

        {/* Connection flow */}
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col lg:flex-row items-center gap-0 max-w-4xl mx-auto">
            {nodes.map((node, i) => (
              <div key={node.id} className="contents">
                {/* Product node */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="card p-6 text-center">
                    <div
                      className="w-3 h-3 rounded-sm mx-auto mb-3"
                      style={{ background: node.color }}
                    />
                    <p
                      className="font-mono text-[12px] font-semibold tracking-tight mb-1"
                      style={{ color: node.color }}
                    >
                      {node.name}
                    </p>
                    <p className="font-sans text-[14px] text-muted">
                      {node.role}
                    </p>
                  </div>
                </div>

                {/* Connector */}
                {i < nodes.length - 1 && (
                  <div className="flex flex-col lg:flex-row items-center py-3 lg:py-0 lg:px-3 shrink-0">
                    {/* Vertical line (mobile) */}
                    <div className="w-px h-6 bg-border lg:hidden" />
                    {/* Horizontal line (desktop) */}
                    <div className="hidden lg:block w-8 h-px bg-border" />
                    <span className="font-mono text-[10px] text-muted px-2 whitespace-nowrap">
                      {connections[i]}
                    </span>
                    <div className="w-px h-6 bg-border lg:hidden" />
                    <div className="hidden lg:block w-8 h-px bg-border" />
                    {/* Arrow */}
                    <span className="text-border text-[12px] rotate-90 lg:rotate-0">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
