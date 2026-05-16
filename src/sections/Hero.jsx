import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Award, BookOpen, Phone } from "lucide-react";
import { Link } from "react-scroll";
import AnimatedButton from "../components/AnimatedButton";
import { CONTACT } from "../data/contact";

// Image assets
import heroBgDesktop from "../assets/images/hero-courtroom-bg.png";
import heroBgMobile from "../assets/images/hero-courtroom-bg-mobile.png";
import advocatePortrait from "../assets/images/advocate-portrait-primary.png";

function Particle({ style }) {
  return <div className="particle animate-float" style={style} />;
}

export default function Hero() {
  const [particles, setParticles] = useState([]);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: `${Math.random() * 4 + 1}px`,
        height: `${Math.random() * 4 + 1}px`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 4 + 4}s`,
        opacity: Math.random() * 0.5 + 0.1,
      },
    }));
    setParticles(generated);
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.3 },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
      },
    }),
    []
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ====== Background Image — Desktop ====== */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 hidden md:block"
      >
        <img
          src={heroBgDesktop}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          onLoad={() => setImgLoaded(true)}
        />
      </motion.div>

      {/* ====== Background Image — Mobile ====== */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 16, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 md:hidden"
      >
        <img
          src={heroBgMobile}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* ====== Dark Overlay (keeps text readable) ====== */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Radial gold glow overlays (on top of image) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.05)_0%,transparent_50%)]" />

      {/* Animated grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,107,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,107,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}

      {/* Decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -right-32 w-64 h-64 border border-gold/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-48 w-96 h-96 border border-gold/5 rounded-full"
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto section-padding py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* ====== Left: Text Content ====== */}
        <div className="text-center lg:text-left flex-1">
          {/* Top badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <Award className="w-4 h-4" />
              District Court Advocate | B.Sc., LL.B. | 24+ Years
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 text-shadow-gold"
          >
            Advocate{" "}
            <span className="gold-text">Maddela</span>
            <br />
            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Lords Words Worth{" "}
              <span className="gold-text">Mohan</span>
            </span>
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-4 mb-8"
          >
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold/60" />
            <BookOpen className="w-5 h-5 text-gold" />
            <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold/60" />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-text font-heading italic max-w-3xl mx-auto lg:mx-0 leading-relaxed mb-4"
          >
            &ldquo;<span className="text-gold font-medium">Justice</span> Through{" "}
            <span className="text-gold font-medium">Dedication</span>&rdquo;
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-gray-text/80 font-body max-w-3xl mx-auto lg:mx-0 mb-4"
          >
            Trusted Legal Solutions with Professional Integrity and Client-Focused Representation
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm text-gray-text/60 font-body max-w-2xl mx-auto lg:mx-0 mb-6"
          >
            Specializing in Criminal Law, Civil Law, Family Law, Property Disputes, Corporate Law &amp; Divorce Cases.
            Serving clients across Allagadda, Chagalamarri &amp; Nandyal District.
          </motion.p>

          {/* Contact highlights */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10 text-sm text-gray-text"
          >
            <a
              href={`tel:${CONTACT.primary}`}
              className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-gold" />
              {CONTACT.primaryFormatted}
            </a>
            <span className="hidden sm:block w-[1px] h-4 bg-gold/20" />
            <a
              href={`tel:${CONTACT.secondary}`}
              className="flex items-center gap-2 hover:text-gold transition-colors duration-300"
            >
              <Phone className="w-4 h-4 text-gold" />
              {CONTACT.secondaryFormatted}
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <AnimatedButton to="consultation" variant="primary">
              Book Consultation
            </AnimatedButton>
            <AnimatedButton to="services" variant="outline">
              Explore Practice Areas
            </AnimatedButton>
          </motion.div>
        </div>

        {/* ====== Right: Advocate Portrait (desktop only) ====== */}
        <motion.div
          variants={itemVariants}
          className="hidden lg:block flex-shrink-0"
        >
          <div className="relative group">
            {/* Gold glow behind portrait */}
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-gold/5 to-transparent rounded-3xl blur-2xl group-hover:from-gold/30 transition-all duration-700" />

            {/* Portrait card with glass effect */}
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative w-72 xl:w-80 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gold/20 group-hover:border-gold/40 transition-colors duration-500 shadow-2xl shadow-black/50"
            >
              <img
                src={advocatePortrait}
                alt="Advocate Maddela Lords Words Worth Mohan — District Court Advocate"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <Link to="about" smooth duration={800} offset={-80} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gold/50 hover:text-gold transition-colors duration-300"
          >
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
