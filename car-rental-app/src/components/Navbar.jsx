import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCarSide } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/cars", label: "Cars" },
  { to: "/booking", label: "Book Now" },
  { to: "/favorites", label: "Favorites" },
  { to: "/profile", label: "Profile" },
  { to: "/blog", label: "Blog" },
  { to: "/terms", label: "Terms" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 shadow-2xl border-b border-blue-300 px-4 py-3 flex items-center justify-between transition-all duration-300"
        role="navigation"
        aria-label="Main Navigation"
      >
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-3" tabIndex={0}>
          <span className="inline-block bg-white rounded-full p-2 shadow-lg">
            <FaCarSide size={28} className="text-blue-700" />
          </span>
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow">
            VroomHub
          </span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                location.pathname === link.to
                  ? "bg-white text-blue-700 shadow"
                  : "text-white hover:bg-blue-600/70"
              }`}
              tabIndex={0}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-200 transition z-50"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? (
            <FaTimes className="text-2xl text-white" />
          ) : (
            <FaBars className="text-2xl text-white" />
          )}
        </button>
        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Mobile Menu */}
        <aside
          id="mobile-menu"
          className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-xs bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 shadow-xl flex flex-col items-center pt-24 gap-6 transition-transform duration-300 md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="menu"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg w-full text-center px-6 py-4 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                location.pathname === link.to
                  ? "bg-white text-blue-700 shadow"
                  : "text-white hover:bg-blue-600/70"
              }`}
              role="menuitem"
              tabIndex={0}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </aside>
      </nav>
    </header>
  );
}