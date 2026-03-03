import { useState } from "react";
import "./QuoteForm.css";

const productCategories = [
  "Equipos para Soldar",
  "Ropa Seguridad Industrial",
  "Herramientas de Mano",
  "Otro",
];

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido.";
    }

    if (formData.phone && !/^[\d\s+()-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Ingresa un teléfono válido.";
    }

    if (!formData.category) {
      newErrors.category = "Selecciona una categoría.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Describe los productos que necesitas.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Cotización - ${formData.category}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nEmpresa: ${formData.company}\nCategoría: ${formData.category}\n\nDetalle:\n${formData.message}`
    );
    window.location.href = `mailto:ferreteriafpc@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", company: "", category: "", message: "" });
    }, 4000);
  };

  return (
    <section id="cotizar" className="quote">
      <div className="container">
        <div className="quote-grid">
          {/* Left info */}
          <div className="quote-info">
            <span className="section-label">Sin compromiso</span>
            <h2>
              Solicita tu <span className="text-gradient">Cotización</span>
            </h2>
            <p>
              Completa el formulario con los productos que necesitas y te enviaremos una cotización
              personalizada a tu correo electrónico. También puedes contactarnos directamente por
              WhatsApp para una respuesta más rápida.
            </p>
            <div className="quote-benefits">
              {[
                "Cotizaciones sin costo ni compromiso",
                "Respuesta en menos de 24 horas",
                "Precios competitivos para empresas",
                "Despacho a todo Chile",
              ].map((item) => (
                <div key={item} className="quote-benefit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="quote-form-card">
            {submitted ? (
              <div className="form-success">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                <h3>¡Cotización Enviada!</h3>
                <p>Te responderemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre completo *"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? "error" : ""}`}
                      maxLength={100}
                    />
                    {errors.name && <p className="form-error">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? "error" : ""}`}
                      maxLength={255}
                    />
                    {errors.email && <p className="form-error">{errors.email}</p>}
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input ${errors.phone ? "error" : ""}`}
                      maxLength={20}
                    />
                    {errors.phone && <p className="form-error">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder="Empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      maxLength={100}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={`form-select ${errors.category ? "error" : ""}`}
                  >
                    <option value="">Selecciona categoría *</option>
                    {productCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.category && <p className="form-error">{errors.category}</p>}
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Describe los productos que necesitas cotizar... *"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? "error" : ""}`}
                    maxLength={1000}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary form-submit">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="m22 2-11 11"/></svg>
                  Enviar Cotización
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
