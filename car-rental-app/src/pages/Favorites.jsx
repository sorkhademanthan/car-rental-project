import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cars from "../data/cars";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favs);
  }, []);

  const favoriteCars = cars.filter(car => favorites.includes(car.id));

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-extrabold text-blue-800 mb-10 text-center drop-shadow">
          Your Favorite Cars
        </h2>
        {favoriteCars.length === 0 ? (
          <div className="text-gray-500 text-center text-lg bg-white rounded-xl shadow p-8">
            You haven't added any cars to your favorites yet.<br />
            <Link to="/cars" className="text-blue-600 font-semibold hover:underline mt-2 inline-block">
              Browse Cars
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {favoriteCars.map(car => (
              <div
                key={car.id}
                className="bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-200 border border-blue-100 group"
              >
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    Favorite
                  </span>
                </div>
                <img
                  src={car.images?.[0]}
                  alt={car.name}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{car.name}</h3>
                  <p className="text-blue-600 font-bold mb-4 text-lg">${car.pricePerDay}/day</p>
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
        )}
      </div>
    </section>
  );
}
