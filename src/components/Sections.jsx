import React from "react";
import { NavLink } from "react-router-dom";
import StarRating from "../components/StarRating";
import { motion } from "framer-motion";

const Section = ({ id, title, bgColor }) => {
  return (
    <section
      id={id}
      className={`h-screen flex items-center justify-center ${bgColor}`}
    >
      <h1 className="text-4xl font-bold text-white">{title}</h1>
    </section>
  );
};

const Sections = () => {
  return (
    <div>
      <div id="home" className="pt-20 roboto">
        {/* Background Gradient */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-gray-700 to-gray-500"></div>

        <div className="    flex w-full flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 gap-6">
          {/* Left Side */}
          <div className="left w-full md:w-1/2 p-8 text-white prata-regular text-xl rounded-2xl flex justify-center items-center flex-col">
            <motion.h1
              initial={{ opacity: 0, y: 20 }} // Start faded and slightly lower
              animate={{ opacity: 1, y: 0 }} // Move up and become fully visible
              transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white"
            >
              RAPiDM
            </motion.h1>

            <p className="text-xs sm:text-xl md:text-2xl lg:text-3xl mt-5">
              Free and Fast Home Mobile Repairing.
            </p>
            <p className="mt-5 text-xs sm:text-xl md:text-2xl lg:text-3xl text-green-500">
              {" "}
              Location: <span className="text-green-500">
                Rewa, MP, India
              </span>{" "}
            </p>
            <p className="mt-5 text-xs sm:text-xl md:text-2xl lg:text-3xl text-blue-500">
              (100+) <span className="text-blue-500">Happy Customers</span>{" "}
            </p>

            {/* Star Rating */}
            <div className="flex justify-center mt-5">
              <StarRating />
            </div>

            {/* Service Request Button (Visible only on mobile) */}
            <NavLink to="/service-request">
              <button className="mt-10 md:hidden flex items-center justify-center bg-blue-500 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 roboto">
                Request Service
              </button>
            </NavLink>
          </div>

          {/* Right Side with Image */}
          <div className="right p-10 sm:w-full md:w-1/2 rounded-2xl overflow-hidden">
            <img
              src="/assets/home6.png"
              alt=""
              className="w-full max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="h-0.5 w-9/10 bg-gray-300 mt-15 mx-auto"></div>

      <div className="pt-20 roboto" id="about">
        {/* Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline px-4 sm:px-6 md:px-8 xl:px-40 mt-6 sm:mt-8 md:mt-10">
          About Us
        </h1>

        <div className="flex w-full flex-col md:flex-row px-4 sm:px-6 md:px-8">
          {/* Left Section - Image */}
          <div className="left w-full md:w-[30%] p-6 sm:p-8 flex justify-center items-center">
            <img
              src="/assets/about3.png"
              alt="About Us"
              className="max-w-full h-auto sm:max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>

          {/* Right Section - Text */}
          <div className="right w-full md:w-[70%] text-center">
            {/* Description */}
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 sm:px-6 md:px-8 xl:px-40 mt-4 sm:mt-6 md:mt-10">
              Welcome to
              <a
                href="/home"
                className="hover:underline ml-2 cursor-pointer font-bold text-blue-400 text-xl sm:text-2xl md:text-3xl"
              >
                RapidM
              </a>
              , your reliable online mobile repair service in Rewa! We
              understand how essential your smartphone is in your daily life.
              That’s why we offer quick, affordable, and secure repair services
              at your doorstep. No more waiting in long queues or worrying about
              data security—our expert technicians provide on-the-spot repairs
              using 100% original parts for a hassle-free experience.
            </p>

            {/* Why Choose Us */}
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline px-4 sm:px-6 md:px-8 xl:px-40 mt-6 sm:mt-8 md:mt-10">
              Why Choose Us?
            </h1>

            <div className="flex flex-col text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-6 sm:mt-8 md:mt-10 gap-3 px-4 sm:px-6 md:px-8 xl:px-40 text-white">
              <span>✅ Doorstep Repair – Get your phone repaired at home.</span>
              <span>
                ✅ Fast & Affordable – Quick service at competitive prices.
              </span>
              <span>✅ Data Security – Your personal data stays safe.</span>
              <span>
                ✅ 100% Genuine Parts – We use only original components.
              </span>
              <span>
                ✅ Trust & Reliability – Serving Rewa with top-quality service.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-0.5 w-9/10 bg-gray-300 mt-20 mx-auto"></div>

      <div className="pt-25 roboto" id="services">
        {/* Section Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl underline px-4 sm:px-6 md:px-8 xl:px-40 mt-6 sm:mt-8 md:mt-10">
          Services
        </h1>

        <div className="flex flex-col sm:flex-row w-full px-4 sm:px-6 md:px-8 gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Section - Services List & How It Works */}
          <div className="left w-full sm:w-[70%] p-6 md:p-8 text-left">
            {/* Services List */}
            <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-4 md:px-6 mt-6 sm:mt-8 md:mt-10">
              <p className="m-1 sm:m-2">🔹 Screen Replacement</p>
              <p className="m-1 sm:m-2">🔹 Battery Replacement</p>
              <p className="m-1 sm:m-2">🔹 Software & Data Recovery</p>
              <p className="m-1 sm:m-2">🔹 Water Damage Repair</p>
            </div>

            {/* How It Works Heading */}
            <h1 className="px-2 sm:px-4 md:px-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 sm:mt-8 md:mt-10 underline">
              How It Works?
            </h1>

            {/* How It Works Steps */}
            <div className="flex flex-col px-2 sm:px-4 md:px-6 text-sm sm:text-base md:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10 gap-3 sm:gap-4 text-white text-left">
              <span>1️⃣ Call or WhatsApp us to book a service.</span>
              <span>2️⃣ Describe your issue and schedule an appointment.</span>
              <span>
                3️⃣ Our expert technician visits your location for repair.
              </span>
              <span>
                4️⃣ Get your mobile fixed quickly and securely in front of you.
              </span>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="right w-full sm:w-[30%] flex justify-center items-center">
            <img
              src="/assets/service_final2.png"
              alt="Service"
              className="w-auto h-auto sm:max-w-[80%] md:max-w-[75%] lg:max-w-[70%]"
            />
          </div>
        </div>
      </div>

      <div className="h-0.5 w-9/10 bg-gray-300 mt-20 mx-auto"></div>

      <div className="pt-25 roboto min-h-[85vh]" id="contact">
        <h1 className="px-6 sm:px-10 md:px-20 lg:px-40 flex items-center text-white text-3xl sm:text-4xl md:text-5xl underline">
          Contact Us
        </h1>

        <div className="flex w-full flex-col md:flex-row px-4 sm:px-6 md:px-8">
          {/* Left Section */}
          <div className="left w-full md:w-[70%] p-4 sm:p-6 md:p-8 text-left rounded-2xl">
            <div className="text-white flex flex-col text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl m-4 sm:m-6 md:m-8 gap-3 sm:gap-4">
              <p>
                <span className="mr-3 sm:mr-5">📞</span> Phone:
                +91 7566568647
              </p>
              <p>
                <span className="mr-3 sm:mr-5">📍</span> Service Area: Rewa, MP
              </p>
              <p>
              <a className="mr-3 sm:mr-5 hover:text-blue-500" href="mailto:rapidmofficial@gmail.com"> <span className="mr-6">📧</span>rapidmofficial@gmail.com</a>
              </p>
              <p>
                <span className="mr-3 sm:mr-5">🕒</span> Timings: 9 AM – 9 PM
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="right w-full md:w-[30%] text-white prata-regular text-xl rounded-2xl flex justify-center items-center flex-col">
            <img
              src="/assets/contact2.png"
              alt=""
              className="max-w-full h-auto sm:max-w-xs md:max-w-sm lg:max-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
