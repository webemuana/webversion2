"use client";

import Link from "next/link";
import type { AgendaSession, Person } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { AddToCalendarButton } from "@/components/AddToCalendarButton";

export function SessionDetailClient({
  session,
  speakers,
}: {
  session: AgendaSession;
  speakers: Person[];
}) {
  const { t, tl, locale } = useLocale();
  const fmt = new Intl.DateTimeFormat(locale, { hour: "2-digit", minute: "2-digit" });

  return (
    <div>
      <span className="pill pill-accent">{session.track}</span>
      <h1 style={{ fontSize: 22, marginTop: 10 }}>{tl(session.title)}</h1>
      <p style={{ color: "var(--color-ink-soft)", marginTop: 6 }}>
        {fmt.format(new Date(session.startTime))} – {fmt.format(new Date(session.endTime))} · {session.location}
      </p>

      <div className="card" style={{ marginTop: 16 }}>
        <p style={{ fontSize: 15, lineHeight: 1.5 }}>{tl(session.description)}</p>
      </div>

      {speakers.length > 0 && (
        <>
          <h2 className="section-title">{t("agenda.speakers")}</h2>
          {speakers.map((speaker) => (
            <Link key={speaker.id} href={`/directorio/${speaker.id}`} className="card list-link" style={{ display: "flex" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="avatar">{speaker.name.charAt(0)}</div>
                <div>
                  <p style={{ fontWeight: 600 }}>{speaker.name}</p>
                  <p style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>{tl(speaker.role)}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}

      <div style={{ marginTop: 20 }}>
        <AddToCalendarButton session={session} />
      </div>
    </div>
  );
}
