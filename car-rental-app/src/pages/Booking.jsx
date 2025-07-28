import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cars from "../data/cars";
import DatePicker from "../components/DatePicker";

export default function Booking() {
  const [form, setForm] = useState({
    carId: cars[0]?.id || "",
    pickupLocation: "",
    pickupDate: "",
    dropoffDate: "",
    name: "",
    email: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Optionally: Save booking data to state/context here
    navigate("/booking/success");
  }

  return (
    <section className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center" id="booking-form-title">
        Book Your Car
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 flex flex-col gap-4"
        aria-labelledby="booking-form-title"
        role="form"
      >
        <label className="font-medium" htmlFor="carId">
          Car
          <select
            id="carId"
            name="carId"
            value={form.carId}
            onChange={handleChange}
            className="block w-full mt-1 border rounded px-3 py-2"
            aria-required="true"
          >
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name}
              </option>
            ))}
          </select>
        </label>
        <label className="font-medium" htmlFor="pickupLocation">
          Pickup Location
          <input
            id="pickupLocation"
            type="text"
            name="pickupLocation"
            value={form.pickupLocation}
            onChange={handleChange}
            required
            className="block w-full mt-1 border rounded px-3 py-2"
            aria-required="true"
          />
        </label>
        <DatePicker
          label="Pickup Date"
          name="pickupDate"
          value={form.pickupDate}
          onChange={handleChange}
          required
        />
        <DatePicker
          label="Drop-off Date"
          name="dropoffDate"
          value={form.dropoffDate}
          onChange={handleChange}
          required
        />
        <label className="font-medium" htmlFor="name">
          Name (optional)
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="block w-full mt-1 border rounded px-3 py-2"
          />
        </label>
        <label className="font-medium" htmlFor="email">
          Email (optional)
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="block w-full mt-1 border rounded px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-200 mt-4"
          aria-label="Confirm Booking"
        >
          Confirm Booking
        </button>
      </form>
    </section>
  );
}
