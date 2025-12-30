import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* Main Wrapper */}
      <div className="w-full max-w-lg">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 text-center mb-6">
          Get in Touch
        </h1>

        {/* Form Container */}
        <div className="bg-green-100 rounded-2xl p-6 md:p-8 shadow-lg">
          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-green-700 font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-green-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-green-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-green-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition duration-300"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
