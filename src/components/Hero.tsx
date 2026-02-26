import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />
      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-dark)" }} />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary text-sm font-medium">Expertos Ferreteros Industriales</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6">
            ABASTECIMIENTO
            <br />
            <span className="text-gradient-orange">INDUSTRIAL</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ fontFamily: "var(--font-body)" }}>
            Equipos de soldadura, seguridad industrial y herramientas de mano.
            Servicio en todo Chile con las mejores marcas del mercado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#catalogo"
              className="bg-gradient-orange text-primary-foreground px-8 py-4 rounded font-semibold text-base uppercase tracking-wider shadow-orange hover:opacity-90 transition-opacity"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Ver Catálogo
            </a>
            <a
              href="#cotizar"
              className="border border-border text-foreground px-8 py-4 rounded font-semibold text-base uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Solicitar Cotización
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#catalogo" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
