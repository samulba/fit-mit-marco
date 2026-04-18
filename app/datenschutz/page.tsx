import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { JsonLd, makeWebPageSchema, makeBreadcrumb } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten nach DSGVO — Fit mit Marco, Personal Training in München.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage
      kicker="Rechtliches"
      title="Datenschutz"
      lastUpdated="April 2026"
    >
      <JsonLd
        data={makeWebPageSchema({
          path: "/datenschutz",
          title: "Datenschutz — Fit mit Marco",
          description:
            "DSGVO-Datenschutzerklärung für Fit mit Marco, Personal Training in München.",
        })}
      />
      <JsonLd
        data={makeBreadcrumb([
          { name: "Home", url: "/" },
          { name: "Datenschutz", url: "/datenschutz" },
        ])}
      />
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
      </p>
      <div className="card">
        <p>
          <strong>Marco Degel – Fit mit Marco</strong>
          <br />
          Beethovenstraße 3
          <br />
          85622 Feldkirchen
          <br />
          Deutschland
          <br />
          <br />
          Telefon:{" "}
          <a href="tel:+491726223371">+49 172 6223371</a>
          <br />
          E-Mail:{" "}
          <a href="mailto:fitmitmarcomuc@gmail.com">fitmitmarcomuc@gmail.com</a>
        </p>
      </div>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur,
        soweit dies zur Bereitstellung einer funktionsfähigen Website sowie
        unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung
        erfolgt regelmäßig nur nach Einwilligung des Nutzers oder wenn ein
        Gesetz dies erlaubt.
      </p>

      <h3>Rechtsgrundlage</h3>
      <p>
        Soweit wir für Verarbeitungsvorgänge eine Einwilligung der betroffenen
        Person einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
        Bei der Verarbeitung zur Erfüllung eines Vertrags dient Art. 6 Abs. 1
        lit. b DSGVO, bei rechtlichen Verpflichtungen Art. 6 Abs. 1 lit. c DSGVO
        und bei überwiegenden berechtigten Interessen Art. 6 Abs. 1 lit. f
        DSGVO.
      </p>

      <h2>3. Bereitstellung der Website (Server-Logs)</h2>
      <p>
        Beim Aufrufen unserer Website werden durch unseren Hosting-Anbieter
        automatisch Informationen erfasst, die dein Browser übermittelt.
        Folgende Daten werden hierbei vorübergehend in einer Logfile
        gespeichert:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Name und URL der abgerufenen Datei</li>
        <li>Übertragene Datenmenge und Meldung, ob der Abruf erfolgreich war</li>
        <li>Verwendeter Browsertyp nebst Version</li>
        <li>Betriebssystem des Nutzers</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt auf Basis von Art. 6 Abs. 1 lit. f DSGVO zur
        Sicherstellung eines reibungslosen Verbindungsaufbaus und einer
        komfortablen Nutzung der Website.
      </p>

      <h2>4. Hosting über Vercel</h2>
      <p>
        Diese Website wird bei der Vercel Inc., 340 S Lemon Ave #4133, Walnut,
        CA 91789, USA, gehostet. Beim Aufruf unserer Seite werden zur
        Bereitstellung Verbindungsdaten wie IP-Adresse, Browserinformationen,
        angefragte Ressource und Zeitstempel verarbeitet. Die Datenverarbeitung
        erfolgt auf Grundlage unseres berechtigten Interesses an einem stabilen
        und sicheren Betrieb der Website (Art. 6 Abs. 1 lit. f DSGVO). Mit
        Vercel besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO.
      </p>

      <h2>5. Kontaktformular (Formspree)</h2>
      <p>
        Auf unserer Website kannst du über ein Kontaktformular eine Anfrage
        stellen. Die Übermittlung der Formulardaten erfolgt über den
        Dienstleister Formspree, Inc., 1007 N Orange St. 4th Floor, Wilmington,
        DE 19801, USA.
      </p>
      <p>
        Folgende Daten werden bei Absenden des Formulars an Formspree
        übermittelt und anschließend per E-Mail an uns weitergeleitet:
      </p>
      <ul>
        <li>Vor- und Nachname</li>
        <li>Telefonnummer</li>
        <li>E-Mail-Adresse</li>
        <li>Nachrichteninhalt</li>
        <li>Zeitstempel der Übermittlung</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung durch
        aktives Absenden des Formulars (Art. 6 Abs. 1 lit. a DSGVO) bzw. zur
        Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
        Die Daten werden gelöscht, sobald der Zweck der Anfrage erfüllt ist und
        keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        Weitere Informationen findest du in der Datenschutzerklärung von
        Formspree:{" "}
        <a
          href="https://formspree.io/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          formspree.io/legal/privacy-policy
        </a>
        .
      </p>

      <h2>6. Schriftarten (Google Fonts)</h2>
      <p>
        Zur einheitlichen Darstellung von Schriftarten verwenden wir die
        Schriften „Cormorant Garamond", „Outfit" und „JetBrains Mono". Die
        Schriften werden über <strong>next/font</strong> beim Build-Prozess
        lokal auf unserem Server eingebunden und von dort aus ausgeliefert.
        Eine Verbindung deines Browsers zu Servern von Google findet dadurch
        <strong> nicht</strong> statt.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Diese Website verwendet <strong>keine</strong> Tracking-, Marketing-
        oder Analyse-Cookies. Es werden lediglich technisch notwendige
        Speichermechanismen des Browsers eingesetzt, soweit zur Funktion der
        Website erforderlich.
      </p>

      <h2>8. Deine Rechte</h2>
      <p>
        Dir stehen folgende Rechte hinsichtlich deiner bei uns gespeicherten
        personenbezogenen Daten zu:
      </p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
        <li>Widerrufsrecht bei Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung deiner Rechte reicht eine formlose Mitteilung an{" "}
        <a href="mailto:fitmitmarcomuc@gmail.com">fitmitmarcomuc@gmail.com</a>.
      </p>

      <h2>9. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Unbeschadet eines anderweitigen verwaltungsrechtlichen oder
        gerichtlichen Rechtsbehelfs steht dir das Recht auf Beschwerde bei
        einer Aufsichtsbehörde zu. Die für uns zuständige Behörde ist das
        Bayerische Landesamt für Datenschutzaufsicht, Promenade 18, 91522
        Ansbach.
      </p>

      <h2>10. Aktualität und Änderung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April
        2026. Durch die Weiterentwicklung unserer Website oder aufgrund
        geänderter gesetzlicher Vorgaben kann es notwendig werden, diese
        Datenschutzerklärung anzupassen.
      </p>
    </LegalPage>
  );
}
