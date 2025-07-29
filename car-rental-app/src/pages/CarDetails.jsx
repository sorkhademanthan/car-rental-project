import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import cars from "../data/cars";

// Mock reviews data (in real app, fetch from API)
const initialReviews = [
  {
    carId: 1,
    name: "Amit",
    rating: 5,
    comment: "Great car, smooth ride!",
    date: "2024-06-01",
  },
  {
    carId: 1,
    name: "Priya",
    rating: 4,
    comment: "Clean and comfortable.",
    date: "2024-06-02",
  },
];

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === Number(id));

  // For gallery: use an array of images (fallback to single image if not present)
  const images = car?.images || [car?.image];
  const [mainImg, setMainImg] = useState(images[0]);

  // Related cars: pick any 4 cars except the current one
  const recommendedCars = cars.filter((c) => c.id !== car?.id).slice(0, 4);

  // Review state
  const [reviews, setReviews] = useState(
    initialReviews.filter((r) => r.carId === car?.id)
  );
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  function handleReviewChange(e) {
    setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) return;
    setReviews([
      {
        ...reviewForm,
        rating: Number(reviewForm.rating),
        date: new Date().toISOString().slice(0, 10),
        carId: car.id,
      },
      ...reviews,
    ]);
    setReviewForm({ name: "", rating: 5, comment: "" });
  }

  if (!car) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Car Not Found</h2>
        <p className="text-gray-600">Sorry, we couldn't find the car you're looking for.</p>
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen py-10 px-2">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Gallery */}
        <div className="md:w-1/2 flex flex-col items-center sticky top-24 self-start">
          <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden mb-4">
            <img
              src={mainImg}
              alt={car.name}
              className="w-full h-64 md:h-80 object-cover transition-all duration-300"
            />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 justify-center">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${car.name} ${idx + 1}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                    mainImg === img ? "border-blue-600" : "border-transparent"
                  }`}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </div>
          )}
        </div>
        {/* Car Info & Booking */}
        <div className="md:w-1/2 flex flex-col gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-2">{car.name}</h2>
            <p className="text-blue-600 font-bold text-xl mb-2">${car.pricePerDay}/day</p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Brand:</span>{" "}
              {car.brand || <span className="italic text-gray-400">Not specified</span>}
            </p>
            <p className="text-gray-600 mb-4">
              {car.description || "No description available for this car."}
            </p>
            <button
              onClick={() => navigate("/booking")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow transition-colors duration-200 text-lg"
            >
              Book Now
            </button>
          </div>
          {/* Reviews */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-2">
            <h3 className="text-xl font-bold mb-4 text-blue-800">Reviews & Ratings</h3>
            <form onSubmit={handleReviewSubmit} className="mb-6 bg-blue-50 rounded-lg p-4 flex flex-col gap-2">
              <div className="flex gap-2 flex-col sm:flex-row items-center">
                <input
                  type="text"
                  name="name"
                  value={reviewForm.name}
                  onChange={handleReviewChange}
                  placeholder="Your Name"
                  className="border rounded px-3 py-2 flex-1"
                  required
                />
                <select
                  name="rating"
                  value={reviewForm.rating}
                  onChange={handleReviewChange}
                  className="border rounded px-2 py-2"
                  required
                  aria-label="Rating"
                >
                  {[5, 4, 3, 2, 1].map((star) => (
                    <option key={star} value={star}>{star} ★</option>
                  ))}
                </select>
              </div>
              <textarea
                name="comment"
                value={reviewForm.comment}
                onChange={handleReviewChange}
                placeholder="Write your review..."
                className="border rounded px-3 py-2"
                rows={3}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold mt-2 self-end"
              >
                Submit Review
              </button>
            </form>
            <div className="space-y-4">
              {reviews.length === 0 && (
                <div className="text-gray-500">No reviews yet. Be the first to review!</div>
              )}
              {reviews.map((r, idx) => (
                <div key={idx} className="bg-white rounded shadow p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-yellow-500">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {Array.from({ length: 5 - r.rating }).map((_, i) => (
                        <span key={i} className="text-gray-300">★</span>
                      ))}
                    </span>
                    <span className="text-xs text-gray-400 ml-auto">{r.date}</span>
                  </div>
                  <div className="text-gray-700">{r.comment}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Recommended Cars */}
          {recommendedCars.length > 0 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mt-2">
              <h3 className="text-xl font-bold mb-6 text-blue-800">Recommended For You</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {recommendedCars.map((rc) => (
                  <div key={rc.id} className="bg-blue-50 rounded-xl shadow p-4 flex flex-col items-center border border-blue-100 hover:shadow-lg transition">
                    <img src={rc.images?.[0]} alt={rc.name} className="w-28 h-16 object-cover rounded mb-2" />
                    <div className="font-semibold text-blue-800">{rc.name}</div>
                    <div className="text-blue-600 font-bold mb-2">${rc.pricePerDay}/day</div>
                    <button
                      onClick={() => navigate(`/cars/${rc.id}`)}
                      className="mt-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-1 rounded text-sm font-medium transition"
                    >
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
