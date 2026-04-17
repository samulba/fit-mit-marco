import type { Metadata } from "next";
import { PreisePage } from "@/components/PreisePage";

export const metadata: Metadata = {
  title: "Preise & Pakete | Fit mit Marco",
  description:
    "Transparente Preise für Personal Training bei dir zuhause in München und Umgebung. Einzelstunde, 10er-Karte oder monatliches Paket.",
};

export default function Page() {
  return <PreisePage />;
}
