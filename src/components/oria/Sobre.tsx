import { useContent } from "@/data/oria";

export const Sobre = () => {
  const { SOBRE } = useContent();
  return (
    <section id="sobre" className="bg-background pt-24 md:pt-36 pb-12 md:pb-20">
      <div className="container-oria">
        <div className="grid grid-cols-1 md:grid-cols-[30%_1fr] gap-5 md:gap-10 reveal">
          <h2 className="section-title-indent text-foreground font-medium text-[clamp(22px,2.6vw,30px)] tracking-tight leading-[1.15] md:pt-1">
            {SOBRE.eyebrow}
          </h2>
          <div className="flex flex-col gap-6">
            {SOBRE.paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] md:text-[16px] leading-[1.7] text-ink-soft">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
