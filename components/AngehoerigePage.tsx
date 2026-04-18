"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  ArrowRight,
  Phone,
  Heart,
  Shield,
  Users,
  Home,
  AlertCircle,
  Quote,
  Plus,
} from "lucide-react";
import { Footer } from "./Footer";
import { SubPageNav } from "./SubPageNav";

const concerns = [
  {
    icon: AlertCircle,
    title: "Die Sorge vor dem ersten Sturz",
    text: "Sie beobachten, dass Ihre Mutter oder Ihr Vater unsicher wird beim Gehen. Die Treppen werden zur Hürde. Sie wollen nicht warten, bis etwas passiert.",
  },
  {
    icon: Heart,
    title: "Der Rückzug ins Haus",
    text: "Früher aktiv, heute kaum mehr draußen. Spaziergänge werden seltener, Verabredungen abgesagt. Der Körper verliert schneller, als man denkt.",
  },
  {
    icon: Users,
    title: "Die räumliche Distanz",
    text: "Sie wohnen weit weg und können nicht täglich vorbeischauen. Ein verlässlicher Mensch, der regelmäßig vorbeikommt, wäre eine Erleichterung für alle.",
  },
  {
    icon: Shield,
    title: "Die Angst vor dem Fitnessstudio",
    text: "Ihre Eltern würden nie von sich aus in ein Studio gehen. Zu laut, zu anonym, zu jung. Training in vertrauter Umgebung ist der einzige Weg, der funktioniert.",
  },
];

const benefits = [
  {
    title: "Training kommt ins Haus",
    text: "Keine Anfahrten, kein Umziehen in fremden Räumen, keine Überwindung. Marco kommt mit allem Nötigen – Ihre Eltern müssen nur die Tür öffnen.",
  },
  {
    title: "Individuelle Betreuung",
    text: "Anders als in der Gruppe: Jede Übung wird auf den aktuellen Gesundheitsstand angepasst. Gelenke, Medikamente, Tagesform – alles wird berücksichtigt.",
  },
  {
    title: "Fester Ansprechpartner",
    text: "Ihre Eltern trainieren immer mit Marco – nicht mit wechselndem Personal. Das schafft Vertrauen und macht Fortschritte sichtbar.",
  },
  {
    title: "Sie bleiben informiert",
    text: "Auf Wunsch erhalten Sie regelmäßige Updates zum Trainingsstand. So wissen Sie, dass es voran geht – auch wenn Sie nicht vor Ort sein können.",
  },
];

const how = [
  {
    num: "01",
    title: "Kostenloses Gespräch",
    text: "Sie (oder Ihre Eltern) rufen mich an. Wir besprechen die Situation, die Sorgen und die Ziele. Kein Druck, keine Verpflichtung.",
  },
  {
    num: "02",
    title: "Kennenlernen vor Ort",
    text: "Ich komme bei Ihren Eltern vorbei – kostenlos und unverbindlich. Wir schauen zusammen, ob die Chemie stimmt. Denn ohne Vertrauen kein Training.",
  },
  {
    num: "03",
    title: "Regelmäßiges Training",
    text: "Wenn alle einverstanden sind, starten wir. 1-2 Mal pro Woche, 60 Minuten, immer im vertrauten Zuhause. Abrechnung flexibel – Sie können auch für Ihre Eltern bezahlen.",
  },
];

