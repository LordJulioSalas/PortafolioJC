import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-white flex flex-col overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Technologies />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
