import "./Hero.css";

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />

      <div className="hero-content container">
        <span className="hero-badge">Expertos Ferreteros Industriales</span>
        <h1>
          ABASTECIMIENTO<br />
          <span className="text-gradient">INDUSTRIAL</span>
        </h1>
        <p className="hero-subtitle">
          Equipos de soldadura, seguridad industrial y herramientas de mano.
          Servicio en todo Chile con las mejores marcas del mercado.
        </p>
        <div className="hero-buttons">
          <a href="#catalogo" className="btn-primary">Ver Catálogo</a>
          <a href="#cotizar" className="btn-outline">Solicitar Cotización</a>
        </div>
      </div>

      <a href="#catalogo" className="hero-scroll" aria-label="Ir al catálogo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
      </a>
    </section>
  );
};

export default Hero;
