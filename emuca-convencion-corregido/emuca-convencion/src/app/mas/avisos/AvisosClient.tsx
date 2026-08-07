"use client";

import Link from "next/link";
import type { Announcement } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";

export function AvisosClient({ announcements }: { announcements: Announcement[] }) {
  const { t } = useLocale();
  return (
    <div>
      <Link href="/mas" className="btn btn-secondary" style={{ marginBottom: 16 }}>
        ← {t("common.back")}
      </Link>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>{t("avisos.title")}</h1>
      {announcements.length === 0 && <div className="card empty-state">{t("directorio.empty")}</div>}
      {announcements.map((a) => (
        <AnnouncementBanner key={a.id} announcement={a} />
      ))}
    </div>
  );
}
