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
    age: number;
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
      sub: "Ab 30 verlieren wir jedes Jahr Muskeln – ab 60 geht das schneller. Gezieltes Krafttraining dreht das um. Treppen, Einkaufstaschen, Enkelkinder hochheben: alles wieder leichter.",
    },
    forWhom: {
      title: "Für dich gemacht, wenn…",
      points: [
        "du merkst, dass dir Alltagsdinge schwerer fallen als früher",
        "du Angst hast, nach einem längeren Krankenhausaufenthalt nicht mehr fit zu werden",
        "du nach einer OP wieder Kraft aufbauen möchtest",
        "du einfach nicht mehr so schnell ermüden willst",
      ],
    },
    benefits: {
      title: "Was dein Körper bekommt",
      items: [
        {
          title: "Mehr Muskelmasse",
          text: "Schon 2 Einheiten pro Woche genügen, um verlorene Muskeln zurückzugewinnen. Studien zeigen: Selbst 80-Jährige können Kraft aufbauen.",
        },
        {
          title: "Stärkere Knochen",
          text: "Belastung durch Training erhöht die Knochendichte und senkt das Osteoporose-Risiko spürbar.",
        },
        {
          title: "Stabiler Stoffwechsel",
          text: "Mehr Muskulatur heißt: mehr Grundumsatz. Du nimmst leichter ab und hältst dein Gewicht ohne Diäten.",
        },
        {
          title: "Selbstvertrauen",
          text: "Wenn du weißt, dass dich dein Körper trägt, gehst du wieder aufrechter durch die Welt.",
        },
      ],
    },
    session: {
      title: "So läuft eine Trainingsstunde ab",
      sub: "60 Minuten bei dir zuhause – ich bringe alle Geräte mit",
      steps: [
        {
          title: "Mobilisation & Aufwärmen",
          text: "Sanfte Gelenkübungen, damit dein Körper bereit für Belastung ist.",
          duration: "10 Min",
        },
        {
          title: "Kraftübungen",
          text: "Funktionelle Bewegungen mit Kettlebells, Widerstandsbändern oder Hanteln – immer angepasst an deine Tagesform.",
          duration: "35 Min",
        },
        {
          title: "Stabilisierung",
          text: "Rumpf- und Balanceübungen, damit die neue Kraft auch im Alltag hält.",
          duration: "10 Min",
        },
        {
          title: "Cool-Down & Gespräch",
          text: "Dehnen, kurze Reflexion, Plan für zuhause bis zum nächsten Mal.",
          duration: "5 Min",
        },
      ],
    },
    results: {
      title: "Realistisch in 12 Wochen",
      points: [
        "Spürbar mehr Kraft in Beinen und Armen",
        "Sichereres Aufstehen vom Stuhl, aus dem Bett, aus dem Sessel",
        "Leichteres Treppensteigen – ohne Pause",
        "Weniger Nacken- und Schulterverspannungen",
      ],
    },
    quote: {
      text: "Ich konnte nicht mal mehr meinen Koffer selbst in den Zug heben. Nach vier Monaten mit Marco hebe ich ihn wieder – und mehr.",
      name: "Werner K.",
      age: 68,
    },
    faq: [
      {
        q: "Ist Krafttraining in meinem Alter nicht gefährlich?",
        a: "Im Gegenteil. Gezieltes, richtig dosiertes Krafttraining ist eine der sichersten Sportarten für Senioren. Risikoreich ist das Nicht-Trainieren – das ist es, was dich schwach macht.",
      },
      {
        q: "Brauche ich viele schwere Gewichte?",
        a: "Nein. Wir arbeiten hauptsächlich mit Körpergewicht, Widerstandsbändern und moderaten Hanteln. Alles platzsparend und bei dir zuhause durchführbar.",
      },
      {
        q: "Was, wenn ich Arthrose habe?",
        a: "Krafttraining ist sogar empfohlen bei Arthrose – die Muskeln entlasten die Gelenke. Wir bauen das Training um schmerzhafte Bewegungen herum auf.",
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
      headline: "Nie wieder",
      headlineItalic: "stolpern.",
      sub: "Ein Sturz im Alter ändert alles. Wer regelmäßig an seiner Balance arbeitet, reduziert sein Sturzrisiko um bis zu 50 Prozent. Das ist kein Zufall – das ist Training.",
    },
    forWhom: {
      title: "Das richtige Training, wenn…",
      points: [
        "du dich beim Gehen unsicher fühlst",
        "du schon mal gestürzt bist – oder Angst davor hast",
        "du beim Treppensteigen dich am Geländer festhalten musst",
        "dein Arzt Sturzprävention empfohlen hat",
      ],
    },
    benefits: {
      title: "Was sich verändert",
      items: [
        {
          title: "Schnellere Reaktionen",
          text: "Dein Gehirn lernt wieder, schnell auf Unebenheiten zu reagieren – so stolperst du nicht erst.",
        },
        {
          title: "Starke Fußmuskulatur",
          text: "Die kleinen Muskeln in Füßen und Unterschenkeln sind deine Stabilisatoren. Wir trainieren sie gezielt.",
        },
        {
          title: "Bessere Körperwahrnehmung",
          text: "Du spürst wieder, wo dein Körper im Raum steht – die Basis jeder Balance.",
        },
        {
          title: "Mehr Mut",
          text: "Wer seinem Körper vertraut, traut sich wieder an Dinge wie Wandern, Reisen oder Tanzen.",
        },
      ],
    },
    session: {
      title: "So trainieren wir deine Balance",
      sub: "60 Minuten strukturiertes Training, 100% alltagsnah",
      steps: [
        {
          title: "Gangbild-Analyse",
          text: "Beim ersten Training schauen wir, wie du gehst und stehst – das ist die Grundlage.",
          duration: "10 Min",
        },
        {
          title: "Balance-Drills",
          text: "Einbeinstand, Gewichtsverlagerung, Blick-Koordination – klassische und funktionelle Übungen.",
          duration: "25 Min",
        },
        {
          title: "Alltags-Szenarien",
          text: "Stolperfallen simulieren, auf unebenem Untergrund gehen, aus dem Stand Richtung wechseln.",
          duration: "20 Min",
        },
        {
          title: "Reflexion",
          text: "Was hat heute gut funktioniert? Was nehmen wir beim nächsten Mal dazu?",
          duration: "5 Min",
        },
      ],
    },
    results: {
      title: "Nach 8–12 Wochen typischerweise",
      points: [
        "Sichere Einbeinstand für 20+ Sekunden",
        "Treppensteigen ohne Geländer möglich",
        "Spürbar weniger Angst bei Dunkelheit oder Nässe",
        "Besseres Vertrauen in den eigenen Körper",
      ],
    },
    quote: {
      text: "Nach meinem Sturz letzten Winter hatte ich richtig Angst rauszugehen. Marco hat mir mein Vertrauen zurückgegeben – ich gehe wieder spazieren, jeden Tag.",
      name: "Ingrid S.",
      age: 75,
    },
    faq: [
      {
        q: "Ich bin schon mal gestürzt – kann ich trotzdem trainieren?",
        a: "Ja, und gerade dann ist es besonders wichtig. Wir starten behutsam, zuerst im Sitzen oder mit Halt, und bauen Schritt für Schritt auf.",
      },
      {
        q: "Ist das dasselbe wie Physiotherapie?",
        a: "Nein – wir ergänzen Physiotherapie. Physio behandelt Beschwerden, wir bauen dauerhaft Sicherheit und Kraft auf.",
      },
      {
        q: "Brauche ich viel Platz zuhause?",
        a: "Nein. Ein Stuhl, 2m² freie Fläche und eventuell eine Wand zum Abstützen reichen.",
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
      sub: "Steife Schultern, blockierte Hüften, schmerzender Rücken – nicht das Alter ist schuld, sondern Bewegungsmangel. Wir bringen die Beweglichkeit zurück, die du in den letzten Jahren verloren hast.",
    },
    forWhom: {
      title: "Wenn dich das betrifft…",
      points: [
        "du fühlst dich morgens steif und brauchst lange, um richtig in Gang zu kommen",
        "du kommst beim Anziehen nicht mehr gut an die Socken",
        "Kopf drehen beim Autofahren tut weh",
        "du möchtest dich einfach wieder frei bewegen können",
      ],
    },
    benefits: {
      title: "Was Mobilität dir zurückgibt",
      items: [
        {
          title: "Weniger Schmerzen",
          text: "Bewegliche Gelenke sind schmerzarme Gelenke. Steife Strukturen entzünden sich schneller.",
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
          title: "Gelenk-Check",
          text: "Wir testen jedes Gelenk einzeln – wo sind Einschränkungen, wo läuft alles?",
          duration: "10 Min",
        },
        {
          title: "Aktive Mobilisation",
          text: "Bewegungsübungen, die das Gelenk selbst beweglicher machen – keine passiven Dehnungen.",
          duration: "25 Min",
        },
        {
          title: "Stärkung in neuen Bereichen",
          text: "Neu gewonnene Beweglichkeit sichern wir durch Kraft, damit sie bleibt.",
          duration: "20 Min",
        },
        {
          title: "Routine für zuhause",
          text: "Du bekommst 3–5 Übungen, die du jeden Morgen in 5 Minuten machen kannst.",
          duration: "5 Min",
        },
      ],
    },
    results: {
      title: "Schon nach wenigen Wochen merkst du",
      points: [
        "Morgensteife verschwindet fast komplett",
        "Du drehst den Kopf wieder ohne nachzudenken",
        "Der untere Rücken fühlt sich geschmiert an",
        "Anziehen geht wieder ohne Akrobatik",
      ],
    },
    quote: {
      text: "Ich konnte nicht mal mehr in meinen Garten hinuntergehen, um Unkraut zu zupfen. Heute tu ich's wieder zwei Stunden am Stück.",
      name: "Helga M.",
      age: 72,
    },
    faq: [
      {
        q: "Ich bin nie beweglich gewesen – geht das überhaupt noch?",
        a: "Fast immer. Der Körper vergisst Bewegungen nicht – er braucht nur regelmäßige Erinnerung. Auch mit 70+ sind große Fortschritte möglich.",
      },
      {
        q: "Ist Yoga nicht dasselbe?",
        a: "Yoga ist super, aber oft zu komplex für Senioren mit Einschränkungen. Wir arbeiten individueller und präziser auf deinen Körper zugeschnitten.",
      },
      {
        q: "Muss ich mich dafür auf den Boden legen können?",
        a: "Nein. Fast alles geht im Stehen, Sitzen oder mit Unterstützung.",
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
      sub: "Ein starkes Herz gibt dir Energie für alles andere – vom Spaziergang bis zur Reise. Und es ist das beste Mittel gegen die Müdigkeit, die du mit dem Alter spürst.",
    },
    forWhom: {
      title: "Richtig für dich, wenn…",
      points: [
        "du nach wenigen Stockwerken außer Atem bist",
        "du dich häufig müde fühlst, ohne viel getan zu haben",
        "dein Arzt dir mehr Bewegung empfohlen hat",
        "du etwas für dein Herz tun möchtest – bevor's zum Problem wird",
      ],
    },
    benefits: {
      title: "Was dein Herz bekommt",
      items: [
        {
          title: "Niedrigerer Blutdruck",
          text: "Moderates Ausdauertraining senkt den Blutdruck oft so effektiv wie Medikamente.",
        },
        {
          title: "Mehr Ausdauer",
          text: "Spaziergänge werden länger, Treppen werden kürzer – dein Alltag fühlt sich leichter an.",
        },
        {
          title: "Besserer Schlaf",
          text: "Wer seinen Körper regelmäßig moderat fordert, schläft tiefer und wacher auf.",
        },
        {
          title: "Mehr Lebensjahre",
          text: "Studien sind eindeutig: Ausdauer ist einer der stärksten Einflussfaktoren auf die Lebenserwartung.",
        },
      ],
    },
    session: {
      title: "So trainieren wir dein Herz",
      sub: "60 Minuten moderates, kontrolliertes Training",
      steps: [
        {
          title: "Puls-Messung & Warm-Up",
          text: "Wir messen deinen Ausgangspuls und wärmen gelenkschonend auf.",
          duration: "10 Min",
        },
        {
          title: "Intervall-Block",
          text: "Belastung und Erholung im Wechsel – das effizienteste Training für dein Herz. Kein Schnaufen bis zur Erschöpfung.",
          duration: "30 Min",
        },
        {
          title: "Kraftausdauer",
          text: "Leichte Kraftübungen mit vielen Wiederholungen – hält den Puls im Bereich und baut nebenbei Muskulatur auf.",
          duration: "15 Min",
        },
        {
          title: "Ausdehnen & Puls-Recovery",
          text: "Langsames Runterkommen, dehnen, letzter Pulscheck.",
          duration: "5 Min",
        },
      ],
    },
    results: {
      title: "Innerhalb von 8 Wochen",
      points: [
        "Du kommst 2 Stockwerke hoch ohne Pause",
        "Ruhepuls senkt sich messbar",
        "Du fühlst dich nachmittags nicht mehr müde",
        "Spaziergänge werden zur Gewohnheit, nicht zur Überwindung",
      ],
    },
    quote: {
      text: "Nach drei Monaten war mein Blutdruck das erste Mal seit Jahren wieder normal. Meine Ärztin war begeistert.",
      name: "Hans-Peter W.",
      age: 70,
    },
    faq: [
      {
        q: "Ist das nicht gefährlich mit meinem Herz?",
        a: "Kontrolliertes Training ist das Beste für dein Herz – gerade mit Vorerkrankungen. Bei Bluthochdruck, KHK oder nach Herzinfarkt stimmen wir das Training vorher mit deinem Arzt ab.",
      },
      {
        q: "Muss ich joggen?",
        a: "Nein. Wir arbeiten mit zügigem Gehen, moderatem Intervalltraining und Kraftausdauer. Gelenkschonend, für jeden machbar.",
      },
      {
        q: "Brauche ich einen Pulsgurt?",
        a: "Nein. Ich bringe ein Gerät mit, falls nötig. Wichtiger ist das subjektive Empfinden – und das trainieren wir mit.",
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
      headlineItalic: "geht's erst los.",
      sub: "Die klassische Reha endet nach 3 Wochen. Danach bist du meist auf dich gestellt – und die Erfolge gehen schnell wieder verloren. Hier setze ich an: ich begleite dich so lange, bis du wirklich wieder fit bist.",
    },
    forWhom: {
      title: "Die Begleitung passt, wenn…",
      points: [
        "du gerade eine Hüft- oder Knie-OP hinter dir hast",
        "du nach einem Krankenhausaufenthalt wieder aufbauen musst",
        "du dich nach einem Schlaganfall oder Herzinfarkt weiter stabilisieren möchtest",
        "dein Arzt oder Physiotherapeut dir ergänzendes Training empfiehlt",
      ],
    },
    benefits: {
      title: "Warum gezielte Nachsorge so wichtig ist",
      items: [
        {
          title: "Ergebnisse sichern",
          text: "Was du in der Reha aufgebaut hast, geht ohne Fortsetzung innerhalb von Wochen verloren. Wir halten und erweitern es.",
        },
        {
          title: "Abstimmung mit Ärzten",
          text: "Auf Wunsch stimme ich Trainingsinhalte mit deinem Arzt oder Physiotherapeuten ab – kein Gegeneinander, sondern Miteinander.",
        },
        {
          title: "Schrittweise Belastung",
          text: "Ich weiß, wann dein Körper bereit ist für mehr – und wann wir besser pausieren.",
        },
        {
          title: "Mentale Sicherheit",
          text: "Nach einer OP ist Bewegung oft mit Angst besetzt. Mit mir an deiner Seite traust du dich wieder.",
        },
      ],
    },
    session: {
      title: "So gestalten wir deine Nachsorge",
      sub: "60 Minuten, individuell auf deinen Heilungsstand angepasst",
      steps: [
        {
          title: "Kurzer Gesundheitscheck",
          text: "Wie geht's heute? Wie war die Nacht? Wo zwickt es? Jedes Training startet hier.",
          duration: "5 Min",
        },
        {
          title: "Mobilisation der betroffenen Region",
          text: "Sanfte, sichere Bewegungsarbeit – wir nähern uns langsam an die volle Beweglichkeit an.",
          duration: "20 Min",
        },
        {
          title: "Aufbauendes Training",
          text: "Kraftaufbau mit dosierten Reizen. Keine Experimente, nur erprobte Übungen.",
          duration: "25 Min",
        },
        {
          title: "Recovery & Hausaufgaben",
          text: "Kühlen, dehnen, was du zuhause sinnvoll tun kannst bis zum nächsten Mal.",
          duration: "10 Min",
        },
      ],
    },
    results: {
      title: "Typische Fortschritte",
      points: [
        "Nach 6 Wochen: normale Alltagsbelastung möglich",
        "Nach 12 Wochen: sicheres Treppensteigen und Gehen ohne Hilfsmittel",
        "Nach 6 Monaten: wieder volle Belastung, oft über dem Niveau vor der OP",
      ],
    },
    quote: {
      text: "Nach meiner Hüft-OP war ich komplett verunsichert. Marco hat mich Schritt für Schritt wieder hingeführt – heute gehe ich besser als vor der OP.",
      name: "Helga M.",
      age: 72,
    },
    faq: [
      {
        q: "Ersetzt das meine Physiotherapie?",
        a: "Nein, es ergänzt sie. Physio behandelt akute Beschwerden – ich baue langfristig wieder Kraft, Ausdauer und Vertrauen auf. Ideal ist beides parallel oder anschließend.",
      },
      {
        q: "Kann die Krankenkasse die Kosten übernehmen?",
        a: "Personal Training ist eine Selbstzahler-Leistung. Manche privaten Zusatzversicherungen erstatten jedoch Teile – schaue in deinen Vertrag oder frage nach.",
      },
      {
        q: "Ab wann kann ich nach einer OP starten?",
        a: "Sobald dein Arzt grünes Licht gibt – oft nach 4–6 Wochen. Wir steigen behutsam ein und tasten uns zusammen vor.",
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
      sub: "Ab 60 braucht dein Körper andere Nährstoffe als mit 40. Wer das ignoriert, verliert Muskeln, Energie und Konzentration. Wir schauen gemeinsam, was wirklich in deinen Teller gehört – ohne Verbote, ohne Diät.",
    },
    forWhom: {
      title: "Die Beratung hilft, wenn…",
      points: [
        "du trotz wenig Essen zunimmst – oder nicht zunehmen willst",
        "du oft Energielöcher am Nachmittag hast",
        "du wissen willst, was deinem Training wirklich hilft",
        "du unsicher bist, ob du genug Eiweiß isst",
      ],
    },
    benefits: {
      title: "Was dir bewusste Ernährung gibt",
      items: [
        {
          title: "Muskeln erhalten",
          text: "Mit 60+ brauchst du deutlich mehr Eiweiß als jüngere Menschen. Viele essen viel zu wenig davon.",
        },
        {
          title: "Stabiler Blutzucker",
          text: "Keine Heißhunger-Attacken, kein Nachmittagstief. Du fühlst dich den ganzen Tag gleichmäßig wach.",
        },
        {
          title: "Bessere Verdauung",
          text: "Wir schauen auf Ballaststoffe, Flüssigkeit und Essrhythmus – oft verschwinden Magen-Darm-Probleme in Wochen.",
        },
        {
          title: "Genuss ohne Reue",
          text: "Kein Verzicht auf Kuchen und Wein. Nur die Balance, die dein Körper jetzt braucht.",
        },
      ],
    },
    session: {
      title: "Wie die Beratung abläuft",
      sub: "Meist in bestehende Trainingsstunden integriert oder 60 Min pur",
      steps: [
        {
          title: "Ess-Analyse",
          text: "Wir schauen gemeinsam, was du typischerweise isst – ohne Bewertung, nur als Startpunkt.",
          duration: "20 Min",
        },
        {
          title: "Was passt zu deinem Körper",
          text: "Wir identifizieren Lücken und einfache, alltagstaugliche Verbesserungen. Konkret, nicht theoretisch.",
          duration: "25 Min",
        },
        {
          title: "Ein Plan für die nächste Woche",
          text: "Nicht 'alles anders', sondern 2–3 Stellschrauben, die du wirklich umsetzt.",
          duration: "10 Min",
        },
        {
          title: "Nachhalten",
          text: "Im nächsten Training schauen wir: was hat funktioniert, was nicht. So wird es nachhaltig.",
          duration: "5 Min",
        },
      ],
    },
    results: {
      title: "Schon nach 4 Wochen merkst du",
      points: [
        "Mehr Energie, besonders nachmittags",
        "Weniger Heißhunger auf Süßes",
        "Stabileres Gewicht, auch ohne Diät",
        "Bessere Erholung nach Training und Alltag",
      ],
    },
    quote: {
      text: "Ich dachte immer, ich esse gesund. Marco hat mir gezeigt, was bei meinem Körper wirklich fehlt – zwei kleine Änderungen, Riesenunterschied.",
      name: "Werner K.",
      age: 68,
    },
    faq: [
      {
        q: "Muss ich auf alles verzichten, was mir schmeckt?",
        a: "Nein. Ich arbeite nicht mit Verboten. Wir schauen, was fehlt – und was du weiterhin genießen kannst.",
      },
      {
        q: "Ist das eine offizielle Ernährungsberatung nach Heilpraktikergesetz?",
        a: "Nein, ich berate als Personal Trainer im Rahmen deines Trainings. Bei Erkrankungen wie Diabetes oder Niereninsuffizienz verweise ich an zertifizierte Ernährungstherapeuten.",
      },
      {
        q: "Brauche ich Nahrungsergänzungsmittel?",
        a: "Meist nicht. In Einzelfällen (z.B. Vitamin D, Eiweißshake bei wenig Appetit) besprechen wir das gemeinsam.",
      },
    ],
  },
];

export function getLeistungBySlug(slug: string): Leistung | undefined {
  return leistungen.find((l) => l.slug === slug);
}
