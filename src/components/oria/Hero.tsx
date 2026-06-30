import { ArrowRight } from "./Icons";
import { useContent } from "@/data/oria";

export const Hero = () => {
  const { UI } = useContent();
  return (
  <section
    id="hero"
    className="hero relative overflow-hidden w-full flex flex-col justify-center"
      style={{
        height: "100dvh",
        minHeight: "100dvh",
        maxHeight: "100dvh",
        backgroundColor: "#000",
      }}
  >
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/og-image.png"
      aria-hidden="true"
      tabIndex={-1}
      className="pointer-events-none absolute"
      style={{
        zIndex: 0,
        top: 0,
        left: 0,
        width: "100%",
        height: "115%",
        objectFit: "cover",
        objectPosition: "top center",
      }}
    >
      <source src="/hero-bg.webm" type="video/webm" />
    </video>

    <div
      className="container-oria w-full relative flex flex-col"
      style={{
        zIndex: 2,
        paddingTop: "116px",
        paddingBottom: "32px",
      }}
    >
      <div className="max-w-full">
        {/*
          Mobile: 1.35rem + 3pts ≈ 1.54rem (~24.6px)
          Desktop: inalterado (2.2rem / 2.7rem)
          whiteSpace: pre-line para respeitar as quebras de linha do texto
        */}
        <h1
          className="font-bold tracking-[-0.025em] text-white animate-fade-up [animation-delay:.2s] w-full md:max-w-[90%] text-[1.54rem] md:text-[2.2rem] lg:text-[2.7rem]"
          style={{ lineHeight: 1.18, marginBottom: "14px", wordBreak: "normal", overflowWrap: "break-word", hyphens: "none", fontWeight: 700 }}
        >
          {/*
            L1: Especialistas em Reestruturação
            L2: Corporativa, contemplando
            L3: reorganização administrativa,
            L4: financeira, operacional ou
            L5: societária de empresas
            Usamos <br /> explícitos no mobile; desktop usa max-width para quebrar naturalmente
          */}
          <span className="md:hidden">
            Especialistas em Reestruturação<br />
            Corporativa, contemplando<br />
            <em className="not-italic">reorganização administrativa,</em><br />
            <em className="not-italic">financeira, operacional ou </em><br />
            <em className="not-italic">societária de empresas</em>
          </span>
          <span className="hidden md:inline">
            {UI.hero.h1Lines.map((line, i) => (
              <span key={i}>
                {line.italic ? (
                  <em className="not-italic font-bold text-white" style={{ fontWeight: 700, fontStyle: "normal" }}>{line.text}</em>
                ) : (
                  line.text
                )}
              </span>
            ))}
          </span>
        </h1>

        {/* Eyebrow: abaixo do h1, fonte = 60% do tamanho do headline mobile */}
        {/* mobile headline = 1.54rem → eyebrow = ~0.925rem */}
        <div
          className="flex font-mono-label text-[#F0EDE6] items-center gap-3 animate-fade-up [animation-delay:.3s]"
          style={{
            fontSize: "clamp(0.58rem, 1.4vw, 0.75rem)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          <span className="block w-6 h-px bg-[#F0EDE6] md:w-8" />
          {UI.hero.eyebrow}
        </div>

        {/* Botões */}
        <div
          className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:flex-wrap items-stretch sm:items-start animate-fade-up [animation-delay:.4s]"
          style={{ marginBottom: "12px" }}
        >
          <a
            href="#contato"
            className="btn-primary justify-center sm:justify-start font-bold text-[0.8rem] md:text-base py-2 md:py-3 px-4 md:px-6"
            style={{ fontWeight: 700 }}
          >
            {UI.hero.cta}
            <ArrowRight />
          </a>
          <a
            href="/casos"
            className="btn-secondary justify-center sm:justify-start !text-white !border-white hover:!bg-white hover:!text-foreground font-bold text-[0.8rem] md:text-base py-2 md:py-3 px-4 md:px-6"
            style={{ fontWeight: 700 }}
          >
            {UI.hero.ctaSecondary}
          </a>
        </div>

        <p
          className="not-italic font-light text-[#F0EDE6] animate-fade-up [animation-delay:.6s]"
          style={{ fontSize: "0.68rem", lineHeight: 1.5 }}
        >
          {UI.hero.note}
        </p>
      </div>
    </div>
  </section>
  );
};
