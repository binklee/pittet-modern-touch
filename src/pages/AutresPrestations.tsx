import { Hammer, TreePine, Brick, KeyRound } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroPrestations from "@/assets/institutions-projet.jpg";

const AutresPrestations = () => {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <PageHero
          title="Aménagements"
          subtitle="Solutions intérieures et extérieures"
          image={heroPrestations}
        />




        {/* Services Grid */}
        <section className="section-padding bg-secondary" aria-label="Liste des prestations">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                Prestations
              </p>
              <h2 className="text-3xl md:text-4xl">Compétences</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  icon: Home,
                  title: "Mobilier & Bâtiments",
                  items: [
                    "Transport et montage de meubles",
                    "Installations diverses (tableaux, étagères, supports)",
                    "Lavage haute pression des surfaces extérieures",
                    "Lasure et peinture de façades",
                    "Réglage des portes et fenêtres",
                    "Nettoyage joints, parquets, canapés",
                  ],
                },
                {
                  icon: TreePine,
                  title: "Jardins",
                  items: [
                    "Taille de végétaux",
                    "Entretien des bacs végétalisés",
                    "Maintenance des installations extérieures",
                    "Terrassement et aménagement paysager",
                    "Forage et ancrage",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Réparations multiples",
                  items: [
                    "Maintenance de vos mobiliers",
                    "Entretien de vos équipements",
                    "Soutien à la mise en place de projets",
                    "Renouvellement du matériel",
                    "Service à la demande",
                  ],
                },
              ].map((service) => (
                <div key={service.title} className="bg-background p-10">
                  <service.icon className="w-8 h-8 text-foreground mb-6" />
                  <h3 className="text-lg mb-4">{service.title}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Institutions */}
        <section className="section-padding" aria-label="Aménagements pour institutions">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                Aménagements spécialisés
              </p>
              <h2 className="text-3xl md:text-4xl mb-4">Institutions & Écoles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Olivier Pittet propose aux écoles et collectivités son savoir-faire pour améliorer
                le bien-être grâce à l'aménagement de l'environnement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Aménagement extérieur institutions",
                  desc: "Espaces de convivialité, tables de ping-pong, palissades, brises-vues, bacs végétalisés.",
                },
                {
                  title: "Aménagement intérieur institutions",
                  desc: "Postes de travail adaptés, cloisons modulables, espaces de travail respectueux, sas de décompression.",
                },
                {
                  title: "Accessibilité",
                  desc: "Rampes d'accès, escaliers, passerelles, sécurisation de voies, signalisation, plafonds antibruit.",
                },
                {
                  title: "Extérieur scolaire",
                  desc: "Adaptation de cours de récréation, mobiliers extérieurs, dispositifs pour personnes à mobilité réduite.",
                },
                {
                  title: "Intérieur scolaire",
                  desc: "Cloisons, adaptation du mobilier, espaces modulables, zones de détente pour l'enseignement spécialisé.",
                },
                {
                  title: "Services",
                  desc: "Maintenance, suivi sécurité, fabrication de meubles sur mesure, entretien du matériel d'enseignement.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-border p-8">
                  <h3 className="text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AutresPrestations;
