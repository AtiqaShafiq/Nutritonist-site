import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGlobe,
  FaClock,
  FaBan,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10 pt-6 pb-6 px-4">

        {/* Brand */}
        <div className="text-center md:text-left max-w-xs">
          <h4 className="text-green-300 font-semibold mb-2">
            NutriCare
          </h4>
          <p className="text-white leading-relaxed text-sm sm:text-base">
            Helping you heal from within. <br />
            Personalized diet plans and <br />
            consultations by <br />
            certified nutritionist <br />
            Laiba.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-green-300 font-semibold">
            Contact
          </h4>

          <div className="flex items-center gap-3 text-white text-sm justify-center md:justify-start">
            <FaPhoneAlt className="text-green-400" />
            <span>+92 300 1234567</span>
          </div>

          <div className="flex items-center gap-3 text-white text-sm justify-center md:justify-start">
            <MdEmail className="text-red-400" />
            <span>nutricare@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 text-white text-sm justify-center md:justify-start">
            <FaWhatsapp className="text-green-500" />
            <span>+92 300 1234567</span>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-green-300 font-semibold">
            Where to Find Us
          </h4>

          <div className="flex items-start gap-3 text-white text-sm justify-center md:justify-start">
            <FaMapMarkerAlt className="text-green-400 mt-1" />
            <span>
              Hostel City, Islamabad <br />
              Royal Girls Hostel Branch 9, Islamabad
            </span>
          </div>

          <div className="flex items-center gap-3 text-white text-sm justify-center md:justify-start">
            <FaGlobe className="text-blue-400" />
            <span>Online Consultations Available</span>
          </div>
        </div>

        {/* Talking Hours */}
        <div className="space-y-3 text-center md:text-left">
          <h4 className="text-green-300 font-semibold flex items-center gap-2 justify-center md:justify-start">
            <FaClock className="text-green-400" />
            Talking Hours
          </h4>

          <div className="flex items-start gap-2 text-white text-sm justify-center md:justify-start">
            <FaClock className="text-green-400 mt-1" />
            <span>
              <span className="font-semibold">Mon–Fri:</span> <br />
              12:00 PM – 9:00 PM
            </span>
          </div>

          <div className="flex items-start gap-2 text-white text-sm justify-center md:justify-start">
            <FaClock className="text-green-400 mt-1" />
            <span>
              <span className="font-semibold">Sat:</span> <br />
              12:00 PM – 5:00 PM
            </span>
          </div>

          <div className="flex items-center gap-2 text-red-400 text-sm justify-center md:justify-start">
            <FaBan />
            <span>Sun: Closed</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

     
      <div className="text-center py-4 text-sm">
        © 2025 <span className="text-white font-semibold">NutriCare by Laiba</span>. All rights reserved.
      </div>

    </footer>
  );
}
