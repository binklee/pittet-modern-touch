import { Briefcase, Leaf, Heart, Wrench, Users, Accessibility } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroAmenagement from "@/assets/hero-amenagement.jpg";
import entrepriseOlivier from "@/assets/entreprise-olivier.jpg";

const avantages = [
  {
    icon: Briefcase,
    title: "Service complet",
    desc: "Un interlocuteur polyvalent avec son réseau pour votre petit ou grand projet d'aménagement.",
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
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">L'histoire</p>
            <h2 className="text-3xl md:text-4xl mb-8">Pittet Aménagements</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fondée en 2022 par Olivier Pittet, l'entreprise s'est engagée à fournir des solutions d'aménagements sur
              mesure pour répondre à vos besoins spécifiques.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Depuis l'obtention de son CFC d'ébéniste et sa formation de maître socio-professionnel, Monsieur Pittet a
              développé ses compétences et sa sensibilité à l'environnement et à l'humain, en travaillant au contact de
              personnes en situation de handicap et en réinsertion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              C'est pourquoi aujourd'hui, il conçoit et fabrique une multitude d'aménagements pour les communes, les
              écoles, les institutions et les habitations privées. Tout ce qu'il crée est pensé de manière
              éco-responsable et surtout accessible. Qu'importe l'aménagement, celui-ci doit permettre à chacun de
              profiter pleinement de l'espace.
            </p>
          </div>
        </section>

        {/* Avantages */}
        <section className="section-padding bg-secondary" aria-label="Les avantages">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">
                Pourquoi Olivier Pittet
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

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Entreprise;
