import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import pittetLogo from "@/assets/pittet-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company */}
          <div>
            <img
              src={pittetLogo}
              alt="Pittet Aménagements"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-background/50 text-sm leading-relaxed">
              Expert en contrôle et aménagement de places de jeux en Suisse.
              Aménagements sur mesure pour institutions, écoles, communes et particuliers.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm tracking-[0.15em] mb-6">Navigation</h4>
            <nav className="space-y-3" aria-label="Navigation pied de page">
              <Link to="/" className="block text-sm text-background/50 hover:text-background transition-colors">Accueil</Link>
              <Link to="/lentreprise" className="block text-sm text-background/50 hover:text-background transition-colors">L'entreprise</Link>
              <Link to="/expertise-places-de-jeux" className="block text-sm text-background/50 hover:text-background transition-colors">Expertise Places de Jeux</Link>
              <Link to="/autres-prestations" className="block text-sm text-background/50 hover:text-background transition-colors">Aménagements</Link>
              <Link to="/realisations" className="block text-sm text-background/50 hover:text-background transition-colors">Réalisations</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-[0.15em] mb-6">Contact</h4>
            <div className="space-y-3">
              <a href="https://www.google.com/maps/place/Olivier+PITTET+am%C3%A9nagements/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-background/50 hover:text-background transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Chemin de la Corba 30, 1673 Gillarens
              </a>
              <a href="mailto:pittet.amenagements@gmail.com" className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                pittet.amenagements@gmail.com
              </a>
              <a href="tel:+41793395594" className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                +41 79 339 55 94
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/30">
          © {new Date().getFullYear()} Pittet Aménagements — Gillarens, Suisse
        </div>
      </div>
    </footer>
  );
};

export default Footer;
