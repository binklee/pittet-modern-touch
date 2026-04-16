import { ClipboardCheck, Shield, Wrench } from "lucide-react";
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
          title="Expertise Places de Jeux, Fitness Extérieur & Parcours Vita"
          subtitle="Contrôle, sécurité et aménagement d'espaces récréatifs et sportifs en Suisse"
          image={heroPlayground}
        />

        {/* Intro */}
        <section className="section-padding" aria-label="Introduction expertise">
          <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">Notre expertise</p>
              <h2 className="text-3xl md:text-4xl mb-8 leading-snug">
                La sécurité de vos installations, notre priorité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pittet Aménagements est votre partenaire de confiance pour le contrôle et l'expertise de places de jeux,
                d'espaces de fitness extérieur et de parcours Vita en Suisse. Je vérifie la conformité de vos
                installations selon les normes SN EN 1176 et SN EN 16630. Je vous produis un rapport avec images et peux
                aussi réaliser les travaux de mise en conformité.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Fort de mon expérience en ébénisterie et en construction, je possède une connaissance approfondie des
                matériaux, des structures et des normes de sécurité applicables aux places de jeux, équipements de
                fitness extérieur et parcours Vita, qu'ils soient publics ou privés.
              </p>
            </div>
            <img
              src={expertiseControle}
              alt="Inspection de sécurité d'une place de jeux"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-secondary" aria-label="Prestations places de jeux">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">Prestations</p>
              <h2 className="text-3xl md:text-4xl">Un accompagnement complet</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  icon: Wrench,
                  title: "Concept et installation",
                  desc: "Conception sur mesure et installation de places de jeux, espaces de fitness extérieur et parcours Vita adaptés à votre environnement.",
                },
                {
                  icon: Shield,
                  title: "Contrôle post-installations",
                  desc: "Vérification après pose pour confirmer la conformité, la sécurité et la bonne mise en service de vos installations.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Contrôle fonctionnel & Contrôle annuel principal",
                  desc: "Contrôles réguliers selon les normes en vigueur pour vérifier l'état général, l'usure, les points sensibles et la sécurité d'utilisation.",
                },
                {
                  icon: Wrench,
                  title: "Maintenance préventive",
                  desc: "Entretien préventif, réparations ciblées et remplacement des éléments usés pour prolonger la durée de vie de vos équipements.",
                },
              ].map((service) => (
                <div key={service.title} className="bg-background p-10">
                  <service.icon className="w-8 h-8 text-foreground mb-6" />
                  <h3 className="text-lg mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For whom */}
        <section className="section-padding" aria-label="Pour qui">
          <div className="container-narrow mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl">À qui s'adresse mon expertise ?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "Communes",
                  desc: "Contrôle et aménagement des places de jeux publiques, parcours Vita, parcs et espaces communaux.",
                },
                {
                  title: "Écoles & Crèches",
                  desc: "Sécurisation des cours de récréation, espaces de jeux et installations sportives extérieures.",
                },
                {
                  title: "Institutions",
                  desc: "Aménagements adaptés pour les institutions spécialisées, centres d'accueil et espaces de fitness extérieur.",
                },
              ].map((item) => (
                <div key={item.title} className="p-8">
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
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
