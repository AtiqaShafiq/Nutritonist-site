import { useParams } from "react-router-dom";
import blogData from "../data/blogData";

export default function BlogDetails() {
  const { id } = useParams();

  const blog = blogData.find((item) => item.id === id);

  if (!blog) {
    return <p className="pt-32 text-center">Blog not found</p>;
  }

  return (
    <section className="pt-28 px-6 md:px-20 max-w-4xl mx-auto">

      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold text-green-700 mt-6">
        {blog.title}
      </h1>

     
      <div className="mt-6 space-y-5 text-gray-700 leading-relaxed">
        {blog.fullDescription.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

    </section>
  );
}
