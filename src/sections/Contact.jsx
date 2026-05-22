import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { Phone, Mail, MapPin, Clock, ExternalLink, Navigation, PhoneCall, MessageCircle } from "lucide-react";
import { CONTACT } from "../data/contact";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: CONTACT.primaryFormatted,
    href: `tel:${CONTACT.primary}`,
    subtext: CONTACT.secondaryFormatted,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    subtext: "Response within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: CONTACT.address,
    href: CONTACT.mapsUrl,
    subtext: CONTACT.addressLine2,
  },
  {
    icon: Clock,
    label: "Office Timings",
    value: CONTACT.timings,
    subtext: CONTACT.sundayNote,
  },
];

export default function Contact() {
  const [iframeError, setIframeError] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

      <div className="relative max-w-7xl mx-auto section-padding">
        <SectionHeading
          subtitle="Contact"
          title="Get in Touch"
          description="Reach out for expert legal guidance. We're here to help you navigate your legal challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Details & Buttons */}
          <div className="flex flex-col gap-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card-gold p-6 hover:bg-white/[0.08] transition-all duration-500 group rounded-2xl border border-gold/10 hover:border-gold/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="text-gold text-xs font-semibold tracking-wider uppercase mb-2">
                    {info.label}
                  </h4>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-white text-sm font-medium hover:text-gold transition-colors duration-300 flex items-center gap-1"
                    >
                      {info.value}
                      {info.href.startsWith("http") && (
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      )}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{info.value}</p>
                  )}
                  <p className="text-gray-text text-xs mt-1">{info.subtext}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 flex-1 group"
              >
                <Navigation className="w-4 h-4 group-hover:animate-bounce" />
                Get Directions
              </a>
              <a 
                href={`tel:${CONTACT.primary}`}
                className="btn-outline flex items-center justify-center gap-2 flex-1 group"
              >
                <PhoneCall className="w-4 h-4 group-hover:text-gold transition-colors" />
                Call Now
              </a>
              <a 
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2 flex-1 group hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400"
              >
                <MessageCircle className="w-4 h-4 transition-colors" />
                WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border border-gold/20 min-h-[400px] shadow-[0_0_30px_rgba(212,175,55,0.1)] group"
          >
            <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d572.7715365683455!2d78.5906172404544!3d14.961023379177648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb4630811b2c11f%3A0xc85be882d611ef3a!2sAdvocate%20Lord's%20Words%20Worth%20Mohan!5e1!3m2!1sen!2sin!4v1779383172998!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "100%", position: "absolute", inset: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              onError={() => setIframeError(true)}
            />
            {iframeError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-black/90 backdrop-blur-md text-center z-20">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-pulse">
                  <MapPin className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 tracking-wide font-serif">
                  Office Location
                </h3>
                <p className="text-gray-text text-sm max-w-sm mb-8 leading-relaxed">
                  Interactive map loading failed or is blocked by privacy tools. Please click below to view our location.
                </p>
                <a
                  href={CONTACT.mapsFallbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 px-8 py-3.5 rounded-full hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 group/btn"
                >
                  <Navigation className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                  Open Office Location in Google Maps
                </a>
              </div>
            )}
            {/* Map overlay gradient */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/80 via-transparent to-transparent z-10" />
            
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-2xl z-20 pointer-events-none transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:border-gold/20 group-hover:rounded-2xl" />
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/40 rounded-tr-2xl z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/40 rounded-bl-2xl z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-2xl z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
