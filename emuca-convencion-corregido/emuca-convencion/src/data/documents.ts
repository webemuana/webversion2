import type { DocumentItem } from "@/types";

// DATOS DE DEMOSTRACION. En producción, fileUrl apuntará a
// SharePoint (biblioteca de documentos) en lugar de a /demo-files.
export const documents: DocumentItem[] = [
  {
    id: "d-001",
    title: { es: "Presentación novedades de producto", en: "Product news presentation", fr: "Présentation nouveautés produit", it: "Presentazione novità prodotto", pt: "Apresentação novidades de produto" },
    fileUrl: "/demo-files/novedades-producto.pptx",
    fileType: "pptx",
    sizeLabel: "18 MB",
    updatedAt: "2026-10-01T10:00:00+02:00",
  },
  {
    id: "d-002",
    title: { es: "Catálogo comercial 2026", en: "2026 sales catalogue", fr: "Catalogue commercial 2026", it: "Catalogo commerciale 2026", pt: "Catálogo comercial 2026" },
    fileUrl: "/demo-files/catalogo-2026.pdf",
    fileType: "pdf",
    sizeLabel: "42 MB",
    updatedAt: "2026-09-20T10:00:00+02:00",
  },
  {
    id: "d-003",
    title: { es: "Plantilla de objetivos por mercado", en: "Market goals template", fr: "Modèle d'objectifs par marché", it: "Modello obiettivi per mercato", pt: "Modelo de objetivos por mercado" },
    fileUrl: "/demo-files/objetivos-mercado.xlsx",
    fileType: "xlsx",
    sizeLabel: "1 MB",
    updatedAt: "2026-09-15T10:00:00+02:00",
  },
];
