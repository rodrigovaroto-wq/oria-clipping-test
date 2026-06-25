import { useContent } from "@/data/oria";
import {
  Handshake,
  Network,
  Eye,
  Layers,
  Settings2,
  Timer,
  Ban,
  Sparkles,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const PILAR_ICONS: LucideIcon[] = [Handshake, Network, Eye, Layers, Settings2, Timer];
const INEG_ICONS: LucideIcon[] = [Ban, Sparkles, ShieldCheck];

const HoverCard = ({
  title,
  desc,
  Icon,
}: {
  title: string;
  desc: string;
  Icon: LucideIcon;
}) => (
  <div
    className="group relative bg-background min-h-[300px] w-full overflow-hidden transition-colors duration-300"
    style={{ border: "1px solid #C0492E" }}
  >
    {/* Background icon, centered, 70% opacity terracotta */}
    <Icon
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      style={{ width: 96, height: 96, color: "#C0492E", opacity: 0.7 }}
      strokeWidth={1.25}
    />
    {/* Title layer (default) */}
    <div className="absolute inset-0 z-10 flex items-center justify-center p-5 text-center transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="text-[15px] md:text-[16px] font-medium leading-snug text-foreground">
        {title}
      </h3>
    </div>
    {/* Description layer (hover) */}
    <div
      className="absolute inset-0 z-20 flex items-center justify-center p-5 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto"
      style={{ backgroundColor: "#11161D" }}
    >
      <p className="text-[13px] leading-[1.55]" style={{ color: "#F6F4EE" }}>
        {desc}
      </p>
    </div>
  </div>
);

export const Diferenciais = () => {
  const { PILARES, INEGOCIAVEIS, UI } = useContent();
  return (
    <section id="diferenciais" className="bg-background py-20 md:py-28">
      <div className="container-oria">
        <div className="mb-10 md:mb-14 reveal text-center max-w-[820px] mx-auto">
          <h2 className="text-foreground font-medium text-[clamp(26px,4vw,42px)] tracking-tight leading-[1.15] mb-6">
            {UI.diferenciais.headingA}
          </h2>
          {UI.diferenciais.intro && (
            <p className="text-[17px] md:text-[18px] leading-[1.65] text-foreground">
              {UI.diferenciais.intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 reveal">
          {PILARES.map((p, i) => (
            <HoverCard key={p.title} title={p.title} desc={p.desc} Icon={PILAR_ICONS[i % PILAR_ICONS.length]} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 reveal">
          <h3 className="section-title-indent text-foreground font-medium text-[clamp(18px,2.4vw,22px)] mb-6">
            {UI.diferenciais.inegociaveis}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {INEGOCIAVEIS.map((r, i) => (
              <HoverCard key={r.title} title={r.title} desc={r.desc} Icon={INEG_ICONS[i % INEG_ICONS.length]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
