const faqs = [
  {
    question: "What documents do I need to rent a car?",
    answer: "You need a valid driving license, a government-issued ID, and a credit/debit card."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, you can cancel or modify your booking up to 24 hours before pickup without any charges."
  },
  {
    question: "Is there a minimum age requirement?",
    answer: "Yes, you must be at least 21 years old to rent a car from VroomHub."
  },
  {
    question: "Are there any hidden charges?",
    answer: "No, all charges are transparent and shown before you confirm your booking."
  }
];

export default function Faq() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold text-blue-600 mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
