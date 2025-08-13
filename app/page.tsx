import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import React from "react";

import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import AboutCard from "@/components/AboutCard";
import GetStarted from "@/components/GetStarted";
import LandingFooter from "@/components/LandingFooter";

const page = async () => {
  const loggedIn = await getLoggedInUser();

  if (loggedIn) {
    redirect("/dashboard");
  }

  return (
    <div>
      <Nav />

      <Hero />
      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#f8fafc" // color of the NEXT section
          fillOpacity="1"
          d="M0,192L80,186.7C160,181,320,171,480,154.7C640,139,800,117,960,128C1120,139,1280,181,1360,202.7L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
      {/* <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#f8fafc"
          fillOpacity="1"
          d="M0,96L80,128C160,160,320,224,480,250.7C640,277,800,267,960,256C1120,245,1280,235,1360,229.3L1440,224L1440,320L0,320Z"
        ></path>
      </svg> */}
      <GetStarted />

      <AboutCard />
      <About />
      <LandingFooter />
    </div>
  );
};

export default page;
