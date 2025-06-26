import Footer from "@/components/Footer";

export default function Donate() {
  return (
    <>
      <script src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js"></script>
      
      <main className="min-h-screen">
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 gradient-text leading-tight py-1">Donate</h1>
            <p className="text-lg mb-12 text-gray-700">
              WorshipBuddy is a 501(c)(3) nonprofit dedicated to empowering worship teams around the world with free, high-quality tools. 
              Your donation helps us continue this mission—for this generation and generations to come.
            </p>

            <div className="space-y-8 text-gray-900">
              <div className="section-card">
                <h2 className="text-2xl font-bold mb-4 text-[#10245c]">Why Donate?</h2>
                <p className="text-gray-600">
                  WorshipBuddy is completely free to use. But hosting costs, development, support, and growth require resources.
                  Your support helps us cover server infrastructure, design, development, and more—ensuring that WorshipBuddy remains
                  free, ad-free, and accessible for ministries of all sizes.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50">
                <h3 className="text-xl font-bold mb-3 text-[#10245c]">Donate Now</h3>
                <p className="mb-6 text-gray-600">
                  We use Zeffy as our provider to process transactions, a completely free payment processing platform. They will ask for a tip to help support their platform but this IS OPTIONAL. Choose any amount—every dollar helps. Your gift supports worship teams around the world.
                </p>                
                <a
                className="btn-primary inline-block cursor-pointer"
                zeffy-form-link="https://www.zeffy.com/embed/donation-form/supports-worship-teams-around-the-world?modal=true"
              >
                Donate Now
              </a>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}