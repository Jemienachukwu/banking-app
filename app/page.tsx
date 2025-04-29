import React from "react";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import About from "@/components/About";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default LandingPage;
