import { getPracticalInfo } from "@/lib/data/repository";
import { InfoClient } from "./InfoClient";

export default async function InfoPage() {
  const blocks = await getPracticalInfo();
  return <InfoClient blocks={blocks} />;
}
