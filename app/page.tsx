import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { CTABanner } from "@/components/CTABanner";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Marquee } from "@/components/Marquee";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-clip">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Process />
      <About />
      <Services />
      <CTABanner />
      <Testimonials />
      <Marquee />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
