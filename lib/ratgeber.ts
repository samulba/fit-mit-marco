/**
 * Blog / Ratgeber content.
 * Each article is a self-contained, SEO-optimized piece targeting
 * realistic long-tail searches for the senior personal-training space.
 *
 * Every article has:
 *   - slug, title, excerpt (shown in listings + meta description)
 *   - hero image / color
 *   - category + reading time (computed from word count)
 *   - body made of typed blocks (paragraph, heading, list, callout, quote, cta)
 *   - internal links to /leistungen/* and /erstgespraech where natural
 *   - publish date + last updated
 *
 * The array order = display order on /ratgeber (newest first).
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string }
  | { type: "cta"; href: string; label: string; sub?: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  published: string; // ISO date
  updated?: string;
  author: "Marco Degel";
  keywords: string[];
  accent: "teal" | "mint" | "sage" | "gold" | "coral";
  body: ArticleBlock[];
};

/* ───────────────────────────────────────────────────────────── */

export const articles: Article[] = [
  {
    slug: "personal-trainer-ab-60-was-dich-erwartet",
    title: "Personal Trainer ab 60: Was dich wirklich erwartet",
    metaTitle:
      "Personal Trainer ab 60: Was dich wirklich erwartet | Fit mit Marco",
    metaDescription:
      "Ehrlicher Einblick: Wie Personal Training mit 60, 70 oder 80 wirklich abläuft, was du davon hast und welche Mythen einfach nicht stimmen.",
    excerpt:
      `Viele denken beim Wort „Personal Trainer” an schwitzende 30-Jährige im Fitnessstudio. Hier erfährst du, wie es wirklich ist, wenn jemand nach Hause kommt und Training für deine Lebenssituation plant.`,
    category: "Wissenswert",
    published: "2026-02-10",
    author: "Marco Degel",
    keywords: [
      "Personal Trainer ab 60",
      "Personal Training Senioren",
      "Fitness ab 60 München",
      "Training mit 70",
    ],
    accent: "teal",
    body: [
      {
        type: "p",
        text: `Wenn ich den Begriff „Personal Trainer” höre, sehe ich oft, wie Menschen innerlich zurückweichen. Zu anstrengend. Zu intensiv. Zu sehr „Leistungssport”. Dabei hat Personal Training mit einer sinnvollen Gesundheitsbegleitung ab 60 sehr wenig mit Fitnessstudio-Klischees zu tun.`,
      },
      {
        type: "p",
        text: "In diesem Artikel zeige ich dir ehrlich, wie eine Stunde bei mir abläuft, was du realistisch davon hast und wofür du kein Training bezahlen solltest.",
      },
      { type: "h2", text: "Training ab 60 ist kein Workout" },
      {
        type: "p",
        text: "Der Unterschied beginnt schon beim Ziel. Mit 25 trainiert man, um besser auszusehen oder schneller zu sein. Ab 60 trainieren wir, damit du dein Leben weiterhin selbst gestalten kannst. Allein einkaufen. Ohne Unsicherheit Treppen steigen. Die Enkelkinder hochheben. Ohne Schmerzen Socken anziehen. Das sind die echten Ziele.",
      },
      {
        type: "p",
        text: "Jede Übung, die wir machen, hat einen direkten Bezug zu einer Alltagssituation. Es geht nicht um Hanteln. Es geht um Lebensqualität.",
      },
      { type: "h2", text: "Wie läuft eine typische Stunde ab?" },
      {
        type: "p",
        text: "Du öffnest die Tür. Ich bringe Bänder, zwei kleine Hanteln, eine Matte – fertig. Kein großes Equipment, keine Umkleide, keine fremden Menschen. Eine Stunde teilt sich grob so auf:",
      },
      {
        type: "list",
        items: [
          "5 Minuten kurzes Gespräch: Wie geht's heute? Wo zwickt es?",
          "10 Minuten Aufwärmen: Mobilität, Gelenke vorbereiten",
          "35 Minuten Hauptteil: Kraft, Balance oder Beweglichkeit – je nach Ziel",
          "10 Minuten Abschluss: Dehnen, zwei Alltagsempfehlungen, kurzes Ausklingen",
        ],
      },
      {
        type: "callout",
        title: "Wichtig",
        text: "Du bist nie der Zuschauer. Jede Übung mache ich vor, wir sprechen über das Gefühl, und wenn etwas unangenehm ist, wechseln wir. Training ohne Zuhören ist kein Training.",
      },
      { type: "h2", text: "Was bringt das realistisch?" },
      {
        type: "p",
        text: "Bei regelmäßigem Training (1–2 Mal pro Woche) sehe ich bei den meisten Menschen nach 6 bis 12 Wochen spürbare Unterschiede. Treppen werden leichter. Der Stand wird sicherer. Morgensteife verschwindet. Und – das unterschätzt fast jeder – das Selbstvertrauen wächst. Du traust dich wieder an Dinge heran, die du schon abgeschrieben hattest.",
      },
      {
        type: "quote",
        text: "Training im Alter ist nicht dazu da, Höchstleistungen zu bringen. Es geht um Sicherheit, Kraft und Lebensqualität im Alltag. Wer rastet, der rostet.",
      },
      { type: "h2", text: "Wofür solltest du nicht bezahlen?" },
      {
        type: "p",
        text: "Ein seriöser Personal Trainer hört zu, bevor er etwas verkauft. Wenn du das Gefühl hast, dass Pakete angeboten werden, bevor deine Situation überhaupt klar ist, wirst du nicht gesehen. Das erste Gespräch sollte immer kostenlos und ohne Druck sein.",
      },
      {
        type: "p",
        text: `Genauso misstrauisch solltest du sein bei: pauschalen Versprechen („Nach 4 Wochen 10 Jahre jünger!”), Aussagen ohne Rückbezug zu deinem Gesundheitszustand oder Übungen, die dir trotz Bedenken aufgedrängt werden.`,
      },
      { type: "h2", text: "Ein paar konkrete Fragen, die du stellen darfst" },
      {
        type: "list",
        items: [
          "Hast du Erfahrung mit meiner konkreten Situation (z. B. nach Hüft-OP)?",
          "Wie sieht der Plan aus, wenn ich an einem Tag weniger kann?",
          "Was machst du, wenn ich plötzlich Schmerzen bekomme?",
          "Wie viel Eigenarbeit erwartest du von mir zwischen den Einheiten?",
        ],
      },
      {
        type: "p",
        text: "Die Antworten sagen dir viel mehr als jede Zertifikatsliste. Training ist Beziehungsarbeit.",
      },
      {
        type: "cta",
        href: "/erstgespraech",
        label: "Kostenloses Erstgespräch",
        sub: "30 Minuten, unverbindlich – telefonisch oder vor Ort",
      },
    ],
  },

  {
    slug: "5-uebungen-gegen-rueckenschmerzen-im-alter",
    title: "5 einfache Übungen gegen Rückenschmerzen im Alter",
    metaTitle:
      "5 einfache Übungen gegen Rückenschmerzen im Alter | Fit mit Marco",
    metaDescription:
      "Fünf alltagstaugliche Übungen gegen Rückenschmerzen, die du zuhause machen kannst. Mit Hinweisen, wann du besser zum Arzt gehst.",
    excerpt:
      "Rückenschmerzen sind ein Dauerthema ab 60. Diese fünf Übungen sind sanft, ohne Geräte und brauchen weniger als 10 Minuten am Tag – mit klaren Hinweisen, wann Arzt oder Physio dran sind.",
    category: "Übungen",
    published: "2026-02-02",
    author: "Marco Degel",
    keywords: [
      "Rückenschmerzen Senioren Übungen",
      "Rückentraining ab 60",
      "Übungen gegen Rückenschmerzen",
      "Rückenschmerzen zuhause",
    ],
    accent: "mint",
    body: [
      {
        type: "p",
        text: "Rückenschmerzen sind das häufigste Thema, das Menschen zu mir führen. Die gute Nachricht: Ein großer Teil davon reagiert sehr gut auf regelmäßige, einfache Bewegung. Hier sind fünf Übungen, die ich mit vielen Kundinnen und Kunden mache – ohne Equipment und für den Morgen oder Abend gedacht.",
      },
      {
        type: "callout",
        title: "Vor dem Start",
        text: "Übungen ersetzen nicht den Arzt. Wenn du akute starke Schmerzen, Taubheitsgefühle oder Schmerzen im Bein hast, bitte vorher abklären lassen.",
      },
      { type: "h2", text: "1. Katze-Kuh (sanft, für den ganzen Rücken)" },
      {
        type: "p",
        text: "Stell dich hinter einen stabilen Stuhl, halte die Lehne mit beiden Händen. Lass den Rücken langsam durchhängen (Kuh) und runde ihn dann sanft (Katze). Atme dabei ruhig. 8–10 Wiederholungen.",
      },
      { type: "h3", text: "Was das bringt" },
      {
        type: "p",
        text: "Mobilisiert die gesamte Wirbelsäule und löst die kleinen Gelenke zwischen den Wirbeln. Ideal am Morgen.",
      },
      { type: "h2", text: "2. Halbe Rumpfdrehung im Sitzen" },
      {
        type: "p",
        text: "Setz dich aufrecht auf einen Stuhl, die Füße flach auf dem Boden. Leg die linke Hand an die rechte Schulter, rechte Hand greift die Stuhllehne hinter dir. Langsam nach rechts drehen, 3 Sekunden halten. Dann Seite wechseln. 5× pro Seite.",
      },
      { type: "h3", text: "Worauf achten" },
      {
        type: "p",
        text: "Nicht ruckartig drehen. Der Hals soll leicht der Bewegung folgen, aber nicht überdrehen.",
      },
      { type: "h2", text: "3. Brücke (stärkt Gesäß + unteren Rücken)" },
      {
        type: "p",
        text: "Leg dich auf den Rücken (auf einer Matte oder dem Bett), Knie angewinkelt, Füße hüftbreit aufgestellt. Heb das Becken langsam ab, bis der Körper eine flache Linie von Knien zu Schultern bildet. 3 Sekunden halten, langsam absenken. 8 Wiederholungen.",
      },
      { type: "h2", text: "4. Wandabstütz-Kräftigung" },
      {
        type: "p",
        text: "Stell dich etwa 40 cm vor eine Wand, lege die Handflächen flach an die Wand. Langsam die Ellenbogen beugen und den Oberkörper zur Wand bringen, dann drücken. Das ist eine sehr sanfte, rückenfreundliche Form von Liegestütz. 8–10 Wiederholungen.",
      },
      { type: "h2", text: "5. Dehnung der Rückseite (Oberschenkel)" },
      {
        type: "p",
        text: "Im Sitzen: Ein Bein langsam ausstrecken, die Zehen zu dir heranziehen. Beug dich leicht nach vorne, bis du ein angenehmes Ziehen auf der Rückseite des Oberschenkels spürst. 20 Sekunden halten, Seite wechseln.",
      },
      {
        type: "callout",
        title: "Wann zum Arzt",
        text: "Wenn Schmerzen plötzlich auftreten, in Bein oder Arm ausstrahlen, mit Taubheitsgefühl einhergehen oder du nachts davon aufwachst – bitte nicht mit Übungen experimentieren. Ab zum Arzt oder Physio.",
      },
      { type: "h2", text: "Wie oft üben?" },
      {
        type: "p",
        text: "Ideal sind 3–5 Mal die Woche, jeweils etwa 8 Minuten. Wichtiger als die Intensität ist die Regelmäßigkeit. Nach 3–4 Wochen merken die meisten Menschen einen klaren Unterschied.",
      },
      {
        type: "p",
        text: "Wenn du eine individuelle Anleitung möchtest, die auf deinen Körper passt, zeige ich dir die Übungen gerne bei einem kostenlosen Erstgespräch – wir schauen dann, was für dich wirklich funktioniert.",
      },
      {
        type: "cta",
        href: "/leistungen/beweglichkeit-mobilitaet",
        label: "Mehr zu Beweglichkeitstraining",
        sub: "Mein Ansatz für einen beweglicheren Rücken",
      },
    ],
  },

  {
    slug: "sturzpraevention-zuhause-checkliste",
    title: "Sturzprävention zuhause: Die 7-Punkte-Checkliste",
    metaTitle:
      "Sturzprävention zuhause: Die 7-Punkte-Checkliste | Fit mit Marco",
    metaDescription:
      "Wohnung, Training, Schuhe, Licht: sieben konkrete Bausteine, mit denen du dein Sturzrisiko zuhause nachweislich senken kannst.",
    excerpt:
      "Ein Sturz kann im Alter alles verändern. Mit dieser Checkliste gehst du systematisch durch die wichtigsten Bausteine – von der Wohnungsgestaltung bis zum Gleichgewichtstraining.",
    category: "Sicherheit",
    published: "2026-01-25",
    author: "Marco Degel",
    keywords: [
      "Sturzprävention Senioren",
      "Sturzprävention zuhause",
      "Sturz vermeiden im Alter",
      "Gleichgewichtstraining Senioren",
    ],
    accent: "coral",
    body: [
      {
        type: "p",
        text: "Stürze zählen zu den häufigsten Gründen, warum Menschen im Alter ihre Selbstständigkeit verlieren. Die gute Nachricht: Der größte Teil des Sturzrisikos ist beeinflussbar. Hier ist eine strukturierte Checkliste mit sieben Punkten, die ich mit meinen Kunden regelmäßig durchgehe.",
      },
      { type: "h2", text: "1. Stolperfallen im Flur und Wohnraum" },
      {
        type: "list",
        items: [
          "Teppichkanten fixiert oder entfernt",
          "Kabel aus Gehwegen verlegt",
          "Lose Läufer weg",
          "Schuhe, Zeitungen, Katzenspielzeug aus Laufwegen raus",
        ],
      },
      { type: "h2", text: "2. Beleuchtung" },
      {
        type: "p",
        text: "In Flur, Treppenhaus und Bad sollte auch nachts genug Licht sein. Nachtlichter mit Bewegungsmelder (20 € im Baumarkt) sind ein Minimaleingriff mit großer Wirkung.",
      },
      { type: "h2", text: "3. Badezimmer" },
      {
        type: "list",
        items: [
          "Anti-Rutsch-Matte in der Dusche oder Wanne",
          "Haltegriffe dort, wo du sie brauchst (kein Scham, sondern klug)",
          "Rutschfeste Fußmatte vor der Dusche",
        ],
      },
      { type: "h2", text: "4. Schuhe" },
      {
        type: "p",
        text: "Offene Hausschuhe, abgetragene Sohlen und Schlappen sind mit die häufigste Sturzursache drinnen. Investiere in feste, rutschfeste Hausschuhe – ich empfehle Modelle mit Fersenkappe, die du beim Anziehen nicht mehr verlieren kannst.",
      },
      { type: "h2", text: "5. Sehen und Hören" },
      {
        type: "p",
        text: "Brille und Hörgeräte regelmäßig prüfen lassen. Wer schlecht sieht oder hört, reagiert langsamer auf Unebenheiten und verliert das Gleichgewicht schneller.",
      },
      { type: "h2", text: "6. Medikamente checken" },
      {
        type: "p",
        text: `Viele Medikamente (z. B. manche Blutdruck- oder Schlafmittel) können Schwindel fördern. Es lohnt sich, mit dem Hausarzt einmal jährlich die komplette Liste durchzugehen – Stichwort „Medikations-Check für Senioren”.`,
      },
      { type: "h2", text: "7. Gleichgewichtstraining" },
      {
        type: "p",
        text: "Der mit Abstand wirksamste Baustein. Wer 1–2 Mal pro Woche gezielt Balance und Kraft trainiert, kann das Sturzrisiko deutlich senken. Typische Übungen: Einbeinstand, sicheres Gehen über Unebenheiten, Richtungswechsel, Aufstehen aus dem Stuhl ohne Hände.",
      },
      {
        type: "callout",
        title: "Tipp",
        text: "Hängst du einen einfachen Zettel an die Tür mit den sieben Punkten, gehst du alle 2–3 Monate einmal durch. Die Umgebung verändert sich – dein Check mit.",
      },
      { type: "h2", text: "Wenn du schon mal gestürzt bist" },
      {
        type: "p",
        text: `Dann ist gezieltes Training besonders wichtig. Nach einem Sturz baut sich Angst auf, die wiederum zu steiferen Bewegungen führt – und das Sturzrisiko erhöht. Einen einmaligen Sturz ohne Training einfach „hinter sich zu lassen” ist selten eine gute Strategie.`,
      },
      {
        type: "cta",
        href: "/leistungen/balance-sturzpraevention",
        label: "Zur Leistung: Balance & Sturzprävention",
        sub: "Wie ich Sturzprävention konkret aufbaue",
      },
    ],
  },

  {
    slug: "krafttraining-mit-70-mythen",
    title: "Krafttraining mit 70: Drei Mythen, die dich lähmen",
    metaTitle:
      "Krafttraining mit 70: Drei Mythen, die dich lähmen | Fit mit Marco",
    metaDescription:
      `„Ich bin zu alt”, „Muskeln gehen eh verloren”, „Es ist gefährlich”: drei Glaubenssätze, warum Senioren nicht trainieren – und warum sie alle falsch sind.`,
    excerpt:
      "Die drei häufigsten Gründe, warum Menschen ab 70 kein Krafttraining machen, klingen plausibel – stimmen aber nicht. Hier die Fakten.",
    category: "Wissenswert",
    published: "2026-01-16",
    author: "Marco Degel",
    keywords: [
      "Krafttraining mit 70",
      "Krafttraining Senioren",
      "Muskelaufbau im Alter",
      "Fitness ab 70",
    ],
    accent: "sage",
    body: [
      {
        type: "p",
        text: "Wenn ich mit Menschen ab 70 über Krafttraining spreche, höre ich immer wieder die gleichen drei Sätze. Sie klingen vernünftig, manchmal sogar wie Bescheidenheit. In Wirklichkeit halten sie Menschen davon ab, genau das zu tun, was ihnen am meisten helfen würde. Schauen wir uns die Mythen einzeln an.",
      },
      { type: "h2", text: "Mythos 1: „Ich bin zu alt dafür”" },
      {
        type: "p",
        text: "Studien zeigen seit über 20 Jahren eindeutig: Menschen ab 70, sogar ab 80 können durch Krafttraining deutlich Muskulatur aufbauen. Der Körper reagiert auf den richtigen Reiz, egal wie alt er ist. Es dauert vielleicht etwas länger als mit 30, aber der Mechanismus ist derselbe.",
      },
      {
        type: "p",
        text: "Was tatsächlich gegen dich arbeitet, ist nicht dein Alter – sondern Bewegungsmangel. Der ist aber umkehrbar, und zwar ab dem ersten Tag.",
      },
      { type: "h2", text: "Mythos 2: „Krafttraining ist gefährlich”" },
      {
        type: "p",
        text: `Krafttraining im Sinne von „bei mir zuhause mit Bändern und kleinen Hanteln unter Anleitung” gehört zu den sichersten Formen von Bewegung, die es gibt. Im Gegensatz zu Joggen oder schnellem Gehen musst du nicht in eine unvorhersehbare Umgebung (Gehweg, Wurzeln, Nässe).`,
      },
      {
        type: "p",
        text: "Gefährlich wird's, wenn du ohne Anleitung in ein Fitnessstudio gehst und Geräte einstellst, die nicht auf dich passen. Aber das ist ja nicht, was ich mit dir mache.",
      },
      { type: "h2", text: "Mythos 3: „Muskeln aufbauen geht ab 70 eh nicht mehr”" },
      {
        type: "p",
        text: "Das ist einer der hartnäckigsten Irrtümer. Richtig ist: Du baust Muskeln mit 70 langsamer auf als mit 40. Aber du baust sie auf. Und selbst geringe Zuwächse machen im Alltag einen enormen Unterschied – weil die Ausgangslage durch Bewegungsmangel oft so niedrig ist, dass jede Verbesserung unmittelbar spürbar ist.",
      },
      {
        type: "quote",
        text: "Wer in der Woche zweimal 30 Minuten wirklich kraftvoll trainiert, hat in drei Monaten mehr Muskel aufgebaut, als sie in fünf Jahren ohne Training verlieren würde.",
      },
      { type: "h2", text: "Was wirklich gilt" },
      {
        type: "list",
        items: [
          "Die ersten Erfolge merkt man eher an Kraft und Koordination als an sichtbarer Muskelmasse.",
          "Auch der Knochen profitiert – wichtige Prävention gegen Osteoporose.",
          "Der mentale Effekt ist oft größer als der körperliche: wieder Vertrauen in den eigenen Körper.",
        ],
      },
      { type: "h2", text: "Wie du starten kannst, ohne dich zu überfordern" },
      {
        type: "p",
        text: "Ein realistischer Einstieg sieht so aus: 1–2 Mal pro Woche jeweils 60 Minuten mit Anleitung, dazwischen 10–15 Minuten einfache Übungen zuhause. Nicht mehr. Der Körper braucht Pausen, um stärker zu werden – das ist gerade im Alter wichtig.",
      },
      {
        type: "p",
        text: "Und: Fang klein an. Drei gute Wochen mit wenig Einheiten sind besser als eine überambitionierte Woche, nach der du drei Monate nichts mehr machst.",
      },
      {
        type: "cta",
        href: "/leistungen/kraft-muskelaufbau",
        label: "Zur Leistung: Kraft & Muskelaufbau",
        sub: "Wie ich den Einstieg gemeinsam mit dir gestalte",
      },
    ],
  },

  {
    slug: "wie-oft-trainieren-senioren",
    title: "Wie oft sollten Senioren trainieren? Eine ehrliche Antwort",
    metaTitle:
      "Wie oft sollten Senioren trainieren? Eine ehrliche Antwort | Fit mit Marco",
    metaDescription:
      "Die weltweiten Empfehlungen sagen 150 Minuten moderate Bewegung pro Woche. Aber was heißt das praktisch? Hier eine alltagstaugliche Antwort von einem Personal Trainer für Senioren.",
    excerpt:
      `„So viel wie möglich” hilft dir nicht. Hier die ehrliche Antwort, wie oft realistisch – und was passiert, wenn es weniger ist.`,
    category: "Wissenswert",
    published: "2026-01-06",
    author: "Marco Degel",
    keywords: [
      "Wie oft trainieren Senioren",
      "Trainingshäufigkeit ab 60",
      "Bewegungsempfehlungen Senioren",
      "Senioren Fitness Plan",
    ],
    accent: "gold",
    body: [
      {
        type: "p",
        text: "Die Weltgesundheitsorganisation empfiehlt Erwachsenen 150 Minuten moderate Bewegung pro Woche plus zweimal Krafttraining. Klingt nach viel. In der Praxis kann man das so aufteilen, dass es gut in einen normalen Wochenplan passt.",
      },
      { type: "h2", text: "Die realistische Zielmarke für Senioren" },
      {
        type: "list",
        items: [
          "1–2× pro Woche Personal Training oder Gruppentraining (jeweils 60 Minuten)",
          "3–5× pro Woche 20–30 Minuten spazieren gehen",
          "Täglich 5–10 Minuten einfache Übungen zuhause (Mobilisation, Gleichgewicht)",
        ],
      },
      {
        type: "p",
        text: "Das ist nicht übertrieben. Das ist das Minimum, um fit zu bleiben. Wer das schafft, wird über Jahre hinweg klar profitieren.",
      },
      { type: "h2", text: "Was bringen jeweils die einzelnen Bausteine?" },
      { type: "h3", text: "Krafttraining (1–2×)" },
      {
        type: "p",
        text: "Erhält und baut Muskulatur auf, schützt die Knochen, verbessert Gleichgewicht und Alltagsstabilität. Der wichtigste Baustein ab 60.",
      },
      { type: "h3", text: "Spazieren gehen (3–5×)" },
      {
        type: "p",
        text: "Gut für Herz, Kreislauf und Stimmung. Auch eine halbe Stunde zügiges Gehen zählt als moderate Bewegung. Ideal direkt nach dem Essen.",
      },
      { type: "h3", text: "Tägliche Mini-Routine (5–10 Min)" },
      {
        type: "p",
        text: "Das sind die kleinen Dinge: Gelenke mobilisieren, Balance halten, vielleicht fünf Kniebeugen am Küchentisch. Hält den Körper zwischen den Trainings im Fluss.",
      },
      { type: "h2", text: "Was, wenn ich das nicht schaffe?" },
      {
        type: "p",
        text: "Dann ist weniger auch gut. Eine Einheit pro Woche regelmäßig ist besser als drei Einheiten in einer Woche und dann ein Monat nichts. Regelmäßigkeit schlägt Intensität – immer.",
      },
      {
        type: "callout",
        title: "Ehrliche Einordnung",
        text: "Viele meiner Kundinnen und Kunden starten mit einer Einheit pro Woche bei mir plus zwei kurzen Spaziergängen. Das reicht, um in drei Monaten einen spürbaren Unterschied zu sehen.",
      },
      { type: "h2", text: "Wann ist zu viel zu viel?" },
      {
        type: "p",
        text: "Wenn du vor der Trainingseinheit Bauchschmerzen kriegst, wenn du regelmäßig mehr als 24 Stunden Muskelkater hast oder wenn du dich insgesamt erschöpfter fühlst als vor dem Training – reduziere. Der Körper im Alter braucht längere Erholungszeiten, und das ist völlig normal.",
      },
      {
        type: "p",
        text: "Die Grundregel: Du solltest nach dem Training leicht angestrengt sein, nicht ausgebrannt. Wenn du unsicher bist, schau gemeinsam mit einem Trainer, was für deinen Körper wirklich passt.",
      },
      {
        type: "cta",
        href: "/erstgespraech",
        label: "Ruf mich an",
        sub: "Wir finden gemeinsam deinen richtigen Rhythmus",
      },
    ],
  },

  {
    slug: "training-nach-hueft-op-was-geht",
    title: "Training nach Hüft-OP: Was geht – und was besser nicht",
    metaTitle:
      "Training nach Hüft-OP: Was geht und was nicht | Fit mit Marco",
    metaDescription:
      "Eine Hüft-OP ist ein Einschnitt. Hier siehst du realistisch, was in welcher Phase nach der OP wieder geht, wann du loslegen kannst und wann du vorsichtig sein solltest.",
    excerpt:
      "Nach der Reha endet die Betreuung meist abrupt – gerade dann wird Aufbau aber wichtig. Hier die wichtigsten Phasen und was in jeder davon sinnvoll ist.",
    category: "Reha & Nachsorge",
    published: "2025-12-18",
    author: "Marco Degel",
    keywords: [
      "Training nach Hüft-OP",
      "Reha nach Hüft-OP",
      "Nachsorge Hüftgelenk",
      "Wieder fit nach Hüft-OP",
    ],
    accent: "teal",
    body: [
      {
        type: "p",
        text: "Eine Hüft-OP ist einer der häufigsten Eingriffe ab 65. Die gute Nachricht: Der Heilungsverlauf ist heute sehr gut planbar, und mit gezieltem Training wirst du meist deutlich belastbarer, als du vor der OP warst. Die weniger gute: In der Phase direkt nach der Reha passieren die meisten Rückschläge – weil viele Menschen jetzt zu schnell zu viel wollen oder gar nicht mehr trainieren.",
      },
      {
        type: "callout",
        title: "Wichtig",
        text: "Was hier steht, ersetzt nicht die Freigabe durch deinen Operateur. Jede OP und jede Heilung ist individuell. Vor dem Trainingsstart bitte immer mit dem behandelnden Arzt abstimmen.",
      },
      { type: "h2", text: "Phase 1: Die ersten 6 Wochen" },
      {
        type: "p",
        text: "In dieser Zeit liegt der Fokus auf Mobilisation, einfachen Stabilitätsübungen und dem Wiederherstellen des Gangbilds. Hier geht es nicht um Krafttraining, sondern um Grundfunktionen. Meist wirst du in dieser Phase bereits in der Reha betreut.",
      },
      {
        type: "list",
        items: [
          "Kein Beugen über 90°",
          "Kein Überkreuzen der Beine",
          "Kein Drehen mit stehendem Bein",
          "Keine Belastung auf der operierten Seite über dem, was dein Arzt freigibt",
        ],
      },
      { type: "h2", text: "Phase 2: Woche 6–12" },
      {
        type: "p",
        text: "Jetzt beginnt die Phase, in der viele Menschen allein sind. Die Reha ist meistens zu Ende, aber der Körper ist noch lange nicht auf dem Stand, den er hatte oder den er erreichen kann. Hier setze ich mit Training ein.",
      },
      { type: "h3", text: "Was typischerweise machbar ist" },
      {
        type: "list",
        items: [
          "Längeres Gehen (30–45 Minuten) ohne Gehhilfe, soweit freigegeben",
          "Sanfte Kräftigungsübungen für Gesäß, Oberschenkel und Rumpf",
          "Gleichgewichts- und Koordinationsübungen im sicheren Stand",
          "Leichte Mobilisation der Hüfte im erlaubten Bewegungsradius",
        ],
      },
      { type: "h3", text: "Was weiter vermieden wird" },
      {
        type: "list",
        items: [
          "Hüpfen, Springen, stoßartige Bewegungen",
          "Schnelle Richtungswechsel auf der operierten Seite",
          "Extreme Dehnungen, die über die Schmerzgrenze gehen",
        ],
      },
      { type: "h2", text: "Phase 3: Ab ca. 3 Monate nach OP" },
      {
        type: "p",
        text: "Die meisten Einschränkungen fallen weg. Jetzt geht's darum, wieder echten Alltag und vielleicht sogar Aktivitäten wie leichtes Wandern oder Schwimmen in den Wochenplan zu bringen. Das Ziel: Du kannst dich wieder auf deinen Körper verlassen.",
      },
      { type: "h2", text: "Realistische Erwartungshaltung" },
      {
        type: "p",
        text: "6 Monate nach OP: alltagstauglich voll belastbar. 12 Monate: oft besser als vor der OP, wenn konsequent trainiert wurde. Der Endpunkt liegt also nicht am OP-Tag – er liegt ein Jahr später.",
      },
      {
        type: "quote",
        text: "Die Reha baut auf, das Leben danach baut aus. Wer nach der Reha weiter trainiert, bleibt dauerhaft auf einem höheren Niveau als vor der OP.",
      },
      { type: "h2", text: "Warnzeichen, bei denen du pausieren solltest" },
      {
        type: "list",
        items: [
          "Plötzliche, scharfe Schmerzen in der Hüfte",
          "Schwellung, die über den Tag deutlich zunimmt",
          "Starke Rötung und Überwärmung am Operationsgebiet",
          "Schmerzen, die dich nachts aufwachen lassen",
        ],
      },
      {
        type: "p",
        text: "Wenn etwas davon auftritt: Training pausieren und Arzt kontaktieren. Das ist keine Schwäche, das ist kluges Vorgehen.",
      },
      {
        type: "cta",
        href: "/leistungen/reha-nachsorge",
        label: "Mehr zu Reha & Nachsorge",
        sub: "So begleite ich dich individuell nach deiner OP",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function estimateReadingTime(article: Article): number {
  // ~200 words per minute for German
  const text = article.body
    .map((b) => {
      if (b.type === "p" || b.type === "h2" || b.type === "h3") return b.text;
      if (b.type === "list") return b.items.join(" ");
      if (b.type === "callout") return `${b.title} ${b.text}`;
      if (b.type === "quote") return b.text;
      if (b.type === "cta") return `${b.label} ${b.sub || ""}`;
      return "";
    })
    .join(" ");
  const words = text.split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}
