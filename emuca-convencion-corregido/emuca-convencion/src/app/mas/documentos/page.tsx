import { getDocuments } from "@/lib/data/repository";
import { DocumentosClient } from "./DocumentosClient";

export default async function DocumentosPage() {
  const documents = await getDocuments();
  return <DocumentosClient documents={documents} />;
}
