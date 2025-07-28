import HeroSection from "../components/HeroSection";
import PopularCars from "../components/PopularCars";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <PopularCars />
        <WhyChooseUs />
        <Testimonials />
        {/* Other sections will be added here in the next steps */}
      </div>
    </div>
  );
}
