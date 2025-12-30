import React from "react";
import TestimonialsData from "../data/TestimonialsData";
import TestimonialsCard from "../components/TestimonialsCard";

export default function Testimonials() {
  return (
    <section className="px-6 md:px-20 py-16 bg-green-100 pt-20">
      <h2 className="text-green-700 text-center font-bold mb-8 text-4xl">
        What Our Clients Say
      </h2>

      {/* RESPONSIVE GRID */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          max-w-6xl
          mx-auto
        "
      >
        {TestimonialsData.map((data) => (
          <TestimonialsCard
            key={data.id}
            img={data.img}
            review={data.review}
            feedback={data.feedback}
            name={data.name}
          />
        ))}
      </div>
    </section>
  );
}
