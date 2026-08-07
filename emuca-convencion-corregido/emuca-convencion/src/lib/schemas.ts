// Esquemas de validacion con zod. Se usan tanto para validar los
// datos de demostracion en tiempo de build/test como, en el futuro,
// para validar la respuesta real de Microsoft Lists / SharePoint
// antes de confiar en ella dentro de la app.
import { z } from "zod";

const localizedTextSchema = z.object({
  es: z.string().min(1),
  en: z.string().min(1),
  fr: z.string().min(1),
  it: z.string().min(1),
  pt: z.string().min(1),
});

export const eventInfoSchema = z.object({
  name: z.string().min(1),
  subtitle: localizedTextSchema,
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  venueName: z.string().min(1),
  city: z.string().min(1),
});

export const agendaSessionSchema = z.object({
  id: z.string().min(1),
  day: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  title: localizedTextSchema,
  description: localizedTextSchema,
  location: z.string().min(1),
  track: z.enum(["general", "comercial", "producto", "networking", "formacion"]),
  speakerIds: z.array(z.string()),
  isKeynote: z.boolean().optional(),
});

export const personSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  role: localizedTextSchema,
  company: z.string().min(1),
  country: z.string().min(1),
  type: z.enum(["participante", "ponente"]),
  photoUrl: z.string().optional(),
  bio: localizedTextSchema.optional(),
});

export const practicalInfoBlockSchema = z.object({
  id: z.string().min(1),
  title: localizedTextSchema,
  body: localizedTextSchema,
  mapUrl: z.string().url().optional(),
  phone: z.string().optional(),
  icon: z.enum(["hotel", "transporte", "horario", "contacto", "wifi"]),
});

export const documentItemSchema = z.object({
  id: z.string().min(1),
  title: localizedTextSchema,
  description: localizedTextSchema.optional(),
  fileUrl: z.string().min(1),
  fileType: z.enum(["pdf", "pptx", "docx", "xlsx"]),
  sizeLabel: z.string().optional(),
  updatedAt: z.string().datetime(),
});

export const announcementSchema = z.object({
  id: z.string().min(1),
  title: localizedTextSchema,
  body: localizedTextSchema,
  severity: z.enum(["info", "importante", "urgente"]),
  publishedAt: z.string().datetime(),
  pinned: z.boolean().optional(),
});

export const surveySchema = z.object({
  id: z.string().min(1),
  title: localizedTextSchema,
  description: localizedTextSchema,
  formsUrl: z.string().url(),
  closesAt: z.string().datetime().optional(),
});
