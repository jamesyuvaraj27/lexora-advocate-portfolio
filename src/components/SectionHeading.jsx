import { motion } from "framer-motion";

export default function SectionHeading({ subtitle, title, description, align = "center" }) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${alignClass} mb-16 md:mb-20`}
    >
      {subtitle && (
        <span className="inline-block text-gold text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-4">
          — {subtitle} —
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-4 text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-gray-text text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 flex items-center gap-2">
        <span className="w-8 h-[1px] bg-gold/40" />
        <span className="w-2 h-2 rounded-full bg-gold" />
        <span className="w-8 h-[1px] bg-gold/40" />
      </div>
    </motion.div>
  );
}
