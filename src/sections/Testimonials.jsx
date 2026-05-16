import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../data/testimonials";
import SectionHeading from "../components/SectionHeading";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

// Image asset
import deskSessionBg from "../assets/images/advocate-desk-session.png";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection) => {
      setDirection(newDirection);
      setCurrent((prev) => {
        const next = prev + newDirection;
        if (next < 0) return testimonials.length - 1;
        if (next >= testimonials.length) return 0;
        return next;
      });
    },
    []
  );

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* ====== Cinematic background image ====== */}
      <div className="absolute inset-0">
        <img
          src={deskSessionBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover blur-[2px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,169,107,0.05)_0%,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto section-padding">
        <SectionHeading
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Trusted by individuals and businesses alike, our clients' words reflect our commitment to excellence."
        />

        {/* Slider Container */}
        <div className="relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
            <Quote className="w-12 h-12 text-gold/20" />
          </div>

          {/* Card */}
          <div className="glass-card-gold p-8 sm:p-12 md:p-16 relative overflow-hidden min-h-[320px] flex items-center">
            {/* Background quote watermark */}
            <Quote className="absolute top-6 right-6 w-24 h-24 text-gold/[0.03] rotate-180" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full text-center"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-gold fill-gold"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white text-base sm:text-lg md:text-xl font-heading italic leading-relaxed mb-8 max-w-3xl mx-auto">
                  "{t.text}"
                </p>

                {/* Divider */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-gold/30" />
                  <span className="w-2 h-2 rounded-full bg-gold/50" />
                  <span className="w-8 h-[1px] bg-gold/30" />
                </div>

                {/* Author */}
                <div>
                  <h4 className="text-gold font-heading font-semibold text-lg">
                    {t.name}
                  </h4>
                  <p className="text-gray-text text-sm mt-1">{t.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-gold"
                      : "w-2 h-2 bg-gold/30 hover:bg-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
