export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Contact Us</h2>
      <form className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 mb-8">
        <label className="font-medium">
          Name
          <input
            type="text"
            name="name"
            required
            className="block w-full mt-1 border rounded px-3 py-2"
          />
        </label>
        <label className="font-medium">
          Email
          <input
            type="email"
            name="email"
            required
            className="block w-full mt-1 border rounded px-3 py-2"
          />
        </label>
        <label className="font-medium">
          Message
          <textarea
            name="message"
            required
            rows={4}
            className="block w-full mt-1 border rounded px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors duration-200 mt-2"
        >
          Send Message
        </button>
      </form>
      <div className="text-center text-gray-600">
        <p>📞 +91 98765 43210</p>
        <p>✉️ support@vroomhub.com</p>
        <p>🏢 123 Main Street, Mumbai, India</p>
      </div>
    </section>
  );
}