const faqs = [
  {
    q: "Meine Eltern wollen eigentlich gar nicht trainieren. Geht das trotzdem?",
    a: "Das ist völlig normal – fast alle meine Kunden waren anfangs skeptisch. Lassen Sie uns ein kostenloses Kennenlernen vereinbaren. Ich bin es gewohnt, Menschen dort abzuholen, wo sie stehen. Viele, die anfangs nicht wollten, freuen sich heute auf jede Einheit.",
  },
  {
    q: "Meine Mutter hat Demenz. Ist das trotzdem möglich?",
    a: "Ja, Bewegung ist bei Demenz besonders wertvoll. Ich habe Erfahrung mit kognitiven Einschränkungen und passe das Training entsprechend an. Sprechen Sie mich im Erstgespräch offen darauf an.",
  },
  {
    q: "Mein Vater wohnt alleine. Kann ich das Training für ihn buchen und bezahlen?",
    a: "Selbstverständlich. Viele Angehörige buchen und bezahlen das Training für ihre Eltern. Die Rechnung kann auf Sie ausgestellt werden.",
  },
  {
    q: "Wie weit fährt Marco?",
    a: "Im Umkreis von 30 km um München. Für weitere Entfernungen (z.B. Oberbayerische Umgebung) sprechen wir individuell.",
  },
  {
    q: "Kann ich bei der ersten Einheit dabei sein?",
    a: "Gerne. Viele Familien wünschen sich das – gerade am Anfang. Danach entscheiden Sie und Ihre Eltern, wie es weitergeht.",
  },
  {
    q: "Was, wenn es gesundheitlich Probleme gibt?",
    a: "Ich bin zertifizierter Trainer mit Zusatzqualifikation im Bereich Senioren-Sport und Reha. Bei Unsicherheiten stimme ich das Training mit dem behandelnden Arzt ab.",
  },
];

export function AngehoerigePage() {
  return (
    <main id="main-content" className="bg-cream min-h-screen">
      <SubPageNav />
      <Hero />
      <Concerns />
      <Benefits />
      <How />
      <QuoteBlock />
      <FaqSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-forest text-cream overflow-hidden flex items-center"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[1] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-teal/25 blur-[90px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-mint/15 blur-[100px]" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full py-16 lg:py-24"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mint/30 bg-mint/5 mb-8"
          >
            <Heart size={14} className="text-mint" />
            <span className="text-[0.7rem] tracking-[0.2em] uppercase text-mint font-semibold">
              Für Kinder, Enkel und Angehörige
            </span>
          </motion.div>

          <motion.h1 style={{ y: headlineY }} className="font-display font-bold leading-[0.95]">
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
                style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
              >
                Sie sorgen sich.
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="block text-teal italic"
                style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
              >
                Ich kümmere mich.
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 lg:mt-12 text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl font-light"
          >
            Wenn Sie merken, dass Ihre Eltern oder Großeltern körperlich
            abbauen, aber nie in ein Fitnessstudio gehen würden – dann ist
            Personal Training zuhause der einzige Weg, der funktioniert. Ich
            komme zu ihnen. Regelmäßig. Mit Geduld. Mit Herz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/erstgespraech"
              className="group inline-flex items-center gap-3 bg-teal hover:bg-mint text-forest pl-7 pr-2 py-2 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-teal/30"
            >
              <span>Kostenlos kennenlernen</span>
              <span className="w-11 h-11 rounded-full bg-forest text-teal group-hover:bg-cream group-hover:text-forest flex items-center justify-center transition-colors">
                <ArrowRight size={16} />
              </span>
            </Link>
            <a
              href="tel:+491726223371"
              className="inline-flex items-center gap-2 text-white/70 hover:text-mint transition-colors"
            >
              <Phone size={16} />
              <span className="font-mono text-sm">
                oder anrufen: +49 172 6223371
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

/* Sticky scrollytelling concerns */
function Concerns() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  return (
    <section className="bg-cream">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-24 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            Kommt Ihnen bekannt vor?
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1]">
            Diese Sorgen höre ich{" "}
            <span className="italic text-teal">jede Woche.</span>
          </h2>
        </motion.div>
      </div>

      {/* Sticky Scrollytelling */}
      <div
        ref={containerRef}
        style={{ height: `${concerns.length * 100}vh` }}
        className="relative"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <ConcernBgIcon progress={smoothProgress} />
          <ConcernRail progress={smoothProgress} />

          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 lg:col-start-2 relative min-h-[380px]">
                {concerns.map((c, i) => (
                  <ConcernCopy
                    key={i}
                    concern={c}
                    index={i}
                    total={concerns.length}
                    progress={smoothProgress}
                  />
                ))}
              </div>
            </div>
          </div>

          <ConcernIndicator progress={smoothProgress} />
        </div>
      </div>
    </section>
  );
}

