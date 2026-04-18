export type Leistung = {
  slug: string;
  num: string;
  tag: string;
  title: string;
  titleShort: string;
  hero: {
    kicker: string;
    headline: string;
    headlineItalic: string;
    sub: string;
  };
  forWhom: {
    title: string;
    points: string[];
  };
  benefits: {
    title: string;
    items: { title: string; text: string }[];
  };
  session: {
    title: string;
    sub: string;
    steps: { title: string; text: string; duration: string }[];
  };
  results: {
    title: string;
    points: string[];
  };
  quote: {
    text: string;
    name: string;
    age?: number;
  };
  faq: { q: string; a: string }[];
  iconName:
    | "dumbbell"
    | "footprints"
    | "flower"
    | "heart"
    | "stethoscope"
    | "apple";
};

// ─── Shared session defaults (60-Min Einheit bei dir zuhause) ───────────
const sharedSteps = [
  {
    title: "Kurzes Gespräch & Tagescheck",
    text: "Wie geht's dir heute? Wo zwickt es, was lief gut? Bevor wir starten, klären wir die Tagesform.",
    duration: "~ 5 Min",
  },
  {
    title: "Aufwärmen",
    text: "Sanfte Mobilisation und leichte Bewegungen, damit Gelenke und Muskeln auf die Belastung vorbereitet sind.",
    duration: "~ 10 Min",
  },
  {
    title: "Individueller Hauptteil",
    text: "Gleichgewicht, Kraft oder Mobilität – je nach deinem Ziel. Alles angepasst an dein Tempo, deinen Körper.",
    duration: "~ 35 Min",
  },
  {
    title: "Abschluss & Alltagstipps",
    text: "Kurze Reflexion, Dehnung und zwei bis drei konkrete Empfehlungen, die du im Alltag umsetzen kannst.",
    duration: "~ 10 Min",
  },
];

