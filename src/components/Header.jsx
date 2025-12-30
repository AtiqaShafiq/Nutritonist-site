import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 
      w-[95%] md:w-[90%] z-50 
      bg-black/60 backdrop-blur-md text-white 
      rounded-xl shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg md:text-xl font-bold"
        >
          <img
            src={logo}
            alt="NutriCare Logo"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <span>
            Nutri <span className="text-orange-400">Care</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Plans", "Blog", "Testimonials", "Contact"].map(
            (item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="font-medium hover:text-orange-400 transition"
              >
                {item}
              </Link>
            )
          )}

          <Link
            to="/appointment"
            className="bg-white text-black px-4 py-2 rounded-full shadow
              hover:bg-orange-400 hover:text-white transition"
          >
            Appointment →
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-6 pb-4 rounded-b-xl">
          <div className="flex flex-col space-y-4">
            {["Home", "About", "Plans", "Blog", "Testimonials", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-orange-400 transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </Link>
              )
            )}

            <Link
              to="/appointment"
              className="bg-white text-black px-4 py-2 rounded-full text-center
                hover:bg-orange-400 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Appointment →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
