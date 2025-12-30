import React from "react";

export default function TestimonialsCard({ img, review, feedback, name }) {
  return (
    <div className="bg-green-50 rounded-xl shadow-md p-6 text-center">

     
      <img
        src={img}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover"
      />

      {/* Green Comma */}
      <div className="text-green-600 text-4xl font-bold mt-3">
        “”
      </div>

      {/* Feedback */}
      <p className="text-gray-600 mt-3 px-4">
        {feedback}
      </p>

      {/* Name FIRST */}
      <h3 className="text-green-700 font-bold text-lg mt-4">
        {name}
      </h3>

      {/* Stars AFTER NAME */}
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-2xl ${
              index < review ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

    </div>
  );
}
