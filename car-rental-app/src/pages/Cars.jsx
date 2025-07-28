import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cars from "../data/cars";
import SearchBar from "../components/SearchBar";

// Extract unique brands for filter dropdown
const brands = Array.from(new Set(cars.map((car) => car.brand).filter(Boolean)));

export default function Cars() {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [brand, setBrand] = useState("");
  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function handleSearch(query) {
    const q = query.toLowerCase();
    filterAndSortCars(q, brand, priceRange, sort);
  }

  function handleBrandChange(e) {
    setBrand(e.target.value);
    filterAndSortCars("", e.target.value, priceRange, sort);
  }

  function handleSortChange(e) {
    setSort(e.target.value);
    filterAndSortCars("", brand, priceRange, e.target.value);
  }

  function handlePriceChange(e) {
    setPriceRange(e.target.value);
    filterAndSortCars("", brand, e.target.value, sort);
  }

  function toggleFavorite(carId) {
    setFavorites((prev) =>
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId]
    );
  }

  function filterAndSortCars(query, brand, priceRange, sort) {
    let result = cars.filter((car) => {
      const matchesQuery =
        !query ||
        car.name.toLowerCase().includes(query) ||
        (car.brand && car.brand.toLowerCase().includes(query));
      const matchesBrand = !brand || car.brand === brand;
      const matchesPrice =
        !priceRange ||
        (priceRange === "lt50" && car.pricePerDay < 50) ||
        (priceRange === "50to80" && car.pricePerDay >= 50 && car.pricePerDay <= 80) ||
        (priceRange === "gt80" && car.pricePerDay > 80);
      return matchesQuery && matchesBrand && matchesPrice;
    });

    if (sort === "priceLow") {
      result = result.sort((a, b) => a.pricePerDay - b.pricePerDay);
    } else if (sort === "priceHigh") {
      result = result.sort((a, b) => b.pricePerDay - a.pricePerDay);
    }

    setFilteredCars(result);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        Browse Cars
      </h1>
      <SearchBar onSearch={handleSearch} />
      <form
        className="flex flex-wrap gap-4 mb-6 items-center"
        aria-label="Car Filters"
      >
        <label htmlFor="brand" className="font-medium">
          Brand:
          <select
            id="brand"
            name="brand"
            value={brand}
            onChange={handleBrandChange}
            className="ml-2 border rounded px-3 py-2"
            aria-label="Filter by brand"
          >
            <option value="">All</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="price" className="font-medium">
          Price:
          <select
            id="price"
            name="price"
            value={priceRange}
            onChange={handlePriceChange}
            className="ml-2 border rounded px-3 py-2"
            aria-label="Filter by price"
          >
            <option value="">All</option>
            <option value="lt50">Below $50</option>
            <option value="50to80">$50 - $80</option>
            <option value="gt80">Above $80</option>
          </select>
        </label>
        <label htmlFor="sort" className="font-medium">
          Sort:
          <select
            id="sort"
            name="sort"
            value={sort}
            onChange={handleSortChange}
            className="ml-2 border rounded px-3 py-2"
            aria-label="Sort by price"
          >
            <option value="">Default</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </label>
      </form>
      <div
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        aria-live="polite"
      >
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            tabIndex={0}
            aria-label={`Car: ${car.name}, $${car.pricePerDay} per day`}
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {car.name}
              </h3>
              <p className="text-blue-600 font-bold mt-2">
                ${car.pricePerDay}/day
              </p>
              <button
                onClick={() => toggleFavorite(car.id)}
                className={`mb-2 self-end text-xl ${favorites.includes(car.id) ? "text-red-500" : "text-gray-400"} hover:text-red-600`}
                aria-label={favorites.includes(car.id) ? "Remove from favorites" : "Add to favorites"}
                title={favorites.includes(car.id) ? "Remove from favorites" : "Add to favorites"}
              >
                {favorites.includes(car.id) ? "♥" : "♡"}
              </button>
              <Link
                to={`/cars/${car.id}`}
                className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200"
                aria-label={`View details for ${car.name}`}
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
