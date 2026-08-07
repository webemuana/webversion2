import { describe, it, expect } from "vitest";
import { eventInfoSchema, agendaSessionSchema, personSchema } from "@/lib/schemas";
import { eventInfo } from "@/data/event";
import { sessions } from "@/data/agenda";
import { people } from "@/data/speakers";

describe("Validación de datos de demostración", () => {
  it("eventInfo cumple el esquema", () => {
    expect(() => eventInfoSchema.parse(eventInfo)).not.toThrow();
  });

  it("todas las sesiones de agenda cumplen el esquema", () => {
    for (const session of sessions) {
      expect(() => agendaSessionSchema.parse(session)).not.toThrow();
    }
  });

  it("todas las personas cumplen el esquema", () => {
    for (const person of people) {
      expect(() => personSchema.parse(person)).not.toThrow();
    }
  });

  it("rechaza una sesión con un track inválido", () => {
    const invalid = { ...sessions[0], track: "no-existe" };
    expect(() => agendaSessionSchema.parse(invalid)).toThrow();
  });
});
