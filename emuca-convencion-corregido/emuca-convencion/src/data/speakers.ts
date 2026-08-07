import type { Person } from "@/types";

// DATOS DE DEMOSTRACION - personas ficticias, sin datos reales.
export const people: Person[] = [
  {
    id: "p-001",
    name: "Marta Ferrer",
    role: { es: "Directora Comercial", en: "Sales Director", fr: "Directrice Commerciale", it: "Direttrice Commerciale", pt: "Diretora Comercial" },
    company: "Emuca",
    country: "España",
    type: "ponente",
    bio: {
      es: "Responsable del área comercial internacional desde 2019.",
      en: "Head of international sales since 2019.",
      fr: "Responsable des ventes internationales depuis 2019.",
      it: "Responsabile vendite internazionali dal 2019.",
      pt: "Responsável pelas vendas internacionais desde 2019.",
    },
  },
  {
    id: "p-002",
    name: "Julien Roux",
    role: { es: "Key Account Manager", en: "Key Account Manager", fr: "Key Account Manager", it: "Key Account Manager", pt: "Key Account Manager" },
    company: "Emuca France",
    country: "Francia",
    type: "ponente",
  },
  {
    id: "p-003",
    name: "Sofia Bianchi",
    role: { es: "Product Manager", en: "Product Manager", fr: "Chef de Produit", it: "Product Manager", pt: "Gerente de Produto" },
    company: "Emuca Italia",
    country: "Italia",
    type: "ponente",
  },
  {
    id: "p-004",
    name: "Carlos Mendes",
    role: { es: "Delegado comercial", en: "Sales representative", fr: "Représentant commercial", it: "Rappresentante commerciale", pt: "Representante comercial" },
    company: "Emuca Portugal",
    country: "Portugal",
    type: "participante",
  },
  {
    id: "p-005",
    name: "Laura Gómez",
    role: { es: "Delegada comercial", en: "Sales representative", fr: "Représentante commerciale", it: "Rappresentante commerciale", pt: "Representante comercial" },
    company: "Emuca",
    country: "España",
    type: "participante",
  },
  {
    id: "p-006",
    name: "Thomas Weber",
    role: { es: "Delegado comercial", en: "Sales representative", fr: "Représentant commercial", it: "Rappresentante commerciale", pt: "Representante comercial" },
    company: "Emuca Germany",
    country: "Alemania",
    type: "participante",
  },
];
