import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { practiceAreas } from "../data/Services";
import SectionHeading from "../components/SectionHeading";
import { ChevronRight } from "lucide-react";

export default function Services() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto section-padding">
        <SectionHeading
          subtitle="Legal Services"
          title="Comprehensive Legal Expertise"
          description="Delivering distinguished legal representation across a wide spectrum of practice areas with precision and dedication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreas.map((area, i) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onMouseEnter={() => setExpandedId(area.id)}
              onMouseLeave={() => setExpandedId(null)}
              className="group relative glass-card-gold p-6 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer gold-border-glow"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:shadow-lg group-hover:shadow-gold/10 transition-all duration-500">
                <area.icon className="w-6 h-6 text-gold" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {area.title}
              </h3>

              {/* Description */}
              <p className="text-gray-text text-sm leading-relaxed mb-4">
                {area.description}
              </p>

              {/* Features */}
              <AnimatePresence>
                {expandedId === area.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gold/10 space-y-2">
                      {area.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs text-gray-text"
                        >
                          <ChevronRight className="w-3 h-3 text-gold flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
