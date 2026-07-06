import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { SectionHeader } from "@/components/oria/SectionHeader";
import { Contato } from "@/components/oria/Contato";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";
import { useReveal } from "@/hooks/useReveal";
import { Search, Wallet, RefreshCw, Handshake, Database, Stethoscope, Users, LineChart, type LucideIcon } from "lucide-react";

// Ícones que representam cada frente e cada etapa do método (na ordem do conteúdo)
const FRENTE_ICONS: LucideIcon[] = [Search, Wallet, RefreshCw, Handshake];
const METODO_ICONS: LucideIcon[] = [Database, Stethoscope, Users, LineChart];

const SCHEMA_ATUACAO = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://oriapartners.com/atuacao#webpage",
  url: "https://oriapartners.com/atuacao",
  name: "Atuação — Oria Partners | Reestruturação Financeira",
  description:
    "Frentes integradas de atuação: diagnóstico independente, gestão de liquidez, reestruturação financeira e operacional, transações em situação especial e gestão interina.",
  isPartOf: { "@id": "https://oriapartners.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oriapartners.com/" },
      { "@type": "ListItem", position: 2, name: "Atuação", item: "https://oriapartners.com/atuacao" },
    ],
  },
};

const AtuacaoPage = () => {
  const { FRENTES, METODO, UI } = useContent();

  useSEO({
    title: "Atuação — Diagnóstico, Reestruturação e Transações | Oria Partners",
    description:
      "Diagnóstico independente, gestão de liquidez e estrutura de capital, reestruturação financeira e operacional, transações em situação especial e gestão interina. Saiba como atuamos.",
    canonical: "https://oriapartners.com/atuacao",
    schema: SCHEMA_ATUACAO,
  });

  useReveal(true);

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <section className="bg-background py-16 md:py-24">
          <div className="container-oria">
            <SectionHeader
              heading={
                <>
                  {UI.atuacao.headingA}
                  {UI.atuacao.headingB}
                </>
              }
              intro={UI.atuacao.intro}
            />

            <div className="mt-4 md:mt-8 border-t border-rule reveal">
              {FRENTES.map((f, i) => {
                const Icon = FRENTE_ICONS[i % FRENTE_ICONS.length];
                return (
                <article
                  key={f.num}
                  className="grid md:grid-cols-[auto_1fr] gap-4 md:gap-14 py-10 md:py-14 border-b border-rule"
                >
                  <div className="md:pt-1">
                    <Icon aria-hidden strokeWidth={1.5} className="w-9 h-9 md:w-10 md:h-10 text-foreground" />
                  </div>
                  <div className="max-w-[820px]">
                    <h3 className="font-serif-display text-[clamp(22px,4vw,32px)] font-normal leading-[1.15] tracking-[-0.015em] mb-5">
                      {f.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] leading-[1.6] text-foreground font-medium mb-4">
                      {f.bold}
                    </p>
                    <p className="text-[15px] md:text-[15.5px] leading-[1.7] text-ink-soft">{f.desc}</p>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#11161D" }} className="py-24 md:py-36">
          <div className="container-oria">
            <SectionHeader
              invert
              heading={
                <>
                  {UI.atuacao.metodoHeadingA}
                  {UI.atuacao.metodoHeadingB}
                </>
              }
            />
            <div
              className="grid sm:grid-cols-2 gap-x-14 gap-y-10 md:gap-y-14 reveal"
              style={{ borderTop: "1px solid rgba(246,244,238,0.18)" }}
            >
              {METODO.map((m, i) => {
                const Icon = METODO_ICONS[i % METODO_ICONS.length];
                return (
                <article
                  key={m.num}
                  className="pt-8 md:pt-10"
                  style={{ borderTop: "1px solid rgba(246,244,238,0.18)" }}
                >
                  <div className="mb-5">
                    <Icon aria-hidden strokeWidth={1.5} className="w-8 h-8" style={{ color: "#F6F4EE" }} />
                  </div>
                  <h3 className="font-serif-display text-[clamp(20px,3vw,26px)] font-normal leading-[1.2] tracking-[-0.015em] mb-3" style={{ color: "#F6F4EE" }}>
                    {m.title}
                  </h3>
                  <p className="text-[15px] md:text-[15.5px] leading-[1.65]" style={{ color: "#F6F4EE", opacity: 0.75 }}>
                    {m.desc}
                  </p>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default AtuacaoPage;
