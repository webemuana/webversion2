"use client";

import type { AgendaSession, Person } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SessionCard } from "@/components/SessionCard";

export function PersonDetailClient({
  person,
  sessions,
}: {
  person: Person;
  sessions: AgendaSession[];
}) {
  const { tl, t } = useLocale();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div className="avatar" style={{ width: 64, height: 64, fontSize: 22 }}>
          {person.name.charAt(0)}
        </div>
        <div>
          <h1 style={{ fontSize: 20 }}>{person.name}</h1>
          <p style={{ color: "var(--color-ink-soft)", fontSize: 14 }}>
            {tl(person.role)} · {person.company}
          </p>
          <p style={{ color: "var(--color-ink-soft)", fontSize: 13 }}>{person.country}</p>
        </div>
      </div>

      {person.bio && (
        <div className="card" style={{ marginTop: 16 }}>
          <p style={{ fontSize: 14, lineHeight: 1.5 }}>{tl(person.bio)}</p>
        </div>
      )}

      {sessions.length > 0 && (
        <>
          <h2 className="section-title">{t("nav.agenda")}</h2>
          {sessions.map((s) => (
            <SessionCard key={s.id} session={s} />
          ))}
        </>
      )}
    </div>
  );
}
