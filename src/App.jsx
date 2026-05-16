import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";

// Lazy load below-the-fold sections for performance
const About = lazy(() => import("./sections/About"));
const Services = lazy(() => import("./sections/Services"));
const Experience = lazy(() => import("./sections/Experience"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Consultation = lazy(() => import("./sections/Consultation"));
const Contact = lazy(() => import("./sections/Contact"));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <Services />
          <Experience />
          <Testimonials />
          <Consultation />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;