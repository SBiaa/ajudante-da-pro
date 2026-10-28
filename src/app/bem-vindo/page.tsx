import type { Metadata } from "next";
import Link from "next/link";
import { AccessRequestForm } from "@/components/landing/AccessRequestForm";

export const metadata: Metadata = {
  title: "Claudia — seu plano de aula da semana, sem dor de cabeça",
  description:
    "Monte o plano de aula semanal em minutos: temas por ano e matéria, texto pronto pro SGP, atividades e lição de casa pra imprimir.",
};

const WEEK_PREVIEW = [
  { day: "Seg", items: [{ label: "Língua Portuguesa", theme: "Fábula: a lebre e a tartaruga", text: "#4E1C82", bg: "#EFE9F5" }, { label: "Matemática", theme: "Dezenas e unidades", text: "#2D5F8A", bg: "#E7EFF6" }] },
  { day: "Ter", items: [{ label: "Ciências", theme: "Ciclo de vida das plantas", text: "#1B7A73", bg: "#E2F2F0" }, { label: "Leitura diária", theme: "Trava-língua", text: "#B5541F", bg: "#FBEDE3" }] },
  { day: "Qua", items: [{ label: "Geografia", theme: "O caminho de casa à escola", text: "#1F7A5C", bg: "#E3F1EC" }, { label: "Matemática", theme: "Problemas de adição", text: "#2D5F8A", bg: "#E7EFF6" }] },
];

const FEATURES = [
  {
    icon: "📅",
    title: "A semana montada num clique",
    body: "Escolha a turma e a Claudia sugere os temas de cada aula seguindo sua grade horária. Não gostou de um? Troca só ele.",
  },
  {
    icon: "📝",
    title: "Texto pronto pro SGP",
    body: "A descrição de cada aula já sai no formato que o SGP pede. É copiar, colar e pronto — sem ficar inventando frase às 23h.",
  },
  {
    icon: "🖨️",
    title: "Atividade e lição de casa pra imprimir",
    body: "Folhas de atividade organizadas por ano e tema, prontas pra imprimir. E ela avisa quando uma questão já foi usada com a turma.",
  },
  {
    icon: "📚",
    title: "Banco de temas por ano",
    body: "Do 1º ao 5º ano, por matéria, alinhado ao currículo da rede. Você vê o que já trabalhou e o que ainda falta cobrir.",
  },
  {
    icon: "📺",
    title: "Modo leitura no telão",
    body: "Projete o texto do dia com a estrutura do gênero destacada — fábula, poema, receita, notícia — pra ler junto com a turma.",
  },
  {
    icon: "🔗",
    title: "Compartilhe com a coordenação",
    body: "Gere um link da semana e mande pra coordenadora ou pra parceira de turma. Quem recebe só visualiza, sem precisar de conta.",
  },
];

const STEPS = [
  { n: "1", title: "Cadastre sua turma", body: "Ano, escola e grade horária. Leva uns 5 minutos e você só faz uma vez." },
  { n: "2", title: "Gere a semana", body: "A Claudia distribui os temas pelas aulas. Ajuste o que quiser arrastando ou trocando." },
  { n: "3", title: "Copie, imprima, dê aula", body: "Texto do SGP copiado, atividades impressas, leitura no telão. Semana resolvida." },
];

const GENRES = [
  { file: "fabula", label: "Fábula" },
  { file: "cantiga", label: "Cantiga" },
  { file: "receita", label: "Receita" },
  { file: "poema", label: "Poema" },
  { file: "tirinha-hq", label: "Tirinha" },
  { file: "convite", label: "Convite" },
];

const FAQ = [
  {
    q: "Pra quem é a Claudia?",
    a: "Pra professora dos anos iniciais do Fundamental (1º ao 5º ano) que monta plano de aula toda semana. Também atende professor especialista de uma matéria só.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. Funciona no navegador do computador, do celular ou do tablet. Seus planos ficam salvos na sua conta.",
  },
  {
    q: "Ela substitui o meu planejamento?",
    a: "Não — ela tira o trabalho repetitivo. Você continua escolhendo, ajustando e trocando o que quiser. A palavra final é sempre sua.",
  },
  {
    q: "Como consigo acesso?",
    a: "Por enquanto as contas são liberadas aos poucos. Deixe seu contato no formulário abaixo e a gente te chama assim que sua vaga abrir.",
  },
];

