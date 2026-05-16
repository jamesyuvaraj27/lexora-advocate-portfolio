import { motion } from "framer-motion";
import { stats, achievements } from "../data/stats";
import StatCounter from "../components/StartCounter";
import { CheckCircle } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto section-padding">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4 block">
            — Track Record —
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Numbers That <span className="gold-text">Speak</span>
          </h2>
          <p className="text-gray-text max-w-xl mx-auto">
            Over two decades of relentless pursuit of justice, reflected in our achievements.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="glass-card p-8 text-center hover:border-gold/20 transition-all duration-500">
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl sm:text-2xl font-heading font-semibold text-white mb-8">
            Achievements &amp; <span className="gold-text">Recognition</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-3 glass-card px-5 py-3"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-white text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-text/50 text-sm italic font-heading">
            &ldquo;Justice Through Dedication.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
