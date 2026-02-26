import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import QuoteForm from "@/components/QuoteForm";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
