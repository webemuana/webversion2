import { notFound } from "next/navigation";
import Link from "next/link";
import { getSessionById, getPeople } from "@/lib/data/repository";
import { SessionDetailClient } from "./SessionDetailClient";

export default async function SessionDetailPage({ params }: { params: { id: string } }) {
  const session = await getSessionById(params.id);
  if (!session) notFound();

  const allPeople = await getPeople();
  const speakers = allPeople.filter((p) => session.speakerIds.includes(p.id));

  return (
    <div>
      <Link href="/agenda" className="btn btn-secondary" style={{ marginBottom: 16 }}>
        ← Volver
      </Link>
      <SessionDetailClient session={session} speakers={speakers} />
    </div>
  );
}
