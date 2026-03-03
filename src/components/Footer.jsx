import "./Footer.css";

const Footer = () => {
  return (
    <footer id="contacto" className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <div className="footer-logo">
                <span>FPC</span>
              </div>
              <div>
                <p className="footer-brand-name">ABASTECIMIENTO</p>
                <p className="footer-brand-sub">INDUSTRIAL</p>
              </div>
            </div>
            <p className="footer-desc">
              Expertos ferreteros industriales. Equipos de soldadura, seguridad industrial y
              herramientas de mano con servicio en todo Chile.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3>Enlaces</h3>
            <nav className="footer-links">
              <a href="#inicio">Inicio</a>
              <a href="#catalogo">Catálogo</a>
              <a href="#cotizar">Cotizar</a>
              <a href="#contacto">Contacto</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3>Contacto</h3>
            <div className="footer-contact">
              <a href="tel:+56954274397" className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +56 9 5427 4397
              </a>
              <a href="mailto:ferreteriafpc@gmail.com" className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                ferreteriafpc@gmail.com
              </a>
              <div className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Chile
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FPC Abastecimiento Industrial. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
