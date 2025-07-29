import PopularCars from "../components/PopularCars";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "./Faq";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-4 overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600 opacity-20 rounded-full blur-2xl animate-blob" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-2xl animate-blob animation-delay-2000" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-800 mb-6 drop-shadow-lg leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 bg-clip-text text-transparent">
              Drive Bold.
            </span>
            <br />
            <span className="text-blue-700">Arrive Inspired.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 font-medium">
            Discover the freedom of the open road with India’s most stylish car rental platform.<br className="hidden md:inline" />
            Transparent pricing, instant booking, and a fleet that turns heads.
          </p>
          <a
            href="/cars"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-full shadow-xl text-xl transition-all duration-200 transform hover:scale-105"
          >
            Browse Cars
          </a>
        </div>
      </section>

      {/* Popular Cars */}
      <section className="relative z-10">
        <PopularCars />
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10">
        <WhyChooseUs />
      </section>

      {/* Testimonials */}
      <section className="relative z-10">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="relative z-10 mt-16">
        <Faq />
      </section>

      {/* Contact */}
      <section className="relative z-10">
        <Contact />
      </section>
      {/* Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: scale(1) translateY(0px);}
            33% { transform: scale(1.1) translateY(-20px);}
            66% { transform: scale(0.9) translateY(10px);}
          }
          .animate-blob { animation: blob 8s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </div>
  );
}

    