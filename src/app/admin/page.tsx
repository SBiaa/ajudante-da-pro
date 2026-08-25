import Link from "next/link";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { listUsersForAdmin } from "@/lib/db/users";
import { AdminUsersPanel } from "@/components/AdminUsersPanel";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { userId } = await requireAdmin();
  const users = await listUsersForAdmin();

  const totalUsers = users.length;
  const totalAdmins = users.filter((u) => u.isAdmin).length;
  const totalWeeks = users.reduce((sum, u) => sum + u.weekCount, 0);
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const activeLastWeek = users.filter((u) => u.lastActivityAt && new Date(u.lastActivityAt).getTime() >= sevenDaysAgo).length;

  const stats = [
    { label: "Usuárias cadastradas", value: totalUsers },
    { label: "Administradoras", value: totalAdmins },
    { label: "Ativas nos últimos 7 dias", value: activeLastWeek },
    { label: "Semanas montadas (total)", value: totalWeeks },
  ];

  return (
    <main className="max-w-5xl w-full mx-auto px-4 py-8">
      <div className="flex items-start justify-between gap-3 mb-6">
        <div>
          <h1 className="text-[28px] mb-1 text-[var(--text-strong)]">Painel do admin</h1>
          <p className="text-sm text-[var(--text-muted)]">Gerencie as contas cadastradas no app.</p>
        </div>
        <Link
          href="/"
          className="text-sm px-4 py-1.5 rounded-full border border-[var(--border-subtle)] text-[var(--text-body)] transition-colors hover:bg-[var(--surface-subtle)] flex-none"
        >
          ← Voltar
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-white p-4 shadow-[var(--shadow-sm)]"
          >
            <p className="text-[28px] font-extrabold leading-none text-[var(--text-brand)]">{stat.value}</p>
            <p className="mt-1.5 text-xs text-[var(--text-muted)]">{stat.label}</p>
          </div>
        ))}
      </div>

      <AdminUsersPanel users={users} currentUserId={userId} />
    </main>
  );
}
