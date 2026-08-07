import { getAnnouncements } from "@/lib/data/repository";
import { AvisosClient } from "./AvisosClient";

export default async function AvisosPage() {
  const announcements = await getAnnouncements();
  const sorted = [...announcements].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return <AvisosClient announcements={sorted} />;
}
