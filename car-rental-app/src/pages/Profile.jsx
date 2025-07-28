import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "Manthan",
    email: "manthan@example.com",
  });

  function handleChange(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Save logic here
    alert("Profile updated!");
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Your Profile</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 mb-8">
        <label className="font-medium">
          Name
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="block w-full mt-1 border rounded px-3 py-2"
          />
        </label>
        <label className="font-medium">
          Email
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="block w-full mt-1 border rounded px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-200 mt-2"
        >
          Save Changes
        </button>
      </form>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold mb-2">Booking History</h3>
        <p className="text-gray-500">No bookings yet.</p>
      </div>
    </section>
  );
}
