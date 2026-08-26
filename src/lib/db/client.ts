import { neon, NeonQueryFunction } from "@neondatabase/serverless";

// Lazy: `neon()` valida a connection string na hora. Se rodasse no topo do módulo,
// o build travaria em páginas geradas estaticamente (ex.: /_not-found), que importam
// este arquivo sem nunca ter DATABASE_URL disponível.
let cached: NeonQueryFunction<false, false> | null = null;

function getSql(): NeonQueryFunction<false, false> {
  if (!cached) cached = neon(process.env.DATABASE_URL!);
  return cached;
}

export const sql: NeonQueryFunction<false, false> = ((...args: Parameters<NeonQueryFunction<false, false>>) =>
  getSql()(...args)) as NeonQueryFunction<false, false>;
