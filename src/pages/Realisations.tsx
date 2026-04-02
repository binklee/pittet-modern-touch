import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroRealisations from "@/assets/hero-realisations.jpg";
import heroPlayground from "@/assets/hero-playground.jpg";
import heroAmenagement from "@/assets/hero-amenagement.jpg";
import heroPrestations from "@/assets/hero-prestations.jpg";
import expertiseControle from "@/assets/expertise-controle.jpg";

const categories = [
  "Toutes",
  "Places de jeux",
  "Institutions & Scolaire",
  "Extérieur",
  "Intérieur",
  "Réparations",
] as const;

type Category = (typeof categories)[number];

interface Realisation {
  image: string;
  title: string;
  category: Category;
}

const realisations: Realisation[] = [
  { image: heroPlayground, title: "Place de jeux communale", category: "Places de jeux" },
  { image: expertiseControle, title: "Contrôle de sécurité", category: "Places de jeux" },
  { image: "https://pittet-amenagements.ch/wp-content/uploads/2023/03/20220920_175533.jpg", title: "Aménagement scolaire", category: "Institutions & Scolaire" },
  { image: "https://pittet-amenagements.ch/wp-content/uploads/2023/04/PittetAmenagementen-institutions-2.jpg", title: "Installation institutionnelle", category: "Institutions & Scolaire" },
  { image: "https://pittet-amenagements.ch/wp-content/uploads/2023/04/PittetAmenagement-scolaire-escalier.jpg", title: "Escalier adapté", category: "Institutions & Scolaire" },
  { image: heroPrestations, title: "Mobilier extérieur sur mesure", category: "Extérieur" },
  { image: heroAmenagement, title: "Ébénisterie sur mesure", category: "Intérieur" },
  { image: "https://pittet-amenagements.ch/wp-content/uploads/2023/04/20230201_154547-scaled.jpg", title: "Serrurerie et métal", category: "Réparations" },
  { image: "https://pittet-amenagements.ch/wp-content/uploads/2023/04/PittetAmenagements-Accueil-Header-2.jpg", title: "Aménagement extérieur", category: "Extérieur" },
  { image: "https://pittet-amenagements.ch/wp-content/uploads/2023/04/20230323_112613-scaled.jpg", title: "Entretien et réparations", category: "Réparations" },
];

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Toutes");

  const filtered = activeCategory === "Toutes"
    ? realisations
    : realisations.filter((r) => r.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <PageHero
          title="Nos Réalisations"
          subtitle="Découvrez les projets réalisés par Pittet Aménagements"
          image={heroRealisations}
          compact
        />

        <section className="section-padding" aria-label="Galerie de réalisations">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <p className="text-muted-foreground max-w-xl mx-auto">
                Si l'expertise d'Olivier Pittet vous intéresse, n'hésitez pas à le contacter
                pour discuter ensemble de vos projets.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-16" role="tablist" aria-label="Filtrer par catégorie">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`px-5 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-colors ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((item, i) => (
                <div
                  key={`${item.title}-${i}`}
                  className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs text-white/60 font-semibold uppercase tracking-[0.15em]">{item.category}</span>
                      <h3 className="text-white text-lg">{item.title}</h3>
                    </div>
                  </div>
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

export default Realisations;
