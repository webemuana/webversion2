import type { PracticalInfoBlock } from "@/types";

// DATOS DE DEMOSTRACION.
export const practicalInfo: PracticalInfoBlock[] = [
  {
    id: "pi-hotel",
    icon: "hotel",
    title: { es: "Alojamiento", en: "Accommodation", fr: "Hébergement", it: "Alloggio", pt: "Alojamento" },
    body: {
      es: "Hotel Las Arenas Balneario Resort. Habitaciones reservadas del 14 al 16 de octubre. Check-in desde las 14:00.",
      en: "Hotel Las Arenas Balneario Resort. Rooms booked from October 14 to 16. Check-in from 2:00 PM.",
      fr: "Hôtel Las Arenas Balneario Resort. Chambres réservées du 14 au 16 octobre. Arrivée à partir de 14h00.",
      it: "Hotel Las Arenas Balneario Resort. Camere prenotate dal 14 al 16 ottobre. Check-in dalle 14:00.",
      pt: "Hotel Las Arenas Balneario Resort. Quartos reservados de 14 a 16 de outubro. Check-in a partir das 14h00.",
    },
    mapUrl: "https://maps.google.com/?q=Hotel+Las+Arenas+Valencia",
  },
  {
    id: "pi-transporte",
    icon: "transporte",
    title: { es: "Transporte", en: "Transportation", fr: "Transport", it: "Trasporto", pt: "Transporte" },
    body: {
      es: "Bus lanzadera desde el Aeropuerto de Valencia el 14/10 a las 08:00 y 12:00. Punto de encuentro: Terminal 1, Llegadas.",
      en: "Shuttle bus from Valencia Airport on Oct 14 at 8:00 and 12:00. Meeting point: Terminal 1, Arrivals.",
      fr: "Navette depuis l'aéroport de Valence le 14/10 à 8h00 et 12h00. Point de rencontre : Terminal 1, Arrivées.",
      it: "Navetta dall'aeroporto di Valencia il 14/10 alle 8:00 e alle 12:00. Punto d'incontro: Terminal 1, Arrivi.",
      pt: "Transporte a partir do Aeroporto de Valência em 14/10 às 8h00 e 12h00. Ponto de encontro: Terminal 1, Chegadas.",
    },
    mapUrl: "https://maps.google.com/?q=Valencia+Airport",
  },
  {
    id: "pi-horario",
    icon: "horario",
    title: { es: "Horario general", en: "General schedule", fr: "Horaire général", it: "Orario generale", pt: "Horário geral" },
    body: {
      es: "14/10: 09:00–23:00 · 15/10: 09:00–20:00 · 16/10: 09:00–14:00 (clausura).",
      en: "Oct 14: 9:00 AM–11:00 PM · Oct 15: 9:00 AM–8:00 PM · Oct 16: 9:00 AM–2:00 PM (closing).",
      fr: "14/10 : 9h00–23h00 · 15/10 : 9h00–20h00 · 16/10 : 9h00–14h00 (clôture).",
      it: "14/10: 9:00–23:00 · 15/10: 9:00–20:00 · 16/10: 9:00–14:00 (chiusura).",
      pt: "14/10: 9h00–23h00 · 15/10: 9h00–20h00 · 16/10: 9h00–14h00 (encerramento).",
    },
  },
  {
    id: "pi-contacto",
    icon: "contacto",
    title: { es: "Contactos de organización", en: "Organization contacts", fr: "Contacts de l'organisation", it: "Contatti organizzazione", pt: "Contactos da organização" },
    body: {
      es: "Coordinación del evento: disponible en el mostrador de recepción y por teléfono durante todo el evento.",
      en: "Event coordination: available at the reception desk and by phone throughout the event.",
      fr: "Coordination de l'événement : disponible à la réception et par téléphone pendant tout l'événement.",
      it: "Coordinamento evento: disponibile alla reception e per telefono durante tutto l'evento.",
      pt: "Coordenação do evento: disponível na receção e por telefone durante todo o evento.",
    },
    phone: "+34 900 000 000",
  },
  {
    id: "pi-wifi",
    icon: "wifi",
    title: { es: "Wifi", en: "Wifi", fr: "Wifi", it: "Wifi", pt: "Wifi" },
    body: {
      es: "Red: EMUCA-CONVENCION · Contraseña disponible en recepción.",
      en: "Network: EMUCA-CONVENCION · Password available at reception.",
      fr: "Réseau : EMUCA-CONVENCION · Mot de passe disponible à la réception.",
      it: "Rete: EMUCA-CONVENCION · Password disponibile alla reception.",
      pt: "Rede: EMUCA-CONVENCION · Palavra-passe disponível na receção.",
    },
  },
];