function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/logo-mark.svg" alt="" aria-hidden="true" className="w-9 h-9" />
      <span className="font-[family-name:var(--font-display)] font-extrabold text-[26px] leading-none text-[var(--text-strong)]">
        Claudia
      </span>
    </span>
  );
}

export default function LandingPage() {
  return (
    <div className="landing flex-1 bg-[var(--ink-50)] text-[var(--text-body)] overflow-x-hidden">
      {/* Topo */}
      <header className="sticky top-0 z-20 bg-[var(--ink-50)]/90 backdrop-blur border-b border-[var(--ink-100)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Link href="/" aria-label="Claudia — início">
            <Logo />
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold px-4 py-2 rounded-full !text-[var(--text-strong)] hover:bg-[var(--ink-100)] transition-colors"
            >
              Entrar
            </Link>
            <a
              href="#pedir-acesso"
              className="hidden sm:inline-flex text-sm font-bold px-4 py-2 rounded-full bg-[var(--action-primary)] !text-white hover:bg-[var(--action-primary-hover)] transition-colors"
            >
              Pedir acesso
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[var(--tracking-eyebrow)] text-[var(--crimson-600)] mb-4">
                Pra professora dos anos iniciais
              </p>
              <h1 className="text-[40px] sm:text-[56px] leading-[1.05] font-extrabold text-[var(--text-strong)] mb-5">
                Seu plano de aula da semana,{" "}
                <span className="text-[var(--plum-700)]">pronto em minutos.</span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-[34ch] mb-8">
                Temas por ano e matéria, texto pronto pro SGP e atividades pra imprimir. A Claudia faz a parte chata — você fica com a parte boa.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#pedir-acesso"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--action-primary)] !text-white font-bold text-base px-7 py-3.5 shadow-[var(--shadow-brand)] hover:bg-[var(--action-primary-hover)] transition-colors"
                >
                  Quero usar a Claudia
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-full border !border-[var(--border-strong)] !text-[var(--text-strong)] font-semibold text-base px-7 py-3.5 hover:bg-white transition-colors"
                >
                  Ver como funciona
                </a>
              </div>
            </div>

            {/* Prévia da semana */}
            <div className="relative" aria-hidden="true">
              <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[var(--plum-100)] blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-[var(--crimson-100)] blur-2xl" />
              <div className="relative rounded-[var(--radius-xl)] bg-white border border-[var(--ink-100)] shadow-[var(--shadow-lg)] p-5 sm:p-6 rotate-[1.2deg]">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-[var(--text-muted)]">2º ano B · Semana 34</p>
                    <p className="font-[family-name:var(--font-display)] font-bold text-lg text-[var(--text-strong)]">Plano da semana</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--green-100)] text-[var(--green-600)]">✓ Pronto pro SGP</span>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {WEEK_PREVIEW.map((col) => (
                    <div key={col.day} className="grid gap-2 content-start">
                      <p className="text-xs font-bold text-[var(--text-muted)] text-center">{col.day}</p>
                      {col.items.map((item) => (
                        <div key={item.theme} className="rounded-[var(--radius-sm)] p-2.5 min-h-[86px]" style={{ background: item.bg }}>
                          <p className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: item.text }}>
                            {item.label}
                          </p>
                          <p className="text-[12px] leading-snug font-semibold text-[var(--text-strong)]">{item.theme}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 left-4 sm:left-8 rounded-[var(--radius-md)] bg-white border border-[var(--ink-100)] shadow-[var(--shadow-md)] px-4 py-3 -rotate-2 max-w-[260px]">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--plum-700)] mb-0.5">Descrição pro SGP</p>
                <p className="text-[12px] leading-snug text-[var(--text-body)]">
                  Nesta aula, lemos a fábula com a turma e conversamos sobre a moral da história…
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Recursos */}
        <section className="bg-white border-y border-[var(--ink-100)]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <div className="max-w-2xl mb-12">
              <h2 className="text-[32px] sm:text-[40px] leading-tight font-extrabold text-[var(--text-strong)] mb-3">
                Tudo que você faz no domingo à noite, num lugar só.
              </h2>
              <p className="text-lg">Feita junto com professora de sala de aula, pensando na rotina de verdade.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f) => (
                <div key={f.title} className="rounded-[var(--radius-lg)] bg-[var(--ink-50)] border border-[var(--ink-100)] p-6">
                  <p className="text-3xl mb-3" aria-hidden="true">{f.icon}</p>
                  <h3 className="text-[20px] font-bold text-[var(--text-strong)] mb-2">{f.title}</h3>
                  <p className="text-[15px] leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <h2 className="text-[32px] sm:text-[40px] leading-tight font-extrabold text-[var(--text-strong)] mb-12 text-center">
              Como funciona
            </h2>
            <ol className="grid md:grid-cols-3 gap-8 md:gap-6">
              {STEPS.map((s) => (
                <li key={s.n} className="text-center md:text-left">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--crimson-600)] text-white font-[family-name:var(--font-display)] font-extrabold text-xl mb-4">
                    {s.n}
                  </span>
                  <h3 className="text-[22px] font-bold text-[var(--text-strong)] mb-2">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed max-w-[36ch] mx-auto md:mx-0">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gêneros / modo leitura */}
        <section className="bg-[var(--crimson-700)] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1fr_1.3fr] gap-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[var(--tracking-eyebrow)] text-[var(--plum-300)] mb-3">Modo leitura</p>
              <h2 className="text-[32px] sm:text-[40px] leading-tight font-extrabold !text-white mb-4">
                Mais de 25 gêneros textuais, prontos pra projetar.
              </h2>
              <p className="text-lg text-[var(--crimson-100)]">
                Cada gênero com ilustração própria e a estrutura do texto marcada — título, personagens, moral, ingredientes, rimas — pra turma enxergar como o texto funciona.
              </p>
            </div>
            <ul className="grid grid-cols-3 gap-3 sm:gap-4">
              {GENRES.map((g) => (
                <li key={g.file} className="rounded-[var(--radius-md)] bg-white/10 p-2 sm:p-3 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/illustrations/genres/${g.file}.webp`}
                    alt=""
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-[var(--radius-sm)] bg-white mb-2"
                  />
                  <span className="text-sm font-semibold">{g.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <h2 className="text-[32px] sm:text-[40px] leading-tight font-extrabold text-[var(--text-strong)] mb-8 text-center">
              Perguntas frequentes
            </h2>
            <div className="grid gap-3">
              {FAQ.map((item) => (
                <details key={item.q} className="group rounded-[var(--radius-md)] bg-white border border-[var(--ink-100)] px-5 py-4 open:shadow-[var(--shadow-sm)]">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-bold text-[17px] text-[var(--text-strong)]">
                    {item.q}
                    <span className="text-[var(--plum-700)] text-xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Pedir acesso */}
        <section id="pedir-acesso" className="scroll-mt-20 pb-20 sm:pb-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-[var(--radius-xl)] bg-white border border-[var(--ink-100)] shadow-[var(--shadow-lg)] grid md:grid-cols-[1fr_1.15fr] overflow-hidden">
              <div className="bg-[var(--plum-100)] p-8 sm:p-10 flex flex-col justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/logo-mark.svg" alt="" aria-hidden="true" className="w-16 h-16 mb-4" />
                <h2 className="text-[30px] sm:text-[36px] leading-tight font-extrabold text-[var(--text-strong)] mb-3">
                  Bora deixar o domingo livre?
                </h2>
                <p className="text-[16px] leading-relaxed">
                  Estamos liberando contas aos poucos. Deixe seu contato e a gente te avisa quando chegar sua vez.
                </p>
              </div>
              <div className="p-6 sm:p-10">
                <AccessRequestForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--ink-100)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
          <Logo />
          <p>Feita com carinho pra quem ensina. 🐾</p>
          <Link href="/login" className="font-semibold !text-[var(--text-strong)] hover:underline">
            Já tenho conta
          </Link>
        </div>
      </footer>
    </div>
  );
}
