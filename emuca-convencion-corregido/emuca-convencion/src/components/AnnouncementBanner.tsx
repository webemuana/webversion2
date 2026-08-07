"use client";

import type { Announcement } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const severityClass: Record<Announcement["severity"], string> = {
  info: "pill-steel",
  importante: "pill-mustard",
  urgente: "pill-danger",
};

export function AnnouncementBanner({ announcement }: { announcement: Announcement }) {
  const { tl } = useLocale();
  return (
    <div className="card">
      <span className={`pill ${severityClass[announcement.severity]}`}>
        {announcement.severity}
      </span>
      <h3 style={{ fontSize: 15, marginTop: 8 }}>{tl(announcement.title)}</h3>
      <p style={{ margin: "6px 0 0", fontSize: 14, color: "var(--color-ink-soft)" }}>
        {tl(announcement.body)}
      </p>
    </div>
  );
}
