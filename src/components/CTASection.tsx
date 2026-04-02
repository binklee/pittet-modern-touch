import { Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary section-padding text-center">
      <div className="container-narrow mx-auto">
        <h2 className="text-3xl md:text-4xl text-primary-foreground mb-4">
          Vous avez un projet ?
        </h2>
        <p className="text-primary-foreground/80 font-sans max-w-xl mx-auto mb-8">
          N'hésitez pas à contacter Olivier Pittet pour discuter de vos besoins.
          Il vous recontactera dans les plus brefs délais.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+41793395594"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold tracking-wide px-8 py-3 rounded-md transition-colors"
          >
            <Phone className="w-5 h-5" />
            +41 79 339 55 94
          </a>
          <a
            href="mailto:pittet.amenagements@gmail.com"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-base font-semibold tracking-wide px-8 py-3 rounded-md transition-colors"
          >
            <Mail className="w-5 h-5" />
            Envoyer un email
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
