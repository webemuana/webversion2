// Capa de acceso a datos.
//
// HOY: lee de los ficheros de demostración en src/data/*.
// MAÑANA: cada función de aquí puede reimplementarse para llamar a
// Microsoft Graph API (SharePoint Lists) sin que ningún componente
// de la UI tenga que cambiar, porque siguen devolviendo los mismos
// tipos (ver src/types) y pasan por los mismos esquemas zod.
import { eventInfo } from "@/data/event";
import { sessions } from "@/data/agenda";
import { people } from "@/data/speakers";
import { practicalInfo } from "@/data/practicalInfo";
import { documents } from "@/data/documents";
import { announcements } from "@/data/announcements";
import { surveys } from "@/data/surveys";
import {
  eventInfoSchema,
  agendaSessionSchema,
  personSchema,
  practicalInfoBlockSchema,
  documentItemSchema,
  announcementSchema,
  surveySchema,
} from "@/lib/schemas";
import { z } from "zod";

// getEventInfo: en el futuro, sustituir por una llamada a la lista
// "EventInfo" de SharePoint. La validación con zod protege la app
// si algún campo llega vacío o mal formado desde el origen externo.
export async function getEventInfo() {
  return eventInfoSchema.parse(eventInfo);
}

export async function getAgenda() {
  return z.array(agendaSessionSchema).parse(sessions);
}

export async function getSessionById(id: string) {
  const all = await getAgenda();
  return all.find((s) => s.id === id) ?? null;
}

export async function getPeople() {
  return z.array(personSchema).parse(people);
}

export async function getPersonById(id: string) {
  const all = await getPeople();
  return all.find((p) => p.id === id) ?? null;
}

export async function getPracticalInfo() {
  return z.array(practicalInfoBlockSchema).parse(practicalInfo);
}

export async function getDocuments() {
  return z.array(documentItemSchema).parse(documents);
}

export async function getAnnouncements() {
  return z.array(announcementSchema).parse(announcements);
}

export async function getSurveys() {
  return z.array(surveySchema).parse(surveys);
}
