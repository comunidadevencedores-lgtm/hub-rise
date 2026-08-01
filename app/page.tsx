import Image from "next/image";

const pillars = [
  {
    label: "Consórcio",
    title: "Construa patrimônio sem juros",
    description:
      "Cartas de crédito para imóvel, veículo e investimento, com a estrutura e a segurança de uma administradora consolidada no mercado.",
    href: "https://embracon.com.br",
    cta: "Conhecer o consórcio",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Imóveis",
    title: "Curadoria de imóveis de alto padrão",
    description:
      "Empreendimentos novos, selecionados a dedo, nas regiões mais nobres e consolidadas — para quem já sabe o que quer.",
    href: "https://imobiliariacuritiba.com.br",
    cta: "Ver imóveis selecionados",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
];

const faqs = [
  {
    q: "O Rise vende imóveis ou consórcios diretamente?",
    a: "Não. O Rise é a porta de entrada do ecossistema — cada solução é conduzida pelo especialista responsável: consórcio pela Embracon e imóveis pela Imobiliária Curitiba.",
  },
  {
    q: "Preciso escolher entre consórcio e imóvel?",
    a: "Não necessariamente. Muitas famílias usam as duas frentes juntas — o consórcio como forma de planejamento e o imóvel como o destino desse patrimônio.",
  },
  {
    q: "Quem está por trás do Rise?",
    a: "Uma parceria entre uma administradora de consórcios consolidada no mercado e uma imobiliária especializada em regiões nobres de Curitiba, com um propósito em comum: ajudar famílias a construir patrimônio de forma sólida e consciente.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Nav mínima */}
      <header className="mx-auto flex max-w-8xl items-center justify-between px-6 py-8 md:px-10">
        <span className="font-display text-[20px] font-semibold tracking-tight text-white">
          Rise
        </span>
        <a
          href="#pilares"
          className="focus-ring text-[13px] font-medium text-white/60 transition hover:text-white"
        >
          Ver soluções ↓
        </a>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-16 text-center md:px-10 md:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(59,110,246,0.18),_transparent_70%)]"
        />
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-blue">
          Consórcio · Imóveis
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-[40px] font-semibold leading-[1.15] text-white md:text-[56px]">
          Duas formas de construir patrimônio. Um só propósito.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/60">
          O Rise une consórcio e imóveis de alto padrão para ajudar famílias a
          planejar, proteger e fazer crescer o seu patrimônio de forma
          sólida, segura e consciente.
        </p>
      </section>

      {/* O que é */}
      <section className="border-y border-white/5 bg-navy px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-8xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
              O ecossistema
            </p>
            <h2 className="mt-3 font-display text-[28px] font-semibold text-white md:text-[32px]">
              Patrimônio não é uma decisão isolada.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-white/60">
            Comprar um imóvel de alto padrão envolve planejamento financeiro,
            segurança jurídica e visão de longo prazo. Por isso o Rise
            conecta duas frentes especializadas — consórcio e imóveis — sob
            um mesmo padrão de excelência, para que cada família encontre o
            caminho certo para o seu patrimônio.
          </p>
        </div>
      </section>

      {/* Pilares — Consórcio / Imóveis */}
      <section id="pilares" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-8xl">
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-8"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" />

                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
                    {p.label}
                  </p>
                  <h3 className="mt-3 max-w-xs font-display text-[24px] font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/60">
                    {p.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition group-hover:gap-3">
                    {p.cta} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-y border-white/5 bg-navy px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-8xl gap-8 md:grid-cols-3">
          {[
            ["Segurança", "Administradora regulada pelo Banco Central e imobiliária com curadoria criteriosa."],
            ["Planejamento", "Duas formas de construir patrimônio, pensadas para se complementar."],
            ["Alto padrão", "Sem atalhos: só entram no ecossistema soluções e imóveis de qualidade comprovada."],
          ].map(([title, desc]) => (
            <div key={title}>
              <h4 className="font-display text-[17px] font-semibold text-white">{title}</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-white/55">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-blue">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 text-center font-display text-[26px] font-semibold text-white">
            Perguntas frequentes
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-white/10 bg-navy px-5 py-4 open:bg-navyLight"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between text-[14px] font-medium text-white">
                  {f.q}
                  <span className="ml-4 text-white/40 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[13px] leading-relaxed text-white/55">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="border-t border-white/5 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 text-[12px] text-white/35 md:flex-row">
          <p>© {new Date().getFullYear()} Rise. Consórcio e imóveis.</p>
          <p>Um ecossistema Embracon + Imobiliária Curitiba</p>
        </div>
      </footer>
    </main>
  );
}
