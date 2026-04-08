import { Hammer, TreePine, Wrench, Lock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroPrestations from "@/assets/hero-amenagements.jpg";

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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Hammer,
                  title: "Menuiserie",
                  items: [
                    "Fabrication de mobilier sur mesure",
                    "Pose de parquets et lambris",
                    "Agencements intérieurs",
                    "Restauration de boiseries",
                    "Portes et fenêtres",
                  ],
                },
                {
                  icon: TreePine,
                  title: "Paysagisme",
                  items: [
                    "Aménagement de jardins",
                    "Terrassement et nivellement",
                    "Bacs végétalisés et plantations",
                    "Clôtures et palissades",
                    "Entretien d'espaces verts",
                  ],
                },
                {
                  icon: Wrench,
                  title: "Maçonnerie",
                  items: [
                    "Murs et murets",
                    "Dallages et pavages",
                    "Escaliers extérieurs",
                    "Fondations et ancrages",
                    "Rénovation de surfaces",
                  ],
                },
                {
                  icon: Lock,
                  title: "Serrurerie",
                  items: [
                    "Pose et remplacement de serrures",
                    "Ouvrages métalliques sur mesure",
                    "Rampes et garde-corps",
                    "Portails et grilles",
                    "Réparations diverses",
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


        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default AutresPrestations;
