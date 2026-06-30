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

const SHORT_DESCS: Record<string, string> = {
  "Coordenação e disciplina":
    "Situações com múltiplos stakeholders exigem método e clareza. Estruturamos negociações com disciplina operacional, comunicação transparente e alinhamento contínuo mesmo sob alta pressão.",
  "Disciplined coordination":
    "Complex situations require method and clarity. We structure negotiations with operational discipline, transparent communication and continuous alignment even under high pressure.",
  "Clareza antes da narrativa":
    "Construímos uma visão objetiva e tecnicamente consistente. Não operamos por otimismo artificial nem alarmismo — apenas compreensão precisa dos fatos, riscos e alternativas.",
  "Clarity before narrative":
    "We build an objective, technically consistent view — not on artificial optimism nor alarmism, but on precise understanding of facts, risks and alternatives.",
  "Da operação à negociação":
    "Toda reestruturação sustentável começa pela operação. Identificamos a origem dos problemas e estruturamos soluções compatíveis com a realidade operacional.",
  "From operations to negotiation":
    "Every sustainable restructuring begins with the operation. We identify root causes and structure solutions that fit the company's actual operational reality.",
  "Viabilidade com senso de urgência":
    "Em situações de estresse, tempo é parte da solução. Atuamos com profundidade técnica para evitar decisões frágeis, sempre respeitando o timing crítico de cada processo.",
  "Feasibility with a sense of urgency":
    "In distressed situations, time is part of the solution. We bring technical depth to avoid fragile decisions while always respecting the critical timing of each process.",
};

function resolveDesc(title: string, desc: string): string {
  return SHORT_DESCS[title] ?? desc;
}

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
    className="group relative w-full transition-colors duration-300"
    style={{
      backgroundColor: "#EEEBE2",
      border: "1px solid #C0492E",
      minHeight: 240,
    }}
  >
    {/* Default state */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 p-4 text-center transition-opacity duration-300 group-hover:opacity-0">
      <h3 className="text-[16px] md:text-[18px] font-medium leading-snug text-foreground">
        {title}
      </h3>
      <Icon
        aria-hidden="true"
        style={{ width: 48, height: 48, color: "#C0492E", opacity: 1 }}
        strokeWidth={1.5}
      />
    </div>
    {/* Hover layer: texto interno +5% → 14px→14.7px, 15px→15.75px */}
    <div
      className="absolute inset-0 z-20 flex items-center justify-center p-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ backgroundColor: "#11161D" }}
    >
      <p className="leading-[1.5]" style={{ color: "#F6F4EE", fontSize: "clamp(14.7px, 1.55vw, 15.75px)" }}>
        {resolveDesc(title, desc)}
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
          <h2 className="text-foreground font-medium text-[clamp(30px,4.6vw,46px)] tracking-tight leading-[1.15] mb-6">
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
