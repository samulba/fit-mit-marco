import type { Metadata } from "next";
import { AngehoerigePage } from "@/components/AngehoerigePage";

export const metadata: Metadata = {
  title: "Für Angehörige | Fit mit Marco",
  description:
    "Sie machen sich Sorgen um Ihre Eltern oder Großeltern? Marco kommt zu ihnen nach Hause und gibt ihnen Sicherheit, Kraft und Lebensfreude zurück.",
};

export default function Page() {
  return <AngehoerigePage />;
}
