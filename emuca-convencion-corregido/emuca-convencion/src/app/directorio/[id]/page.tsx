import { notFound } from "next/navigation";
import Link from "next/link";
import { getPersonById, getAgenda } from "@/lib/data/repository";
import { PersonDetailClient } from "./PersonDetailClient";

export default async function PersonDetailPage({ params }: { params: { id: string } }) {
  const person = await getPersonById(params.id);
  if (!person) notFound();

  const agenda = await getAgenda();
  const sessions = agenda.filter((s) => s.speakerIds.includes(person.id));

  return (
    <div>
      <Link href="/directorio" className="btn btn-secondary" style={{ marginBottom: 16 }}>
        ← Volver
      </Link>
      <PersonDetailClient person={person} sessions={sessions} />
    </div>
  );
}
