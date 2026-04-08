import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import pittetLogo from "@/assets/pittet-logo.png";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "L'entreprise", path: "/lentreprise" },
  { label: "Expertise Places de Jeux", path: "/expertise-places-de-jeux" },
  { label: "Aménagements", path: "/autres-prestations" },
  { label: "Réalisations", path: "/realisations" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={pittetLogo}
            alt="Pittet Aménagements"
            className="h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:text-accent ${
                location.pathname === item.path ? "text-foreground" : "text-foreground/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden bg-background border-t border-border px-6 py-6 space-y-4" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block py-1 text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                location.pathname === item.path ? "text-foreground" : "text-foreground/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
