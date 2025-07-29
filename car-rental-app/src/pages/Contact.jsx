import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-2">
      <div className="w-full max-w-3xl bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-blue-100">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 w-full" />
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Contact Form */}
          <div className="flex-1">
            <h2 className="text-3xl font-extrabold text-blue-800 mb-6 text-center md:text-left drop-shadow-lg">
              Contact VroomHub
            </h2>
            {submitted && (
              <div className="mb-4 text-green-600 font-semibold text-center">
                Thank you! Your message has been sent.
              </div>
            )}
            <form className="space-y-5" onSubmit={handleSubmit} autoComplete="off">
              <div className="flex gap-4 flex-col md:flex-row">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="flex-1 border border-blue-200 rounded-lg px-4 py-3 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="flex-1 border border-blue-200 rounded-lg px-4 py-3 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base"
                />
              </div>
              <div className="flex gap-4 flex-col md:flex-row">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="flex-1 border border-blue-200 rounded-lg px-4 py-3 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base"
                />
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="flex-1 border border-blue-200 rounded-lg px-4 py-3 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base"
                />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full border border-blue-200 rounded-lg px-4 py-3 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-base resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 text-lg"
              >
                <FaPaperPlane className="animate-bounce" /> Send Message
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start">
            <div className="flex items-center gap-3 text-blue-700 text-base font-semibold">
              <FaPhoneAlt /> <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-blue-700 text-base font-semibold">
              <FaEnvelope /> <span>support@vroomhub.com</span>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-blue-700 text-sm shadow w-full">
              <strong>Business Hours:</strong>
              <br />
              Mon - Sat: 8:00 AM – 8:00 PM
              <br />
              Sun: 10:00 AM – 5:00 PM
            </div>
            <div className="text-blue-400 text-xs mt-2 text-center md:text-left">
              We reply within 24 hours. For urgent queries, call us directly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

