import { notFound } from "next/navigation";
import { getSharedWeek } from "@/lib/db/sharedWeek";
import { getProfile } from "@/lib/db/profile";
import { DEFAULT_GRADE, getGradeLabel } from "@/types/profile";
import { SharedWeekClient } from "@/components/SharedWeekClient";

export const dynamic = "force-dynamic";

export default async function SharedWeekPage({ params }: PageProps<"/compartilhado/[token]">) {
  const { token } = await params;
  const [shared, profile] = await Promise.all([getSharedWeek(token), getProfile()]);
  if (!shared) notFound();

  return (
    <SharedWeekClient
      week={shared.week}
      colorOverrides={shared.colorOverrides}
      gradeLabel={getGradeLabel(profile?.gradeYear ?? DEFAULT_GRADE)}
    />
  );
}
