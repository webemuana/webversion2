"use client";

import Link from "next/link";
import type { DocumentItem } from "@/types";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const fileIcon: Record<DocumentItem["fileType"], string> = {
  pdf: "📕",
  pptx: "📊",
  docx: "📃",
  xlsx: "📈",
};

export function DocumentosClient({ documents }: { documents: DocumentItem[] }) {
  const { t, tl } = useLocale();
  return (
    <div>
      <Link href="/mas" className="btn btn-secondary" style={{ marginBottom: 16 }}>
        ← {t("common.back")}
      </Link>
      <h1 style={{ fontSize: 20, marginBottom: 12 }}>{t("documentos.title")}</h1>
      {documents.map((doc) => (
        <div key={doc.id} className="card">
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ fontSize: 22 }} aria-hidden>{fileIcon[doc.fileType]}</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 15 }}>{tl(doc.title)}</h3>
              {doc.sizeLabel && (
                <p style={{ fontSize: 12, color: "var(--color-ink-soft)", marginTop: 2 }}>
                  {doc.fileType.toUpperCase()} · {doc.sizeLabel}
                </p>
              )}
              <a href={doc.fileUrl} download className="btn btn-secondary" style={{ marginTop: 10 }}>
                {t("documentos.download")}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
