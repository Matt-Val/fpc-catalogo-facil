import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>FPC</span>
              </div>
              <div>
                <p className="text-foreground font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>ABASTECIMIENTO</p>
                <p className="text-primary text-xs font-semibold tracking-wider">INDUSTRIAL</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Expertos ferreteros industriales. Equipos de soldadura, seguridad industrial y herramientas de mano con servicio en todo Chile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4">Enlaces</h3>
            <nav className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Catálogo", href: "#catalogo" },
                { label: "Cotizar", href: "#cotizar" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <a href="tel:+56954274397" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +56 9 5427 4397
              </a>
              <a href="mailto:ferreteriafpc@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                ferreteriafpc@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Chile
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} FPC Abastecimiento Industrial. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
