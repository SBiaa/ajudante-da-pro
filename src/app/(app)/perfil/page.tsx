import { PerfilForm } from "@/components/PerfilForm";
import { getProfile } from "@/lib/db/profile";
import { requireSession } from "@/lib/auth/requireSession";
import { DEFAULT_THEME } from "@/types/profile";

export const dynamic = "force-dynamic";

/** Fica dentro do grupo (app) pra ter o mesmo menu lateral e topo das outras telas. */
export default async function PerfilPage() {
  const userId = await requireSession();
  const profile = await getProfile(userId);

  return <PerfilForm currentTheme={profile?.theme ?? DEFAULT_THEME} />;
}
