import React from "react";
import Navbar from "../components/Navbar";
const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-r from-sky-500 via-indigo-600 to-purple-700 flex items-center justify-center px-6">
        <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT INFO */}
          <div>
            <h1 className="text-4xl font-bold text-indigo-700 mb-4">
              Contact Us
            </h1>

            <p className="text-gray-700 mb-6">
              Have questions or need help booking an appointment? Our support
              team is always ready to assist you.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-indigo-600">
                  📍 Address:
                </span>
                <br />
                HealthCare Center, New Delhi, India
              </p>

              <p>
                <span className="font-semibold text-indigo-600">📞 Phone:</span>
                <br />
                +91 98765 43210
              </p>

              <p>
                <span className="font-semibold text-indigo-600">✉️ Email:</span>
                <br />
                support@doctorapp.com
              </p>

              <p>
                <span className="font-semibold text-indigo-600">
                  ⏰ Working Hours:
                </span>
                <br />
                Mon – Sat : 9:00 AM – 7:00 PM
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>

              <button
                type="button"
                onClick={() => alert("Message sent successfully!")}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl
              hover:bg-indigo-700 transition duration-300 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
