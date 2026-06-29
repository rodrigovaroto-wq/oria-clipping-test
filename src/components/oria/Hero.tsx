import { ArrowRight } from "./Icons";
import { useContent } from "@/data/oria";

export const Hero = () => {
  const { UI } = useContent();
  return (
  <section
    id="hero"
    className="hero relative overflow-hidden w-full flex flex-col justify-center"
      style={{
        height: "calc(100dvh - 84px)",
        minHeight: "calc(100dvh - 84px)",
        maxHeight: "calc(100dvh - 84px)",
      backgroundColor: "#000",
    }}
  >
    {/*
      poster="/og-image.png" — exibido imediatamente enquanto o vídeo carrega.
      Elimina o flash preto inicial e âncora o LCP num elemento visível desde o primeiro frame.

      preload="metadata" — o browser baixa apenas os metadados do vídeo (duração,
      dimensões) sem fazer download do arquivo inteiro antes do usuário interagir.
      Isso reduz o peso do carregamento inicial em ~4.9 MB sem atrasar o início
      da reprodução, pois o autoPlay dispara assim que os primeiros frames chegam.

      Vídeo roda em todos os dispositivos (desktop e mobile) sem fallback de imagem.
    */}
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
        paddingTop: "32px",
        paddingBottom: "32px",
      }}
    >
      <div className="max-w-full">
        <h1 className="font-bold tracking-[-0.025em] text-white animate-fade-up [animation-delay:.1s] max-w-full md:max-w-[90%] text-[1.45rem] md:text-[2.2rem] lg:text-[2.7rem]"
          style={{ lineHeight: 1.15, marginBottom: "32px", wordBreak: "normal", overflowWrap: "break-word", hyphens: "none", fontWeight: 700, whiteSpace: "pre-line" }}
        >

          {UI.hero.h1Lines.map((line, i) => (
            <span key={i}>
              {line.italic ? (
                <em className="not-italic font-bold text-white" style={{ fontWeight: 700, fontStyle: "normal" }}>{line.text}</em>
              ) : (
                line.text
              )}
            </span>
          ))}
        </h1>

        <div className="font-mono-label text-[#F0EDE6] flex items-center gap-4 animate-fade-up [animation-delay:.3s]"
          style={{ fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "32px" }}
        >
          <span className="block w-8 h-px bg-[#F0EDE6]" />
          {UI.hero.eyebrow}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:flex-wrap items-stretch sm:items-start animate-fade-up [animation-delay:.5s]" style={{ marginBottom: "16px" }}>
          <a href="#contato" className="btn-primary justify-center sm:justify-start font-bold" style={{ fontWeight: 700 }}>
            {UI.hero.cta}
            <ArrowRight />
          </a>
          <a href="/casos" className="btn-secondary justify-center sm:justify-start !text-white !border-white hover:!bg-white hover:!text-foreground font-bold" style={{ fontWeight: 700 }}>
            {UI.hero.ctaSecondary}
          </a>
        </div>

        <p className="not-italic font-light text-[#F0EDE6] animate-fade-up [animation-delay:.7s]"
          style={{ fontSize: "0.75rem", lineHeight: 1.5 }}
        >
          {UI.hero.note}
        </p>
      </div>
    </div>
  </section>
  );
};
