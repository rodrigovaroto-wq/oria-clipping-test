import { useEffect, useMemo, useState } from "react";
import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { SectionHeader } from "@/components/oria/SectionHeader";
import { NoticiaCard } from "@/components/oria/NoticiaCard";
import { getAllPosts } from "@/lib/posts";
import { useContent } from "@/data/oria";
import { useSEO } from "@/hooks/useSEO";

const PAGE_SIZE = 12;

const todayIso = () => {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
};

const NoticiasPage = () => {
  const { lang } = useContent();
  const allPosts = useMemo(() => getAllPosts(), []);
  const [query, setQuery] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState(todayIso());
  const [visible, setVisible] = useState(PAGE_SIZE);

  useSEO({
    title: lang === "en"
      ? "News — Market & Restructuring | Oria Partners"
      : "Notícias — Mercado e Reestruturação | Oria Partners",
    description: lang === "en"
      ? "News and analysis on financial restructuring, distressed credit and special situations curated by Oria Partners."
      : "Notícias e análises sobre reestruturação financeira, crédito estressado e situações especiais selecionadas pela Oria Partners.",
    canonical: "/noticias",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allPosts.filter((p) => {
      if (q && !p.title.toLowerCase().includes(q)) return false;
      if (from && p.date < from) return false;
      if (to && p.date > to) return false;
      return true;
    });
  }, [allPosts, query, from, to]);

  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, from, to]);

  const labels = lang === "en"
    ? { search: "Search by title", fromLbl: "From", toLbl: "To", loadMore: "Load more", empty: "No news matches your filters." }
    : { search: "Buscar por título", fromLbl: "De", toLbl: "Até", loadMore: "Carregar mais", empty: "Nenhuma notícia encontrada com esses filtros." };

  const visiblePosts = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 bg-background">
        <section className="py-4 md:py-6">
          <div className="container-oria">
            <SectionHeader
              num="§ NEWS"
              heading={
                <>
                  {lang === "en" ? "Stay close to what's moving the " : "Fique por dentro do que acontece no "}
                  <em className="italic text-accent font-light">{lang === "en" ? "market." : "mercado."}</em>
                </>
              }
            />

            {/* Filter bar */}
            <div className="mb-10 grid gap-4 md:grid-cols-[1fr_auto_auto] md:items-end">
              <div>
                <label className="font-mono-label text-[10px] text-muted block mb-2">
                  {labels.search}
                </label>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder=""
                  className="w-full bg-transparent border-b border-rule focus:border-foreground outline-none py-3 text-[15px] text-foreground transition-colors"
                />
              </div>
              <div>
                <label className="font-mono-label text-[10px] text-muted block mb-2">
                  {labels.fromLbl}
                </label>
                <input
                  type="date"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full md:w-[170px] bg-transparent border-b border-rule focus:border-foreground outline-none py-3 text-[15px] text-foreground transition-colors"
                />
              </div>
              <div>
                <label className="font-mono-label text-[10px] text-muted block mb-2">
                  {labels.toLbl}
                </label>
                <input
                  type="date"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full md:w-[170px] bg-transparent border-b border-rule focus:border-foreground outline-none py-3 text-[15px] text-foreground transition-colors"
                />
              </div>
            </div>

            {visiblePosts.length === 0 ? (
              <p className="py-20 text-center text-ink-soft">{labels.empty}</p>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {visiblePosts.map((p) => (
                    <NoticiaCard key={p.slug} post={p} />
                  ))}
                </div>
                {hasMore && (
                  <div className="mt-14 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      className="btn-primary"
                    >
                      {labels.loadMore}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoticiasPage;
