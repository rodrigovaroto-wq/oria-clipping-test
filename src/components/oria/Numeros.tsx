import { useEffect, useRef, useState } from "react";
import { useContent } from "@/data/oria";

const useCountUp = (target: number, duration = 1500, start = false) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return value;
};

export const Numeros = () => {
  const { NUMEROS, UI } = useContent();
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label={UI.numeros.label}
      style={{ backgroundColor: "#11161D", color: "#F6F4EE" }}
      className="py-20 md:py-28"
    >
      <div className="container-oria">
        <h2 className="font-medium text-[clamp(24px,3.5vw,38px)] tracking-tight mb-14 md:mb-20">
          {UI.numeros.label}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {NUMEROS.map((n, i) => (
            <NumeroItem key={i} item={n} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
};

const NumeroItem = ({
  item,
  start,
}: {
  item: { prefix: string; value: number; suffix: string; label: string };
  start: boolean;
}) => {
  const v = useCountUp(item.value, 1500, start);
  return (
    <div>
      <div className="font-bold leading-none tracking-tight text-[clamp(48px,6vw,76px)] mb-5" style={{ color: "#F6F4EE" }}>
        {item.prefix}
        {v}
        {item.suffix}
      </div>
      <div className="text-[16px] md:text-[17px] leading-[1.5]" style={{ color: "#F6F4EE", opacity: 0.85 }}>
        {item.label}
      </div>
    </div>
  );
};
