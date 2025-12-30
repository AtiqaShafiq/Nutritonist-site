import React from "react";
import { useNavigate } from "react-router-dom";
import girl from "../assets/images/girl.webp";
import bg from "../assets/images/bg.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className="relative z-10 flex flex-col h-full px-4">

        <div className="flex flex-col items-center justify-center flex-1 gap-4">

          <img
            src={girl}
            alt="profile"
            className="
              w-28 h-28
              sm:w-36 sm:h-36
              md:w-44 md:h-44
              rounded-full
              border-4 border-white
              object-cover
            "
          />

          <p className="text-center text-green-700 text-base sm:text-lg md:text-2xl">
            Welcome to NutriCare
          </p>

          <h1 className="
              text-center
              text-gray-900
              font-extrabold
              leading-tight
              text-2xl
              sm:text-3xl
              md:text-5xl
              lg:text-6xl
            ">
            Nourish Your Body,
            <br />
            Transform Your Life
          </h1>

          <p className="font-poppins text-center text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
            Personalized nutrition plans crafted to boost energy, balance
            <br />
            hormones, and support healthy weight — naturally.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => navigate("/plans")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Explore Diet Plans
            </button>

            <button
              onClick={() => navigate("/appointment")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Book Consultation
            </button>
          </div>
        </div>

        <p className="pb-4 text-center text-gray-700">
          Powered by{" "}
          <span className="text-orange-400 font-bold">
            NutriCare by Laiba
          </span>
        </p>

      </div>
    </div>
  );
}
