import Slider from "react-slick";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const testimonials = [
	{
		name: "Amit Sharma",
		photo: "https://randomuser.me/api/portraits/men/32.jpg",
		text: "VroomHub made my business trip effortless. The car was spotless, pickup was quick, and I felt valued every step of the way.",
		rating: 5,
		city: "Mumbai",
	},
	{
		name: "Priya Patel",
		photo: "https://randomuser.me/api/portraits/women/44.jpg",
		text: "No hidden fees, just honest service. The support team was always available and the car selection is fantastic.",
		rating: 5,
		city: "Ahmedabad",
	},
	{
		name: "Rahul Verma",
		photo: "https://randomuser.me/api/portraits/men/65.jpg",
		text: "Booked in minutes, drove away in a clean, comfortable car. VroomHub is my go-to for every trip.",
		rating: 5,
		city: "Delhi",
	},
	{
		name: "Sneha Kapoor",
		photo: "https://randomuser.me/api/portraits/women/68.jpg",
		text: "The booking process was seamless and the staff was super friendly. Highly recommend for stress-free rentals.",
		rating: 5,
		city: "Bangalore",
	},
	{
		name: "Rohan Singh",
		photo: "https://randomuser.me/api/portraits/men/77.jpg",
		text: "Pickup was smooth, the car felt brand new, and the price was unbeatable. Will use again!",
		rating: 5,
		city: "Pune",
	},
	{
		name: "Meera Joshi",
		photo: "https://randomuser.me/api/portraits/women/12.jpg",
		text: "Best rental experience ever. The car was ready on time and the return was hassle-free.",
		rating: 5,
		city: "Chennai",
	},
	{
		name: "Arjun Desai",
		photo: "https://randomuser.me/api/portraits/men/21.jpg",
		text: "Transparent pricing, great support, and a wide range of cars. VroomHub exceeded my expectations.",
		rating: 5,
		city: "Hyderabad",
	},
	{
		name: "Nisha Rao",
		photo: "https://randomuser.me/api/portraits/women/50.jpg",
		text: "Perfect for family trips! The car was spacious and clean, and the booking was instant.",
		rating: 5,
		city: "Goa",
	},
	
];

// Custom Arrow Components
function Arrow({ onClick, direction }) {
	return (
		<button
			onClick={onClick}
			className={`absolute top-1/2 z-10 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg transition-colors duration-200 ${
				direction === "left" ? "left-0" : "right-0"
			}`}
			aria-label={
				direction === "left"
					? "Previous testimonial"
					: "Next testimonial"
			}
			tabIndex={0}
			style={{ outline: "none" }}
		>
			{direction === "left" ? (
				<FaChevronLeft size={20} />
			) : (
				<FaChevronRight size={20} />
			)}
		</button>
	);
}

const settings = {
	dots: true,
	infinite: true,
	speed: 600,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false, // We'll use custom arrows
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
	const sliderRef = useRef();

	return (
		<section className="relative max-w-7xl mx-auto px-4 py-16">
			<h2 className="text-3xl font-extrabold text-blue-800 mb-10 text-center">
				Real Stories. Real Journeys.
			</h2>
			{/* Custom Arrows */}
			<Arrow
				direction="left"
				onClick={() => sliderRef.current.slickPrev()}
			/>
			<Arrow
				direction="right"
				onClick={() => sliderRef.current.slickNext()}
			/>
			<Slider ref={sliderRef} {...settings}>
				{testimonials.map((t, idx) => (
					<div key={idx} className="px-3 h-full">
						<div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center h-full border border-blue-100 hover:shadow-2xl transition-all duration-200">
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
									<span key={i} className="text-yellow-400 text-lg">
										★
									</span>
								))}
								{Array.from({ length: 5 - t.rating }).map((_, i) => (
									<span key={i} className="text-gray-300 text-lg">
										★
									</span>
								))}
							</div>
							<p className="text-gray-700 font-medium italic mb-2">
								"{t.text}"
							</p>
						</div>
					</div>
				))}
			</Slider>
		</section>
	);
}
