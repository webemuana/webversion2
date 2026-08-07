"use client";

import type { PracticalInfoBlock } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const iconEmoji: Record<PracticalInfoBlock["icon"], string> = {
  hotel: "🏨",
  transporte: "🚌",
  horario: "🕒",
  contacto: "📞",
  wifi: "📶",
};

export function InfoClient({ blocks }: { blocks: PracticalInfoBlock[] }) {
  const { t, tl } = useLocale();

  return (
    <div>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>{t("info.title")}</h1>
      {blocks.map((block) => (
        <div key={block.id} className="card">
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ fontSize: 22 }} aria-hidden>
              {iconEmoji[block.icon]}
            </span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 16 }}>{tl(block.title)}</h3>
              <p style={{ fontSize: 14, color: "var(--color-ink-soft)", marginTop: 4 }}>
                {tl(block.body)}
              </p>
              <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                {block.mapUrl && (
                  <a href={block.mapUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                    {t("info.openMap")}
                  </a>
                )}
                {block.phone && (
                  <a href={`tel:${block.phone}`} className="btn btn-secondary">
                    {t("info.call")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
