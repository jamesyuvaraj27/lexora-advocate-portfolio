import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Scale, Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CONTACT, getWhatsAppUrl } from "../data/contact";

// Logo asset
import logoPrimary from "../assets/icon/logo-primary.png";

const quickLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Practice Areas", to: "services" },
  { name: "Experience", to: "experience" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Consultation", to: "consultation" },
  { name: "Contact", to: "contact" },
];

const practiceLinks = [
  "Criminal Law",
  "Civil Law",
  "Family Law",
  "Property Disputes",
  "Corporate Law",
  "Divorce Cases",
];

const socials = [
  { icon: FaWhatsapp, href: getWhatsAppUrl(), label: "WhatsApp" },
  { icon: FaFacebookF, href: CONTACT.socials.facebook, label: "Facebook" },
  { icon: FaLinkedinIn, href: CONTACT.socials.linkedin, label: "LinkedIn" },
  { icon: FaInstagram, href: CONTACT.socials.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary border-t border-gold/10">
      {/* Gold line accent */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={logoPrimary}
                  alt="Advocate M.L.W.W. Mohan — Logo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">Adv. M.L.W.W. Mohan</h3>
                <span className="text-[10px] tracking-[0.15em] text-gold/60 uppercase">
                  District Court Advocate
                </span>
              </div>
            </div>
            <p className="text-gray-text text-sm leading-relaxed mb-4">
              Delivering trusted legal solutions with professional integrity and client-focused
              representation for over 24 years.
            </p>
            <p className="text-gold/60 text-xs italic font-heading mb-6">
              &ldquo;Justice Through Dedication&rdquo;
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-gold font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={800}
                    offset={-80}
                    className="text-gray-text text-sm hover:text-gold cursor-pointer transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-gold font-heading font-semibold text-lg mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceLinks.map((area) => (
                <li key={area}>
                  <Link
                    to="services"
                    smooth
                    duration={800}
                    offset={-80}
                    className="text-gray-text text-sm hover:text-gold cursor-pointer transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-gold transition-all duration-300" />
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-gold font-heading font-semibold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href={`tel:${CONTACT.primary}`}
                className="flex items-start gap-3 text-gray-text text-sm hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                {CONTACT.primaryFormatted}
              </a>
              <a
                href={`tel:${CONTACT.secondary}`}
                className="flex items-start gap-3 text-gray-text text-sm hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                {CONTACT.secondaryFormatted}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 text-gray-text text-sm hover:text-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                {CONTACT.email}
              </a>
              <div className="flex items-start gap-3 text-gray-text text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>
                  {CONTACT.addressFull.split(",")[0]},
                  <br />
                  {CONTACT.addressFull.split(",").slice(1).join(",").trim()}
                </span>
              </div>
              <div className="flex items-start gap-3 text-gray-text text-sm">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>{CONTACT.timingsShort}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-text/60 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Advocate Maddela Lords Words Worth Mohan. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-gray-text/60 text-xs sm:text-sm">
              <span className="hover:text-gold cursor-pointer transition-colors duration-300">
                Legal Disclaimer
              </span>
              <span className="hover:text-gold cursor-pointer transition-colors duration-300">
                Privacy Policy
              </span>
              <span className="hover:text-gold cursor-pointer transition-colors duration-300">
                Terms &amp; Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
