import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, TreePine, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import heroPlayground from "@/assets/hero-playground.jpg";
import heroAmenagement from "@/assets/hero-amenagement.jpg";
import expertiseControle from "@/assets/parcoursvita.jpg";
import heroPrestations from "@/assets/institutions-projet.jpg";
import equipementProjet from "@/assets/equipement-projet.jpg";
import auditPlaceDeJeux from "@/assets/audit-place-de-jeux.jpeg";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center" aria-label="Introduction">
          <img
            src={heroPlayground}
            alt="Place de jeux sécurisée aménagée par Pittet Aménagements en Suisse"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl mt-20 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">Pittet Aménagements</h1>
            <p className="text-lg md:text-xl text-white/70 font-light mb-10 max-w-xl">
              Mon entreprise propose des services de menuiserie, maçonnerie-paysagisme et serrurerie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/realisations"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground hover:bg-white/90 text-xs font-semibold tracking-[0.1em] uppercase px-8 py-4 transition-colors"
              >
                Voir réalisations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise highlight */}
        <section className="section-padding" aria-label="Expertise places de jeux">
          <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">Spécialité</p>
              <h2 className="text-3xl md:text-4xl mb-8 leading-snug">
                Expert et contrôleur de places de jeux, fitness extérieurs et parcours Vita
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Pittet Aménagements est spécialisé dans le contrôle, l'expertise et l'aménagement de places de jeux et
                installations sportives extérieures conformes aux normes de sécurité suisses. J'accompagne les communes,
                les écoles et les institutions dans la création d'espaces de jeux sûrs et adaptés.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Contrôle de sécurité selon les normes SN EN 1176/1177",
                  "Conception et installation sur mesure",
                  "Maintenance et entretien périodique",
                  "Expertise et conseil pour collectivités",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/expertise-places-de-jeux"
                className="inline-flex items-center gap-2 text-foreground text-xs font-semibold tracking-[0.1em] uppercase hover:gap-3 transition-all border-b border-foreground pb-1"
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img
                src={expertiseControle}
                alt="Contrôle de sécurité d'une place de jeux par Pittet Aménagements"
                className="w-full object-cover aspect-[3/4]"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding" aria-label="Services">
          <div className="container-narrow mx-auto text-center mb-16">
            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-xs mb-4">Les services</p>
            <h2 className="text-3xl md:text-4xl mb-6">Un savoir-faire polyvalent</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Olivier Pittet réalise seul ou avec son réseau l'entier de votre projet.
            </p>
          </div>
          <div className="container-narrow mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                title: "Expertise Places de Jeux",
                desc: "Contrôle de sécurité, conception et installation de places de jeux conformes aux normes suisses.",
                image: auditPlaceDeJeux,
              },
              {
                icon: Wrench,
                title: "Aménagements",
                desc: "Aménagements intérieurs et extérieurs.",
                image: heroPrestations,
              },
              {
                icon: TreePine,
                title: "Équipement, machines et outillage",
                desc: "Machine de terrassement, forage, maçonnerie, construction métallique et menuiserie.",
                image: equipementProjet,
              },
            ].map((service) => (
              <div key={service.title}>
                <div className="overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[3/2] object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
