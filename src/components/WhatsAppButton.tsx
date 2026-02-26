import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send?phone=56954274397&text=Hola%2C%20quiero%20cotizar%20un%20producto"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ background: "#25D366" }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7" style={{ color: "#fff" }} />
    </motion.a>
  );
};

export default WhatsAppButton;
