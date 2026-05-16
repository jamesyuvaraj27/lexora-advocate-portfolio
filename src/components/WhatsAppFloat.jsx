import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "../data/contact";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow duration-300 group"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-secondary text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
        Chat with Advocate Mohan
      </span>
    </motion.a>
  );
}
