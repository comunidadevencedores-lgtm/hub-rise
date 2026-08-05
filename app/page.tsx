import Image from "next/image";
import WarpGrid from "./components/WarpGrid";

const pillars = [
  {
    label: "Consórcio",
    title: "Construa patrimônio sem juros",
    description:
      "Cartas de crédito para imóvel, veículo e investimento, com a estrutura e a segurança de uma administradora consolidada no mercado.",
    href: "https://embracon.com.br",
    cta: "Simular consórcio",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
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
  {
    label: "Seguro",
    title: "Proteção para o que você já construiu",
    description:
      "Seguros de vida, residencial e patrimonial, pensados para proteger a família e os bens conquistados ao longo do caminho.",
    href: "https://embracon.com.br",
    cta: "Conhecer os seguros",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Carta contemplada",
    title: "Crédito já contemplado, pronto pra usar",
    description:
      "Cartas de crédito já contempladas, disponíveis para transferência — sem esperar sorteio ou lance.",
    href: "https://embracon.com.br",
    cta: "Ver cartas disponíveis",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
  },
];

const steps = [
  { n: "01", title: "Planeje", desc: "Escolha a carta de crédito no valor do seu objetivo.", color: "bg-[#E84527]" },
  { n: "02", title: "Contemple", desc: "Por lance ou sorteio, sem juros no processo.", color: "bg-brand" },
  { n: "03", title: "Realize", desc: "Use o crédito num imóvel curado pelo ecossistema.", color: "bg-amber" },
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

const footerLinks = [
  { label: "Consórcio", href: "#pilares" },
  { label: "Imóveis", href: "#pilares" },
  { label: "Seguro", href: "#pilares" },
  { label: "Dúvidas frequentes", href: "#pilares" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8" cy="8.5" r="1.15" fill="currentColor" />
        <path d="M8 11.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path
          d="M12 17v-3.2c0-1.4 1-2.3 2.2-2.3s2 .9 2 2.2V17"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path d="M12 11.5V17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/554100000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
        <path
          d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.5-1.2A8.4 8.4 0 1 0 12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M8.6 8.8c.2-.6.6-.6 1-.6h.4c.2 0 .4 0 .6.5.2.5.6 1.5.6 1.6.1.1.1.3 0 .4-.1.2-.2.3-.3.4l-.4.5c-.1.1-.2.3-.1.5.2.4.7 1.1 1.5 1.7.9.7 1.5.9 1.7 1 .2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.1.4.3.1.2.1.9-.2 1.3-.3.5-1.3 1-2.1 1-.8 0-2.6-.3-4.3-2-1.8-1.7-2.4-3.5-2.5-4.1-.1-.6.1-1.4.5-2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="relative">
      <WarpGrid />

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
          className="focus-ring text-[13px] font-medium text-graphite/60 transition hover:text-ink"
        >
          Ver soluções ↓
        </a>
      </header>

      {/* Hero — ícone da marca centralizado atrás do título */}
      <section className="relative overflow-hidden px-6 pb-32 pt-24 text-center md:px-10 md:pt-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_at_top,_rgba(238,114,36,0.14),_transparent_70%)]"
        />

        {/* Ícone gigante centralizado atrás da frase */}
        <Image
          src="/icon-orange.png"
          alt=""
          aria-hidden
          width={1534}
          height={1249}
          className="pointer-events-none absolute left-1/2 top-[46%] -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] md:h-[520px] md:w-[520px]"
        />

        <p className="relative text-[11px] font-semibold uppercase tracking-[0.35em] text-brand">
          Consórcio · Imóveis
        </p>
        <h1 className="relative mx-auto mt-8 max-w-3xl font-display text-[42px] font-semibold leading-[1.1] text-ink md:text-[64px]">
          Patrimônio, construído com propósito.
        </h1>
        <p className="mx-auto mt-7 max-w-md text-[15px] leading-relaxed text-graphite/70">
          Consórcio e imóveis de alto padrão, num só ecossistema.
        </p>

        <a
          href="#pilares"
          className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-[14px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(238,114,36,0.55)] transition hover:brightness-110"
        >
          Simular agora →
        </a>
      </section>

      {/* Como funciona — cada passo com uma cor quente da paleta */}
      <section className="border-y border-black/5 bg-white px-6 py-24 md:px-10">
        <div className="mx-auto max-w-8xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
            Como funciona
          </p>
          <div className="relative mt-16 grid gap-16 md:grid-cols-3 md:gap-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-black/10 to-transparent md:block"
            />
            {steps.map((s) => (
              <div key={s.n} className="relative text-center md:text-left">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full ${s.color} font-display text-[12px] font-bold text-white md:mx-0 mx-auto`}>
                  {s.n}
                </span>
                <h3 className="mt-4 font-display text-[19px] font-semibold text-ink">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[220px] text-[13px] leading-relaxed text-graphite/60 md:mx-0">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares — Consórcio / Imóveis / Seguro / Carta contemplada */}
      <section id="pilares" className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-8xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
            Nossas soluções
          </p>
          <h2 className="mt-3 text-center font-display text-[26px] font-semibold text-ink">
            Tudo o que você precisa pra subir de nível.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {pillars.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="focus-ring group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-2xl border border-black/5 p-8"
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
                  <h3 className="mt-3 max-w-xs font-display text-[22px] font-semibold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-white/70">
                    {p.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white transition group-hover:brightness-110">
                    {p.cta} →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="border-y border-black/5 bg-white px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-8xl gap-8 md:grid-cols-3">
          {[
            ["Segurança", "Administradora regulada pelo Banco Central e imobiliária com curadoria criteriosa."],
            ["Planejamento", "Duas formas de construir patrimônio, pensadas para se complementar."],
            ["Alto padrão", "Sem atalhos: só entram no ecossistema soluções e imóveis de qualidade comprovada."],
          ].map(([title, desc]) => (
            <div key={title}>
              <h4 className="font-display text-[17px] font-semibold text-ink">{title}</h4>
              <p className="mt-2 text-[14px] leading-relaxed text-graphite/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bloco sóbrio */}
      <section className="bg-offwhite px-6 py-20 text-center md:px-10 md:py-28">
        <p className="mx-auto max-w-lg font-display text-[26px] font-semibold leading-tight text-ink md:text-[34px]">
          Suba de nível com a gente.
        </p>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
            Dúvidas frequentes
          </p>
          <h2 className="mt-3 text-center font-display text-[26px] font-semibold text-ink">
            Perguntas frequentes
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-black/5 bg-white px-5 py-4 open:bg-sand/40"
              >
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between text-[14px] font-medium text-ink">
                  {f.q}
                  <span className="ml-4 text-graphite/40 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[13px] leading-relaxed text-graphite/60">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — escuro, ancora o site */}
      <footer className="relative overflow-hidden border-t border-black/5 bg-ink px-6 py-14 md:px-10">
        {/* Marca d'água do ícone, versão branca */}
        <Image
          src="/icon-white.png"
          alt=""
          aria-hidden
          width={1534}
          height={1249}
          className="pointer-events-none absolute -bottom-24 -right-16 h-[320px] w-[320px] opacity-[0.06] md:h-[420px] md:w-[420px]"
        />

        <div className="relative mx-auto max-w-8xl">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {/* Marca + tagline */}
            <div>
              <Image
                src="/logo-orange.png"
                alt="Auriz.on"
                width={3031}
                height={586}
                className="h-6 w-auto object-contain brightness-0 invert"
              />
              <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed text-white/40">
                Um ecossistema Embracon + Trato Feito, pra você construir patrimônio com propósito.
              </p>
            </div>

            {/* Links rápidos */}
            <div className="md:justify-self-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Soluções
              </p>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="focus-ring text-[13px] text-white/60 transition hover:text-brand"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes sociais */}
            <div className="md:justify-self-end">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/30">
                Fale com a gente
              </p>
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-brand hover:text-brand"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/40 md:flex-row">
            <p>© {new Date().getFullYear()} Auriz.on. Consórcio e imóveis.</p>
            <p>Um ecossistema Embracon + Trato Feito</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
