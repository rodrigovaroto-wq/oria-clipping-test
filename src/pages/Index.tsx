import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { Hero } from "@/components/oria/Hero";
import { Numeros } from "@/components/oria/Numeros";
import { Sobre } from "@/components/oria/Sobre";
import { QuandoBuscar } from "@/components/oria/QuandoBuscar";
import { Diferenciais } from "@/components/oria/Diferenciais";
import { NoticiasHome } from "@/components/oria/NoticiasHome";
import { Contato } from "@/components/oria/Contato";
import { useSEO } from "@/hooks/useSEO";
import { useReveal } from "@/hooks/useReveal";

const SCHEMA_HOME = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://oriapartners.com/#webpage",
  url: "https://oriapartners.com/",
  name: "Oria Partners — Reestruturação Financeira e Turnaround",
  description:
    "Boutique independente especializada em reestruturação financeira, turnaround e situações especiais para empresas middle e large corporate. +7bi em transações conduzidas.",
  isPartOf: { "@id": "https://oriapartners.com/#website" },
  about: { "@id": "https://oriapartners.com/#organization" },
};

const IndexPage = () => {
  useSEO({
    title: "Oria Partners — Reestruturação Financeira e Turnaround | São Paulo",
    description:
      "Boutique independente especializada em reestruturação financeira, turnaround e situações especiais. +7bi em transações conduzidas. +40 grupos econômicos atendidos. São Paulo.",
    canonical: "https://oriapartners.com/",
    schema: SCHEMA_HOME,
  });

  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Numeros />
        <Diferenciais />
        <QuandoBuscar />
        <NoticiasHome />
        <Contato />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
