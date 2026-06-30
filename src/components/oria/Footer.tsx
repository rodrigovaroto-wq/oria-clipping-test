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

        {/* ── MOBILE: logo 160px * 1.20 = 192px ── */}
        <div className="md:hidden pb-6 border-b border-background/12">
          <div className="flex flex-row items-start justify-between gap-4">
            <div className="flex-shrink-0" style={{ maxWidth: "60%" }}>
              <img
                src={logo}
                alt="Oria Partners"
                width={720}
                height={480}
                className="block h-auto"
                style={{ width: "100%", maxWidth: "192px" }}
              />
            </div>
            <div className="flex flex-col items-end gap-2 text-[11px] pt-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-background transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/privacidade"
                className="mt-2 hover:text-background transition-colors underline underline-offset-4"
              >
                {UI.footer.privacy}
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <span>© {new Date().getFullYear()} Oria Partners. {UI.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
