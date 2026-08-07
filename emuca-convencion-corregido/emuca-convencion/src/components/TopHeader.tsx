"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { locales, localeLabels } from "@/lib/i18n/dictionaries";

export function TopHeader({ title }: { title?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <header className="top-header">
      <Link href="/" className="brand">
        {title ?? "Emuca Convención"}
      </Link>
      <select
        aria-label="Seleccionar idioma"
        value={locale}
        onChange={(e) => setLocale(e.target.value as typeof locale)}
        style={{
          background: "transparent",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.3)",
          minHeight: "32px",
          fontSize: "12px",
        }}
      >
        {locales.map((l) => (
          <option key={l} value={l} style={{ color: "#000" }}>
            {localeLabels[l]}
          </option>
        ))}
      </select>
    </header>
  );
}
