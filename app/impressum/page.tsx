import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Impressum | Fit mit Marco",
  description: "Anbieterkennzeichnung nach § 5 DDG",
  robots: { index: true, follow: false },
};

export default function ImpressumPage() {
  return (
    <LegalPage kicker="Rechtliches" title="Impressum" lastUpdated="April 2026">
      <h2>Angaben gemäß § 5 DDG</h2>
      <div className="card">
        <p>
          <strong>Marco Degel – Fit mit Marco</strong>
          <br />
          Personal Training für Senioren
          <br />
          Beethovenstraße 3
          <br />
          85622 Feldkirchen
          <br />
          Deutschland
        </p>
      </div>

      <h2>Kontakt</h2>
      <div className="card">
        <p>
          <strong>Telefon:</strong>{" "}
          <a href="tel:+491726223371">+49 172 6223371</a>
          <br />
          <strong>E-Mail:</strong>{" "}
          <a href="mailto:fitmitmarcomuc@gmail.com">
            fitmitmarcomuc@gmail.com
          </a>
          <br />
          <strong>Web:</strong>{" "}
          <a href="https://fitmitmarco.com">fitmitmarco.com</a>
        </p>
      </div>

      <h2>Steuerliche Angaben</h2>
      <p>
        Die Tätigkeit wird <strong>freiberuflich</strong> ausgeübt. Die
        steuerliche Erfassung wurde über ELSTER beim zuständigen Finanzamt
        eingereicht. Eine Gewerbeanmeldung liegt daher nicht vor.
      </p>
      <p>
        Gemäß <strong>§ 19 UStG (Kleinunternehmerregelung)</strong> wird keine
        Umsatzsteuer ausgewiesen. Eine Umsatzsteuer-Identifikationsnummer
        besteht derzeit nicht.
      </p>

      <h2>Redaktionell verantwortlich</h2>
      <p>
        Marco Degel
        <br />
        Beethovenstraße 3, 85622 Feldkirchen
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse findest du oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte
        auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
        §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
        verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
        überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
        Tätigkeit hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
        von entsprechenden Rechtsverletzungen werden wir diese Inhalte
        umgehend entfernen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers.
      </p>
    </LegalPage>
  );
}
