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
    href: "https://tfimoveis.com.br",
    cta: "Ver imóveis selecionados",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
];

const steps = [
  { n: "01", title: "Planeje", desc: "Escolha a carta de crédito no valor do seu objetivo." },
  { n: "02", title: "Contemple", desc: "Por lance ou sorteio, sem juros no processo." },
  { n: "03", title: "Realize", desc: "Use o crédito num imóvel curado pelo ecossistema." },
];

const faqs = [
  {
    q: "O Auriz.on vende imóveis ou consórcios diretamente?",
    a: "Não. O Auriz.on é a porta de entrada do ecossistema — cada solução é conduzida pelo especialista responsável: consórcio pela Embracon e imóveis pela Trato Feito.",
  },
  {
    q: "Preciso escolher entre consórcio e imóvel?",
    a: "Não necessariamente. Muitas famílias usam as duas frentes juntas — o consórcio como forma de planejamento e o imóvel como o destino desse patrimônio.",
  },
  {
    q: "Quem está por trás do Auriz.on?",
    a: "Uma parceria entre uma administradora de consórcios consolidada no mercado e uma imobiliária especializada em regiões nobres de Curitiba, com um propósito em comum: ajudar famílias a construir patrimônio de forma sólida e consciente.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Nav mínima */}
      <header className="mx-auto flex max-w-8xl items-center justify-between px-6 py-10 md:px-10">
        <Image
          src="/logo-orange.png"
          alt="Auriz.on"
          width={3031}
          height={586}
          priority
          className="h-6 w-auto object-contain"
        />
        <a
          href="#pilares"
          className="focus-ring text-[13px] font-medium text-white/50 transition hover:text-white"
        >
          Ver soluções ↓
        </a>
      </header>

      {/* Hero — enxuto, com muito respiro, ícone gigante como marca gráfica (ref. cartão de visita) */}
      <section className="relative overflow-hidden px-6 pb-32 pt-24 text-center md:px-10 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_at_top,_rgba(238,114,36,0.16),_transparent_70%)]"
        />
        {/* Grade pontilhada sutil — textura "tech" */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:28px_28px] text-white"
        />
        {/* Ícone "a." gigante, bem sutil, como marca gráfica de fundo */}
        <Image
          src="/icon-orange.png"
          alt=""
          aria-hidden
          width={1534}
          height={1249}
          className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[560px] w-[560px] opacity-[0.06] md:-right-24 md:-top-24"
        />

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
          Consórcio · Imóveis
        </p>
        <h1 className="mx-auto mt-8 max-w-3xl font-display text-[42px] font-semibold leading-[1.1] text-white md:text-[64px]">
          Patrimônio, construído com propósito.
        </h1>
        <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-white/50">
          Consórcio e imóveis de alto padrão, num só ecossistema.
        </p>
      </section>

      {/* Como funciona — inspirado no fluxo do consórcio, minimalista e técnico */}
      <section className="border-y border-white/5 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-8xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
            Como funciona
          </p>

          <div className="relative mt-16 grid gap-16 md:grid-cols-3 md:gap-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"
            />
            {steps.map((s) => (
              <div key={s.n} className="relative text-center md:text-left">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand font-display text-[12px] font-bold text-white md:mx-0 mx-auto">
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[19px] font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-relaxed text-white/50 md:mx-0">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares — Consórcio / Imóveis */}
      <section id="pilares" className="px-6 py-24 md:px-10">
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
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
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

      {/* Bloco de cor sólida — referência direta ao cartão de visita */}
      <section className="bg-brand px-6 py-20 text-center md:px-10 md:py-28">
        <p className="mx-auto max-w-lg font-display text-[26px] font-semibold leading-tight text-white md:text-[34px]">
          Um propósito. Duas formas de construir patrimônio.
        </p>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
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
          <p>© {new Date().getFullYear()} Auriz.on. Consórcio e imóveis.</p>
          <p>Um ecossistema Embracon + Trato Feito</p>
        </div>
      </footer>
    </main>
  );
}
