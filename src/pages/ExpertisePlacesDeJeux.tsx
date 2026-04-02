import { CheckCircle, Shield, ClipboardCheck, Wrench, Eye } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import heroPlayground from "@/assets/hero-playground.jpg";
import expertiseControle from "@/assets/expertise-controle.jpg";

const ExpertisePlacesDeJeux = () => {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <PageHero
          title="Expertise Places de Jeux"
          subtitle="Contrôle, sécurité et aménagement de places de jeux en Suisse"
          image={heroPlayground}
        />

        {/* Intro */}
        <section className="section-padding" aria-label="Introduction expertise">
          <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                Notre expertise
              </p>
              <h2 className="text-3xl md:text-4xl mb-6 leading-snug">
                La sécurité de vos places de jeux, notre priorité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pittet Aménagements est votre partenaire de confiance pour le contrôle et l'expertise
                de places de jeux en Suisse. Nous vérifions la conformité de vos installations selon
                les normes SN EN 1176 et SN EN 1177, et vous accompagnons dans la mise en sécurité
                de vos espaces de jeux.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fort de son expérience en ébénisterie et en construction, Olivier Pittet possède
                une connaissance approfondie des matériaux, des structures et des normes de sécurité
                applicables aux places de jeux publiques et privées.
              </p>
            </div>
            <img
              src={expertiseControle}
              alt="Inspection de sécurité d'une place de jeux"
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-warm-cream" aria-label="Prestations places de jeux">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                Nos prestations
              </p>
              <h2 className="text-3xl md:text-4xl mb-4">
                Un accompagnement complet
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: ClipboardCheck,
                  title: "Contrôle de sécurité",
                  desc: "Inspection complète selon les normes SN EN 1176/1177. Vérification de l'état des équipements, des sols amortissants, des espacements et des points de coincement.",
                },
                {
                  icon: Shield,
                  title: "Expertise et rapports",
                  desc: "Rédaction de rapports d'expertise détaillés avec recommandations de mise en conformité. Suivi périodique de la sécurité de vos installations.",
                },
                {
                  icon: Wrench,
                  title: "Conception et installation",
                  desc: "Conception sur mesure de places de jeux adaptées à votre espace. Installation d'équipements en bois, métal et matériaux composites.",
                },
                {
                  icon: Eye,
                  title: "Maintenance préventive",
                  desc: "Entretien régulier de vos installations de jeux. Réparations, remplacement de pièces usées et mise à jour des équipements.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="bg-background rounded-lg p-8 shadow-sm"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="section-padding" aria-label="Pour qui">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">À qui s'adresse notre expertise ?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Communes",
                  desc: "Contrôle et aménagement des places de jeux publiques, parcs et espaces communaux.",
                },
                {
                  title: "Écoles & Crèches",
                  desc: "Sécurisation et adaptation des cours de récréation et espaces de jeux scolaires.",
                },
                {
                  title: "Institutions",
                  desc: "Aménagements adaptés pour les institutions spécialisées et centres d'accueil.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-lg p-8">
                  <h3 className="text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="section-padding bg-secondary text-secondary-foreground" aria-label="Pourquoi nous choisir">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">Pourquoi choisir Pittet Aménagements ?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "CFC d'ébéniste et expertise terrain",
                "Connaissance des normes suisses",
                "Interlocuteur unique pour votre projet",
                "Basé en Suisse romande",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-secondary-foreground/80">{item}</span>
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

export default ExpertisePlacesDeJeux;
