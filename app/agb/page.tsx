import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "AGB | Fit mit Marco",
  description: "Allgemeine Geschäftsbedingungen für Personal Training",
  robots: { index: true, follow: false },
};

export default function AGBPage() {
  return (
    <LegalPage
      kicker="Rechtliches"
      title="AGB"
      lastUpdated="April 2026"
    >
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten
        für sämtliche Verträge zwischen <strong>Marco Degel</strong> (nachfolgend
        „Personal Trainer") und seinen Kunden (nachfolgend „Kunde") über
        Personal-Training-Dienstleistungen sowie ergänzende Leistungen wie
        Ernährungsberatung.
      </p>
      <p>
        (2) Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei
        denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
      </p>

      <h2>§ 2 Vertragsschluss</h2>
      <p>
        (1) Der Vertrag kommt durch die Terminvereinbarung per Telefon,
        E-Mail oder über das Kontaktformular der Website und die anschließende
        Bestätigung durch den Personal Trainer zustande.
      </p>
      <p>
        (2) Das Erstgespräch ist kostenlos und unverbindlich. Erst mit der
        Buchung einer kostenpflichtigen Trainingseinheit oder eines Pakets
        entsteht ein entgeltliches Vertragsverhältnis.
      </p>

      <h2>§ 3 Leistungen</h2>
      <p>
        (1) Der Personal Trainer bietet individuelles Einzel- oder
        Partnertraining an. Die Leistungen umfassen unter anderem:
      </p>
      <ul>
        <li>Kraft- und Muskelaufbau</li>
        <li>Gleichgewichts- und Sturzpräventionstraining</li>
        <li>Beweglichkeits- und Mobilitätstraining</li>
        <li>Herz-Kreislauf-Training</li>
        <li>Begleitendes Reha- und Nachsorgetraining</li>
        <li>Ernährungsberatung als ergänzendes Angebot</li>
      </ul>
      <p>
        (2) Die konkrete Ausgestaltung des Trainings richtet sich nach den
        individuellen Zielen und dem Gesundheitszustand des Kunden und wird
        gemeinsam abgestimmt.
      </p>
      <p>
        (3) Das Training findet in der Regel beim Kunden zuhause oder an einem
        gemeinsam vereinbarten Ort im Einsatzgebiet München und Umgebung
        (Umkreis ca. 30 km) statt.
      </p>
      <p>
        (4) Der Personal Trainer erbringt keine ärztliche oder
        physiotherapeutische Behandlung. Die Beratung ersetzt keine
        medizinische Diagnose oder Therapie.
      </p>

      <h2>§ 4 Gesundheitszustand & Mitwirkungspflichten</h2>
      <p>
        (1) Der Kunde versichert, dass keine gesundheitlichen Einschränkungen
        bestehen, die einem Training entgegenstehen. Bestehen Vorerkrankungen,
        Verletzungen, akute Beschwerden oder liegt eine Schwangerschaft vor,
        ist der Personal Trainer vor Trainingsbeginn unaufgefordert darüber zu
        informieren.
      </p>
      <p>
        (2) Vor Aufnahme des Trainings empfiehlt der Personal Trainer
        ausdrücklich eine ärztliche Untersuchung und Freigabe. Der Kunde
        trainiert auf eigene Verantwortung.
      </p>
      <p>
        (3) Treten während des Trainings Unwohlsein, Schmerzen oder andere
        Beschwerden auf, ist das Training unverzüglich abzubrechen und der
        Personal Trainer zu informieren.
      </p>

      <h2>§ 5 Preise & Zahlungsbedingungen</h2>
      <p>
        (1) Die jeweils aktuellen Preise werden im Rahmen der
        Terminvereinbarung individuell mitgeteilt und vor Vertragsschluss
        schriftlich bestätigt.
      </p>
      <p>
        (2) Die Abrechnung erfolgt wahlweise pro Trainingseinheit, als
        Zehnerkarte oder als monatliches Paket.
      </p>
      <p>
        (3) Zahlungsarten sind: Überweisung, PayPal oder Barzahlung. Die
        Rechnung ist ohne Abzug innerhalb von 14 Tagen ab Rechnungsdatum zu
        begleichen.
      </p>
      <p>
        (4) Alle Preise verstehen sich gemäß § 19 UStG ohne Ausweis der
        Umsatzsteuer (Kleinunternehmerregelung), sofern nicht anders
        ausgewiesen.
      </p>

      <h2>§ 6 Terminabsage & Stornierung</h2>
      <p>
        (1) Vereinbarte Trainingstermine können bis{" "}
        <strong>24 Stunden</strong> vor Trainingsbeginn kostenfrei abgesagt
        oder verschoben werden.
      </p>
      <p>
        (2) Bei späterer Absage oder Nichterscheinen wird die volle
        Trainingseinheit in Rechnung gestellt, es sei denn, der Kunde weist
        einen nicht zu vertretenden Grund (z. B. akute Erkrankung) nach.
      </p>
      <p>
        (3) Der Personal Trainer behält sich vor, Termine aus wichtigem Grund
        abzusagen. In diesem Fall wird ein Ersatztermin angeboten. Ein
        Schadensersatzanspruch besteht nicht.
      </p>

      <h2>§ 7 Pakete & Gültigkeit</h2>
      <p>
        (1) Gebuchte Mehrfachpakete (z. B. Zehnerkarten) sind ab dem Tag der
        ersten Trainingseinheit <strong>sechs Monate</strong> gültig, sofern
        nicht abweichend vereinbart.
      </p>
      <p>
        (2) Nicht in Anspruch genommene Einheiten verfallen nach Ablauf der
        Gültigkeit ohne Anspruch auf Erstattung.
      </p>

      <h2>§ 8 Widerrufsrecht</h2>
      <p>
        (1) Verbrauchern im Sinne des § 13 BGB steht bei im Fernabsatz
        geschlossenen Verträgen ein gesetzliches Widerrufsrecht zu. Die
        Widerrufsfrist beträgt <strong>14 Tage</strong> ab Vertragsschluss.
      </p>
      <p>
        (2) Der Widerruf erfolgt formlos durch eindeutige Erklärung (z. B.
        per Telefon oder E-Mail) an den Personal Trainer.
      </p>
      <p>
        (3) Beginnt das Training auf ausdrücklichen Wunsch des Kunden vor
        Ablauf der Widerrufsfrist, hat der Kunde einen anteiligen Betrag für
        die bis zum Widerruf erbrachten Leistungen zu zahlen.
      </p>

      <h2>§ 9 Haftung</h2>
      <p>
        (1) Der Personal Trainer haftet uneingeschränkt für Schäden aus der
        Verletzung von Leben, Körper oder Gesundheit sowie für Schäden, die
        auf Vorsatz oder grober Fahrlässigkeit beruhen.
      </p>
      <p>
        (2) Für sonstige Schäden, insbesondere bei leichter Fahrlässigkeit,
        haftet der Personal Trainer nur bei Verletzung wesentlicher
        Vertragspflichten (Kardinalpflichten) und der Höhe nach begrenzt auf
        den vertragstypischen, vorhersehbaren Schaden.
      </p>
      <p>
        (3) Der Personal Trainer verfügt über eine gültige
        Berufshaftpflichtversicherung.
      </p>

      <h2>§ 10 Datenschutz</h2>
      <p>
        Die im Rahmen der Vertragsabwicklung erforderlichen personenbezogenen
        Daten werden gemäß der{" "}
        <a href="/datenschutz">Datenschutzerklärung</a> verarbeitet.
      </p>

      <h2>§ 11 Schlussbestimmungen</h2>
      <p>
        (1) Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
        des UN-Kaufrechts.
      </p>
      <p>
        (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis
        ist – soweit gesetzlich zulässig – der Sitz des Personal Trainers.
      </p>
      <p>
        (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
        werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
        Anstelle der unwirksamen Bestimmung tritt die gesetzliche Regelung.
      </p>
    </LegalPage>
  );
}
