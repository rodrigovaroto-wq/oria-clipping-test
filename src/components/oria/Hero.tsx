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
        {/* h1: mobile com font menor e sem max-width para ocupar toda largura */}
        <h1
          className="font-bold tracking-[-0.025em] text-white animate-fade-up [animation-delay:.2s] max-w-full md:max-w-[90%] text-[1.35rem] md:text-[2.2rem] lg:text-[2.7rem]"
          style={{ lineHeight: 1.2, marginBottom: "20px", wordBreak: "normal", overflowWrap: "break-word", hyphens: "none", fontWeight: 700, whiteSpace: "pre-line" }}
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

        {/* Eyebrow: abaixo do h1 em ambos mobile e desktop (posição original) */}
        <div className="flex font-mono-label text-[#F0EDE6] items-center gap-3 animate-fade-up [animation-delay:.3s]"
          style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "32px" }}
        >
          <span className="block w-6 h-px bg-[#F0EDE6] md:w-8" />
          {UI.hero.eyebrow}
        </div>

        {/* Botões: mobile fonte/padding menores, desktop inalterado */}
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