export const leistungen: Leistung[] = [
  {
    slug: "kraft-muskelaufbau",
    num: "01",
    tag: "Fundament",
    title: "Kraft & Muskelaufbau für Senioren",
    titleShort: "Kraft & Muskelaufbau",
    iconName: "dumbbell",
    hero: {
      kicker: "Leistung 01 · Fundament",
      headline: "Wieder stark.",
      headlineItalic: "Im Alltag.",
      sub: "Mit dem Alter verlieren wir Muskeln – gezieltes Training dreht das um. Treppen steigen, Einkaufstaschen tragen, Enkelkinder hochheben: Schritt für Schritt wird alles wieder leichter.",
    },
    forWhom: {
      title: "Für dich gemacht, wenn…",
      points: [
        "du merkst, dass dir Alltagsdinge schwerer fallen als früher",
        "du nach einem Krankenhausaufenthalt wieder zu Kräften kommen möchtest",
        "du nach einer OP wieder Kraft aufbauen willst",
        "du einfach nicht mehr so schnell ermüden willst",
      ],
    },
    benefits: {
      title: "Was dein Körper bekommt",
      items: [
        {
          title: "Mehr Kraft im Alltag",
          text: "Aufstehen, Treppen, Taschen tragen – was dir heute schwer fällt, wird mit regelmäßigem Training spürbar leichter.",
        },
        {
          title: "Stärkere Knochen",
          text: "Belastung durch Training unterstützt die Knochendichte – ein wichtiger Faktor mit zunehmendem Alter.",
        },
        {
          title: "Stabiler Stoffwechsel",
          text: "Mehr Muskulatur heißt: mehr Grundumsatz. Du hältst dein Gewicht leichter ohne extreme Diäten.",
        },
        {
          title: "Mehr Selbstvertrauen",
          text: "Wenn du weißt, dass dich dein Körper trägt, gehst du wieder aufrechter durch die Welt.",
        },
      ],
    },
    session: {
      title: "So läuft eine Trainingsstunde ab",
      sub: "60 Minuten bei dir zuhause – ich bringe Bänder, Hanteln und Matte mit",
      steps: sharedSteps,
    },
    results: {
      title: "Realistisch in 6 bis 12 Wochen",
      points: [
        "Sichereres Aufstehen vom Stuhl, aus dem Bett, aus dem Sessel",
        "Leichteres Treppensteigen – mit weniger Pausen",
        "Weniger Verspannungen in Nacken und Schultern",
        "Mehr Selbstvertrauen bei alltäglichen Bewegungen",
      ],
    },
    quote: {
      text: "Ich merke schon nach wenigen Wochen, wie viel leichter mir Treppen und Einkaufen wieder fallen. Marco holt mich genau dort ab, wo ich stehe.",
      name: "Karl-Heinz W.",
    },
    faq: [
      {
        q: "Ist Krafttraining in meinem Alter nicht gefährlich?",
        a: "Im Gegenteil. Gezieltes, richtig dosiertes Krafttraining ist eine der sichersten und wichtigsten Trainingsformen im Alter. Risikoreich ist das Nicht-Trainieren – das ist es, was auf Dauer schwach macht.",
      },
      {
        q: "Brauche ich dafür schwere Gewichte?",
        a: "Nein. Wir arbeiten hauptsächlich mit Körpergewicht, Widerstandsbändern und leichten Hanteln. Alles platzsparend und bei dir zuhause machbar.",
      },
      {
        q: "Was, wenn ich Beschwerden an den Gelenken habe?",
        a: "Training lässt sich sehr gut an bestehende Beschwerden anpassen. Wir wählen die Übungen so, dass sie schonend sind und gleichzeitig die umliegende Muskulatur stärken.",
      },
    ],
  },

  {
    slug: "balance-sturzpraevention",
    num: "02",
    tag: "Sicherheit",
    title: "Balance & Sturzprävention",
    titleShort: "Balance & Sturzprävention",
    iconName: "footprints",
    hero: {
      kicker: "Leistung 02 · Sicherheit",
      headline: "Sicher",
      headlineItalic: "auf den Beinen.",
      sub: "Ein Sturz im Alter kann viel verändern. Wer regelmäßig an seiner Balance arbeitet, gewinnt Standfestigkeit und Sicherheit im Alltag zurück – und fühlt sich dabei deutlich freier.",
    },
    forWhom: {
      title: "Das richtige Training, wenn…",
      points: [
        "du dich beim Gehen manchmal unsicher fühlst",
        "du schon mal gestürzt bist – oder Angst davor hast",
        "du dich beim Treppensteigen gerne festhältst",
        "dir Sturzprävention empfohlen wurde",
      ],
    },
    benefits: {
      title: "Was sich verändert",
      items: [
        {
          title: "Schnellere Reaktionen",
          text: "Dein Körper lernt wieder, auf Unebenheiten zu reagieren, bevor es zu einem Stolpern kommt.",
        },
        {
          title: "Starke Fußmuskulatur",
          text: "Die kleinen Muskeln in Füßen und Unterschenkeln sind deine Stabilisatoren. Wir trainieren sie gezielt.",
        },
        {
          title: "Bessere Körperwahrnehmung",
          text: "Du spürst wieder, wo dein Körper im Raum steht – die Grundlage jeder Balance.",
        },
        {
          title: "Mehr Mut",
          text: "Wer seinem Körper vertraut, traut sich wieder an Dinge wie Spazieren, Wandern oder Reisen.",
        },
      ],
    },
    session: {
      title: "So trainieren wir deine Balance",
      sub: "60 Minuten strukturiertes Training, 100% alltagsnah",
      steps: [
        {
          title: "Kurzes Gespräch & Tagescheck",
          text: "Wie geht's dir heute? Wir schauen, was heute sinnvoll und sicher ist.",
          duration: "~ 5 Min",
        },
        {
          title: "Standfestigkeit aufbauen",
          text: "Einbeinstand, Gewichtsverlagerung, Blick-Koordination – klassische und funktionelle Balance-Übungen.",
          duration: "~ 20 Min",
        },
        {
          title: "Alltags-Szenarien",
          text: "Sicheres Gehen, auf unebenem Untergrund, Richtung wechseln, Alltagsbewegungen durchgehen.",
          duration: "~ 25 Min",
        },
        {
          title: "Abschluss & Alltagstipps",
          text: "Kurze Reflexion und konkrete Übungen, die du sicher zuhause weitermachen kannst.",
          duration: "~ 10 Min",
        },
      ],
    },
    results: {
      title: "Spürbar nach 6 bis 12 Wochen",
      points: [
        "Sichererer Stand und sichereres Gehen",
        "Treppensteigen mit weniger Unsicherheit",
        "Weniger Angst bei Dunkelheit, Nässe oder Unebenheiten",
        "Besseres Vertrauen in den eigenen Körper",
      ],
    },
    quote: {
      text: "Seit ich regelmäßig trainiere, fühle ich mich beim Gehen wieder viel sicherer. Das gibt mir im Alltag enorm viel Ruhe zurück.",
      name: "Helga T.",
    },
    faq: [
      {
        q: "Ich bin schon mal gestürzt – kann ich trotzdem trainieren?",
        a: "Ja, und gerade dann ist es besonders wichtig. Wir starten behutsam, zuerst im Sitzen oder mit sicherem Halt, und bauen Schritt für Schritt auf.",
      },
      {
        q: "Ist das dasselbe wie Physiotherapie?",
        a: "Nein – wir ergänzen Physiotherapie. Physio behandelt Beschwerden, wir bauen darüber hinaus dauerhaft Sicherheit und Kraft auf.",
      },
      {
        q: "Brauche ich viel Platz zuhause?",
        a: "Nein. Ein Stuhl, eine kleine freie Fläche und eventuell eine Wand zum Abstützen reichen.",
      },
    ],
  },

  {
    slug: "beweglichkeit-mobilitaet",
    num: "03",
    tag: "Freiheit",
    title: "Beweglichkeit & Mobilität",
    titleShort: "Beweglichkeit & Mobilität",
    iconName: "flower",
    hero: {
      kicker: "Leistung 03 · Freiheit",
      headline: "Dein Körper",
      headlineItalic: "wird wieder leicht.",
      sub: "Steife Schultern, blockierte Hüften, ein müder Rücken – oft liegt es nicht am Alter, sondern an Bewegungsmangel. Mit gezielter Mobilisation kehrt Beweglichkeit zurück, die du im Alltag sofort spürst.",
    },
    forWhom: {
      title: "Wenn dich das betrifft…",
      points: [
        "du fühlst dich morgens steif und brauchst lange, um richtig in Gang zu kommen",
        "du kommst beim Anziehen nicht mehr gut an die Socken",
        "Kopf drehen beim Autofahren tut unangenehm weh",
        "du möchtest dich einfach wieder frei bewegen können",
      ],
    },
    benefits: {
      title: "Was Mobilität dir zurückgibt",
      items: [
        {
          title: "Weniger Schmerzen",
          text: "Bewegliche Gelenke sind entlastete Gelenke. Regelmäßige Mobilisation beugt Verspannungen vor.",
        },
        {
          title: "Bessere Körperhaltung",
          text: "Du stehst und sitzt aufrechter – das sieht nicht nur besser aus, sondern entlastet auch den Rücken.",
        },
        {
          title: "Tiefere Atmung",
          text: "Eine bewegliche Brustwirbelsäule lässt dich freier atmen – das macht wacher und entspannter.",
        },
        {
          title: "Mehr Bewegungsradius",
          text: "Schrank oben ausräumen, Enkel hochheben, Schuhe binden – ohne Zähne zusammenbeißen.",
        },
      ],
    },
    session: {
      title: "So holen wir die Beweglichkeit zurück",
      sub: "60 Minuten sanfte, gezielte Arbeit",
      steps: [
        {
          title: "Kurzes Gespräch & Check",
          text: "Wo sind die Einschränkungen heute besonders spürbar? Danach richten wir die Einheit aus.",
          duration: "~ 5 Min",
        },
        {
          title: "Gelenkmobilisation",
          text: "Gezielte Bewegungsübungen, die deine Gelenke geschmeidiger machen – ohne Zwang, ohne Schmerz.",
          duration: "~ 20 Min",
        },
        {
          title: "Bewegungsfluss & Dehnung",
          text: "Alltagsnahe Bewegungsmuster, sanfte Dehnungen und Kräftigung in den neu gewonnenen Bereichen.",
          duration: "~ 25 Min",
        },
        {
          title: "Routine für zuhause",
          text: "Du bekommst 3–5 Übungen, die du jeden Morgen in wenigen Minuten machen kannst.",
          duration: "~ 10 Min",
        },
      ],
    },
    results: {
      title: "Schon nach wenigen Wochen merkst du",
      points: [
        "Morgensteife verschwindet spürbar",
        "Du drehst den Kopf wieder ohne nachzudenken",
        "Der untere Rücken fühlt sich lockerer an",
        "Anziehen geht wieder ohne Akrobatik",
      ],
    },
    quote: {
      text: "Morgens ging gar nichts mehr ohne Steifheit. Das hat sich jetzt echt verändert – ich fühle mich im Alltag viel freier.",
      name: "Annelise D.",
    },
    faq: [
      {
        q: "Ich bin nie beweglich gewesen – geht das überhaupt noch?",
        a: "Fast immer. Der Körper vergisst Bewegungen nicht – er braucht nur regelmäßige Erinnerung. Auch mit 70+ sind klare Fortschritte möglich.",
      },
      {
        q: "Ist Yoga nicht dasselbe?",
        a: "Yoga ist eine tolle Ergänzung, aber oft für Senioren mit Einschränkungen nicht individuell genug. Wir arbeiten direkt an dem, was dein Körper braucht.",
      },
      {
        q: "Muss ich mich dafür auf den Boden legen können?",
        a: "Nein. Fast alles geht im Stehen, Sitzen oder mit Unterstützung. Wir finden für jede Übung den passenden Einstieg.",
      },
    ],
  },

  {
    slug: "herz-kreislauf",
    num: "04",
    tag: "Vitalität",
    title: "Herz-Kreislauf-Training",
    titleShort: "Herz-Kreislauf",
    iconName: "heart",
    hero: {
      kicker: "Leistung 04 · Vitalität",
      headline: "Mehr Energie.",
      headlineItalic: "Jeden Tag.",
      sub: "Ein fittes Herz gibt dir Energie für alles andere – vom Spaziergang bis zur Reise. Sanftes, dosiertes Training hilft, Müdigkeit im Alltag spürbar zu verringern.",
    },
    forWhom: {
      title: "Richtig für dich, wenn…",
      points: [
        "du nach wenigen Stockwerken außer Atem bist",
        "du dich häufig müde fühlst, ohne viel getan zu haben",
        "dir mehr Bewegung empfohlen wurde",
        "du etwas für dein Herz tun möchtest – bevor's zum Problem wird",
      ],
    },
    benefits: {
      title: "Was dein Herz bekommt",
      items: [
        {
          title: "Bessere Ausdauer",
          text: "Spaziergänge werden länger, Treppen werden kürzer – dein Alltag fühlt sich leichter an.",
        },
        {
          title: "Ruhigerer Puls",
          text: "Mit der Zeit kommst du bei Alltagsbelastungen seltener außer Atem.",
        },
        {
          title: "Besserer Schlaf",
          text: "Wer seinen Körper regelmäßig moderat fordert, kommt abends leichter zur Ruhe.",
        },
        {
          title: "Mehr Lebensfreude",
          text: "Bewegung ist einer der stärksten Einflussfaktoren auf Stimmung und Energie im Alter.",
        },
      ],
    },
    session: {
      title: "So trainieren wir dein Herz",
      sub: "60 Minuten moderates, kontrolliertes Training",
      steps: [
        {
          title: "Kurzes Gespräch & Check",
          text: "Wie fühlst du dich heute? Das bestimmt die Intensität für den Tag.",
          duration: "~ 5 Min",
        },
        {
          title: "Sanfte Ausdauer",
          text: "Gehtraining, leichte Intervalle, alltagsorientierte Belastungssteigerung – immer im angenehmen Bereich.",
          duration: "~ 30 Min",
        },
        {
          title: "Kraftausdauer",
          text: "Leichte Kraftübungen mit vielen Wiederholungen – hält den Puls oben und baut nebenbei Muskulatur auf.",
          duration: "~ 15 Min",
        },
        {
          title: "Cool-Down & Kontrolle",
          text: "Langsam runterkommen, dehnen, Belastung einordnen – damit du weißt, wie dein Körper reagiert hat.",
          duration: "~ 10 Min",
        },
      ],
    },
    results: {
      title: "Innerhalb von 6 bis 12 Wochen",
      points: [
        "Du kommst Stockwerke leichter hoch",
        "Du merkst mehr Energie im Alltag",
        "Spaziergänge werden zur Gewohnheit, nicht zur Überwindung",
        "Du fühlst dich nachmittags weniger müde",
      ],
    },
    quote: {
      text: "Ich kann wieder längere Strecken gehen, ohne dass mir früh die Puste ausgeht. Das gibt richtig Lebensfreude zurück.",
      name: "Konrad T.",
    },
    faq: [
      {
        q: "Ist das nicht gefährlich mit meinem Herz?",
        a: "Kontrolliertes, moderates Training ist gerade bei Vorerkrankungen sehr wertvoll. Wichtig ist, dass du deinem Arzt vorher Bescheid sagst und wir die Belastung entsprechend wählen.",
      },
      {
        q: "Muss ich joggen?",
        a: "Nein. Wir arbeiten mit zügigem Gehen, moderatem Intervalltraining und Kraftausdauer. Gelenkschonend, für jeden machbar.",
      },
      {
        q: "Wie kontrollieren wir die Belastung?",
        a: "Über dein subjektives Empfinden, den sogenannten Sprechtest und einfache Pulskontrolle. Alles ohne komplizierte Geräte.",
      },
    ],
  },

  {
    slug: "reha-nachsorge",
    num: "05",
    tag: "Heilung",
    title: "Reha & Nachsorge",
    titleShort: "Reha & Nachsorge",
    iconName: "stethoscope",
    hero: {
      kicker: "Leistung 05 · Heilung",
      headline: "Nach der Reha",
      headlineItalic: "geht's weiter.",
      sub: "Eine Reha endet meist nach wenigen Wochen – danach bist du oft auf dich gestellt. Ich begleite dich im Rahmen meiner Qualifikation weiter, damit die Erfolge erhalten bleiben und du wieder Vertrauen in deinen Körper gewinnst.",
    },
    forWhom: {
      title: "Die Begleitung passt, wenn…",
      points: [
        "du nach einer Verletzung oder längeren Pause wieder starten möchtest",
        "du nach einem Krankenhausaufenthalt wieder aufbauen willst",
        "du die Ergebnisse einer Reha erhalten und ausbauen willst",
        "dir begleitendes Training empfohlen wurde",
      ],
    },
    benefits: {
      title: "Warum behutsames Training so wichtig ist",
      items: [
        {
          title: "Ergebnisse sichern",
          text: "Was du in der Reha aufgebaut hast, geht ohne Fortsetzung schnell wieder verloren. Wir halten und erweitern es.",
        },
        {
          title: "Behutsamer Aufbau",
          text: "Ich steigere die Belastung nur so weit, wie dein Körper bereit dafür ist – Schritt für Schritt, ohne Risiko.",
        },
        {
          title: "Kein Ersatz, sondern Ergänzung",
          text: "Dieses Training ersetzt keine Physiotherapie oder ärztliche Behandlung. Es ergänzt sie sinnvoll.",
        },
        {
          title: "Mentale Sicherheit",
          text: "Nach einer Verletzung ist Bewegung oft mit Angst besetzt. Gemeinsam baust du dieses Vertrauen Schritt für Schritt wieder auf.",
        },
      ],
    },
    session: {
      title: "So gestalten wir deine Nachsorge",
      sub: "60 Minuten, individuell auf deinen Heilungsstand angepasst",
      steps: [
        {
          title: "Kurzer Gesundheitscheck",
          text: "Wie geht's heute? Wo zwickt es? Wie war die Nacht? Jedes Training startet hier.",
          duration: "~ 5 Min",
        },
        {
          title: "Sanfte Mobilisation",
          text: "Behutsame Bewegungsarbeit für die betroffene Region – wir nähern uns langsam an volle Beweglichkeit an.",
          duration: "~ 20 Min",
        },
        {
          title: "Aufbauender Hauptteil",
          text: "Kraft, Balance oder Mobilität je nach Ziel – immer mit dosiertem Reiz, nie mit Experimenten.",
          duration: "~ 25 Min",
        },
        {
          title: "Abschluss & Alltagstipps",
          text: "Was hat heute gut funktioniert, worauf solltest du bis zum nächsten Mal achten?",
          duration: "~ 10 Min",
        },
      ],
    },
    results: {
      title: "Worauf du dich freuen kannst",
      points: [
        "Mehr Stabilität in der betroffenen Region",
        "Normale Alltagsbelastungen fallen wieder leichter",
        "Sicheres Gehen und Bewegen ohne ständige Vorsicht",
        "Dauerhaftes Halten und Ausbauen der Reha-Erfolge",
      ],
    },
    quote: {
      text: "Nach meiner OP war ich unsicher, mich überhaupt zu bewegen. Marco holt mich behutsam ab und ich fühle mich jede Woche ein Stück sicherer.",
      name: "Karl-Heinz W.",
    },
    faq: [
      {
        q: "Ersetzt das meine Physiotherapie?",
        a: "Nein. Meine Begleitung ersetzt keine Physiotherapie oder ärztliche Behandlung. Sie ist eine sinnvolle Ergänzung – ideal parallel oder im Anschluss, im Rahmen meiner Qualifikation als Personal Trainer.",
      },
      {
        q: "Kann die Krankenkasse die Kosten übernehmen?",
        a: "Personal Training ist grundsätzlich eine Selbstzahlerleistung. Eine Erstattung ist nur im Einzelfall möglich und hängt von deinem Tarif bzw. deiner Zusatzversicherung ab – das müsstest du selbst bei deiner Versicherung prüfen.",
      },
      {
        q: "Ab wann kann ich nach einer Verletzung starten?",
        a: "Sobald dein Arzt grünes Licht gibt. Wir steigen behutsam ein und tasten uns zusammen an eine passende Belastung heran.",
      },
    ],
  },

  {
    slug: "ernaehrungsberatung",
    num: "06",
    tag: "Balance",
    title: "Ernährungsberatung",
    titleShort: "Ernährungsberatung",
    iconName: "apple",
    hero: {
      kicker: "Leistung 06 · Balance",
      headline: "Essen, das",
      headlineItalic: "dich trägt.",
      sub: "Wir schauen gemeinsam auf deine Gewohnheiten und Routinen – ohne Verbote, ohne Druck. Kleine, alltagstaugliche Veränderungen können im Alter viel bewirken.",
    },
    forWhom: {
      title: "Die Beratung hilft, wenn…",
      points: [
        "du dich unsicher bist, was im Alter wirklich wichtig ist",
        "du oft Energielöcher im Alltag spürst",
        "du dein Training bestmöglich unterstützen möchtest",
        "du wissen möchtest, wie kleine Veränderungen viel bringen können",
      ],
    },
    benefits: {
      title: "Was du davon hast",
      items: [
        {
          title: "Struktur im Alltag",
          text: "Einfache, praktische Tipps, die du direkt umsetzen kannst – keine komplizierten Ernährungspläne.",
        },
        {
          title: "Mehr Energie",
          text: "Gesunde Gewohnheiten helfen, Nachmittagstiefs und Schwankungen im Tag deutlich zu reduzieren.",
        },
        {
          title: "Bewusstere Routinen",
          text: "Du wirst dir klar, was dir gut tut – und was nicht. Das hilft dauerhaft, auch ohne ständige Kontrolle.",
        },
        {
          title: "Genuss ohne Reue",
          text: "Keine Verbote. Es geht um Balance, die du im Alltag wirklich leben kannst.",
        },
      ],
    },
    session: {
      title: "Wie die Beratung abläuft",
      sub: "Oft integriert in deine Trainings-Einheiten oder als eigene 60 Min",
      steps: [
        {
          title: "Offenes Gespräch",
          text: "Wir schauen gemeinsam, wie dein Alltag und deine Ernährung aussehen – ohne Bewertung, nur als Startpunkt.",
          duration: "~ 20 Min",
        },
        {
          title: "Was passt zu dir",
          text: "Wir identifizieren 2–3 konkrete Stellen, die wir gemeinsam anpassen – ganz alltagstauglich.",
          duration: "~ 25 Min",
        },
        {
          title: "Dein Mini-Plan",
          text: "Nicht 'alles anders', sondern wenige Stellschrauben, die du wirklich umsetzen kannst.",
          duration: "~ 10 Min",
        },
        {
          title: "Nachhalten",
          text: "Beim nächsten Mal schauen wir: Was hat funktioniert, was nicht. So wird es nachhaltig.",
          duration: "~ 5 Min",
        },
      ],
    },
    results: {
      title: "Schon nach wenigen Wochen merkst du",
      points: [
        "Mehr Energie, besonders am Nachmittag",
        "Weniger Heißhunger auf Süßes",
        "Bewussterer Umgang mit Essen und Trinken",
        "Besseres Gefühl nach dem Training",
      ],
    },
    quote: {
      text: "Ich dachte, ich esse schon gesund. Marco hat mir gezeigt, wo kleine Verbesserungen viel bringen – ohne Verzicht.",
      name: "Annelise D.",
    },
    faq: [
      {
        q: "Muss ich auf alles verzichten, was mir schmeckt?",
        a: "Nein. Ich arbeite nicht mit Verboten. Wir schauen, was dein Alltag braucht – und was du weiterhin genießen kannst.",
      },
      {
        q: "Ist das eine offizielle Ernährungstherapie?",
        a: "Nein. Ich begleite dich als Personal Trainer mit alltagsnaher, praktischer Unterstützung. Bei Erkrankungen wie Diabetes oder Niereninsuffizienz ist zusätzlich eine zertifizierte Ernährungstherapie wichtig.",
      },
      {
        q: "Empfiehlst du Nahrungsergänzungsmittel?",
        a: "Grundsätzlich nicht pauschal. Wenn es individuell sinnvoll erscheint, besprechen wir das zurückhaltend und auf dich zugeschnitten.",
      },
    ],
  },
];

export function getLeistungBySlug(slug: string): Leistung | undefined {
  return leistungen.find((l) => l.slug === slug);
}
