export default function PlansCard({ img, title, description, btn, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white  rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-green-600 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>

        <button className="bg-green-600 text-white px-6 py-2 rounded-full">
          {btn}
        </button>
      </div>
    </div>
  );
}
