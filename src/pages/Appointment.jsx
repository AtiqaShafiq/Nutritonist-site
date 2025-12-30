import React from "react";

export default function Appointment() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* Wrapper */}
      <div className="w-full max-w-lg">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-6">
          Book a Consultation
        </h1>

        {/* Form Container */}
        <div className="bg-green-100 rounded-2xl p-6 md:p-8 shadow-lg">
          <form className="space-y-4">

            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Date & Time */}
            <input
              type="datetime-local"
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Main Health Issue */}
            <input
              type="text"
              placeholder="Your main health issue"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Additional Notes */}
            <textarea
              rows="4"
              placeholder="Additional notes (optional)"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
            >
              Book Consultation
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
