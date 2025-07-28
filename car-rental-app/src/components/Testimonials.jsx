const testimonials = [
  {
    name: "Amit Sharma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Booking was super easy and the car was in great condition. Highly recommend VroomHub!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Affordable prices and friendly support. Will use again for my next trip.",
    rating: 4,
  },
  {
    name: "Rahul Verma",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Loved the quick process and the car selection. Excellent service!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        What Our Customers Say
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-shadow duration-200 hover:shadow-xl"
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-gray-800">{t.name}</h3>
            <div className="flex justify-center my-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
              {Array.from({ length: 5 - t.rating }).map((_, i) => (
                <span key={i} className="text-gray-300 text-lg">★</span>
              ))}
            </div>
            <p className="text-gray-600">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
