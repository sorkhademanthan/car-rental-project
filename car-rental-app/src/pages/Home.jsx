import HeroSection from "../components/HeroSection";
import PopularCars from "../components/PopularCars";
import WhyChooseUs from "../pages/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Locations from "../pages/Locations";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <PopularCars />
        <WhyChooseUs />
        <Testimonials />
        <Locations />
        <Faq />
        <Contact />
        {/* Other sections will be added here in the next steps */}
      </div>
    </div>
  );
}
