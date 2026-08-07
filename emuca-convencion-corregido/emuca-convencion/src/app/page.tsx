import { getEventInfo, getAgenda, getAnnouncements } from "@/lib/data/repository";
import { HomeClient } from "./HomeClient";

export default async function HomePage() {
  const [eventInfo, sessions, announcements] = await Promise.all([
    getEventInfo(),
    getAgenda(),
    getAnnouncements(),
  ]);

  const pinnedAnnouncements = announcements.filter((a) => a.pinned);

  return (
    <HomeClient eventInfo={eventInfo} sessions={sessions} announcements={pinnedAnnouncements} />
  );
}
