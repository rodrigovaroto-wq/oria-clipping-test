import { useEffect, useRef } from "react";
import { ArrowRight } from "./Icons";
import { useContent } from "@/data/oria";

export const Hero = () => {
  const { UI } = useContent();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const attempt = () => {
      const p = v.play();
      if (p !== undefined) p.catch(() => {});
    };
    if (v.readyState >= 2) {
      attempt();
    } else {
      v.addEventListener("canplay", attempt, { once: true });
    }
    return () => v.removeEventListener("canplay", attempt);
  }, []);

  const headlineBase: React.CSSProperties = {
    textWrap: "unset" as never,
    overflowWrap: "normal",
    wordBreak: "normal",
    hyphens: "none",
    whiteSpace: "normal",
    display: "block",
  };

  return (
    <section
      id="hero"
      className="hero relative overflow-hidden w-full flex flex-col justify-center"
      style={{ height: "100dvh", minHeight: "100dvh", maxHeight: "100dvh", backgroundColor: "#000" }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/og-image.png"
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute"
        style={{ zIndex: 0, top: 0, left: 0, width: "100%", height: "115%", objectFit: "cover", objectPosition: "top center" }}
      >
        <source src="/hero-bg.webm" type="video/webm" />
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="container-oria w-full relative flex flex-col"
        style={{ zIndex: 2, paddingTop: "116px", paddingBottom: "32px" }}
      >
        <div className="max-w-full">
          <h1
            className="font-bold tracking-[-0.025em] text-white animate-fade-up [animation-delay:.2s] w-full"
            style={{ lineHeight: 1.18, marginBottom: "14px", fontWeight: 700, textWrap: "unset" as never }}
          >
            {/* MOBILE — oculto a partir de 768px */}
            <span
              style={{
                ...headlineBase,
                fontSize: "1.44rem",
              }}
              className="md:!hidden"
            >
              Especialistas em Reestruturação<br />
              Corporativa, contemplando<br />
              reorganização administrativa,<br />
              financeira, operacional ou<br />
              societária de empresas
            </span>

            {/* DESKTOP — visível somente a partir de 768px */}
            <span
              style={{
                ...headlineBase,
                fontSize: "clamp(2.35rem, 3.2vw, 2.85rem)",
                display: "none",
              }}
              className="md:!block"
            >
              Especialistas em Reestruturação<br />
              Corporativa, contemplando reorganização<br />
              administrativa, financeira, operacional ou<br />
              societária de empresas
            </span>
          </h1>

          <div
            className="flex font-mono-label text-[#F0EDE6] items-center gap-3 animate-fade-up [animation-delay:.3s]"
            style={{ fontSize: "clamp(0.58rem, 1.4vw, 0.75rem)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "28px" }}
          >
            <span className="block w-6 h-px bg-[#F0EDE6] md:w-8" />
            {UI.hero.eyebrow}
          </div>

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
