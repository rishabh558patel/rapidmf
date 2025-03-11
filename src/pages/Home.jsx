import React from "react";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Sections />
      <Footer/>
    </div>
  );
};

export default Home;
