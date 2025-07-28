import { FaRegCalendarCheck, FaRupeeSign, FaHeadset, FaCarSide } from "react-icons/fa";

const features = [
	{
		icon: <FaRegCalendarCheck className="text-blue-600 text-4xl mb-3" />,
		title: "Book Instantly",
		desc: "Reserve your ride online in just a few clicks. No calls, no paperwork—just instant confirmation and flexible scheduling.",
	},
	{
		icon: <FaRupeeSign className="text-blue-600 text-4xl mb-3" />,
		title: "No Hidden Fees",
		desc: "Transparent pricing with no surprises. What you see is what you pay, every time you book.",
	},
	{
		icon: <FaHeadset className="text-blue-600 text-4xl mb-3" />,
		title: "24/7 Support",
		desc: "Our friendly team is here for you day and night. Get help, change plans, or ask questions anytime.",
	},
	{
		icon: <FaCarSide className="text-blue-600 text-4xl mb-3" />,
		title: "Top Condition Cars",
		desc: "Drive with confidence in our clean, safe, and regularly serviced vehicles—ready for every journey.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="w-full bg-gradient-to-br from-blue-50 to-blue-200 py-16 px-4 flex flex-col items-center">
			<h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 text-center drop-shadow">
				Why VroomHub?
			</h2>
			<p className="text-gray-600 text-center mb-10 max-w-xl">
				The fastest, fairest, and friendliest way to rent a car.
			</p>
			<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 w-full max-w-5xl">
				{features.map((feature, idx) => (
					<div
						key={idx}
						className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1"
					>
						{feature.icon}
						<h3 className="text-lg font-bold text-blue-800 mb-1">{feature.title}</h3>
						<p className="text-gray-600 text-sm">{feature.desc}</p>
					</div>
				))}
			</div>
			<a
				href="/cars"
				className="mt-12 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-colors duration-200"
			>
				Find Your Car
			</a>
		</section>
	);
}