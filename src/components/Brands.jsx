import "./Brands.css";

const brands = Array.from({ length: 10 }, (_, i) =>
  `/images/brands/logo${String(i + 1).padStart(2, "0")}.png`
);

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="brands-header">
          <span className="section-label">Confianza y Calidad</span>
          <h2 className="section-title">Nuestras Marcas</h2>
          <div className="section-divider" />
        </div>

        <div className="brands-grid">
          {brands.map((src, i) => (
            <div className="brand-item" key={i}>
              <img src={src} alt={`Marca ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
