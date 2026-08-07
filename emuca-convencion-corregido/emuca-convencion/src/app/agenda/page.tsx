import { getAgenda } from "@/lib/data/repository";
import { AgendaClient } from "./AgendaClient";

export default async function AgendaPage() {
  const sessions = await getAgenda();
  return <AgendaClient sessions={sessions} />;
}
