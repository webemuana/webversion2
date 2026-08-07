"use client";

import Link from "next/link";
import type { AgendaSession } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const trackPillClass: Record<AgendaSession["track"], string> = {
  general: "pill-steel",
  comercial: "pill-accent",
  producto: "pill-steel",
  networking: "pill-plum",
  formacion: "pill-mustard",
};

function formatTimeRange(startIso: string, endIso: string, locale: string) {
  const start = new Date(startIso);
  const end = new Date(endIso);
  const fmt = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" });
  return `${fmt.format(start)} – ${fmt.format(end)}`;
}

export function SessionCard({
  session,
  badge,
}: {
  session: AgendaSession;
  badge?: "now" | "next";
}) {
  const { locale, t, tl } = useLocale();

  return (
    <Link href={`/agenda/${session.id}`} className="card list-link" style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <span className="session-time">{formatTimeRange(session.startTime, session.endTime, locale)}</span>
          {badge === "now" && <span className="pill pill-danger">{t("agenda.now")}</span>}
          {badge === "next" && <span className="pill pill-accent">{t("agenda.next")}</span>}
        </div>
        <h3 style={{ fontSize: 16 }}>{tl(session.title)}</h3>
        <p style={{ margin: "4px 0 8px", fontSize: 13, color: "var(--color-ink-soft)" }}>
          {session.location}
        </p>
        <span className={`pill ${trackPillClass[session.track]}`}>{session.track}</span>
      </div>
    </Link>
  );
}
