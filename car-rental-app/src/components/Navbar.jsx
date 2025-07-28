import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">VroomHub</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/cars" className="hover:text-blue-500">Cars</Link>
        <Link to="/booking" className="hover:text-blue-500">Booking</Link>
      </div>
    </nav>
  );
}
