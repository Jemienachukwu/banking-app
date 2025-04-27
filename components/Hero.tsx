"use client";
import React from "react";
import Lottie from "lottie-react";
import gif from "./animations/Animation - 1745761704095.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <div className=" flex flex-col-reverse md:flex-row lg:flex-row items-center justify-evenly p-4 ">
      <div className="w-[100%] md:w-[40%] lg:w-[40%] flex flex-col gap-4">
        <span className="bg-blue-200 p-1 rounded-md text-blue-500 font-semibold text-sm w-fit">
          Connect. Track. Grow.
        </span>
        <h1 className="text-4xl font-bold ">
          All Your Finances, Finally Together.
        </h1>
        <p>
          Manage your spending across all your bank accounts with security and
          simplicity at the heart of everything.
        </p>
        <div className="flex gap-4 ">
          <Link
            href="/sign-up"
            className="cursor-pointer flex items-center gap-1 "
          >
            <Button className="form-btn ">create account</Button>
          </Link>
          <Link
            href="/sign-in"
            className="cursor-pointer flex items-center gap-1 "
          >
            <Button className="border-2 border-solid">sign-in</Button>
          </Link>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <p>Features</p>

          <div className="flex  items-center gap-2 text-sm">
            <span className="h-8 w-8 bg-blue-400 rounded-sm text-white">
              icon
            </span>
            <div>
              <p className="font-bold">Connect</p>
              <p>Link your banks, monitor your spending</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[40%] lg:w-[40%]">
        <Lottie animationData={gif} loop={true} />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="flex flex-col gap-4">
<p>Features</p>

<div className="flex  items-center gap-2 text-sm">
  <span className="h-8 w-8 bg-blue-400 rounded-sm text-white">
    icon
  </span>
  <div>
    <p className="font-bold">Connect</p>
    <p>Link your banks, monitor your spending</p>
  </div>
</div>

<div className="flex  items-center gap-2 text-sm">
  <span className="h-8 w-8 bg-blue-200 rounded-sm">icon</span>
  <div>
    <p className="font-bold">Organized.</p>
    <p>All transactions in one place</p>
  </div>
</div>
</div> */
}
