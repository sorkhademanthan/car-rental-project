export default function InvoiceCard({ booking }) {
  if (!booking) {
    return (
      <div className="bg-gray-100 rounded-lg p-6 text-center text-gray-500">
        No booking details available.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
      <h3 className="text-lg font-bold mb-4 text-blue-700">Booking Summary</h3>
      <div className="mb-2 flex justify-between">
        <span className="font-medium">Car:</span>
        <span>{booking.carName}</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="font-medium">Pickup Location:</span>
        <span>{booking.pickupLocation}</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="font-medium">Pickup Date:</span>
        <span>{booking.pickupDate}</span>
      </div>
      <div className="mb-2 flex justify-between">
        <span className="font-medium">Drop-off Date:</span>
        <span>{booking.dropoffDate}</span>
      </div>
      {booking.name && (
        <div className="mb-2 flex justify-between">
          <span className="font-medium">Name:</span>
          <span>{booking.name}</span>
        </div>
      )}
      {booking.email && (
        <div className="mb-2 flex justify-between">
          <span className="font-medium">Email:</span>
          <span>{booking.email}</span>
        </div>
      )}
      <div className="mt-4 flex justify-between font-bold">
        <span>Total:</span>
        <span>₹{booking.total || "N/A"}</span>
      </div>
    </div>
  );
}
