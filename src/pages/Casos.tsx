import { useState } from "react";
import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { SectionHeader } from "@/components/oria/SectionHeader";
import { Contato } from "@/components/oria/Contato";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";
import { useReveal } from "@/hooks/useReveal";

const SCHEMA_CASOS = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://oriapartners.com/casos#webpage",
  url: "https://oriapartners.com/casos",
  name: "Casos — Oria Partners | Reestruturações e Turnarounds",
  description:
    "Casos reais de reestruturação financeira, turnaround, desinvestimento e gestão interina conduzidos pela Oria Partners. Anonimizados para preservar confidencialidade.",
  isPartOf: { "@id": "https://oriapartners.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://oriapartners.com/" },
      { "@type": "ListItem", position: 2, name: "Casos", item: "https://oriapartners.com/casos" },
    ],
  },
};

const CasosPage = () => {
  const { CASOS, TRACK_RECORD, UI } = useContent();
  const [open, setOpen] = useState<number | null>(null);

  useSEO({
    title: "Casos — Reestruturações e Turnarounds Conduzidos | Oria Partners",
    description:
      "Casos reais de reestruturação financeira, turnaround e situações especiais: industrial, serviços corporativos, empresa familiar e gestão interina. Contexto, desafio e resultado.",
    canonical: "https://oriapartners.com/casos",
    schema: SCHEMA_CASOS,
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
                  {UI.casos.headingA}
                  {UI.casos.headingB}
                </>
              }
              intro={UI.casos.intro}
            />

            <div className="mt-4 md:mt-8 border-t border-rule reveal">
              {CASOS.map((c, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-rule">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group relative w-full text-left grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-3 md:gap-12 items-baseline bg-transparent border-0 cursor-pointer py-8 md:py-11"
                    >
                      <span className="font-mono-label text-[10px] text-accent md:pt-1">{c.tag}</span>
                      <span>
                        <h3 className="font-serif-display text-[clamp(18px,4.5vw,25px)] font-normal leading-[1.2] tracking-[-0.01em] text-foreground transition-opacity group-hover:opacity-70">
                          {c.title}
                        </h3>
                        <span className="mt-2 block font-mono-label text-[10px] text-muted">{c.setor}</span>
                      </span>
                      <span
                        aria-hidden
                        className={`absolute right-0 top-7 md:static flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${
                          isOpen ? "border-accent text-accent" : "border-rule text-muted group-hover:border-foreground group-hover:text-foreground"
                        }`}
                      >
                        <span className="text-[18px] leading-none font-light">{isOpen ? "−" : "+"}</span>
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${isOpen ? "max-h-[2000px]" : "max-h-0"}`}>
                      <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 pb-14 pt-2">
                        <div className="hidden md:block" />
                        <div className="max-w-[860px] flex flex-col gap-8">
                          {c.porte && c.porte !== "—" && (
                            <div className="font-mono-label text-[10px] text-muted">
                              {UI.casos.labels.porte} — {c.porte}
                            </div>
                          )}

                          {(
                            [
                              [UI.casos.labels.contexto, c.contexto],
                              [UI.casos.labels.desafio, c.desafio],
                              [UI.casos.labels.atuacao, c.atuacao],
                            ] as const
                          ).map(([label, text]) => (
                            <div key={label} className="grid md:grid-cols-[120px_1fr] gap-2 md:gap-8 items-start">
                              <div className="font-mono-label text-[10px] text-muted pt-1">— {label}</div>
                              <p className="text-[16px] leading-[1.65] text-ink-soft">{text}</p>
                            </div>
                          ))}

                          {/* Resultado em destaque */}
                          <div className="mt-1 border-l-2 border-accent pl-5 md:pl-7">
                            <div className="font-mono-label text-[10px] text-accent mb-3">{UI.casos.labels.resultado}</div>
                            <p className="text-[16px] md:text-[17px] leading-[1.6] text-foreground">{c.resultado}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-20 pt-12 border-t border-rule grid md:grid-cols-[180px_1fr] gap-6 md:gap-20 items-start">
              <div className="font-mono-label text-[11px] text-muted pt-2">— {UI.casos.track}</div>
              <p className="font-serif-display text-[22px] leading-[1.4] font-light max-w-[820px] text-ink-soft">
                {TRACK_RECORD}
              </p>
            </div>
          </div>
        </section>

        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default CasosPage;
