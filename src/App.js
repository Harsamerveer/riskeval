import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; 
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs"; // Import AboutUs component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />  {/* Main Home Page */}
        <Route path="/about" element={<AboutUs />} />  {/* AboutUs Page */}
        <Route path="/services" element={<Services />} />  {/* Services Page */}
        <Route path="/contact" element={<Contact />} />  {/* Contact Page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  