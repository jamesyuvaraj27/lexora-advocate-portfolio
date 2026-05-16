import React from "react";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";

import About from "./sections/About";
import Services from "./sections/Services";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Consultation from "./sections/Consultation";
import Contact from "./sections/Contact";



function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Testimonials />
        <Consultation />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;