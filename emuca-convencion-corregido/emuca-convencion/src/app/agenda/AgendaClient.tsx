"use client";

import { useMemo, useState } from "react";
import type { AgendaSession, SessionTrack } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useNow } from "@/lib/useNow";
import { groupSessionsByDay, getCurrentSession, getNextSession } from "@/lib/dates";
import { SessionCard } from "@/components/SessionCard";

const tracks: SessionTrack[] = ["general", "comercial", "producto", "networking", "formacion"];

export function AgendaClient({ sessions }: { sessions: AgendaSession[] }) {
  const { t, locale } = useLocale();
  const now = useNow(30000);
  const byDay = useMemo(() => groupSessionsByDay(sessions), [sessions]);
  const days = useMemo(() => Object.keys(byDay).sort(), [byDay]);

  const [activeDay, setActiveDay] = useState<string>(days[0] ?? "");
  const [activeTrack, setActiveTrack] = useState<SessionTrack | "todos">("todos");

  const current = getCurrentSession(sessions, now);
  const next = getNextSession(sessions, now);

  const dayFmt = new Intl.DateTimeFormat(locale, { weekday: "short", day: "2-digit", month: "short" });

  const daySessions = (byDay[activeDay] ?? [])
    .filter((s) => activeTrack === "todos" || s.track === activeTrack)
    .sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());

  return (
    <div>
      <div className="chip-row">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            className={`chip ${day === activeDay ? "active" : ""}`}
            onClick={() => setActiveDay(day)}
          >
            {dayFmt.format(new Date(`${day}T12:00:00`))}
          </button>
        ))}
      </div>

      <h2 className="section-title">{t("agenda.filters")}</h2>
      <div className="chip-row">
        <button
          type="button"
          className={`chip ${activeTrack === "todos" ? "active" : ""}`}
          onClick={() => setActiveTrack("todos")}
        >
          {t("agenda.allTracks")}
        </button>
        {tracks.map((track) => (
          <button
            key={track}
            type="button"
            className={`chip ${activeTrack === track ? "active" : ""}`}
            onClick={() => setActiveTrack(track)}
          >
            {track}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        {daySessions.length === 0 && <div className="card empty-state">{t("directorio.empty")}</div>}
        {daySessions.map((session) => (
          <SessionCard
            key={session.id}
            session={session}
            badge={current?.id === session.id ? "now" : next?.id === session.id ? "next" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
