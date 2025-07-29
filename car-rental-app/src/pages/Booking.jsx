import React, { useState, useEffect } from "react";
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
    dropLocation: "",
    pickupDate: "",
    dropoffDate: "",
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Update carId if user navigates with a different carId
  useEffect(() => {
    if (
      typeof preselectedCarId !== "undefined" &&
      Number(preselectedCarId) !== Number(form.carId)
    ) {
      setForm((prev) => ({ ...prev, carId: preselectedCarId }));
    }
    // eslint-disable-next-line
  }, [preselectedCarId]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateForm() {
    if (
      !form.carId ||
      !form.pickupLocation ||
      !form.dropLocation ||
      !form.pickupDate ||
      !form.dropoffDate ||
      !form.name ||
      !form.email ||
      !form.phone
    ) {
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
        pickupLocation: form.pickupLocation,
        dropLocation: form.dropLocation,
        pickupDate: form.pickupDate,
        dropoffDate: form.dropoffDate,
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
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-8 px-2 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 w-full" />
        <div className="p-4 sm:p-8 md:p-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6 md:mb-8 text-center drop-shadow-lg">
            Book Your Car
          </h2>
          {!submitted ? (
            <form className="space-y-5 md:space-y-7" onSubmit={handleSubmit} autoComplete="off">
              {error && (
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-2 text-center font-semibold">
                  {error}
                </div>
              )}
              <div>
                <label className="font-semibold block mb-2 text-blue-700" htmlFor="carId">
                  Select Car
                </label>
                <select
                  id="carId"
                  name="carId"
                  value={form.carId}
                  onChange={handleChange}
                  required
                  className="w-full border border-blue-200 rounded-xl px-5 py-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
                >
                  {cars.map((car) => (
                    <option key={car.id} value={car.id}>
                      {car.name} (${car.pricePerDay}/day)
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="font-semibold block mb-2 text-blue-700" htmlFor="pickupLocation">
                    Pickup Location
                  </label>
                  <input
                    id="pickupLocation"
                    name="pickupLocation"
                    value={form.pickupLocation}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    required
                    className="w-full border border-blue-200 rounded-xl px-5 py-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-semibold block mb-2 text-blue-700" htmlFor="dropLocation">
                    Drop Location
                  </label>
                  <input
                    id="dropLocation"
                    name="dropLocation"
                    value={form.dropLocation}
                    onChange={handleChange}
                    placeholder="Enter drop location"
                    required
                    className="w-full border border-blue-200 rounded-xl px-5 py-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
                  />
                </div>
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
                  className="flex-1 border border-blue-200 rounded-xl px-5 py-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="flex-1 border border-blue-200 rounded-xl px-5 py-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
                />
              </div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border border-blue-200 rounded-xl px-5 py-4 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
              />
              <div className="bg-blue-50 rounded-xl p-5 mt-2 text-blue-700 text-base font-semibold flex flex-col gap-1">
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
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg transition-all duration-200 text-lg md:text-xl tracking-wide"
              >
                Confirm Booking
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-green-700 mb-4">Booking Confirmed!</h3>
              <div className="bg-blue-50 rounded-xl p-4 md:p-6 shadow mt-4 text-left text-sm md:text-base">
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Car:</span> {selectedCar?.name}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Pickup Location:</span> {form.pickupLocation}
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">Drop Location:</span> {form.dropLocation}
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
              <div className="mt-6 md:mt-8">
                <a
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 md:px-8 py-3 md:py-3 rounded-full shadow-lg transition"
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