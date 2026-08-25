import HomeClient from "@/components/HomeClient";
import { getStoredTimetable } from "@/lib/db/timetable";
import { getProfile } from "@/lib/db/profile";
import { getStoredAppData } from "@/lib/db/appData";
import { getUserById } from "@/lib/db/users";
import { requireSession } from "@/lib/auth/requireSession";
import { DEFAULT_GRADE, DEFAULT_NETWORK, getGradeLabel } from "@/types/profile";

// Sem isso o Next tenta pré-renderizar a página em build time (ela não lê cookies/headers,
// então não seria marcada como dinâmica sozinha) e a grade horária ficaria travada
// no que existia no banco durante o build, nunca refletindo gravações posteriores.
export const dynamic = "force-dynamic";

export default async function Home() {
  const userId = await requireSession();
  const [initialTimetable, profile, initialAppData, user] = await Promise.all([
    getStoredTimetable(userId),
    getProfile(userId),
    getStoredAppData(userId),
    getUserById(userId),
  ]);
  const gradeLabel = getGradeLabel(profile?.gradeYear ?? DEFAULT_GRADE);
  const gradeYear = profile?.gradeYear ?? DEFAULT_GRADE;
  const network = profile?.network ?? DEFAULT_NETWORK;
  return (
    <HomeClient
      userId={userId}
      initialTimetable={initialTimetable}
      gradeLabel={gradeLabel}
      gradeYear={gradeYear}
      network={network}
      initialAppData={initialAppData}
      isAdmin={user?.isAdmin ?? false}
    />
  );
}
