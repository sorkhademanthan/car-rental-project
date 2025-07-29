import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaCarSide } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white pt-10 pb-6 px-4 mt-24 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        {/* Brand & Tagline */}
        <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="inline-block bg-white text-blue-700 rounded-full p-2 shadow-lg">
              <FaCarSide size={28} />
            </span>
            <span className="text-2xl font-extrabold tracking-tight">DriveEase</span>
          </div>
          <p className="text-blue-100 max-w-xs text-center md:text-left">
            Drive bold. Arrive inspired. India’s most trusted car rental platform.
          </p>
        </div>
        {/* Navigation */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 justify-center items-center md:items-start">
          <div>
            <h4 className="font-bold mb-3 text-blue-100">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/cars" className="hover:underline">Browse Cars</Link></li>
              <li><Link to="/booking" className="hover:underline">Book Now</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-blue-100">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/profile" className="hover:underline">Your Profile</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>
        {/* Contact & Social */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-4">
          <div>
            <h4 className="font-bold mb-2 text-blue-100">Contact</h4>
            <p className="text-blue-100 text-sm">support@driveease.com</p>
            <p className="text-blue-100 text-sm">+91 98765 43210</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaFacebookF size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-blue-400 pt-6 text-center text-blue-200 text-sm">
        &copy; {new Date().getFullYear()} DriveEase. All rights reserved. | Made with <span className="text-red-400">♥</span> in India.
      </div>
    </footer>
  );
}
