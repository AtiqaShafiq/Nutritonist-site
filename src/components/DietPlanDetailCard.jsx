import React from "react";

export default function DietPlanDetailCard({ img, title, description, children }) {
  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Image */}
        <img
          src={img}
          alt={title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md mb-8"
        />

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4 text-center">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-10">
          {description}
        </p>

        {/* Form Container */}
        <div className="bg-green-100 rounded-2xl p-6 md:p-10">
          {children}
        </div>

      </div>
    </section>
  );
}
