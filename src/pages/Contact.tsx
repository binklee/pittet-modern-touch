import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import heroPrestations from "@/assets/institutions-projet.jpg";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="pt-[73px]">
        <PageHero
          title="Contact"
          subtitle="Je reste disponible pour toutes vos demandes"
          image={heroPrestations}
        />

        {/* Intro */}
        <section className="section-padding" aria-label="Introduction contact">
          <div className="container-narrow mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              Vous souhaitez faire appel à Pittet Aménagements ?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              N'hésitez pas à appeler Olivier Pittet, à lui envoyer un mail ou à lui écrire.
              Il vous recontactera dans les plus brefs délais.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section-padding bg-secondary" aria-label="Coordonnées">
          <div className="container-narrow mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-background p-10 text-center">
                <MapPin className="w-8 h-8 text-foreground mb-4 mx-auto" />
                <h3 className="text-lg mb-2">Adresse</h3>
                <a
                  href="https://www.google.com/maps/place/Olivier+PITTET+am%C3%A9nagements/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors leading-relaxed"
                >
                  Chemin de la Corba 30<br />
                  1673 Gillarens
                </a>
              </div>
              <div className="bg-background p-10 text-center">
                <Mail className="w-8 h-8 text-foreground mb-4 mx-auto" />
                <h3 className="text-lg mb-2">Email</h3>
                <a
                  href="mailto:pittet.amenagements@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  pittet.amenagements@gmail.com
                </a>
              </div>
              <div className="bg-background p-10 text-center">
                <Phone className="w-8 h-8 text-foreground mb-4 mx-auto" />
                <h3 className="text-lg mb-2">Téléphone</h3>
                <a
                  href="tel:+41793395594"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +41 79 339 55 94
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="w-full" aria-label="Carte">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.123!2d6.8250714!3d46.5834743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e8196b27bed4b%3A0xac6f67e3de8cf530!2sOlivier%20PITTET%20am%C3%A9nagements!5e0!3m2!1sfr!2sch!4v1700000000000!5m2!1sfr!2sch"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Pittet Aménagements - Localisation"
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
