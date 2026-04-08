import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroRealisations from "@/assets/hero-realisations.jpg";
import heroPlayground from "@/assets/hero-playground.jpg";
import heroAmenagement from "@/assets/hero-amenagement.jpg";
import extBanc from "@/assets/real-ext-banc.jpg";
import extTerrasse from "@/assets/real-ext-terrasse.jpg";
import expertiseControle from "@/assets/expertise-controle.jpg";
import piezometre from "@/assets/piezometre.jpg";
import autresOlivier from "@/assets/real-autres-olivier.jpg";
import autresMachine from "@/assets/real-autres-machine.jpg";
import autresBienvenue from "@/assets/real-autres-bienvenue.jpg";

const categories = [
  "Toutes",
  "Places de jeux, fitness et parcours Vita",
  "Piézomètre",
  "Intérieur",
  "Extérieur",
  "Artistique",
  "Autres",
] as const;

type Category = (typeof categories)[number];

interface Realisation {
  image: string;
  title: string;
  category: Category;
}

const realisations: Realisation[] = [
  { image: heroPlayground, title: "Place de jeux communale", category: "Places de jeux, fitness et parcours Vita" },
  { image: expertiseControle, title: "Contrôle de sécurité", category: "Places de jeux, fitness et parcours Vita" },
  { image: extBanc, title: "Banc extérieur sur mesure", category: "Extérieur" },
  { image: extTerrasse, title: "Terrasse et escalier", category: "Extérieur" },
  {
    image: "https://pittet-amenagements.ch/wp-content/uploads/2023/04/PittetAmenagements-Accueil-Header-2.jpg",
    title: "Aménagement extérieur",
    category: "Extérieur",
  },
  { image: heroAmenagement, title: "Ébénisterie sur mesure", category: "Intérieur" },
  { image: piezometre, title: "Piézomètre", category: "Piézomètre" },
  { image: autresOlivier, title: "Travail de serrurerie", category: "Autres" },
  { image: autresMachine, title: "Machine de terrassement", category: "Autres" },
  { image: autresBienvenue, title: "Panneau de bienvenue", category: "Autres" },
];

const Realisations = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("Toutes");

  const filtered =
    activeCategory === "Toutes" ? realisations : realisations.filter((r) => r.category === activeCategory);

  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <section className="pt-16 pb-8">
          <div className="container-narrow mx-auto text-center">
            <h1 className="text-4xl md:text-5xl">Réalisations</h1>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-24 pb-20" aria-label="Galerie de réalisations">
          <div className="container-narrow mx-auto">

            {/* Category Filter */}
            <div
              className="flex flex-wrap justify-center gap-3 mb-16"
              role="tablist"
              aria-label="Filtrer par catégorie"
            >
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
                <div key={`${item.title}-${i}`} className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end">
                    <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs text-white/60 font-semibold uppercase tracking-[0.15em]">
                        {item.category}
                      </span>
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
