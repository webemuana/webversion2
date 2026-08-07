"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Person } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function DirectorioClient({ people }: { people: Person[] }) {
  const { t, tl } = useLocale();
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"todos" | Person["type"]>("todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return people.filter((p) => {
      const matchesType = type === "todos" || p.type === type;
      const matchesQuery =
        q.length === 0 ||
        p.name.toLowerCase().includes(q) ||
        p.company.toLowerCase().includes(q);
      return matchesType && matchesQuery;
    });
  }, [people, query, type]);

  return (
    <div>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>{t("directorio.title")}</h1>
      <input
        type="search"
        placeholder={t("directorio.search")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label={t("directorio.search")}
      />
      <div className="chip-row" style={{ marginTop: 10 }}>
        <button type="button" className={`chip ${type === "todos" ? "active" : ""}`} onClick={() => setType("todos")}>
          {t("agenda.allTracks")}
        </button>
        <button type="button" className={`chip ${type === "ponente" ? "active" : ""}`} onClick={() => setType("ponente")}>
          {t("directorio.speakers")}
        </button>
        <button type="button" className={`chip ${type === "participante" ? "active" : ""}`} onClick={() => setType("participante")}>
          {t("directorio.participants")}
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        {filtered.length === 0 && <div className="card empty-state">{t("directorio.empty")}</div>}
        {filtered.map((person) => (
          <Link key={person.id} href={`/directorio/${person.id}`} className="card list-link" style={{ display: "flex" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="avatar">{person.name.charAt(0)}</div>
              <div>
                <p style={{ fontWeight: 600 }}>{person.name}</p>
                <p style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>
                  {tl(person.role)} · {person.company}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
