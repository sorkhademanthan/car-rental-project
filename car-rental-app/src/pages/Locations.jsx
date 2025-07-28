import { useState } from "react";

// Mock locations data
const locations = [
  { id: 1, city: "Mumbai", address: "123 Main St, Mumbai" },
  { id: 2, city: "Delhi", address: "456 Connaught Place, Delhi" },
  { id: 3, city: "Bangalore", address: "789 MG Road, Bangalore" },
  { id: 4, city: "Mumbai", address: "101 Bandra West, Mumbai" },
  { id: 5, city: "Delhi", address: "202 Karol Bagh, Delhi" },
];

const cities = Array.from(new Set(locations.map(loc => loc.city)));

export default function Locations() {
  const [selectedCity, setSelectedCity] = useState("");

  const filteredLocations = selectedCity
    ? locations.filter(loc => loc.city === selectedCity)
    : locations;

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pickup & Drop-off Locations</h2>
      <div className="mb-6 flex gap-4 items-center">
        <label htmlFor="city" className="font-medium">
          Filter by City:
          <select
            id="city"
            value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}
            className="ml-2 border rounded px-3 py-2"
          >
            <option value="">All</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </label>
      </div>
      <ul className="space-y-4">
        {filteredLocations.map(loc => (
          <li key={loc.id} className="bg-white rounded-lg shadow p-4">
            <div className="font-semibold">{loc.city}</div>
            <div className="text-gray-600">{loc.address}</div>
          </li>
        ))}
        {filteredLocations.length === 0 && (
          <li className="text-gray-500">No locations found for this city.</li>
        )}
      </ul>
    </section>
  );
}
