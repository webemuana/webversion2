"use client";

import type { AgendaSession } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { buildIcsForSession, downloadIcs } from "@/lib/ics";

export function AddToCalendarButton({ session }: { session: AgendaSession }) {
  const { t, tl } = useLocale();

  const handleClick = () => {
    const ics = buildIcsForSession(session, tl(session.title), tl(session.description));
    downloadIcs(`${session.id}.ics`, ics);
  };

  return (
    <button type="button" className="btn btn-secondary btn-block" onClick={handleClick}>
      {t("agenda.addToCalendar")}
    </button>
  );
}
