import { useContent } from "@/data/oria";

const HoverCard = ({ title, desc }: { title: string; desc: string }) => (
  <div className="group relative border border-rule bg-background h-[200px] w-full overflow-hidden transition-colors duration-300 hover:border-accent">
    <div className="absolute inset-0 flex items-center justify-center p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="text-[15px] md:text-[16px] font-medium leading-snug text-foreground">
        {title}
      </h3>
    </div>
    <div className="absolute inset-0 flex items-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="text-[13px] leading-[1.55] text-ink-soft">{desc}</p>
    </div>
  </div>
);

export const Diferenciais = () => {
  const { PILARES, INEGOCIAVEIS, UI } = useContent();
  return (
    <section id="diferenciais" className="bg-background py-20 md:py-28">
      <div className="container-oria">
        <div className="mb-10 md:mb-14 reveal max-w-[820px]">
          <h2 className="text-foreground font-medium text-[clamp(26px,4vw,42px)] tracking-tight leading-[1.15] mb-6">
            {UI.diferenciais.headingA}
          </h2>
          {UI.diferenciais.intro && (
            <p className="text-[17px] md:text-[18px] leading-[1.65] text-foreground">
              {UI.diferenciais.intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-[680px] reveal">
          {PILARES.map((p) => (
            <HoverCard key={p.title} title={p.title} desc={p.desc} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 reveal">
          <h3 className="text-foreground font-medium text-[clamp(18px,2.4vw,22px)] mb-6">
            {UI.diferenciais.inegociaveis}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-[680px]">
            {INEGOCIAVEIS.map((r) => (
              <HoverCard key={r.title} title={r.title} desc={r.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
