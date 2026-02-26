import { motion } from "framer-motion";

const brands = Array.from({ length: 10 }, (_, i) => `/images/brands/logo${String(i + 1).padStart(2, "0")}.png`);

const Brands = () => {
  return (
    <section className="py-16 bg-card border-t border-b border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Confianza y Calidad</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">Nuestras Marcas</h2>
          <div className="w-16 h-1 bg-gradient-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {brands.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-24 h-16 md:w-28 md:h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <img
                src={src}
                alt={`Marca ${i + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
