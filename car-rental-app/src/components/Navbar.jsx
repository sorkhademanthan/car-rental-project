import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between relative">
      <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-300">VroomHub</Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 items-center">
        <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">Home</Link>
        <Link to="/cars" className="hover:text-blue-500 dark:hover:text-blue-300">Cars</Link>
        <Link to="/booking" className="hover:text-blue-500 dark:hover:text-blue-300">Book Now</Link>
        <Link to="/faq" className="hover:text-blue-500 dark:hover:text-blue-300">FAQ</Link>
        <Link to="/contact" className="hover:text-blue-500 dark:hover:text-blue-300">Contact</Link>
        <button
          className="ml-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          title="Toggle dark mode"
          onClick={toggleDarkMode}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center px-2 py-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        <span className="text-2xl">☰</span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-4 z-50 md:hidden">
          <Link to="/" className="py-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/cars" className="py-2" onClick={() => setMenuOpen(false)}>Cars</Link>
          <Link to="/booking" className="py-2" onClick={() => setMenuOpen(false)}>Book Now</Link>
          <Link to="/faq" className="py-2" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/contact" className="py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <button
            className="mt-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Toggle dark mode"
            onClick={toggleDarkMode}
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}