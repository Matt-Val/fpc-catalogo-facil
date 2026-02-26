import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Catálogo", href: "#catalogo" },
  { label: "Cotizar", href: "#cotizar" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary/10 border-b border-border">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-primary" />
            +56 9 5427 4397
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-primary" />
            ferreteriafpc@gmail.com
          </span>
          <span className="text-primary font-medium">Servicio en Todo Chile 💪</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>FPC</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-foreground font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-heading)" }}>ABASTECIMIENTO</p>
            <p className="text-primary text-xs font-semibold tracking-wider">INDUSTRIAL</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cotizar"
            className="bg-gradient-orange text-primary-foreground px-5 py-2 rounded font-semibold text-sm uppercase tracking-wider shadow-orange hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Cotizar Ahora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
          >
            <nav className="flex flex-col p-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-primary transition-colors py-2 text-sm font-medium uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cotizar"
                onClick={() => setMobileOpen(false)}
                className="bg-gradient-orange text-primary-foreground px-5 py-3 rounded font-semibold text-sm uppercase tracking-wider text-center shadow-orange"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Cotizar Ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
