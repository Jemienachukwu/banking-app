import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import React from "react";

import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const page = async () => {
  const loggedIn = await getLoggedInUser();

  if (loggedIn) {
    redirect("/dashboard");
  }

  return (
    <div>
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default page;
