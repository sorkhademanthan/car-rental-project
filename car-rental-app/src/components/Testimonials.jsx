import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "VroomHub made my business trip so much easier. The car was spotless and the booking process was a breeze.",
    rating: 5,
    city: "Mumbai",
  },
  {
    name: "Priya Patel",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Affordable prices and friendly support. I felt safe and valued as a customer. Will use again for my next trip!",
    rating: 5,
    city: "Ahmedabad",
  },
  {
    name: "Rahul Verma",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "Loved the quick process and the car selection. Excellent service and great value for money.",
    rating: 4,
    city: "Delhi",
  },
  {
    name: "Sneha Kapoor",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The support team was super helpful when I needed to change my booking. Highly recommend VroomHub!",
    rating: 5,
    city: "Bangalore",
  },
  {
    name: "Rohan Singh",
    photo: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "The car was in perfect condition and the pickup was seamless. VroomHub is my go-to for rentals.",
    rating: 5,
    city: "Pune",
  },
  {
    name: "Meera Joshi",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "I was impressed by the cleanliness and comfort of the car. Booking online was super easy.",
    rating: 4,
    city: "Chennai",
  },
  {
    name: "Arjun Desai",
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
    text: "Transparent pricing and no hidden fees. The best rental experience I’ve had in India.",
    rating: 5,
    city: "Hyderabad",
  },
  {
    name: "Nisha Rao",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "I loved the flexibility and the wide range of cars. VroomHub made my vacation stress-free.",
    rating: 5,
    city: "Goa",
  },
  {
    name: "Vikram Mehta",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Booking was instant and the support team was always available. Highly trustworthy service.",
    rating: 5,
    city: "Jaipur",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4500,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-10 text-center">
        What Our Customers Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((t, idx) => (
          <div key={idx} className="px-3 h-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center h-full border border-blue-100 hover:shadow-2xl transition-all duration-200">
              <FaQuoteLeft className="text-blue-200 text-3xl mb-2" />
              <img
                src={t.photo}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-blue-200 shadow"
              />
              <h3 className="font-semibold text-blue-700">{t.name}</h3>
              <p className="text-xs text-gray-400 mb-2">{t.city}</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {Array.from({ length: 5 - t.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-2">"{t.text}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
