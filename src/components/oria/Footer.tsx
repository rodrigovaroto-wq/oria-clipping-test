import logo from "@/assets/oria-logo-footer.png";
import { Link } from "react-router-dom";
import { useContent } from "@/data/oria";

export const Footer = () => {
  const { UI } = useContent();
  return (
    <footer className="bg-foreground text-background/60 py-12 border-t border-background/12 text-[13px]">
      <div className="container-oria flex flex-wrap justify-between items-center gap-6">
        <div className="h-40 flex items-center">
          <img src={logo} alt="Oria Partners" width={720} height={480} className="h-full w-auto block max-w-full" />
        </div>
        <div className="flex items-center gap-4">
          <Link to="/privacidade" className="hover:text-background transition-colors underline underline-offset-4">
            {UI.footer.privacy}
          </Link>
          <span className="text-background/20">|</span>
          <span>© {new Date().getFullYear()} Oria Partners. {UI.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
};
