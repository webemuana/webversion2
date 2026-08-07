import { describe, it, expect } from "vitest";
import { getCurrentSession, getNextSession, getCountdown, groupSessionsByDay } from "@/lib/dates";
import type { AgendaSession } from "@/types";

const lt = (s: string) => ({ es: s, en: s, fr: s, it: s, pt: s });

const sessions: AgendaSession[] = [
  {
    id: "s1",
    day: "2026-10-14",
    startTime: "2026-10-14T09:00:00+02:00",
    endTime: "2026-10-14T10:00:00+02:00",
    title: lt("A"),
    description: lt("A desc"),
    location: "Sala 1",
    track: "general",
    speakerIds: [],
  },
  {
    id: "s2",
    day: "2026-10-14",
    startTime: "2026-10-14T10:30:00+02:00",
    endTime: "2026-10-14T11:30:00+02:00",
    title: lt("B"),
    description: lt("B desc"),
    location: "Sala 2",
    track: "comercial",
    speakerIds: [],
  },
];

describe("getCurrentSession", () => {
  it("devuelve la sesión activa en el instante dado", () => {
    const now = new Date("2026-10-14T09:30:00+02:00");
    const result = getCurrentSession(sessions, now);
    expect(result?.id).toBe("s1");
  });

  it("devuelve null si no hay ninguna sesión activa", () => {
    const now = new Date("2026-10-14T10:15:00+02:00");
    expect(getCurrentSession(sessions, now)).toBeNull();
  });
});

describe("getNextSession", () => {
  it("devuelve la siguiente sesión ordenada cronológicamente", () => {
    const now = new Date("2026-10-14T09:30:00+02:00");
    const result = getNextSession(sessions, now);
    expect(result?.id).toBe("s2");
  });

  it("devuelve null cuando no quedan sesiones futuras", () => {
    const now = new Date("2026-10-14T23:00:00+02:00");
    expect(getNextSession(sessions, now)).toBeNull();
  });
});

describe("getCountdown", () => {
  it("nunca es negativo aunque el objetivo ya haya pasado", () => {
    const c = getCountdown("2020-01-01T00:00:00Z", new Date("2026-01-01T00:00:00Z"));
    expect(c.totalMs).toBe(0);
  });

  it("calcula correctamente días/horas/minutos", () => {
    const c = getCountdown("2026-01-02T01:01:00Z", new Date("2026-01-01T00:00:00Z"));
    expect(c.days).toBe(1);
    expect(c.hours).toBe(1);
    expect(c.minutes).toBe(1);
  });
});

describe("groupSessionsByDay", () => {
  it("agrupa las sesiones por su campo day", () => {
    const grouped = groupSessionsByDay(sessions);
    expect(Object.keys(grouped)).toEqual(["2026-10-14"]);
    expect(grouped["2026-10-14"]).toHaveLength(2);
  });
});
