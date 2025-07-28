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
    <nav
      className="bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between relative"
      role="navigation"
      aria-label="Main Navigation"
    >
      <Link
        to="/"
        className="text-xl font-bold text-blue-600 dark:text-blue-300"
        tabIndex={0}
      >
        VroomHub
      </Link>
      {/* Desktop Menu */}
      <div
        className="hidden md:flex space-x-4 items-center"
        role="menubar"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          Home
        </Link>
        <Link
          to="/cars"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          Cars
        </Link>
        <Link
          to="/booking"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          Book Now
        </Link>
        <Link
          to="/faq"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          FAQ
        </Link>
        <Link
          to="/contact"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          Contact
        </Link>
        <Link
          to="/profile"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          Profile
        </Link>
        <Link
          to="/blog"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          Blog
        </Link>
        <Link
          to="/terms"
          className="hover:text-blue-500 dark:hover:text-blue-300"
          role="menuitem"
          tabIndex={0}
        >
          Terms
        </Link>
        <button
          className="ml-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          title="Toggle dark mode"
          aria-label="Toggle dark mode"
          onClick={toggleDarkMode}
          tabIndex={0}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center px-2 py-1"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        tabIndex={0}
      >
        <span className="text-2xl">☰</span>
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center py-4 z-50 md:hidden"
          role="menu"
          aria-label="Mobile"
        >
          <Link
            to="/"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Home
          </Link>
          <Link
            to="/cars"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Cars
          </Link>
          <Link
            to="/booking"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Book Now
          </Link>
          <Link
            to="/faq"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            FAQ
          </Link>
          <Link
            to="/contact"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Contact
          </Link>
          <Link
            to="/profile"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Profile
          </Link>
          <Link
            to="/blog"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Blog
          </Link>
          <Link
            to="/terms"
            className="py-2"
            onClick={() => setMenuOpen(false)}
            role="menuitem"
            tabIndex={0}
          >
            Terms
          </Link>
          <button
            className="mt-2 px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Toggle dark mode"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            tabIndex={0}
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}