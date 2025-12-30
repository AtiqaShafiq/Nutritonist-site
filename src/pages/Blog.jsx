import React from "react";
import BlogCard from "../components/BlogCard";
import blogData from "../data/blogData";

export default function Blog() {
  return (
    <section className="px-6 md:px-20 py-16 bg-green-100 pt-20">
      <h2 className="text-green-700 text-center font-bold mb-6">
        Nutrition Blog
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}         
            images={blog.image}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </section>
  );
}
