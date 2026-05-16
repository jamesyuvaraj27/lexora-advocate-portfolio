import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold gold-text mb-2">
        {isInView ? (
          <CountUp end={value} duration={2.5} separator="," />
        ) : (
          "0"
        )}
        <span>{suffix}</span>
      </div>
      <div className="w-8 h-[1px] bg-gold/30 group-hover:w-16 transition-all duration-500 mb-3" />
      <p className="text-gray-text text-sm sm:text-base font-body tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}
