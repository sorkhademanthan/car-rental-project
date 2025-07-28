export default function Terms() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Terms & Policy</h2>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="font-semibold text-blue-700">Rental Terms</h3>
        <p>
          All drivers must present a valid driving license and ID. Minimum age is 21. Cars must be returned with the same fuel level as at pickup.
        </p>
        <h3 className="font-semibold text-blue-700">Privacy Policy</h3>
        <p>
          We respect your privacy. Your data is only used for booking and communication purposes and is never shared with third parties.
        </p>
        <h3 className="font-semibold text-blue-700">Cancellation & Refunds</h3>
        <p>
          Free cancellation up to 24 hours before pickup. Refunds are processed within 5 business days.
        </p>
        <h3 className="font-semibold text-blue-700">Contact</h3>
        <p>
          For any questions, email us at <a href="mailto:support@vroomhub.com" className="text-blue-600 underline">support@vroomhub.com</a>.
        </p>
      </div>
    </section>
  );
}
