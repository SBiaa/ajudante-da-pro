import { LoginForm } from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-[24px] mb-1 text-[var(--text-strong)]">Plano de Aula Semanal</h1>
      <p className="text-sm text-[var(--text-muted)] mb-6">Entre com a senha para continuar.</p>
      <LoginForm />
    </main>
  );
}
