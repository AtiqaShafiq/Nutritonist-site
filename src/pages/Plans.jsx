import { useNavigate } from "react-router-dom";
import PlansCard from "./PlansCard";

import weight from "../assets/images/weightloss.webp";
import muscle from "../assets/images/muscle.webp";
import pcos from "../assets/images/pcos.webp";

export default function Plans() {
  const navigate = useNavigate();

  const plans = [
    {
      type: "weight-loss",
      img: weight,
      title: "Weight Loss",
      description: "Lose fat in a healthy and sustainable way.",
    },
    {
      type: "muscle-gain",
      img: muscle,
      title: "Muscle Gain",
      description: "Build lean muscle with proper nutrition.",
    },
    {
      type: "pcos",
      img: pcos,
      title: "PCOS Care",
      description: "Hormone-balancing diet for PCOS.",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-green-100 pt-20">
      <h2 className="text-3xl font-bold text-green-600 text-center mb-10">
        Explore Our Diet Plans 🥗
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <PlansCard
            key={index}
            img={plan.img}
            title={plan.title}
            description={plan.description}
            btn="View Plan"
            onClick={() => navigate(`/plans/${plan.type}`)}
          />
        ))}
      </div>
    </section>
  );
}
