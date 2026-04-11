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
          <div className="flex flex-col lg:flex-row items-center max-w-4xl mx-auto">
            {nodes.map((node, i) => (
              <div key={node.id} className="contents">
                {/* Product node — shrink-0 so connectors can flex-1 between them */}
                <div className="w-full lg:w-auto shrink-0">
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
                  <>
                    {/* Mobile: fixed-height container with continuous vertical line */}
                    <div className="relative w-full lg:hidden" style={{ height: "64px" }}>
                      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border -translate-x-px" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                        <span className="font-mono text-[10px] text-muted bg-surface px-2 whitespace-nowrap z-10">
                          {connections[i]}
                        </span>
                        </div>
                    </div>

                    {/* Desktop: flex-1 so lines fill all space between cards */}
                    <div className="hidden lg:flex flex-1 items-center">
                      <div className="flex-1 h-px bg-border" />
                      <span className="font-mono text-[10px] text-muted px-2 whitespace-nowrap shrink-0">
                        {connections[i]}
                      </span>
                      <div className="flex-1 h-px bg-border" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
