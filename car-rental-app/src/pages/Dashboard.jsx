export default function Dashboard() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Bookings</h2>
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <p className="text-gray-500">You have no bookings yet.</p>
        {/* In the future, list past/future bookings here */}
      </div>
    </section>
  );
}
