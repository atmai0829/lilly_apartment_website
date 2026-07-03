import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Features from "./components/Features/Features";
import Gallery from "./components/Gallery/Gallery";
import FloorPlans from "./components/FloorPlans/FloorPlans";
import Location from "./components/Location/Location";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Gallery />
        <FloorPlans />
        <Location />
        {/* <Testimonials /> — hidden until reviews are available */}
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
