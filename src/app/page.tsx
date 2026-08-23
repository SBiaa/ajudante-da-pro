import HomeClient from "@/components/HomeClient";
import { getStoredTimetable } from "@/lib/db/timetable";

// Sem isso o Next tenta pré-renderizar a página em build time (ela não lê cookies/headers,
// então não seria marcada como dinâmica sozinha) e a grade horária ficaria travada
// no que existia no banco durante o build, nunca refletindo gravações posteriores.
export const dynamic = "force-dynamic";

export default async function Home() {
  const initialTimetable = await getStoredTimetable();
  return <HomeClient initialTimetable={initialTimetable} />;
}
