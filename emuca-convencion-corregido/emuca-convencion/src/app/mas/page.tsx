"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { locales, localeLabels } from "@/lib/i18n/dictionaries";

const items = [
  { href: "/mas/documentos", titleKey: "mas.documentos", descKey: "mas.documentosDesc", icon: "📄" },
  { href: "/mas/avisos", titleKey: "mas.avisos", descKey: "mas.avisosDesc", icon: "📣" },
  { href: "/mas/encuestas", titleKey: "mas.encuestas", descKey: "mas.encuestasDesc", icon: "📝" },
];

export default function MasPage() {
  const { t, locale, setLocale } = useLocale();

  return (
    <div>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>{t("mas.title")}</h1>
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="card list-link" style={{ display: "flex" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ fontSize: 22 }} aria-hidden>{item.icon}</span>
            <div>
              <p style={{ fontWeight: 600 }}>{t(item.titleKey)}</p>
              <p style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>{t(item.descKey)}</p>
            </div>
          </div>
          <span aria-hidden>›</span>
        </Link>
      ))}

      <h2 className="section-title">{t("mas.idioma")}</h2>
      <div className="chip-row">
        {locales.map((l) => (
          <button
            key={l}
            type="button"
            className={`chip ${l === locale ? "active" : ""}`}
            onClick={() => setLocale(l)}
          >
            {localeLabels[l]}
          </button>
        ))}
      </div>
    </div>
  );
}
