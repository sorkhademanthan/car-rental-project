import { Link } from "react-router-dom";
import cars from "../data/cars";

export default function PopularCars() {
  const popularCars = cars.filter((car) => car.popular).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-8 text-center drop-shadow">
        Popular Cars
      </h2>
      <div className="flex gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 sm:overflow-x-visible">
        {popularCars.map((car) => (
          <div
            key={car.id}
            className="relative min-w-[260px] max-w-xs sm:max-w-none bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden hover:shadow-xl transition-all duration-200 border border-blue-100 group"
          >
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Recommended
              </span>
            </div>
            <img
              src={car.images?.[0]}
              alt={car.name}
              className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-blue-800 mb-1">{car.name}</h3>
              <p className="text-blue-600 font-bold mb-2 text-base">${car.pricePerDay}/day</p>
              <Link
                to={`/cars/${car.id}`}
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium shadow transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
