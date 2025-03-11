import "./App.css";
import Language from "./pages/Language";
import Home from "./pages/Home";
import Service from "./pages/Service";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [repairs, setRepairs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rapidmb.onrender.com/api/repairs`, {
        withCredentials: true, // Needed if backend has credentials: true
      })
      .then((response) => {
        setRepairs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching repairs:", error);
      });
  }, []);

  
  return (
    <>
      <Routes>
        <Route path="/" element={<Language />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/service-request" element={<Service />} />
      </Routes>
    </>
  );
}

export default App
