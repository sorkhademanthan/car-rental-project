export default function WhyChooseUs() {
  const features = [
    {
      icon: "📝",
      title: "Easy Booking",
      desc: "Book your car in just a few clicks with our simple process.",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      desc: "Competitive rates and transparent pricing for every budget.",
    },
    {
      icon: "🕒",
      title: "24/7 Support",
      desc: "Our team is here to help you anytime, anywhere.",
    },
    {
      icon: "🚗",
      title: "Well-Maintained Cars",
      desc: "Drive with confidence in our regularly serviced vehicles.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
        Why Choose VroomHub?
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
