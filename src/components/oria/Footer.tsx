import logo from "@/assets/oria-logo-footer.png";
import { Link } from "react-router-dom";
import { useContent } from "@/data/oria";

export const Footer = () => {
  const { UI, NAV_LINKS } = useContent();
  return (
    <footer className="bg-foreground text-background/70 pt-8 pb-6 border-t border-background/12 text-[13px]">
      <div className="container-oria">
        {/* Linha superior: logo + nav + Política de Privacidade */}
        <div className="flex items-start justify-between gap-8 pb-6 border-b border-background/12">
          {/* Logo 100% maior: era h-[102px], agora h-[204px] */}
          <img
            src={logo}
            alt="Oria Partners"
            width={720}
            height={480}
            className="block w-auto"
            style={{ height: "204px", maxWidth: "100%" }}
          />

          {/* Lado direito: política de privacidade à esquerda das guias */}
          <div className="flex flex-row items-start gap-8 text-[12px]">
            {/* Política de privacidade centralizada verticalmente à esquerda da coluna de guias */}
            <div className="flex items-center h-full">
              <Link
                to="/privacidade"
                className="hover:text-background transition-colors underline underline-offset-4"
              >
                {UI.footer.privacy}
              </Link>
            </div>
            {/* Coluna de guias */}
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

        {/* Linha inferior: copyright */}
        <div className="pt-4">
          <span>© {new Date().getFullYear()} Oria Partners. {UI.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
