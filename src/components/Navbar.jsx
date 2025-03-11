import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // State for controlling the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation and scrolling
  const handleNavigation = (id) => {
    // If user is not on the home page, navigate first
    if (window.location.pathname !== "/home") {
      navigate("/home"); // Navigate to home
      setTimeout(() => {
        // Scroll to the desired section after a short delay
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      // If already on the home page, scroll directly
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <div className="sticky top-0 bg-black w-full text-white flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 md:px-10 shadow-lg z-50">
      {/* Logo */}
      <img
        src="/assets/home.png"
        alt="Logo"
        className="h-15 rounded-full cursor-pointer transition duration-300 hover:scale-110"
        onClick={() => handleNavigation("home")}
      />

      {/* Desktop Navigation Menu */}
      <ul className="hidden md:flex items-center gap-8 text-lg">
        <li>
          {/* Service Request Button */}
          <NavLink to="/service-request">
            <button className="text-white cursor-pointer bg-blue-500 px-4 py-2 rounded-2xl hover:bg-blue-600 transition duration-300 text-lg ">
              Request Service
            </button>
          </NavLink>
        </li>

        {/* Navigation Links with Scroll Functionality */}
        <li className="hover:text-gray-400 transition duration-300 hover:scale-110">
          <NavLink to="/home">
            <button
              className="cursor-pointer"
              onClick={() => handleNavigation("home")}
            >
              Home
            </button>
          </NavLink>
        </li>
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 hover:scale-110">
          <NavLink to="/home">
            <button
              className="cursor-pointer"
              onClick={() => handleNavigation("about")}
            >
              About Us
            </button>
          </NavLink>
        </li>
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 hover:scale-110">
          <NavLink to="/home">
            <button
              className="cursor-pointer"
              onClick={() => handleNavigation("services")}
            >
              Services
            </button>
          </NavLink>
        </li>
        <li className="hover:text-gray-400 cursor-pointer transition duration-300 hover:scale-110">
          <NavLink to="/home">
            <button
              className="cursor-pointer"
              onClick={() => handleNavigation("contact")}
            >
              Contact Us
            </button>
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"} {/* Toggle between open and close icons */}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-black flex flex-col items-center py-4 shadow-lg md:hidden">
          

          {/* Mobile Menu Links with Scroll Functionality */}
          <button
            className="text-white py-2 text-lg hover:text-gray-400"
            onClick={() => handleNavigation("home")}
          >
            Home
          </button>
          <button
            className="text-white py-2 text-lg hover:text-gray-400"
            onClick={() => handleNavigation("about")}
          >
            About Us
          </button>
          <button
            className="text-white py-2 text-lg hover:text-gray-400"
            onClick={() => handleNavigation("services")}
          >
            Services
          </button>
          <button
            className="text-white py-2 text-lg hover:text-gray-400"
            onClick={() => handleNavigation("contact")}
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
