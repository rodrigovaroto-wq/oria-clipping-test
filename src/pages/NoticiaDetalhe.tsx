import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { marked } from "marked";
import { Nav } from "@/components/oria/Nav";
import { Footer } from "@/components/oria/Footer";
import { getPostBySlug, formatDatePtBr } from "@/lib/posts";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./NotFound";

const NoticiaDetalhePage = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  const longText = post?.summary_full || post?.body || post?.description || "";
  const html = useMemo(() => (longText ? marked.parse(longText) as string : ""), [longText]);

  useSEO({
    title: post ? `${post.title} — Oria Partners` : "Notícia — Oria Partners",
    description: post?.description ?? "",
    canonical: `/noticias/${slug}`,
    ogTitle: post?.title,
    ogDescription: post?.description,
    schema: post
      ? {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          image: post.image || undefined,
          publisher: { "@type": "Organization", name: "Oria Partners" },
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (post?.image) {
      const meta = document.querySelector<HTMLMetaElement>('meta[property="og:image"]');
      if (meta) meta.setAttribute("content", post.image);
      let typeEl = document.querySelector<HTMLMetaElement>('meta[property="og:type"]');
      if (!typeEl) {
        typeEl = document.createElement("meta");
        typeEl.setAttribute("property", "og:type");
        document.head.appendChild(typeEl);
      }
      typeEl.setAttribute("content", "article");
      let timeEl = document.querySelector<HTMLMetaElement>('meta[property="article:published_time"]');
      if (!timeEl) {
        timeEl = document.createElement("meta");
        timeEl.setAttribute("property", "article:published_time");
        document.head.appendChild(timeEl);
      }
      timeEl.setAttribute("content", post?.date ?? "");
    }
  }, [post]);

  if (!post) return <NotFound />;

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 bg-background">
        <article className="container-oria py-12 md:py-20 max-w-[860px]">
          <Link to="/noticias" className="font-mono-label text-[11px] text-muted hover:text-accent transition-colors">
            ← Notícias
          </Link>

          <div className="mt-8 w-full h-[300px] md:h-[420px] overflow-hidden rounded-[4px]">
            {post.image ? (
              <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
            ) : (
              <div className="h-full w-full bg-foreground flex items-center justify-center">
                <span className="font-mono-label text-[12px] text-background">{post.category}</span>
              </div>
            )}
          </div>

          <h1 className="mt-10 font-bold leading-[1.1] tracking-[-0.02em] text-foreground text-[clamp(28px,5vw,48px)]">
            {post.title}
          </h1>

          <div className="mt-4 font-mono-label text-[11px] text-muted">
            {formatDatePtBr(post.date)}
          </div>

          <div
            className="mt-10 prose prose-neutral max-w-none text-[17px] leading-[1.7] text-ink-soft font-light [&_p]:mb-5 [&_a]:text-accent [&_a]:underline [&_h2]:font-serif-display [&_h2]:text-[28px] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-serif-display [&_h3]:text-[22px] [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {post.source_name && post.source_url && (
            <div className="mt-12 pt-6 border-t border-rule">
              <p className="text-[14px] text-muted">
                Fonte:{" "}
                <a
                  href={post.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {post.source_name}
                </a>
              </p>
              <a
                href={post.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-[14px] text-accent hover:translate-x-[2px] transition-transform"
                style={{ color: "#9B3A2F" }}
              >
                Ver notícia completa →
              </a>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default NoticiaDetalhePage;
