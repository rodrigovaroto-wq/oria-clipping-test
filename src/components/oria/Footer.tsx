import logo from "@/assets/oria-logo-footer.png";
import { Link } from "react-router-dom";
import { useContent } from "@/data/oria";

export const Footer = () => {
  const { UI, lang } = useContent();

  const items = lang === "en"
    ? [
        { to: "/#sobre", label: "Who We Are" },
        { to: "/atuacao", label: "Services" },
        { to: "/casos", label: "Case Studies" },
        { to: "/socios", label: "Partners" },
        { to: "/noticias", label: "News" },
        { to: "/#contato", label: "Contact" },
      ]
    : [
        { to: "/#sobre", label: "Quem Somos" },
        { to: "/atuacao", label: "Atuação" },
        { to: "/casos", label: "Casos" },
        { to: "/socios", label: "Sócios" },
        { to: "/noticias", label: "Notícias" },
        { to: "/#contato", label: "Contato" },
      ];

  return (
    <footer className="bg-foreground text-background/70 pt-16 pb-10 border-t border-background/12 text-[13px]">
      <div className="container-oria">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 mb-12">
          <div className="h-40 flex items-center">
            <img src={logo} alt="Oria Partners" width={720} height={480} className="h-full w-auto block max-w-full" />
          </div>
          <nav aria-label="Footer" className="flex flex-col gap-2">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className="text-background/80 hover:text-background transition-colors text-[14px]"
              >
                {it.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-wrap justify-between items-center gap-4 pt-6 border-t border-background/12">
          <span>© {new Date().getFullYear()} Oria Partners. {UI.footer.rights}</span>
          <Link to="/privacidade" className="hover:text-background transition-colors underline underline-offset-4">
            {UI.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};
