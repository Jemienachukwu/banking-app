import React from "react";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#f0f4f8]">
      <Nav />
      <Hero />
    </div>
  );
};

export default LandingPage;
