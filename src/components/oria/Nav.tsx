import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/oria-logo.png";
import { useContent } from "@/data/oria";
import { useLang } from "@/i18n/LanguageContext";

export const Nav = () => {
  const { NAV_LINKS, UI } = useContent();
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    setOpen(false);
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[number]) => {
    setOpen(false);
    if (link.external) return;
    e.preventDefault();
    if (link.href.startsWith("/#")) {
      const id = link.href.slice(2);
      if (!isHome) {
        navigate("/");
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          transparent ? "bg-transparent border-b border-transparent" : "bg-background border-b border-rule"
        }`}
        style={{ height: 64 }}
      >
        <div className="container-oria h-full flex items-center justify-between gap-6">
          <Link
            to="/"
            onClick={handleLogoClick}
            aria-label={UI.nav.logoAria}
            className="h-full flex items-center hover:opacity-70 transition-opacity shrink-0"
          >
            <img
              src={logo}
              alt="Oria Partners"
              width={400}
              height={400}
              className="h-full w-auto max-h-full block object-contain"
              style={{ padding: "3px 0" }}
            />
          </Link>

          {/* Desktop inline links — distributed evenly between logo and CTA */}
          <div className="hidden lg:flex flex-1 items-center justify-around px-8">
            {NAV_LINKS.map((l) => {
              const Comp: any = l.external ? Link : "a";
              const props: any = l.external ? { to: l.href } : { href: l.href };
              return (
                <Comp
                  key={l.href}
                  {...props}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, l)}
                  className={`text-[22px] tracking-[0.01em] transition-colors hover:text-accent whitespace-nowrap ${
                    transparent ? "text-white" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Comp>
              );
            })}
          </div>

          <div className="flex items-center gap-4 sm:gap-5 shrink-0">
            <a
              href={isHome ? "#contato" : "/#contato"}
              onClick={(e) => {
                if (isHome) {
                  e.preventDefault();
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hidden lg:inline-flex btn-cta-compact"
            >
              {lang === "en" ? "Contact" : "Contato"}
            </a>
            <div className={`font-mono text-[11px] tracking-[0.15em] flex items-center gap-2 ${transparent ? "text-white" : ""}`}>
              <button
                type="button"
                onClick={() => setLang("pt")}
                className={`cursor-pointer transition-colors ${lang === "pt" ? (transparent ? "text-white" : "text-foreground") : "opacity-60 hover:opacity-100"}`}
              >
                PT
              </button>
              <span className="opacity-60">/</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`cursor-pointer transition-colors ${lang === "en" ? (transparent ? "text-white" : "text-foreground") : "opacity-60 hover:opacity-100"}`}
              >
                EN
              </button>
            </div>

            <button
              aria-label={open ? UI.nav.closeMenu : UI.nav.openMenu}
              aria-expanded={open}
              className="flex lg:hidden flex-col gap-[5px] p-2 -mr-2"
              onClick={() => setOpen(!open)}
            >
              <span className={`block w-6 h-px transition-all duration-300 ${transparent ? "bg-white" : "bg-foreground"} ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 ${transparent ? "bg-white" : "bg-foreground"} ${open ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 ${transparent ? "bg-white" : "bg-foreground"} ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-background transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="container-oria h-full flex flex-col justify-center pt-24 pb-16">
          <div className="font-mono-label text-[11px] text-muted mb-8">{UI.nav.menu}</div>
          <ul className="flex flex-col gap-2 list-none">
            {NAV_LINKS.map((l, i) => {
              const Comp: any = l.external ? Link : "a";
              const props: any = l.external ? { to: l.href } : { href: l.href };
              return (
                <li key={l.href}>
                  <Comp
                    {...props}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, l)}
                    className={`group text-3xl sm:text-4xl text-foreground inline-flex items-baseline gap-5 transition-all duration-500 hover:text-accent ${
                      open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: open ? `${100 + i * 35}ms` : "0ms" }}
                  >
                    <span className="font-mono text-[11px] tracking-[0.15em] text-muted group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                    {l.external && <span className="text-accent text-base">→</span>}
                  </Comp>
                </li>
              );
            })}
            <li>
              <a
                href={isHome ? "#contato" : "/#contato"}
                onClick={(e) => {
                  setOpen(false);
                  if (isHome) {
                    e.preventDefault();
                    setTimeout(() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }), 50);
                  }
                }}
                className={`inline-flex mt-6 btn-cta-compact transition-all duration-500 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: open ? `${100 + NAV_LINKS.length * 35}ms` : "0ms" }}
              >
                {lang === "en" ? "Contact" : "Contato"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
