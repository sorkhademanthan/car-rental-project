import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cars from "../data/cars";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

  const favoriteCars = cars.filter(car => favorites.includes(car.id));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Your Favorite Cars</h2>
      {favoriteCars.length === 0 ? (
        <div className="text-gray-500 text-center">No favorite cars yet.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favoriteCars.map(car => (
            <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img src={car.image} alt={car.name} className="h-40 w-full object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
                <p className="text-blue-600 font-bold mt-2">${car.pricePerDay}/day</p>
                <Link
                  to={`/cars/${car.id}`}
                  className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
