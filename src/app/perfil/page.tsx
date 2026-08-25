import { AppHeader } from "@/components/AppHeader";
import { PerfilForm } from "@/components/PerfilForm";
import { getProfile } from "@/lib/db/profile";
import { getUserById } from "@/lib/db/users";
import { requireSession } from "@/lib/auth/requireSession";
import { DEFAULT_GRADE, DEFAULT_THEME, DEFAULT_NETWORK, getGradeLabel, getNetworkLabel } from "@/types/profile";

export const dynamic = "force-dynamic";

export default async function PerfilPage() {
  const userId = await requireSession();
  const [profile, user] = await Promise.all([getProfile(userId), getUserById(userId)]);

  return (
    <main className="max-w-4xl w-full mx-auto px-4 py-8">
      <AppHeader
        gradeLabel={getGradeLabel(profile?.gradeYear ?? DEFAULT_GRADE)}
        networkLabel={getNetworkLabel(profile?.network ?? DEFAULT_NETWORK)}
        isAdmin={user?.isAdmin ?? false}
        teacherName={user?.username}
      />
      <PerfilForm
        currentGrade={profile?.gradeYear ?? DEFAULT_GRADE}
        currentTheme={profile?.theme ?? DEFAULT_THEME}
        currentNetwork={profile?.network ?? DEFAULT_NETWORK}
      />
    </main>
  );
}
