import BentoHero from "@/components/home/BentoHero";
import WhoWeAre from "@/components/home/WhoWeAre";
import ProductShowcase from "@/components/home/ProductShowcase";
import StatsCounter from "@/components/home/StatsCounter";
import SupportUs from "@/components/home/SupportUs";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BentoHero />
      <WhoWeAre />
      <ProductShowcase />
      <StatsCounter />
      <SupportUs />
      <CTABanner />
      <Footer />
    </>
  );
}
