import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

// Logo asset
import logoPrimary from "../assets/icon/logo-primary.png";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Practice Areas", to: "services" },
  { name: "Experience", to: "experience" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/90 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={800}
            className="cursor-pointer flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0"
            >
              <img
                src={logoPrimary}
                alt="Advocate M.L.W.W. Mohan — Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-heading font-bold text-white group-hover:text-gold transition-colors duration-300">
                Adv. M.L.W.W. Mohan
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.15em] text-gold/60 uppercase hidden sm:block">
                District Court Advocate
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={800}
                offset={-80}
                spy
                activeClass="nav-active"
                className="relative px-4 py-2 text-sm font-body text-gray-text hover:text-gold cursor-pointer transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-gold to-gold-soft group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
            <Link
              to="consultation"
              smooth
              duration={800}
              offset={-80}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-soft text-primary font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-gold/25 transition-shadow duration-300"
              >
                Book Consultation
              </motion.button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-gold"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-20 bg-primary/98 backdrop-blur-2xl z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={800}
                    offset={-80}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-heading text-white hover:text-gold cursor-pointer transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              >
                <Link
                  to="consultation"
                  smooth
                  duration={800}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                >
                  <button className="mt-4 px-8 py-3 bg-gradient-to-r from-gold to-gold-soft text-primary font-semibold rounded-full">
                    Book Consultation
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
