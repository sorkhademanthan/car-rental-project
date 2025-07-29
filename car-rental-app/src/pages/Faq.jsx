import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
	{
		question: "How do I book a car?",
		answer:
			"Simply browse cars on DriveEase, select your preferred model, and complete the booking form. You'll receive instant confirmation and all details by email.",
	},
	{
		question: "What documents are required for pickup?",
		answer:
			"You’ll need a valid driving license, a government-issued photo ID, and a credit or debit card for payment and security deposit.",
	},
	{
		question: "Are there any hidden charges or fees?",
		answer:
			"Never. All prices are transparent and shown upfront. You pay exactly what you see—no surprises at pickup or return.",
	},
	{
		question: "Can I cancel or change my booking?",
		answer:
			"Yes! You can cancel or modify your booking up to 24 hours before pickup at no extra cost. For last-minute changes, contact our support team.",
	},
	{
		question: "Is fuel included in the rental price?",
		answer:
			"Fuel is not included. Please return the car with the same fuel level as at pickup to avoid refueling charges.",
	},
	{
		question: "What if I need help during my rental?",
		answer:
			"Our 24/7 support team is always available by phone or chat to assist you with any questions or emergencies.",
	},
];

export default function Faq() {
	const [openIdx, setOpenIdx] = useState(null);

	return (
		<section className="flex justify-center items-center min-h-[60vh] bg-blue-50 py-12 px-2">
			<div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6 sm:p-10">
				<h2 className="text-3xl font-extrabold text-blue-700 mb-8 text-center">
					Frequently Asked Questions
				</h2>
				<div className="divide-y divide-blue-100">
					{faqs.map((faq, idx) => (
						<div key={idx}>
							<button
								className="w-full flex justify-between items-center py-4 text-left text-blue-700 font-semibold focus:outline-none"
								onClick={() =>
									setOpenIdx(openIdx === idx ? null : idx)
								}
								aria-expanded={openIdx === idx}
								aria-controls={`faq-panel-${idx}`}
							>
								<span>{faq.question}</span>
								<FaChevronDown
									className={`ml-2 transition-transform duration-200 ${
										openIdx === idx ? "rotate-180" : ""
									}`}
								/>
							</button>
							<div
								id={`faq-panel-${idx}`}
								className={`overflow-hidden transition-all duration-300 text-gray-600 text-base px-1 ${
									openIdx === idx ? "max-h-40 py-2" : "max-h-0"
								}`}
								style={{ transitionProperty: "max-height, padding" }}
								aria-hidden={openIdx !== idx}
							>
								{openIdx === idx && <div>{faq.answer}</div>}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
