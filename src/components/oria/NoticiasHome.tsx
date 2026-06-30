import { Link } from "react-router-dom";
import { NoticiaCard } from "./NoticiaCard";
import { getAllPosts } from "@/lib/posts";
import { useContent } from "@/data/oria";
import { useEffect, useRef, useState, useCallback } from "react";

export const NoticiasHome = () => {
  const { lang } = useContent();
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  const label = lang === "en" ? "News" : "Notícias";
  const heading = lang === "en"
    ? "Stay close to what's moving the market."
    : "Fique por dentro do que acontece no mercado.";
  const cta = lang === "en" ? "View all news" : "Ver todas as notícias";

  return (
    <section id="noticias" className="bg-background py-20 md:py-28">
      <div className="container-oria">
        <div className="mb-12 reveal max-w-[820px]">
          <div className="font-mono-label text-[11px] text-muted mb-5">{label}</div>
          <h2 className="text-foreground font-medium text-[clamp(26px,4vw,42px)] tracking-tight leading-[1.15]">
            {heading}
          </h2>
        </div>

        <NoticiasCarousel posts={posts} />

        <div className="mt-14 flex justify-center">
          <Link to="/noticias" className="btn-primary">
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
};

// ─── Carousel ────────────────────────────────────────────────────────────────

function NoticiasCarousel({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
  const VISIBLE_DESKTOP = 3;
  const VISIBLE_MOBILE = 1;
  const AUTOPLAY_MS = 30_000;

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inViewRef = useRef(false);

  const visible = isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;
  const total = posts.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Detect mobile
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Autoplay
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  }, [next, AUTOPLAY_MS]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inViewRef.current) {
          inViewRef.current = true;
          startTimer();
        } else if (!entry.isIntersecting && inViewRef.current) {
          inViewRef.current = false;
          stopTimer();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => { observer.disconnect(); stopTimer(); };
  }, [startTimer, stopTimer]);

  const visiblePosts = Array.from({ length: visible }, (_, i) => posts[(index + i) % total]);

  return (
    <div ref={sectionRef} className="relative reveal">
      {/* Layout: seta esquerda + cards + seta direita */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Seta esquerda */}
        <button
          type="button"
          onClick={prev}
          aria-label="Notícia anterior"
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-rule text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex-1 grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {visiblePosts.map((p, i) => (
            <NoticiaCard key={`${p.slug}-${index}-${i}`} post={p} />
          ))}
        </div>

        {/* Seta direita */}
        <button
          type="button"
          onClick={next}
          aria-label="Próxima notícia"
          className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-rule text-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
