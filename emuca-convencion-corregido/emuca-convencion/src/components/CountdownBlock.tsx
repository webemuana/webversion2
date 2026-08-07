"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useNow } from "@/lib/useNow";
import { getCountdown } from "@/lib/dates";

export function CountdownBlock({ targetIso }: { targetIso: string }) {
  const now = useNow();
  const { t } = useLocale();
  const c = getCountdown(targetIso, now);

  return (
    <div>
      <p style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em", color: "#b9c0c9", marginBottom: 8 }}>
        {t("home.countdown")}
      </p>
      <div className="countdown-strip">
        <div className="countdown-cell">
          <div className="countdown-number">{c.days}</div>
          <div className="countdown-label">{t("home.days")}</div>
        </div>
        <div className="countdown-cell">
          <div className="countdown-number">{String(c.hours).padStart(2, "0")}</div>
          <div className="countdown-label">{t("home.hours")}</div>
        </div>
        <div className="countdown-cell">
          <div className="countdown-number">{String(c.minutes).padStart(2, "0")}</div>
          <div className="countdown-label">{t("home.minutes")}</div>
        </div>
        <div className="countdown-cell">
          <div className="countdown-number">{String(c.seconds).padStart(2, "0")}</div>
          <div className="countdown-label">seg</div>
        </div>
      </div>
    </div>
  );
}
