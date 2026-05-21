import { motion } from "framer-motion";
import { Scale, Award, GraduationCap, MapPin, BadgeCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

// Image assets
import advocatePortrait from "../assets/images/advocate-portrait-primary.webp";
import advocateCandid from "../assets/images/advocate-candid-office.webp";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.Sc., LL.B.",
    description: "Graduated from Sri Vasavi Arts & Science Degree College; Law from PRR Law College, Hyderabad.",
  },
  {
    icon: BadgeCheck,
    title: "Bar Council: AP/1477/2003",
    description: "Registered with the Bar Council of Andhra Pradesh since 2003.",
  },
  {
    icon: Award,
    title: "Legal Councillor",
    description: " Appointed by AP high court as Advisor & Sub Jail Visiting Advocate.",
  },
  {
    icon: MapPin,
    title: "Nandyal District",
    description: "Proudly serving clients across Andhra Pradesh, with principal legal practice in Allagadda, Chagalamarri, and surrounding regions of Nandyal District.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,169,107,0.04)_0%,transparent_60%)]" />

      {/* ====== Floating candid image — decorative background layer ====== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 -right-20 w-[500px] h-[600px] hidden xl:block pointer-events-none"
      >
        <motion.img
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          src={advocateCandid}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover rounded-3xl"
          loading="lazy"
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto section-padding">
        <SectionHeading
          subtitle="About"
          title="A Legacy of Legal Excellence"
          description="Over 24 years of distinguished legal practice built on integrity, transparency, and an unwavering commitment to justice."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Portrait Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative group">
              {/* Gold glow behind card */}
              <div className="absolute -inset-3 bg-gradient-to-br from-gold/15 via-transparent to-gold/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/20 group-hover:border-gold/40 transition-colors duration-500">
                {/* ====== Main advocate portrait ====== */}
                <motion.img
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  src={advocatePortrait}
                  alt="Advocate Maddela Lords Words Worth Mohan — professional portrait"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center space-y-2"
                  >
                    <h3 className="text-2xl sm:text-3xl font-heading font-bold gold-text">
                      24+ Years
                    </h3>
                    <p className="text-gray-text text-sm">of Distinguished Practice</p>
                    <div className="w-16 h-[1px] bg-gold/30 mx-auto" />
                    <p className="text-gold/60 font-heading text-sm italic">
                      &ldquo;Justice Through Dedication&rdquo;
                    </p>
                    <div className="mt-2 space-y-1">
                      <p className="text-white text-xs font-semibold">District Court Advocate</p>
                      <p className="text-gray-text text-[10px]">B.Sc., LL.B. | Bar Council: AP/1477/2003</p>
                    </div>
                  </motion.div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/30 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/30 rounded-br-lg" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white leading-tight">
              Advocate Maddela Lords Words Worth{" "}
              <span className="gold-text">Mohan</span>
            </h3>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase">
              District Court Advocate
            </p>

            <div className="space-y-4 text-gray-text text-sm sm:text-base leading-relaxed">
              <p>
                Advocate Maddela Lords Words Worth Mohan is a dedicated and experienced legal
                professional practicing in the District Court with over 24 years of expertise in
                the legal field. Known for his transparent approach, ethical practice, and strong
                commitment to justice, he has built a reputation for providing reliable legal
                guidance and client-focused representation.
              </p>
              <p>
                Throughout his career, he has consistently worked toward protecting the rights and
                interests of his clients with professionalism, integrity, and dedication. He
                specializes in Criminal Law, Civil Law, Family Law, Property Disputes, Corporate
                Law, and Divorce Cases.
              </p>
              <p>
                With extensive courtroom experience and deep legal knowledge, Advocate Mohan handles
                every case with careful analysis, strategic planning, and a result-oriented approach.
                His approachable nature and commitment to clear communication help clients feel
                confident and supported throughout the legal process.
              </p>
              <p>
                Advocate Mohan completed his graduation at{" "}
                <span className="text-white">Sri Vasavi Arts and Science Degree College</span>,
                Chagalamarri, Nandyal District, and pursued his legal education at{" "}
                <span className="text-white">PRR Law College, Hyderabad</span>. He provides legal services across various regions of Andhra Pradesh, representing clients throughout the state in diverse legal matters. While his legal practice extends across Andhra Pradesh, his principal area of practice is concentrated in Allagadda and Nandyal District, where he is known for his dedicated advocacy, professional integrity, and client-focused legal representation.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 hover:border-gold/30 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <item.icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-text text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
