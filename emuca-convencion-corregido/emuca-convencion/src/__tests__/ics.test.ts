import { describe, it, expect } from "vitest";
import { buildIcsForSession } from "@/lib/ics";
import type { AgendaSession } from "@/types";

const lt = (s: string) => ({ es: s, en: s, fr: s, it: s, pt: s });

const session: AgendaSession = {
  id: "s-ics-1",
  day: "2026-10-14",
  startTime: "2026-10-14T09:00:00+02:00",
  endTime: "2026-10-14T10:00:00+02:00",
  title: lt("Sesión, con: caracteres; especiales"),
  description: lt("Línea 1\nLínea 2"),
  location: "Sala Turia",
  track: "general",
  speakerIds: [],
};

describe("buildIcsForSession", () => {
  it("genera un VCALENDAR válido con las claves obligatorias", () => {
    const ics = buildIcsForSession(session, "Título", "Descripción");
    expect(ics).toContain("BEGIN:VCALENDAR");
    expect(ics).toContain("END:VCALENDAR");
    expect(ics).toContain("UID:s-ics-1@emuca-convencion");
    expect(ics).toContain("DTSTART:");
    expect(ics).toContain("DTEND:");
    expect(ics).toContain("LOCATION:Sala Turia");
  });

  it("escapa comas y punto y coma en el título", () => {
    const ics = buildIcsForSession(session, "A, B; C", "desc");
    expect(ics).toContain("SUMMARY:A\\, B\\; C");
  });
});
