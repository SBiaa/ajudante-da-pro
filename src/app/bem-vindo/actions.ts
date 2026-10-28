"use server";

import { createAccessRequest } from "@/lib/db/accessRequests";

export type AccessRequestValues = { name: string; contact: string; school: string; gradeInfo: string };
export type AccessRequestState = {
  status: "idle" | "ok" | "error";
  message: string | null;
  // Devolvido no erro: o React limpa o formulário depois da action, e sem isso a pessoa
  // teria que redigitar tudo só porque errou o contato.
  values?: AccessRequestValues;
};

function field(formData: FormData, name: string, max: number): string {
  return String(formData.get(name) ?? "").trim().slice(0, max);
}

/** Pública de propósito (visitante sem conta), então só grava numa fila — nunca cria usuário. */
export async function requestAccessAction(
  _prev: AccessRequestState,
  formData: FormData
): Promise<AccessRequestState> {
  // Campo escondido: gente não preenche, robô de formulário costuma preencher.
  if (field(formData, "website", 200)) {
    return { status: "ok", message: null };
  }

  const name = field(formData, "name", 120);
  const contact = field(formData, "contact", 160);
  const school = field(formData, "school", 160) || null;
  const gradeInfo = field(formData, "gradeInfo", 120) || null;

  const values: AccessRequestValues = { name, contact, school: school ?? "", gradeInfo: gradeInfo ?? "" };

  if (name.length < 2) {
    return { status: "error", message: "Conta pra gente seu nome.", values };
  }
  const digits = contact.replace(/\D/g, "");
  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const looksLikePhone = digits.length >= 10 && digits.length <= 13;
  if (!looksLikeEmail && !looksLikePhone) {
    return { status: "error", message: "Coloque um e-mail ou WhatsApp com DDD pra gente te chamar.", values };
  }

  try {
    const created = await createAccessRequest({ name, contact, school, gradeInfo });
    return {
      status: "ok",
      message: created
        ? null
        : "Seu pedido já estava na fila — é só aguardar que a gente te chama.",
    };
  } catch {
    return { status: "error", message: "Não deu pra enviar agora. Tenta de novo daqui a pouco?", values };
  }
}
