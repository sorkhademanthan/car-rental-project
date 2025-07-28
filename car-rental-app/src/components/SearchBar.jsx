import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="Search cars by name or brand..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-3 py-2 w-full max-w-xs"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}
