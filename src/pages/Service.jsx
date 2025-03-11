import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Service = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: "Rewa",
    state: "Madhya Pradesh",
    zip: "486001",
    mobileModel: "",
    problem: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) {
      tempErrors.name = "Name is required";
      toast.error("Name is required");
    }
    if (!formData.email.includes("@")) {
      toast.error("Valid email required");
      tempErrors.email = "Valid email required";
    }

    if (!formData.contact.match(/^\+?[0-9]{10,12}$/)) {
      tempErrors.contact = "Valid contact required";
      toast.error("Valid contact required");
    }

    if (!formData.city) tempErrors.city = "City is required";
    if (!formData.zip.match(/^\d{6}$/)) tempErrors.zip = "Valid zip required";
    if (!formData.mobileModel) {
      tempErrors.mobileModel = "Mobile model is required";
      toast.error("Mobile model is required");
    }

    if (!formData.problem) {
      tempErrors.problem = "Please describe your problem";
      toast.error("Please describe your problem");
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Live validation
    let tempErrors = { ...errors };

    if (name === "name" && !value) tempErrors.name = "Name is required";
    if (name === "email" && !value.includes("@"))
      tempErrors.email = "Valid email required";
    if (name === "contact" && !/^\+?[0-9]{10,12}$/.test(value))
      tempErrors.contact = "Valid contact required";
    if (name === "zip" && !/^\d{6}$/.test(value))
      tempErrors.zip = "Valid zip required";
    if (name === "mobileModel" && !value)
      tempErrors.mobileModel = "Mobile model is required";
    if (name === "problem" && !value)
      tempErrors.problem = "Please describe your problem";

    // Remove error if field is corrected
    if (value) delete tempErrors[name];

    setErrors(tempErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true); // Start loading
      try {
        const response = await axios.post(
          `https://rapidmb.onrender.com/api/repairs`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response:", response);

        if (response.status === 201) {
          toast.success("Repair request submitted successfully!");
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            contact: "",
            city: "Rewa",
            state: "Madhya Pradesh",
            zip: "",
            mobileModel: "",
            problem: "",
          }); // Reset form
        } else {
          toast.error("Failed to submit request.");
        }
      } catch (error) {
        toast.error("Error: Could not connect to server.");
      }
      setLoading(false); // Stop loading
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer /> {/* 👈 Add this to enable notifications */}
      <div className="flex flex-col items-center min-h-screen px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12">
        <div className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-black via-gray-700 to-gray-500"></div>

        <form
          className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg md:max-w-xl lg:max-w-2xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="text-gray-700">Name</label>
            <input
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm font-medium">{errors.name}</p>
            )}{" "}
          </div>
          <div className="mb-4">
            <label className="text-gray-700">Email</label>
            <input
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm font-medium">{errors.email}</p>
            )}{" "}
          </div>
          <div className="mb-4">
            <label className="text-gray-700">Contact</label>
            <input
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm font-medium">
                {errors.contact}
              </p>
            )}{" "}
          </div>
          <div className="mb-4">
            <label className="text-gray-700">City</label>
            <input
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="city"
              value={formData.city}
              readOnly
            />
            {errors.city && <p className="text-red-500">{errors.city}</p>}
          </div>
          <div className="mb-4">
            <label className="text-gray-700">State</label>
            <input
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="state"
              value={formData.state}
              readOnly
            />
            {errors.state && <p className="text-red-500">{errors.state}</p>}
          </div>
          <div className="mb-4">
            <label className="text-gray-700">Zip</label>
            <input
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
            {errors.zip && <p className="text-red-500">{errors.zip}</p>}
          </div>
          <div className="mb-4">
            <label className="text-gray-700">Mobile Model</label>
            <input
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="mobileModel"
              value={formData.mobileModel}
              onChange={handleChange}
            />
            {errors.mobileModel && (
              <p className="text-red-500 text-sm font-medium">
                {errors.mobileModel}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="text-gray-700">Describe Your Problem</label>
            <textarea
              className={`w-full p-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all`}
              name="problem"
              value={formData.problem}
              placeholder="Enter details about your issue"
              onChange={handleChange}
            ></textarea>
            {errors.problem && (
              <p className="text-red-500 text-sm font-medium">
                {errors.problem}
              </p>
            )}{" "}
          </div>
          <button
            className="p-3 bg-blue-500 text-white w-full rounded"
            type="submit"
            disabled={loading} // Disable when loading
          >
            {loading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
