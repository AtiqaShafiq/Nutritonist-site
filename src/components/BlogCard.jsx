import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ id, images, title, description }) {
  return (
    <div className="bg-green-50 rounded-xl w-full p-4 shadow-md">

      {/* Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <img
          src={images}
          alt={title}
          className="w-full h-full object-cover block"
        />
      </div>

      {/* Title */}
      <h2 className="text-green-600 text-center mt-4 font-bold text-lg">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 text-sm text-center">
        {description}
      </p>

      {/* Read More */}
      <div className="mt-4 text-center">
        <Link
          to={`/blog/${id}`}
          className="text-green-600 font-semibold hover:underline"
        >
          Read more →
        </Link>
      </div>

    </div>
  );
}
