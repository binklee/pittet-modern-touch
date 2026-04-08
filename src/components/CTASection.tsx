const CTASection = () => {
  return (
    <section className="bg-foreground section-padding text-center">
      <div className="container-narrow mx-auto">
        <h2 className="text-3xl md:text-4xl text-background mb-6">Vous avez un projet ?</h2>
        <p className="text-background/60 max-w-xl mx-auto mb-10">N'hésitez pas à me contacter.</p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a
            href="tel:+41793395594"
            className="text-background/80 hover:text-background transition-colors text-lg tracking-wide"
          >
            +41 79 339 55 94
          </a>
          <span className="hidden sm:block w-px h-6 bg-background/20" />
          <a
            href="mailto:pittet.amenagements@gmail.com"
            className="text-background/80 hover:text-background transition-colors text-lg tracking-wide"
          >
            pittet.amenagements@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
