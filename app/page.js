import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mockups from "@/components/Mockups";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="relative flex flex-col bg-navy text-white min-h-screen">
      <Nav />
      <section className="rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg mx-4 mt-6 p-6 md:mx-10 md:mt-10 md:p-8">
        <Hero />
      </section>
      <section className="rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg mx-4 mt-6 p-6 md:mx-10 md:p-8">
        <Mockups />
      </section>
      <section className="rounded-3xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg mx-4 mt-6 p-6 md:mx-10 md:p-8">
        <Description />
      </section>
      <Footer />
    </main>
  );
}