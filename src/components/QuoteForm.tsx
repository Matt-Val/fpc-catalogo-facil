import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const productCategories = [
  "Equipos para Soldar",
  "Ropa Seguridad Industrial",
  "Herramientas de Mano",
  "Otro",
];

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Cotización - ${formData.category}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nEmpresa: ${formData.company}\nCategoría: ${formData.category}\n\nDetalle:\n${formData.message}`
    );
    window.location.href = `mailto:ferreteriafpc@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass =
    "w-full bg-secondary border border-border rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm";

  return (
    <section id="cotizar" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Sin compromiso</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Solicita tu <span className="text-gradient-orange">Cotización</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Completa el formulario con los productos que necesitas y te enviaremos una cotización personalizada
              a tu correo electrónico. También puedes contactarnos directamente por WhatsApp para una respuesta más rápida.
            </p>
            <div className="space-y-4">
              {[
                "Cotizaciones sin costo ni compromiso",
                "Respuesta en menos de 24 horas",
                "Precios competitivos para empresas",
                "Despacho a todo Chile",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-lg p-8 shadow-card"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className={`${inputClass} mb-4`}
              >
                <option value="">Selecciona categoría *</option>
                {productCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Describe los productos que necesitas cotizar... *"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} mb-6 resize-none`}
              />
              <button
                type="submit"
                className="w-full bg-gradient-orange text-primary-foreground py-4 rounded font-semibold uppercase tracking-wider shadow-orange hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Send className="w-4 h-4" />
                {submitted ? "¡Cotización Enviada!" : "Enviar Cotización"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
