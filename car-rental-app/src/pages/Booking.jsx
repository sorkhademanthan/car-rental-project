import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import cars from "../data/cars";
import DatePicker from "../components/DatePicker";

export default function Booking() {
  const location = useLocation();
  // Get preselected carId from navigation state (if any)
  const preselectedCarId = location.state?.carId;

  const [form, setForm] = useState({
    carId: preselectedCarId || cars[0]?.id || "",
    pickupLocation: "",
    pickupDate: "",
    dropoffDate: "",
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // If user navigates to booking with a different carId, update form
  useEffect(() => {
    if (preselectedCarId && preselectedCarId !== form.carId) {
      setForm((prev) => ({ ...prev, carId: preselectedCarId }));
    }
    // eslint-disable-next-line
  }, [preselectedCarId]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateForm() {
    if (!form.carId || !form.pickupLocation || !form.pickupDate || !form.dropoffDate || !form.name || !form.email || !form.phone) {
      setError("Please fill in all fields.");
      return false;
    }
    if (new Date(form.dropoffDate) <= new Date(form.pickupDate)) {
      setError("Drop-off date must be after pickup date.");
      return false;
    }
    setError("");
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validateForm()) return;
    const selectedCar = cars.find((car) => car.id === Number(form.carId));
    const days =
      form.pickupDate && form.dropoffDate
        ? Math.max(
            1,
            Math.ceil(
              (new Date(form.dropoffDate) - new Date(form.pickupDate)) /
                (1000 * 60 * 60 * 24)
            )
          )
        : 1;
    const total = selectedCar ? selectedCar.pricePerDay * days : 0;
    localStorage.setItem(
      "currentBooking",
      JSON.stringify({
        carName: selectedCar?.name,
        pickupDate: form.pickupDate,
        dropoffDate: form.dropoffDate,
        pickupLocation: form.pickupLocation,
        name: form.name,
        email: form.email,
        phone: form.phone,
        total,
      })
    );
    setSubmitted(true);
  }

  const selectedCar = cars.find((car) => car.id === Number(form.carId));
  const days =
    form.pickupDate && form.dropoffDate
      ? Math.max(
          1,
          Math.ceil(
            (new Date(form.dropoffDate) - new Date(form.pickupDate)) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 1;
  const total = selectedCar ? selectedCar.pricePerDay * days : 0;

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-blue-600 h-2 w-full" />
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">
            Book Your Car
          </h2>
          {!submitted ? (
            <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center font-semibold">
                  {error}
                </div>
              )}
              <div>
                <label className="font-medium block mb-1" htmlFor="carId">
                  Select Car
                </label>
                <select
                  id="carId"
                  name="carId"
                  value={form.carId}
                  onChange={handleChange}
                  required
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                >
                  {cars.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.name} (${car.pricePerDay}/day)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-medium block mb-1" htmlFor="pickupLocation">
                  Pickup Location
                </label>
                <input
                  id="pickupLocation"
                  name="pickupLocation"
                  value={form.pickupLocation}
                  onChange={handleChange}
                  placeholder="Enter pickup location"
                  required
                  className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <DatePicker
                    label="Pickup Date"
                    name="pickupDate"
                    value={form.pickupDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex-1">
                  <DatePicker
                    label="Drop-off Date"
                    name="dropoffDate"
                    value={form.dropoffDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="flex-1 border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="flex-1 border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <div className="bg-blue-50 rounded-lg p-4 mt-2 text-blue-700 text-sm font-semibold flex flex-col gap-1">
                <span>
                  <span className="font-bold">Car:</span> {selectedCar?.name}
                </span>
                <span>
                  <span className="font-bold">Price/Day:</span> ${selectedCar?.pricePerDay}
                </span>
                <span>
                  <span className="font-bold">Days:</span> {days}
                </span>
                <span>
                  <span className="font-bold">Total:</span> ${total}
                </span>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors duration-200 text-lg"
              >
                Confirm Booking
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-4">Booking Confirmed!</h3>
              <div className="bg-blue-50 rounded-lg p-6 shadow mt-4 text-left">
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Car:</span> {selectedCar?.name}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Pickup Location:</span> {form.pickupLocation}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Pickup Date:</span> {form.pickupDate}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Drop-off Date:</span> {form.dropoffDate}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Name:</span> {form.name}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Email:</span> {form.email}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Phone:</span> {form.phone}
                </div>
                <div className="mt-4 text-blue-700 font-bold">
                  Total: ${total}
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
                >
                  Back to Home
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
