import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { SectionHeader } from "@/components/oria/SectionHeader";
import { Contato } from "@/components/oria/Contato";
import { LinkedIn } from "@/components/oria/Icons";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";
import { useReveal } from "@/hooks/useReveal";
import socioEnzo from "@/assets/socio-enzo.png";
import socioGustavo from "@/assets/socio-gustavo.png";

const PARTNER_PHOTOS: Record<string, string> = {
  enzo: socioEnzo,
  gustavo: socioGustavo,
};

const SCHEMA_SOCIOS = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://oriapartners.com/socios#webpage",
    url: "https://oriapartners.com/socios",
    name: "Sócios — Oria Partners | Enzo Pierobom e Gustavo Gregori",
    description:
      "Enzo Pierobom (CEO) e Gustavo Gregori (COO), sócios-fundadores da Oria Partners. +20 anos de experiência cada em reestruturação financeira, crédito corporativo e mercado de capitais.",
    isPartOf: { "@id": "https://oriapartners.com/#website" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://oriapartners.com/" },
        { "@type": "ListItem", position: 2, name: "Sócios", item: "https://oriapartners.com/socios" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://oriapartners.com/socios#enzo-pierobom",
    name: "Enzo Pierobom",
    jobTitle: "Sócio-Fundador & CEO",
    worksFor: { "@id": "https://oriapartners.com/#organization" },
    description:
      "Sócio-Fundador e CEO da Oria Partners. Engenheiro de Produção (USP), MBA Fundação Dom Cabral, conselheiro pelo IBGC. +18 anos no mercado financeiro. Ex-ABN AMRO Real e Santander. Gestor da Metalfrio durante reestruturação operacional 2021-2022.",
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade de São Paulo (USP)" },
      { "@type": "CollegeOrUniversity", name: "Fundação Dom Cabral" },
    ],
    knowsAbout: [
      "Reestruturação financeira",
      "Crédito corporativo",
      "Mercado de capitais",
      "M&A",
      "Turnaround",
      "Gestão interina",
    ],
    sameAs: "https://www.linkedin.com/in/enzo-pierobom/",
    url: "https://oriapartners.com/socios",
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://oriapartners.com/socios#gustavo-gregori",
    name: "Gustavo Gregori",
    jobTitle: "Sócio-Fundador & COO",
    worksFor: { "@id": "https://oriapartners.com/#organization" },
    description:
      "Sócio-Fundador e COO da Oria Partners. Experiência focada em reestruturação financeira, crédito corporativo e situações complexas. Ex-PIMCO, Morgan Stanley, Deutsche Bank, HSBC, Santander e Bradesco BBI.",
    knowsAbout: [
      "Reestruturação financeira",
      "Crédito corporativo",
      "Situações especiais",
      "Coordenação de stakeholders",
      "Turnaround operacional",
    ],
    sameAs: "https://www.linkedin.com/in/gustavogregori/",
    url: "https://oriapartners.com/socios",
  },
];

const renderBio = (paragraphs: string[]) =>
  paragraphs.map((p, i) => {
    const parts = p.split(/(\*\*[^*]+\*\*)/g).map((seg, idx) => {
      if (seg.startsWith("**") && seg.endsWith("**")) {
        return (
          <strong key={idx} className="font-medium text-foreground">
            {seg.slice(2, -2)}
          </strong>
        );
      }
      return <span key={idx}>{seg}</span>;
    });
    return (
      <p key={i} className="text-[15.5px] leading-[1.65] text-ink-soft mb-4 last:mb-0">
        {parts}
      </p>
    );
  });

const SociosPage = () => {
  const { SOCIOS, UI } = useContent();

  useSEO({
    title: "Sócios — Enzo Pierobom e Gustavo Gregori | Oria Partners",
    description:
      "Enzo Pierobom e Gustavo Gregori, sócios-fundadores da Oria Partners. +20 anos de experiência em reestruturação financeira, crédito corporativo, M&A e mercado de capitais. Ex-PIMCO, Morgan Stanley, Santander.",
    canonical: "https://oriapartners.com/socios",
    schema: SCHEMA_SOCIOS,
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
                  {UI.socios.headingA}
                  {UI.socios.headingB}
                </>
              }
              intro={UI.socios.intro}
            />

            <div className="mt-4 md:mt-8 flex flex-col gap-16 md:gap-28">
              {SOCIOS.map((s, idx) => {
                const photo = PARTNER_PHOTOS[s.photo];
                const photoLeft = idx % 2 === 0;
                return (
                  <article
                    key={s.name}
                    className="reveal grid gap-8 md:gap-14 md:grid-cols-[minmax(0,0.85fr)_1fr] items-start"
                  >
                    {/* Retrato */}
                    <div className={photoLeft ? "md:order-1" : "md:order-2"}>
                      <div className="relative">
                        {photo ? (
                          <img
                            src={photo}
                            alt={s.name}
                            width={640}
                            height={800}
                            loading="lazy"
                            className="w-full aspect-[4/5] object-cover object-top grayscale contrast-[1.02] bg-paper-warm"
                          />
                        ) : (
                          <div className="w-full aspect-[4/5] bg-foreground flex items-center justify-center">
                            <span className="font-serif-display text-background text-5xl">{s.initials}</span>
                          </div>
                        )}
                        {/* fio de acento, canto inferior */}
                        <span aria-hidden className="absolute -bottom-px left-0 h-[3px] w-16 bg-accent" />
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className={photoLeft ? "md:order-2 md:pt-2" : "md:order-1 md:pt-2"}>
                      <div className="font-mono-label text-[11px] text-accent mb-4">{s.role}</div>
                      <h2 className="font-serif-display text-[clamp(30px,5.5vw,48px)] font-light leading-[1.02] tracking-[-0.02em] mb-5 break-words">
                        {s.name}
                      </h2>
                      {s.linkedin && (
                        <a
                          href={s.linkedin}
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="no-referrer"
                          aria-label={`${UI.socios.linkedinAria} ${s.name}`}
                          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors text-[12px] font-mono-label"
                        >
                          <LinkedIn className="w-4 h-4" />
                          LinkedIn →
                        </a>
                      )}

                      <ul className="list-none mt-8 mb-9 border-t border-rule">
                        {s.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="py-4 border-b border-rule text-[14.5px] leading-[1.55] text-ink-soft"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="max-w-[560px]">{renderBio(s.bio)}</div>
                    </div>
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

export default SociosPage;
