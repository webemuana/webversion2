// Tipos centrales de la app. Son el "contrato" que debera cumplir
// cualquier fuente de datos futura (Microsoft Lists, SharePoint o
// una base de datos propia), ademas de los datos de demostracion.

export type LocaleCode = "es" | "en" | "fr" | "it" | "pt";

export interface LocalizedText {
  es: string;
  en: string;
  fr: string;
  it: string;
  pt: string;
}

export interface EventInfo {
  name: string;
  subtitle: LocalizedText;
  startDate: string; // ISO 8601
  endDate: string; // ISO 8601
  venueName: string;
  city: string;
}

export type SessionTrack =
  | "general"
  | "comercial"
  | "producto"
  | "networking"
  | "formacion";

export interface AgendaSession {
  id: string;
  day: string; // YYYY-MM-DD
  startTime: string; // ISO 8601
  endTime: string; // ISO 8601
  title: LocalizedText;
  description: LocalizedText;
  location: string;
  track: SessionTrack;
  speakerIds: string[];
  isKeynote?: boolean;
}

export interface Person {
  id: string;
  name: string;
  role: LocalizedText;
  company: string;
  country: string;
  type: "participante" | "ponente";
  photoUrl?: string;
  bio?: LocalizedText;
}

export interface PracticalInfoBlock {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
  mapUrl?: string;
  phone?: string;
  icon: "hotel" | "transporte" | "horario" | "contacto" | "wifi";
}

export interface DocumentItem {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  fileUrl: string;
  fileType: "pdf" | "pptx" | "docx" | "xlsx";
  sizeLabel?: string;
  updatedAt: string;
}

export type AnnouncementSeverity = "info" | "importante" | "urgente";

export interface Announcement {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
  severity: AnnouncementSeverity;
  publishedAt: string; // ISO 8601
  pinned?: boolean;
}

export interface Survey {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  formsUrl: string;
  closesAt?: string;
}
