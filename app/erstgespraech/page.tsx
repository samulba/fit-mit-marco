import type { Metadata } from "next";
import { ErstgespraechPage } from "@/components/ErstgespraechPage";

export const metadata: Metadata = {
  title: "Kostenloses Erstgespräch | Fit mit Marco",
  description:
    "30 Minuten. Kein Druck. Kein Verkauf. Lass uns unverbindlich kennenlernen und schauen, ob wir zusammen passen.",
};

export default function Page() {
  return <ErstgespraechPage />;
}
