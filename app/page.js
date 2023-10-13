import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mockups from "@/components/Mockups";
import Nav from "@/components/Nav";
import Overlay from "@/components/Overlay";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-neutral-900 text-white">
      <Overlay>
        <Hero />
      </Overlay>
      <Mockups />
      <Description />
      <Footer />
    </main>
  );
}
