import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import Catalog from "../components/Catalog.jsx";
import QuoteForm from "../components/QuoteForm.jsx";
import Brands from "../components/Brands.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <Header />
      <Hero />
      <Catalog />
      <QuoteForm />
      <Brands />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
