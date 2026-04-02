import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, TreePine, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import heroPlayground from "@/assets/hero-playground.jpg";
import heroAmenagement from "@/assets/hero-amenagement.jpg";
import expertiseControle from "@/assets/expertise-controle.jpg";
import heroPrestations from "@/assets/hero-prestations.jpg";

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
          <div className="absolute inset-0 bg-secondary/60" />
          <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-3xl mt-20 animate-fade-in-up">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Suisse · Depuis 2022
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-secondary-foreground leading-tight mb-6">
              Aménagements sur mesure
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 font-sans font-light mb-8 max-w-xl">
              Expert en places de jeux, aménagements intérieurs & extérieurs pour communes, écoles et institutions en Suisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/expertise-places-de-jeux"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-red-accent-light text-base font-semibold tracking-wide px-8 py-3 rounded-md transition-colors"
              >
                Expertise Places de Jeux
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center justify-center gap-2 border-2 border-secondary-foreground/80 text-secondary-foreground hover:bg-secondary-foreground/10 text-base font-semibold tracking-wide px-8 py-3 rounded-md transition-colors"
              >
                Nos réalisations
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise highlight */}
        <section className="section-padding bg-warm-cream" aria-label="Expertise places de jeux">
          <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                Notre spécialité
              </p>
              <h2 className="text-3xl md:text-4xl mb-6 leading-snug">
                Expert et contrôleur de places de jeux en Suisse
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pittet Aménagements est spécialisé dans le contrôle, l'expertise et l'aménagement
                de places de jeux conformes aux normes de sécurité suisses. Nous accompagnons les communes,
                les écoles et les institutions dans la création d'espaces de jeux sûrs et adaptés.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Contrôle de sécurité selon les normes SN EN 1176/1177",
                  "Conception et installation sur mesure",
                  "Maintenance et entretien périodique",
                  "Expertise et conseil pour collectivités",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/expertise-places-de-jeux"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={expertiseControle}
                alt="Contrôle de sécurité d'une place de jeux par Pittet Aménagements"
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="section-padding" aria-label="À propos">
          <div className="container-narrow mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={heroAmenagement}
                alt="Olivier Pittet, ébéniste et expert en aménagements"
                className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
                loading="lazy"
                width={1920}
                height={1080}
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
                L'entreprise
              </p>
              <h2 className="text-3xl md:text-4xl mb-6 leading-snug">
                Des aménagements conçus pour l'humain
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Installé à Gillarens, à la frontière des cantons de Fribourg et Vaud, Pittet Aménagements
                a été fondé en 2022 par Olivier Pittet. Titulaire d'un CFC d'ébéniste et riche de plusieurs
                années d'expérience dans le milieu social et la construction, il fabrique et installe des
                aménagements adaptés à toutes les catégories de la population.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Il a développé ses compétences en serrurerie, paysagisme et finitions pour proposer
                des installations durables, ergonomiques et esthétiques qui améliorent la qualité de vie.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-card" aria-label="Services">
          <div className="container-narrow mx-auto text-center mb-12">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">
              Nos services
            </p>
            <h2 className="text-3xl md:text-4xl mb-4">
              Un savoir-faire polyvalent
            </h2>
          </div>
          <div className="container-narrow mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Expertise Places de Jeux",
                desc: "Contrôle de sécurité, conception et installation de places de jeux conformes aux normes suisses.",
                link: "/expertise-places-de-jeux",
                image: heroPlayground,
              },
              {
                icon: Wrench,
                title: "Aménagements Spécialisés",
                desc: "Aménagements intérieurs et extérieurs pour institutions, écoles et collectivités.",
                link: "/autres-prestations",
                image: heroPrestations,
              },
              {
                icon: TreePine,
                title: "Entretien & Réparations",
                desc: "Maintenance, réparations diverses, menuiserie, jardinage et services multiservice.",
                link: "/autres-prestations",
                image: heroAmenagement,
              },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.link}
                className="group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <service.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
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
