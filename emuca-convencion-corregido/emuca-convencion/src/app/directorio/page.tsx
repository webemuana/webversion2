import { getPeople } from "@/lib/data/repository";
import { DirectorioClient } from "./DirectorioClient";

export default async function DirectorioPage() {
  const people = await getPeople();
  return <DirectorioClient people={people} />;
}
