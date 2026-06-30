import logo from "@/assets/oria-logo-footer.png";
import { Link } from "react-router-dom";
import { useContent } from "@/data/oria";

export const Footer = () => {
  const { UI, NAV_LINKS } = useContent();
  return (
    <footer className="bg-foreground text-background/70 pt-8 pb-6 border-t border-background/12 text-[13px]">
      <div className="container-oria">

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex items-start justify-between gap-8 pb-6 border-b border-background/12">
          {/* Logo com padding pequeno para não grudar na borda */}
          <div style={{ paddingTop: "8px", paddingLeft: "4px" }}>
            <img
              src={logo}
              alt="Oria Partners"
              width={720}
              height={480}
              className="block w-auto"
              style={{ height: "204px", maxWidth: "100%" }}
            />
          </div>

          {/* Política à esquerda das guias com gap maior */}
          <div className="flex flex-row items-start gap-16 text-[14.4px]">
            <div className="flex items-center h-full pt-1">
              <Link
                to="/privacidade"
                className="hover:text-background transition-colors underline underline-offset-4"
              >
                {UI.footer.privacy}
              </Link>
            </div>
            <div className="flex flex-col items-end gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden pb-6 border-b border-background/12">
          {/* Logo menor no mobile */}
          <div style={{ paddingTop: "6px", marginBottom: "16px" }}>
            <img
              src={logo}
              alt="Oria Partners"
              width={720}
              height={480}
              className="block w-auto"
              style={{ height: "80px", maxWidth: "100%" }}
            />
          </div>
          {/* Nav e privacidade em linha */}
          <div className="flex flex-row flex-wrap justify-between items-start gap-4 text-[12px]">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <Link
              to="/privacidade"
              className="hover:text-background transition-colors underline underline-offset-4"
            >
              {UI.footer.privacy}
            </Link>
          </div>
        </div>

        {/* Linha inferior: copyright */}
        <div className="pt-4">
          <span>© {new Date().getFullYear()} Oria Partners. {UI.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
