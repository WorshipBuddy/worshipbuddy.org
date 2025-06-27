import Description from "@/components/Description";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Hero />
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Description />
        </div>
      </section>

      <Footer />
    </main>
  );
}