import SuiteHero from "@/components/home/SuiteHero";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import ConnectedSuite from "@/components/home/ConnectedSuite";
import MissionStatement from "@/components/home/MissionStatement";
import SupportUs from "@/components/home/SupportUs";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SuiteHero />
      <ProductSpotlight />
      <ConnectedSuite />
      <MissionStatement />
      <SupportUs />
      <FinalCTA />
      <Footer />
    </>
  );
}
