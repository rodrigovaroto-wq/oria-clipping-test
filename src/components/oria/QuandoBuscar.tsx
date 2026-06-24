import { ArrowRight } from "./Icons";
import { useContent } from "@/data/oria";

export const QuandoBuscar = () => {
  const { GATILHOS, UI } = useContent();
  return (
    <section
      id="quando-buscar"
      style={{ backgroundColor: "#11161D", color: "#F6F4EE" }}
      className="py-14 md:py-16"
    >
      <div className="container-oria">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 items-start">
          <div className="md:col-span-1">
            <div className="font-mono-label text-[11px] mb-5" style={{ color: "#F6F4EE" }}>
              {UI.quandoBuscar.num}
            </div>
            <h2 className="font-medium tracking-tight text-[clamp(22px,2.6vw,30px)] leading-[1.2] mb-7" style={{ color: "#F6F4EE" }}>
              {UI.quandoBuscar.headingA}
              <br />
              {UI.quandoBuscar.headingB}
            </h2>
            <a href="#contato" className="btn-inverted">
              {UI.quandoBuscar.cta}
              <ArrowRight />
            </a>
          </div>

          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {GATILHOS.map((g) => (
              <div key={g.title} className="border-t pt-5" style={{ borderColor: "rgba(246,244,238,0.2)" }}>
                <h4 className="font-medium text-[15px] md:text-[16px] leading-snug mb-3" style={{ color: "#F6F4EE" }}>
                  {g.title}
                </h4>
                <p className="text-[13.5px] md:text-[14px] leading-[1.55]" style={{ color: "#F6F4EE", opacity: 0.78 }}>
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
