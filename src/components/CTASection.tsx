import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-foreground section-padding text-center">
      <div className="container-narrow mx-auto">
        <h2 className="text-3xl md:text-4xl text-background mb-6">
          Vous avez un projet ?
        </h2>
        <p className="text-background/60 max-w-xl mx-auto mb-10">
          N'hésitez pas à contacter Olivier Pittet pour discuter de vos besoins.
          Il vous recontactera dans les plus brefs délais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+41793395594"
            className="inline-flex items-center justify-center gap-2 border border-background/30 text-background hover:bg-background/10 text-xs font-semibold tracking-[0.1em] uppercase px-8 py-4 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +41 79 339 55 94
          </a>
          <a
            href="mailto:pittet.amenagements@gmail.com"
            className="inline-flex items-center justify-center gap-2 bg-background text-foreground hover:bg-background/90 text-xs font-semibold tracking-[0.1em] uppercase px-8 py-4 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Envoyer un email
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
