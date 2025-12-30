import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import PlanDetail from "./pages/PlanDetail";
import Appointment from "./pages/Appointment";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Testimonials from "./pages/Testimonials";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">

       
        <Header />

        
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plans/:type" element={<PlanDetail />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>

        
        <Footer />

      </div>
    </BrowserRouter>
  </React.StrictMode>
);
