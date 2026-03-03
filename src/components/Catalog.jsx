import { useState } from "react";
import "./Catalog.css";

// Datos de ejemplo — Aquí se inyectarán las variables Liquid de Jumpseller
// para cargar productos dinámicamente desde la tienda.
const productsData = {
  soldadura: [
    {
      // Aquí se inyectará la variable Liquid de Jumpseller: {{ product.name }}
      name: "Soldadora MIG 200A",
      // Aquí se inyectará la variable Liquid de Jumpseller: {{ product.price }}
      price: "$189.990",
      // Aquí se inyectará la variable Liquid de Jumpseller: {{ product.image }}
      image: "/images/cat-soldadura.jpg",
      description: "Soldadora MIG/MAG profesional con regulación digital.",
    },
    {
      name: "Soldadora TIG AC/DC 250A",
      price: "$349.990",
      image: "/images/cat-soldadura.jpg",
      description: "Soldadura TIG para aluminio y acero inoxidable.",
    },
    {
      name: "Soldadora Arco Manual 160A",
      price: "$79.990",
      image: "/images/cat-soldadura.jpg",
      description: "Ideal para trabajos ligeros y reparaciones.",
    },
    {
      name: "Electrodos 6011 (5kg)",
      price: "$24.990",
      image: "/images/cat-soldadura.jpg",
      description: "Electrodos multipropósito de alta penetración.",
    },
    {
      name: "Máscara Fotosensible",
      price: "$45.990",
      image: "/images/cat-soldadura.jpg",
      description: "Protección automática con oscurecimiento variable.",
    },
    {
      name: "Regulador de Gas Argón",
      price: "$32.990",
      image: "/images/cat-soldadura.jpg",
      description: "Regulador con manómetro para gas argón y CO2.",
    },
  ],
  seguridad: [
    {
      name: "Casco de Seguridad MSA",
      price: "$18.990",
      image: "/images/cat-seguridad.jpg",
      description: "Casco certificado con suspensión tipo rachet.",
    },
    {
      name: "Guantes de Cuero Reforzado",
      price: "$8.990",
      image: "/images/cat-seguridad.jpg",
      description: "Guantes para soldadura y trabajo pesado.",
    },
    {
      name: "Zapatos de Seguridad",
      price: "$34.990",
      image: "/images/cat-seguridad.jpg",
      description: "Punta de acero, suela antideslizante.",
    },
    {
      name: "Overol Ignífugo",
      price: "$42.990",
      image: "/images/cat-seguridad.jpg",
      description: "Ropa ignífuga certificada para soldadura.",
    },
    {
      name: "Protector Auditivo 3M",
      price: "$12.990",
      image: "/images/cat-seguridad.jpg",
      description: "Orejeras con reducción de 28dB NRR.",
    },
    {
      name: "Lentes de Seguridad UV",
      price: "$6.990",
      image: "/images/cat-seguridad.jpg",
      description: "Protección UV y antiempañante.",
    },
  ],
  herramientas: [
    {
      name: "Juego de Llaves Combinadas",
      price: "$29.990",
      image: "/images/cat-herramientas.jpg",
      description: "Set de 12 piezas en acero cromo-vanadio.",
    },
    {
      name: "Destornilladores Phillips Set",
      price: "$14.990",
      image: "/images/cat-herramientas.jpg",
      description: "Set de 6 destornilladores magnéticos.",
    },
    {
      name: "Alicate Universal 8\"",
      price: "$9.990",
      image: "/images/cat-herramientas.jpg",
      description: "Alicate profesional con mango ergonómico.",
    },
    {
      name: "Nivel de Burbuja 60cm",
      price: "$15.990",
      image: "/images/cat-herramientas.jpg",
      description: "Nivel de aluminio con 3 burbujas.",
    },
    {
      name: "Martillo de Bola 500g",
      price: "$11.990",
      image: "/images/cat-herramientas.jpg",
      description: "Mango de fibra de vidrio antideslizante.",
    },
    {
      name: "Flexómetro 5m Stanley",
      price: "$7.990",
      image: "/images/cat-herramientas.jpg",
      description: "Cinta métrica con freno y clip para cinturón.",
    },
  ],
};

const categories = [
  { key: "soldadura", label: "Equipos para Soldar" },
  { key: "seguridad", label: "Ropa Seguridad Industrial" },
  { key: "herramientas", label: "Herramientas de Mano" },
];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("soldadura");

  const handleCotizar = (productName) => {
    // Scroll al formulario de cotización con el producto preseleccionado
    const cotizarSection = document.getElementById("cotizar");
    if (cotizarSection) {
      cotizarSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="catalogo" className="catalog">
      <div className="container">
        <div className="catalog-header">
          <span className="section-label">Nuestros Productos</span>
          <h2 className="section-title">Catálogo</h2>
          <div className="section-divider" />
        </div>

        {/* Category tabs */}
        <div className="catalog-tabs">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`catalog-tab ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {/* Aquí se inyectará la variable Liquid de Jumpseller: {{ category.name }} */}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {/* Aquí se inyectará el loop Liquid de Jumpseller: {% for product in category.products %} */}
        <div className="product-grid">
          {productsData[activeCategory].map((product, index) => (
            <div className="product-card" key={index}>
              <img
                className="product-card-img"
                // Aquí se inyectará la variable Liquid de Jumpseller: {{ product.image | product_image_url }}
                src={product.image}
                // Aquí se inyectará la variable Liquid de Jumpseller: {{ product.name }}
                alt={product.name}
              />
              <div className="product-card-body">
                {/* Aquí se inyectará la variable Liquid de Jumpseller: {{ product.name }} */}
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-desc">{product.description}</p>
                {/* Aquí se inyectará la variable Liquid de Jumpseller: {{ product.price | money }} */}
                <p className="product-card-price">{product.price}</p>
                <button
                  className="btn-primary"
                  onClick={() => handleCotizar(product.name)}
                >
                  Cotizar
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Aquí se cierra el loop Liquid de Jumpseller: {% endfor %} */}
      </div>
    </section>
  );
};

export default Catalog;
