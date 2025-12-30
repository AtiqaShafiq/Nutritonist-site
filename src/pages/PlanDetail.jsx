import { useParams } from "react-router-dom";
import DietPlanDetailCard from "../components/DietPlanDetailCard";

import weight from "../assets/images/weightloss.webp";
import muscle from "../assets/images/muscle.webp";
import pcos from "../assets/images/pcos.webp";

export default function PlanDetail() {
  const { type } = useParams();

  const plansData = {
    "weight-loss": {
      img: weight,
      title: "Weight Loss Diet Plan",
      description:
        "A sustainable weight loss plan focused on balanced meals and healthy habits.",
    },
    "muscle-gain": {
      img: muscle,
      title: "Muscle Gain Diet Plan",
      description:
        "Nutrition designed to build lean muscle and support recovery.",
    },
    pcos: {
      img: pcos,
      title: "PCOS Care Diet Plan",
      description:
        "Hormone-balancing nutrition tailored for PCOS management.",
    },
  };

  const plan = plansData[type];

  if (!plan) {
    return <p className="text-center mt-10">Plan not found</p>;
  }

  return (
    <DietPlanDetailCard
      img={plan.img}
      title={plan.title}
      description={plan.description}
    >
      {/* ===== FORM START ===== */}

      <h3 className="text-2xl font-semibold text-green-700 mb-6 text-center">
        Request This Diet Plan
      </h3>

      <form
        className="space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-xl border"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded-xl border"
        />

        {/* Gender */}
        <select className="w-full p-3 rounded-xl border">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        {/* Weight & Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Weight (kg)"
            className="p-3 rounded-xl border"
          />
          <input
            type="number"
            placeholder="Height (cm)"
            className="p-3 rounded-xl border"
          />
        </div>

        {/* Activity Level */}
        <select className="w-full p-3 rounded-xl border">
          <option value="">Select Activity Level</option>
          <option>Sedentary (little or no exercise)</option>
          <option>Lightly Active</option>
          <option>Moderately Active</option>
          <option>Very Active</option>
        </select>

        {/* Health Conditions */}
        <div>
          <p className="font-medium mb-2">Any health conditions?</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              High Blood Pressure
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Diabetes
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              PCOS
            </label>
          </div>
        </div>

        {/* Allergies */}
        <input
          type="text"
          placeholder="Any allergies? (optional)"
          className="w-full p-3 rounded-xl border"
        />

       
        <textarea
          rows="4"
          placeholder="Any specific goal or note?"
          className="w-full p-3 rounded-xl border border-black"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-300 text-white py-3 rounded-full font-semibold hover:bg-green-400 transition"
        >
          Submit This Request
        </button>
      </form>

   
    </DietPlanDetailCard>
  );
}
