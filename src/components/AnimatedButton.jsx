import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function AnimatedButton({
  children,
  to,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base rounded-full overflow-hidden transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "px-8 py-3.5 bg-gradient-to-r from-gold to-gold-soft text-primary hover:shadow-lg hover:shadow-gold/30",
    outline:
      "px-8 py-3.5 border-2 border-gold/50 text-gold hover:bg-gold/10 hover:border-gold",
    ghost:
      "px-6 py-3 text-gold hover:text-gold-soft",
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {/* Shimmer effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} smooth duration={800} offset={-80}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
}
