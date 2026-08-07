import type { Announcement } from "@/types";

// DATOS DE DEMOSTRACION.
export const announcements: Announcement[] = [
  {
    id: "a-001",
    title: { es: "Cambio de sala", en: "Room change", fr: "Changement de salle", it: "Cambio sala", pt: "Mudança de sala" },
    body: {
      es: "La sesión de las 12:00 se traslada a la Sala Albufera.",
      en: "The 12:00 session moves to Sala Albufera.",
      fr: "La session de 12h00 se déplace en Sala Albufera.",
      it: "La sessione delle 12:00 si sposta in Sala Albufera.",
      pt: "A sessão das 12h00 muda para a Sala Albufera.",
    },
    severity: "importante",
    publishedAt: "2026-10-14T08:30:00+02:00",
    pinned: true,
  },
  {
    id: "a-002",
    title: { es: "Recogida de acreditaciones", en: "Badge pickup", fr: "Retrait des badges", it: "Ritiro accrediti", pt: "Levantamento de credenciais" },
    body: {
      es: "Las acreditaciones se recogen en el mostrador de recepción desde las 08:00.",
      en: "Badges can be picked up at the reception desk from 8:00 AM.",
      fr: "Les badges sont à retirer à la réception à partir de 8h00.",
      it: "Gli accrediti si ritirano alla reception dalle 8:00.",
      pt: "As credenciais são levantadas na receção a partir das 8h00.",
    },
    severity: "info",
    publishedAt: "2026-10-14T07:00:00+02:00",
    pinned: true,
  },
];
