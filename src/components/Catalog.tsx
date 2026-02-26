import { motion } from "framer-motion";

const categories = [
  {
    title: "Equipos para Soldar",
    description: "Soldadoras MIG, TIG, Arco y accesorios de las mejores marcas.",
    image: "/images/cat-soldadura.jpg",
    products: [
      "Soldadoras MIG/MAG",
      "Soldadoras TIG AC/DC",
      "Soldadoras Arco Manual",
      "Electrodos y Alambres",
      "Reguladores y Antorchas",
      "Máscaras y Protección",
    ],
  },
  {
    title: "Ropa Seguridad Industrial",
    description: "Equipos de protección personal certificados para cada tarea.",
    image: "/images/cat-seguridad.jpg",
    products: [
      "Cascos de Seguridad",
      "Guantes Industriales",
      "Zapatos de Seguridad",
      "Overoles y Ropa Ignífuga",
      "Protección Auditiva",
      "Lentes de Seguridad",
    ],
  },
  {
    title: "Herramientas de Mano",
    description: "Herramientas profesionales para todo tipo de trabajo industrial.",
    image: "/images/cat-herramientas.jpg",
    products: [
      "Llaves y Dados",
      "Destornilladores",
      "Alicates y Pinzas",
      "Escuadras y Niveles",
      "Martillos y Combos",
      "Brochas y Accesorios",
    ],
  },
];

const Catalog = () => {
  return (
    <section id="catalogo" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Nuestros Productos</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3">Catálogo</h2>
          <div className="w-20 h-1 bg-gradient-orange mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-secondary rounded-lg overflow-hidden shadow-card hover:shadow-orange transition-shadow duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500" />
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-foreground">
                  {cat.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4" style={{ fontFamily: "var(--font-body)" }}>
                  {cat.description}
                </p>
                <ul className="space-y-2">
                  {cat.products.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-secondary-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cotizar"
                  className="mt-6 block text-center bg-gradient-orange text-primary-foreground py-3 rounded font-semibold text-sm uppercase tracking-wider shadow-orange hover:opacity-90 transition-opacity"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Cotizar Productos
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
