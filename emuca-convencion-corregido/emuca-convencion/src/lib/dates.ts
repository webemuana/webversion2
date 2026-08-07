import type { AgendaSession } from "@/types";

export function getCurrentSession(sessions: AgendaSession[], now: Date): AgendaSession | null {
  return (
    sessions.find((s) => {
      const start = new Date(s.startTime).getTime();
      const end = new Date(s.endTime).getTime();
      return now.getTime() >= start && now.getTime() < end;
    }) ?? null
  );
}

export function getNextSession(sessions: AgendaSession[], now: Date): AgendaSession | null {
  const upcoming = sessions
    .filter((s) => new Date(s.startTime).getTime() > now.getTime())
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
  return upcoming[0] ?? null;
}

export interface Countdown {
  totalMs: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function getCountdown(targetIso: string, now: Date): Countdown {
  const totalMs = Math.max(0, new Date(targetIso).getTime() - now.getTime());
  const totalSeconds = Math.floor(totalMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { totalMs, days, hours, minutes, seconds };
}

export function groupSessionsByDay(sessions: AgendaSession[]): Record<string, AgendaSession[]> {
  return sessions.reduce<Record<string, AgendaSession[]>>((acc, session) => {
    const key = session.day;
    const daySessions = acc[key] ?? [];
    daySessions.push(session);
    acc[key] = daySessions;
    return acc;
  }, {});
}
