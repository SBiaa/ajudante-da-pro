import { AppHeader } from "@/components/AppHeader";
import { PerfilForm } from "@/components/PerfilForm";
import { getProfile } from "@/lib/db/profile";
import { DEFAULT_GRADE, DEFAULT_THEME, getGradeLabel } from "@/types/profile";

export const dynamic = "force-dynamic";

export default async function PerfilPage() {
  const profile = await getProfile();

  return (
    <main className="max-w-4xl w-full mx-auto px-4 py-8">
      <AppHeader gradeLabel={getGradeLabel(profile?.gradeYear ?? DEFAULT_GRADE)} />
      <PerfilForm
        currentGrade={profile?.gradeYear ?? DEFAULT_GRADE}
        currentTheme={profile?.theme ?? DEFAULT_THEME}
      />
    </main>
  );
}
