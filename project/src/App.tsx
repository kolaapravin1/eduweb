import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Achievements from "./components/Achievements";
import Bootcamps from "./components/Bootcamps";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.title =
      "MindFulEdu - Empowering Students Through Expert-Guided Learning";
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Achievements />
      <Bootcamps />
      <Footer />
    </div>
  );
}

export default App;
