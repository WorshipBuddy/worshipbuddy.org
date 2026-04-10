"use client";

import { FaHeart } from "react-icons/fa";
import AnimatedSection from "@/components/shared/AnimatedSection";
import DonationCalculator from "@/components/DonationCalculator";
import Footer from "@/components/Footer";

export default function Donate() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden pt-20 section-navy">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <AnimatedSection>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mx-auto mb-6">
              <FaHeart className="text-xl text-white" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
              Support WorshipBuddy
            </h1>
            <p className="text-lg text-blue-100/70 max-w-2xl mx-auto">
              WorshipBuddy is a 501(c)(3) nonprofit dedicated to empowering worship teams
              around the world with free, high-quality tools. Your donation helps us continue
              this mission.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Donate + Calculator */}
      <section className="section-light py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="card p-8 sm:p-10 mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">Why Donate?</h2>
              <p className="text-gray-500 leading-relaxed">
                WorshipBuddy is completely free to use. But hosting costs, development,
                support, and growth require resources. Your support helps us cover server
                infrastructure, design, development, and more — ensuring that WorshipBuddy
                remains free, ad-free, and accessible for ministries of all sizes.
              </p>
            </div>
          </AnimatedSection>

          {/* Donation Calculator */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                What Does It Cost Us?
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                All our tools are free, but they cost us real money to build and run.
                Toggle the products your church uses to see what it costs us to serve you.
              </p>
              <DonationCalculator />
            </div>
          </AnimatedSection>

          {/* Zeffy Form */}
          <AnimatedSection delay={0.2}>
            <div className="card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">Donate Now</h3>
              <p className="text-sm text-gray-500 mb-6">
                We use Zeffy to process transactions — a completely free payment platform.
                They will ask for an optional tip to support their platform.
                If you&apos;d like to contribute with Apple or Google Pay,{" "}
                <a
                  href="https://www.zeffy.com/donation-form/supports-worship-teams-around-the-world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand underline hover:text-brand/80"
                >
                  please use this link
                </a>.
              </p>
              <div className="relative overflow-hidden rounded-xl" style={{ height: "1200px", width: "100%" }}>
                <iframe
                  title="Donation form powered by Zeffy"
                  style={{
                    position: "absolute",
                    border: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.zeffy.com/embed/donation-form/supports-worship-teams-around-the-world"
                  allowpaymentrequest="true"
                />
              </div>
            </div>
          </AnimatedSection>

          <p className="text-center text-xs text-gray-500 mt-8">
            WorshipBuddy is a 501(c)(3) organization (EIN 93-3532161). All donations are tax-deductible.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