function ConcernBgIcon({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {concerns.map((c, i) => {
        const segment = 1 / concerns.length;
        const start = i * segment;
        const end = start + segment;
        const isFirst = i === 0;
        const isLast = i === concerns.length - 1;
        const opacity = useTransform(
          progress,
          [
            isFirst ? -1 : start - 0.05,
            isFirst ? -1 : start + 0.05,
            isLast ? 2 : end - 0.05,
            isLast ? 2 : end + 0.05,
          ],
          [isFirst ? 0.07 : 0, 0.07, 0.07, isLast ? 0.07 : 0]
        );
        const rotate = useTransform(
          progress,
          [start, end],
          [i % 2 === 0 ? -8 : 8, i % 2 === 0 ? 8 : -8]
        );
        const Icon = c.icon;
        return (
          <motion.div
            key={i}
            style={{ opacity, rotate, willChange: "transform, opacity" }}
            className="absolute inset-0 flex items-center justify-end pr-4 lg:pr-24"
          >
            <Icon
              strokeWidth={1}
              className="text-forest select-none"
              style={{ width: "clamp(14rem, 40vw, 40rem)", height: "clamp(14rem, 40vw, 40rem)" }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

function ConcernRail({ progress }: { progress: MotionValue<number> }) {
  const height = useTransform(progress, [0, 1], ["0%", "100%"]);
  const currentConcern = useTransform(progress, (v) => {
    const idx = Math.min(concerns.length - 1, Math.floor(v * concerns.length));
    return String(idx + 1).padStart(2, "0");
  });

  return (
    <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">
      <div className="relative w-px h-[50vh] bg-forest/10">
        <motion.div
          style={{ height, willChange: "height" }}
          className="absolute inset-x-0 top-0 bg-coral"
        />
      </div>
      <div className="font-mono text-xs text-slate flex items-center gap-2">
        <motion.span className="text-forest font-semibold">
          {currentConcern}
        </motion.span>
        <span className="text-forest/30">/</span>
        <span className="text-forest/30">
          {String(concerns.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

function ConcernCopy({
  concern,
  index,
  total,
  progress,
}: {
  concern: (typeof concerns)[number];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const segment = 1 / total;
  const start = index * segment;
  const end = start + segment;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    [
      isFirst ? -1 : start - 0.05,
      isFirst ? -1 : start + 0.05,
      isLast ? 2 : end - 0.05,
      isLast ? 2 : end + 0.05,
    ],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );
  const y = useTransform(
    progress,
    [
      isFirst ? -1 : start - 0.05,
      isFirst ? -1 : start + 0.05,
      isLast ? 2 : end - 0.05,
      isLast ? 2 : end + 0.05,
    ],
    [isFirst ? 0 : 40, 0, 0, isLast ? 0 : -40]
  );

  const Icon = concern.icon;

  return (
    <motion.div
      style={{ opacity, y, willChange: "transform, opacity" }}
      className="absolute inset-x-0"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center">
          <Icon size={20} />
        </div>
        <div className="font-mono text-xs text-slate tracking-widest">
          SORGE {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>
      <h3
        className="font-display font-bold text-forest leading-[0.95] mb-6 lg:mb-8"
        style={{ fontSize: "clamp(2.25rem, 6vw, 5rem)" }}
      >
        {concern.title}
      </h3>
      <p className="text-lg lg:text-xl text-slate leading-relaxed max-w-2xl font-light">
        {concern.text}
      </p>
    </motion.div>
  );
}

function ConcernIndicator({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
      {concerns.map((_, i) => {
        const segment = 1 / concerns.length;
        const start = i * segment;
        const end = start + segment;
        const active = useTransform(
          progress,
          [start, start + 0.1, end - 0.1, end],
          [0, 1, 1, 0]
        );
        const width = useTransform(active, [0, 1], [24, 48]);
        const bg = useTransform(active, [0, 1], ["#1A3C3430", "#E17055"]);
        return (
          <motion.div
            key={i}
            style={{ width, backgroundColor: bg as any, willChange: "width" }}
            className="h-1 rounded-full"
          />
        );
      })}
    </div>
  );
}

function Benefits() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-forest text-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14 lg:mb-20"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-mint mb-4">
            Was ich anders mache
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1]">
            Personal Training,
            <br />
            <span className="italic text-white/40">das funktioniert.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-forest-mid border border-white/10 rounded-3xl p-7 sm:p-9 hover:border-teal/40 transition-colors"
            >
              <div className="font-display font-bold text-xl sm:text-2xl mb-3 leading-tight">
                {b.title}
              </div>
              <p className="text-white/65 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function How() {
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-14"
        >
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-4">
            So läuft's ab
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1]">
            Drei Schritte.
            <br />
            <span className="italic text-forest/40">Keine Eile.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {how.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-white border border-sand rounded-3xl p-7 sm:p-9 hover:shadow-lg transition-shadow"
            >
              <div className="font-display font-bold text-6xl text-forest/10 leading-none mb-4">
                {step.num}
              </div>
              <div className="font-display font-bold text-2xl text-forest mb-3 leading-tight">
                {step.title}
              </div>
              <p className="text-slate leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteBlock() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-forest text-cream">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10">
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative text-center"
        >
          <Quote
            className="mx-auto text-mint/40 mb-6"
            size={48}
          />
          <blockquote
            className="font-display italic leading-[1.2] text-cream mb-8"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            &ldquo;Training im Alter ist nicht dazu da, Höchstleistungen zu
            bringen – sondern Sicherheit, Kraft und Lebensqualität im Alltag
            zu verbessern. Wer rastet, der rostet.&rdquo;
          </blockquote>
          <figcaption className="text-sm text-white/50">
            Marco Degel · Fit mit Marco
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 sm:py-28 lg:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-teal mb-3">
            Häufige Fragen
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-forest leading-[1]">
            Das fragen Angehörige mich
          </h2>
        </div>
        <div className="space-y-2.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen
                    ? "bg-forest text-white border-forest"
                    : "bg-white border-sand hover:border-teal/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display font-bold text-base sm:text-lg leading-snug ${
                      isOpen ? "text-white" : "text-forest"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                      isOpen ? "bg-teal rotate-45 text-forest" : "bg-cream text-teal"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/80 leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-teal/15 text-teal flex items-center justify-center mb-6">
          <Home size={28} />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-forest leading-[1] mb-6">
          Lassen Sie uns reden.
        </h2>
        <p className="text-lg text-slate max-w-xl mx-auto leading-relaxed mb-10">
          Ein unverbindliches Telefonat, 15 Minuten. Sie erzählen mir von der
          Situation, ich sage Ihnen ehrlich, ob ich helfen kann – und wenn ja,
          wie.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+491726223371"
            className="group inline-flex items-center gap-3 bg-forest hover:bg-teal text-white hover:text-forest pl-7 pr-2 py-2 rounded-full font-semibold transition-all hover:shadow-2xl hover:shadow-teal/30"
          >
            <span>+49 172 6223371</span>
            <span className="w-11 h-11 rounded-full bg-teal text-forest group-hover:bg-forest group-hover:text-teal flex items-center justify-center transition-colors">
              <Phone size={16} />
            </span>
          </a>
          <Link
            href="/erstgespraech"
            className="inline-flex items-center gap-2 text-forest hover:text-teal font-semibold transition-colors"
          >
            Oder Formular ausfüllen
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
