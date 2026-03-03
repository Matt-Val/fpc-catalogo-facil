import { useState } from "react";
import "./Header.css";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Cotizar", href: "#cotizar" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="container">
          <span className="top-bar-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +56 9 5427 4397
          </span>
          <span className="top-bar-item top-bar-email">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            ferreteriafpc@gmail.com
          </span>
          <span className="top-bar-highlight">Servicio en Todo Chile 💪</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container">
        <div className="header-main">
          <a href="#inicio" className="logo-link">
            <div className="logo-circle">
              <span>FPC</span>
            </div>
            <div className="logo-text">
              <p className="logo-text-main">ABASTECIMIENTO</p>
              <p className="logo-text-sub">INDUSTRIAL</p>
            </div>
          </a>

          {/* Desktop */}
          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a href="#cotizar" className="btn-primary">Cotizar Ahora</a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#cotizar" className="btn-primary" onClick={() => setMobileOpen(false)}>
          Cotizar Ahora
        </a>
      </div>
    </header>
  );
};

export default Header;
