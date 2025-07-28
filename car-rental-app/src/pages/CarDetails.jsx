import { useParams, useNavigate } from "react-router-dom";
import cars from "../data/cars";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Car Not Found</h2>
        <p className="text-gray-600">Sorry, we couldn't find the car you're looking for.</p>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-64 object-cover rounded-lg shadow mb-6"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{car.name}</h2>
      <p className="text-blue-600 font-bold mb-4">${car.pricePerDay}/day</p>
      {/* Add more car details here if available */}
      <button
        onClick={() => navigate("/booking")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-200"
      >
        Book Now
      </button>
    </section>
  );
}
