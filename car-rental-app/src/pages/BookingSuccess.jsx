export default function BookingSuccess() {
  return (
    <section className="max-w-xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h2>
      <p className="text-gray-700 mb-6">
        Thank you for booking with VroomHub. Your car is reserved and we look forward to serving you!
      </p>
      {/* Optionally, show booking summary here if data is available */}
      <div className="bg-white rounded-lg shadow p-6 mt-4">
        <p className="text-gray-500">Booking details will appear here.</p>
      </div>
    </section>
  );
}
