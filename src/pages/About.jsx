import React from "react";
import { useNavigate } from "react-router-dom";
import aboutpic from "../assets/images/about.jpg";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="pt-24 px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row items-center gap-10">

       
        <div className="w-90 h-90 md:w-96 md:h-100  rounded-2xl object-contain border-12"
>
          <img
            src={aboutpic}
            alt="Nutrition Coach"
            className="w-64 h-64 md:w-80 md:h-80  object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">

          <h2 className="text-green-300 text-2xl md:text-3xl font-bold">
            Meet Your Nutrition Coach
          </h2>

          <p className="text-gray-700">
            Hi! I'm{" "}
            <span className="text-green-300 font-bold">Laiba</span>, a certified
            nutritionist and wellness guide. I've helped 200+ people balance
            hormones, lose stubborn fat, gain energy, and fall in love with real
            food.
          </p>

          <p className="text-gray-700">
            My journey began with my own struggles with PCOS and fatigue. Now I
            design simple, effective diet plans that actually work — no crash
            diets, just smart food choices.
          </p>

          <p className="text-gray-700">
            Ready to transform your health? Let’s begin your journey together.
          </p>

          <button
            onClick={() => navigate("/plans")}
            className="mt-4 inline-block rounded-full bg-green-400 px-6 py-3 text-white font-semibold hover:bg-green-500 transition"
          >
            View Diet Plans
          </button>
        </div>
      </div>
    </section>
  );
}
