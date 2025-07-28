import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg transition-opacity duration-700 opacity-100">
          Find Your Perfect Ride
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mt-4 max-w-2xl transition-opacity duration-700 opacity-100">
          Browse and book rental cars across the city with ease
        </p>
        <Link
          to="/cars"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-6 font-semibold shadow-lg transition-colors duration-200"
        >
          Explore Cars
        </Link>
      </div>
    </section>
  );
}
