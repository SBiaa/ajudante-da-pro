import { HomeDashboard } from "@/components/HomeDashboard";
import { loadAppData } from "@/lib/appContext";
import { activityThemeKeys } from "@/lib/activityStats";

export const dynamic = "force-dynamic";

export default async function InicioPage() {
  const { setup } = await loadAppData();
  // Por turma: o conjunto de temas com atividade depende do ano, da rede (escola) e das matérias.
  const keysByClass: Record<string, string[]> = {};
  for (const cls of setup.classes) {
    const school = setup.schools.find((s) => s.id === cls.schoolId);
    if (school) keysByClass[cls.id] = activityThemeKeys(school.network, cls.gradeYear, cls.subjects);
  }
  return <HomeDashboard activityThemeKeysByClass={keysByClass} />;
}
