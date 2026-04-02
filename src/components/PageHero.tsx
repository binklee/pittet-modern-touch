interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  compact?: boolean;
}

const PageHero = ({ title, subtitle, image, compact = false }: PageHeroProps) => {
  return (
    <section
      className={`relative flex items-center justify-center text-center ${compact ? "min-h-[50vh]" : "min-h-[70vh]"}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-6 max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/60 font-light">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
