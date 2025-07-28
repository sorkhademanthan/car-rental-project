import { FaRegCalendarCheck, FaRupeeSign, FaHeadset, FaCarSide } from "react-icons/fa";

const features = [
	{
		icon: <FaRegCalendarCheck className="text-blue-600 text-5xl mb-4 drop-shadow" />,
		title: "Effortless Booking",
		desc: "Reserve your ride in seconds with our intuitive, streamlined booking experience. No paperwork, no hassle—just a few clicks and you’re ready to go.",
	},
	{
		icon: <FaRupeeSign className="text-blue-600 text-5xl mb-4 drop-shadow" />,
		title: "Transparent Pricing",
		desc: "Enjoy honest, upfront pricing with no hidden fees. Our best-rate guarantee means you always get the most value for your money.",
	},
	{
		icon: <FaHeadset className="text-blue-600 text-5xl mb-4 drop-shadow" />,
		title: "24/7 Human Support",
		desc: "Questions? Emergencies? Our friendly team is here for you around the clock—before, during, and after your trip.",
	},
	{
		icon: <FaCarSide className="text-blue-600 text-5xl mb-4 drop-shadow" />,
		title: "Immaculate Fleet",
		desc: "Drive with confidence in our meticulously maintained, sanitized, and modern vehicles. Safety and comfort are our top priorities.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center py-16 px-4">
			{/* Hero Banner */}
			<div className="w-full max-w-3xl mx-auto text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 drop-shadow">
					The VroomHub Promise
				</h1>
				<p className="text-lg md:text-xl text-gray-700 mb-2">
					Renting a car should be simple, safe, and stress-free.
				</p>
				<p className="text-gray-500">
					Here’s why thousands trust VroomHub for their journeys—across the city or across the country.
				</p>
			</div>
			{/* Features Grid */}
			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 w-full max-w-6xl">
				{features.map((feature, idx) => (
					<div
						key={idx}
						className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-200 hover:-translate-y-2"
					>
						{feature.icon}
						<h3 className="text-xl font-bold text-blue-800 mb-2">{feature.title}</h3>
						<p className="text-gray-600">{feature.desc}</p>
					</div>
				))}
			</div>
			{/* Call to Action */}
			<div className="mt-16 text-center">
				<h2 className="text-2xl font-bold text-blue-700 mb-4">Ready for your next adventure?</h2>
				<a
					href="/cars"
					className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-200"
				>
					Explore Our Cars
				</a>
			</div>
		</section>
	);
}
