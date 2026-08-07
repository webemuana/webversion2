"use client";

import Link from "next/link";
import type { Survey } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function EncuestasClient({ surveys }: { surveys: Survey[] }) {
  const { t, tl } = useLocale();
  return (
    <div>
      <Link href="/mas" className="btn btn-secondary" style={{ marginBottom: 16 }}>
        ← {t("common.back")}
      </Link>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>{t("encuestas.title")}</h1>
      {surveys.map((survey) => (
        <div key={survey.id} className="card">
          <h3 style={{ fontSize: 15 }}>{tl(survey.title)}</h3>
          <p style={{ fontSize: 14, color: "var(--color-ink-soft)", marginTop: 4 }}>
            {tl(survey.description)}
          </p>
          <a
            href={survey.formsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ marginTop: 10 }}
          >
            {t("encuestas.open")}
          </a>
          <p style={{ fontSize: 11, color: "var(--color-ink-soft)", marginTop: 6 }}>
            {t("encuestas.external")}
          </p>
        </div>
      ))}
    </div>
  );
}
