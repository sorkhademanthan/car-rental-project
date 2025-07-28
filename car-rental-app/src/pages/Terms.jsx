export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center px-2 py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Accent Bar */}
        <div className="bg-blue-600 h-3 w-full" />
        {/* Content */}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-700 mb-2">
            VroomHub Terms &amp; Conditions
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Last updated: June 2024
          </p>
          <div className="prose max-w-none text-gray-700">
            <p className="font-semibold text-lg mb-2 text-blue-700">Welcome to VroomHub!</p>
            <p>
              By using our website and services, you agree to the following terms and conditions. Please read them carefully before booking your next ride.
            </p>
            <ol className="list-decimal list-inside mt-6 space-y-4">
              <li>
                <span className="font-bold text-blue-700">Eligibility:</span> You must be at least 21 years old and hold a valid driver’s license to rent a car with VroomHub.
              </li>
              <li>
                <span className="font-bold text-blue-700">Booking & Payment:</span> All bookings must be made through our website. Payment is required in advance to confirm your reservation.
              </li>
              <li>
                <span className="font-bold text-blue-700">Cancellations & Refunds:</span> Free cancellation up to 24 hours before your scheduled pickup. Refunds are processed within 5 business days.
              </li>
              <li>
                <span className="font-bold text-blue-700">Pickup & Return:</span> Please bring your driver’s license and booking confirmation when picking up your car. Cars must be returned on time and in the same condition as received.
              </li>
              <li>
                <span className="font-bold text-blue-700">Insurance & Liability:</span> All rentals include basic insurance. You are responsible for any damage not covered by insurance.
              </li>
              <li>
                <span className="font-bold text-blue-700">Privacy:</span> We respect your privacy. Your personal information is used only for booking and communication purposes and is never shared with third parties.
              </li>
              <li>
                <span className="font-bold text-blue-700">Prohibited Use:</span> Cars may not be used for illegal activities, racing, or subletting. Violations may result in penalties or legal action.
              </li>
              <li>
                <span className="font-bold text-blue-700">Modifications:</span> VroomHub reserves the right to update these terms at any time. Changes will be posted on this page.
              </li>
            </ol>
            <p className="mt-8">
              For questions or support, please contact us at{" "}
              <a href="mailto:support@vroomhub.com" className="text-blue-600 underline">
                support@vroomhub.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
