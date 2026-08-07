import type { Survey } from "@/types";

// DATOS DE DEMOSTRACION. Sustituir formsUrl por los enlaces reales
// de Microsoft Forms cuando estén disponibles.
export const surveys: Survey[] = [
  {
    id: "sv-001",
    title: { es: "Encuesta de satisfacción — Día 1", en: "Satisfaction survey — Day 1", fr: "Enquête de satisfaction — Jour 1", it: "Sondaggio di soddisfazione — Giorno 1", pt: "Inquérito de satisfação — Dia 1" },
    description: {
      es: "Valora las sesiones y la organización del primer día.",
      en: "Rate the sessions and organization of the first day.",
      fr: "Évaluez les sessions et l'organisation du premier jour.",
      it: "Valuta le sessioni e l'organizzazione del primo giorno.",
      pt: "Avalie as sessões e a organização do primeiro dia.",
    },
    formsUrl: "https://forms.office.com/r/demo-dia1",
  },
  {
    id: "sv-002",
    title: { es: "Encuesta final de convención", en: "Final convention survey", fr: "Enquête finale de la convention", it: "Sondaggio finale della convention", pt: "Inquérito final da convenção" },
    description: {
      es: "Tu opinión general sobre la convención 2026.",
      en: "Your overall opinion about the 2026 convention.",
      fr: "Votre avis général sur la convention 2026.",
      it: "La tua opinione generale sulla convention 2026.",
      pt: "A sua opinião geral sobre a convenção 2026.",
    },
    formsUrl: "https://forms.office.com/r/demo-final",
  },
];
