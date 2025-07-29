import React, { useState } from "react";
import { FaUserEdit, FaCheckCircle, FaClock, FaCarSide, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Manthan Sharma",
    email: "manthan@example.com",
    phone: "+91 98765 43210",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  });
  const [edit, setEdit] = useState(false);

  // Get current booking from localStorage (set in Booking.jsx)
  const currentBooking = JSON.parse(localStorage.getItem("currentBooking") || "null");
  let bookings = [
    {
      id: "BKG12345",
      car: "Audi A4",
      date: "2024-06-10",
      status: "Completed",
      price: 80,
    },
    {
      id: "BKG12346",
      car: "Tesla Model Y",
      date: "2024-07-01",
      status: "Upcoming",
      price: 120,
    },
  ];
  if (currentBooking) {
    bookings = [
      {
        id: "BKG" + Math.floor(Math.random() * 100000),
        car: currentBooking.carName,
        date: currentBooking.pickupDate,
        status: "Upcoming",
        price: currentBooking.total,
      },
      ...bookings,
    ];
  }

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
    // Save logic here (API call)
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col items-center border border-blue-100">
        {/* Avatar & Edit */}
        <div className="relative mb-6">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-28 h-28 rounded-full border-4 border-blue-200 shadow-lg object-cover"
          />
          <button
            className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700 transition"
            onClick={() => setEdit((v) => !v)}
            title="Edit Profile"
            aria-label="Edit Profile"
          >
            <FaUserEdit />
          </button>
        </div>
        {/* Profile Info */}
        {!edit ? (
          <div className="w-full flex flex-col items-center mb-6">
            <h2 className="text-2xl font-extrabold text-blue-800 mb-1">{profile.name}</h2>
            <div className="flex items-center gap-2 text-gray-600 mb-1">
              <FaEnvelope className="text-blue-400" /> {profile.email}
            </div>
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <FaPhoneAlt className="text-blue-400" /> {profile.phone}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mb-6">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              className="border border-blue-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Phone"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200"
            >
              Save Changes
            </button>
          </form>
        )}
        {/* Booking History */}
        <div className="w-full mt-8">
          <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
            <FaCarSide className="text-blue-400" /> Booking History
          </h3>
          {bookings.length === 0 ? (
            <p className="text-gray-400 text-center">No bookings yet.</p>
          ) : (
            <div className="space-y-4">
              {bookings.map((b, idx) => (
                <div
                  key={b.id + idx}
                  className="flex flex-col sm:flex-row items-center justify-between bg-blue-50 rounded-xl p-4 shadow border border-blue-100"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <span className="font-semibold text-blue-800">{b.car}</span>
                    <span className="text-gray-500 text-sm">{b.date}</span>
                  </div>
                  <div className="flex items-center gap-3 mt-2 sm:mt-0">
                    <span className="text-blue-600 font-bold">${b.price}</span>
                    {b.status === "Completed" ? (
                      <span className="flex items-center gap-1 text-green-600 font-medium">
                        <FaCheckCircle /> Completed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-yellow-600 font-medium">
                        <FaClock /> Upcoming
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
 