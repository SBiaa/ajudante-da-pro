import { notFound } from "next/navigation";
import { getSharedWeek } from "@/lib/db/sharedWeek";
import { SharedWeekClient } from "@/components/SharedWeekClient";
import { DEFAULT_GRADE, getGradeLabel } from "@/types/profile";

export const dynamic = "force-dynamic";

export default async function SharedWeekPage({ params }: PageProps<"/compartilhado/[token]">) {
  const { token } = await params;
  const shared = await getSharedWeek(token);
  if (!shared) notFound();

  return (
    <SharedWeekClient
      week={shared.week}
      colorOverrides={shared.colorOverrides}
      gradeLabel={shared.gradeLabel ?? getGradeLabel(DEFAULT_GRADE)}
    />
  );
}
