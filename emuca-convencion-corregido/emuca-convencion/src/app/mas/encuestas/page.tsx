import { getSurveys } from "@/lib/data/repository";
import { EncuestasClient } from "./EncuestasClient";

export default async function EncuestasPage() {
  const surveys = await getSurveys();
  return <EncuestasClient surveys={surveys} />;
}
