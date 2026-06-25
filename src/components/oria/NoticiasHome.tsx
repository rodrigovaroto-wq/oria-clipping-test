import { Link } from "react-router-dom";
import { NoticiaCard } from "./NoticiaCard";
import { getAllPosts } from "@/lib/posts";
import { useContent } from "@/data/oria";

export const NoticiasHome = () => {
  const { lang } = useContent();
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  const label = lang === "en" ? "News" : "Notícias";
  const heading = lang === "en"
    ? "Stay close to what's moving the market."
    : "Fique por dentro do que acontece no mercado.";
  const cta = lang === "en" ? "View all news" : "Ver todas as notícias";

  return (
    <section id="noticias" className="bg-background py-20 md:py-28">
      <div className="container-oria">
        <div className="mb-12 reveal max-w-[820px] mx-auto text-center">
          <div className="font-mono-label text-[11px] text-muted mb-5">{label}</div>
          <h2 className="text-foreground font-medium text-[clamp(26px,4vw,42px)] tracking-tight leading-[1.15]">
            {heading}
          </h2>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 reveal [&>*:nth-child(3)]:col-span-2 [&>*:nth-child(3)]:w-full [&>*:nth-child(3)]:max-w-[calc(50%-8px)] [&>*:nth-child(3)]:mx-auto md:[&>*:nth-child(3)]:col-span-1 md:[&>*:nth-child(3)]:max-w-none md:[&>*:nth-child(3)]:mx-0">
          {posts.map((p) => (
            <NoticiaCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/noticias" className="btn-primary">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
};
