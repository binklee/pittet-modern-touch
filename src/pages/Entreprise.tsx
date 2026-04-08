import { Briefcase, Leaf, Heart, Wrench, Users, Accessibility } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroAmenagement from "@/assets/hero-amenagement.jpg";

const avantages = [
  {
    icon: Briefcase,
    title: "Service complet",
    desc: "Une offre complète allant des aménagements sur mesure au service de maintenance, adaptée à chaque besoin.",
  },
  {
    icon: Heart,
    title: "Expertise",
    desc: "Une double compétence en ébénisterie et en accompagnement social pour des aménagements pensés pour tous.",
  },
  {
    icon: Leaf,
    title: "Installations durables",
    desc: "Des matériaux choisis avec soin et un impact environnemental réduit à chaque étape.",
  },
  {
    icon: Wrench,
    title: "Service d'entretien",
    desc: "Un suivi et un entretien permanent pour toutes vos installations, intérieures comme extérieures.",
  },
  {
    icon: Accessibility,
    title: "Handicap et accessibilité",
    desc: "Des espaces adaptés aux personnes à mobilité réduite : rampes, plateformes, accroches murales.",
  },
  {
    icon: Users,
    title: "Réalisations pour la communauté",
    desc: "Des installations pensées pour l'usage collectif et les besoins de l'espace public.",
  },
];

const Entreprise = () => {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <PageHero
          title="L'entreprise"
          subtitle="Créer des installations accessibles pour tous"
          image={heroAmenagement}
        />

        {/* Histoire */}
        <section className="section-padding" aria-label="Histoire de l'entreprise">
          <div className="container-narrow mx-auto max-w-3xl text-center">
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              L'histoire
            </p>
            <h2 className="text-3xl md:text-4xl mb-8">
              Pittet Aménagements
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fondée en 2022 par Olivier Pittet, l'entreprise s'est engagée à fournir des solutions
              d'aménagements sur mesure pour répondre à vos besoins spécifiques.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Depuis l'obtention de son CFC d'ébéniste et sa formation de maître socio-professionnel,
              Monsieur Pittet a développé ses compétences et sa sensibilité à l'environnement et à l'humain,
              en travaillant au contact de personnes en situation de handicap et en réinsertion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              C'est pourquoi aujourd'hui, il conçoit et fabrique une multitude d'aménagements pour
              les communes, les écoles, les institutions et les habitations privées. Tout ce qu'il crée
              est pensé de manière éco-responsable et surtout accessible. Qu'importe l'aménagement,
              celui-ci doit permettre à chacun de profiter pleinement de l'espace.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section className="section-padding bg-secondary" aria-label="Les avantages">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                Pourquoi nous choisir
              </p>
              <h2 className="text-3xl md:text-4xl">Les avantages</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {avantages.map((item) => (
                <div key={item.title} className="bg-background p-10">
                  <item.icon className="w-7 h-7 text-foreground mb-6" />
                  <h3 className="text-base mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Démarche */}
        <section className="section-padding" aria-label="Démarche projet">
          <div className="container-narrow mx-auto max-w-3xl text-center">
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
              La démarche
            </p>
            <h2 className="text-3xl md:text-4xl mb-8">
              Comment se déroule un projet ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              La démarche de Pittet Aménagements est simple : s'appuyer sur vos usages et contraintes
              d'accessibilité pour proposer des installations pérennes qui offrent mobilité et confort.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Suite à un entretien, plusieurs approches sont possibles :
            </p>
            <div className="text-left max-w-xl mx-auto space-y-4">
              <div className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pour des interventions de dépannages, une facturation à l'heure est proposée.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-1 h-1 rounded-full bg-foreground/30 mt-2.5 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pour la conception de projets, Olivier Pittet réalise une offre sur mesure selon son envergure.
                  Rénovation, création de structure neuve ou entretien, l'objectif est de cerner au mieux vos attentes.
                  Si besoin, une visualisation 2D pourra être transmise avant la fabrication ou la planification de l'intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Entreprise;
