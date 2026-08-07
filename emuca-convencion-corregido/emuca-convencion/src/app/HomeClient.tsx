"use client";

import type { Announcement, AgendaSession, EventInfo } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useNow } from "@/lib/useNow";
import { getCurrentSession, getNextSession } from "@/lib/dates";
import { CountdownBlock } from "@/components/CountdownBlock";
import { SessionCard } from "@/components/SessionCard";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

export function HomeClient({
  eventInfo,
  sessions,
  announcements,
}: {
  eventInfo: EventInfo;
  sessions: AgendaSession[];
  announcements: Announcement[];
}) {
  const { t, locale } = useLocale();
  const now = useNow(1000);

  const hasStarted = now.getTime() >= new Date(eventInfo.startDate).getTime();
  const hasFinished = now.getTime() >= new Date(eventInfo.endDate).getTime();

  const current = getCurrentSession(sessions, now);
  const next = getNextSession(sessions, now);

  const dateFmt = new Intl.DateTimeFormat(locale, { day: "2-digit", month: "long" });

  return (
    <div>
      <section className="hero-band">
        <h1 style={{ fontSize: 22 }}>{eventInfo.name}</h1>
        <p className="subtitle">{eventInfo.venueName} · {eventInfo.city}</p>
        <p className="dates">
          {dateFmt.format(new Date(eventInfo.startDate))} – {dateFmt.format(new Date(eventInfo.endDate))}
        </p>
      </section>

      <div style={{ marginTop: 16 }}>
        {hasFinished ? (
          <div className="card">{t("home.eventFinished")}</div>
        ) : hasStarted ? (
          <div className="card pill pill-accent" style={{ display: "inline-flex" }}>
            {t("home.eventStarted")}
          </div>
        ) : (
          <CountdownBlock targetIso={eventInfo.startDate} />
        )}
      </div>

      <h2 className="section-title">{t("home.nextActivity")}</h2>
      {current ? (
        <SessionCard session={current} badge="now" />
      ) : next ? (
        <SessionCard session={next} badge="next" />
      ) : (
        <div className="card empty-state">{t("home.noNextActivity")}</div>
      )}

      {announcements.length > 0 && (
        <>
          <h2 className="section-title">{t("home.announcements")}</h2>
          {announcements.map((a) => (
            <AnnouncementBanner key={a.id} announcement={a} />
          ))}
        </>
      )}
    </div>
  );
}
