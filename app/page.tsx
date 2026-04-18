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
import {
  JsonLd,
  localBusinessSchema,
  personSchema,
  websiteSchema,
  makeFaqSchema,
} from "@/components/StructuredData";

const homeFaq = [
  {
    q: "Ist Personal Training im Alter überhaupt noch sinnvoll?",
    a: "Ja, gerade im Alter ist gezieltes Training wichtig, um Kraft, Gleichgewicht, Mobilität und Selbstständigkeit zu erhalten.",
  },
  {
    q: "Muss ich fit sein oder Vorerfahrung haben?",
    a: "Nein. Das Training wird individuell an deinen aktuellen Gesundheitszustand und dein persönliches Niveau angepasst.",
  },
  {
    q: "Findet das Training bei mir zu Hause statt?",
    a: "Ja, das Training kann bequem bei dir zu Hause oder nach Absprache an einem geeigneten Ort stattfinden.",
  },
  {
    q: "Was passiert beim ersten Termin?",
    a: "Im kostenlosen Erstgespräch lernen wir uns kennen, besprechen Ziele, Beschwerden und Alltag, damit das Training sicher und passend aufgebaut werden kann.",
  },
  {
    q: "Wie oft sollte ich trainieren?",
    a: "Für viele Kunden sind 1 bis 2 Einheiten pro Woche ein guter Start, ergänzt durch einfache Übungen für den Alltag.",
  },
  {
    q: "Kann ich auch gemeinsam mit meinem Partner trainieren?",
    a: "Ja, Partnertraining ist möglich. Für zwei Personen kommt ein Aufpreis von 30 € pro Einheit dazu.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="overflow-x-clip">
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={personSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={makeFaqSchema(homeFaq)} />

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
