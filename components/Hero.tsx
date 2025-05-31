"use client";
import React from "react";
import Lottie from "lottie-react";
import gif from "./animations/Animation - 1745761704095.json";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    // bg-gradient-to-b from-[#fff] to-blue-200
    <div className=" flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between px-5 md:px-20 py-4 bg-[#fff] shadow-2xl h-screen rounded-b-[80px]  ">
      <div className="w-[100%] md:w-[40%] lg:w-[40%] flex flex-col gap-4">
        <span className="flex items-center gap-1 bg-blue-200 px-2 py-1 rounded-md text-blue-600 font-semibold text-xs w-fit">
          <Image
            src="/icons/safe-shield-protection-svgrepo-com.svg"
            width={12}
            height={12}
            alt="connect"
          />
          Connect. Track. Grow.
        </span>
        <h1 className="text-4xl font-bold ">
          All Your Finances, Finally Together.
        </h1>
        <p className="text-sm ">
          Manage your spending across all your bank accounts with security and
          simplicity at the heart of everything.
        </p>
        <div className="flex gap-4 ">
          <Link
            href="/sign-up"
            className="cursor-pointer flex items-center gap-1 "
          >
            <Button className="form-btn ">Get Started Free</Button>
          </Link>
        </div>
        <hr />
        <div className="flex flex-col gap-4 p-3 bg-white rounded-md shadow-sm ">
          <div className="flex  items-center gap-2 text-sm">
            <span className="h-8 w-8 bg-blue-200 rounded-sm text-blue-600 flex items-center justify-center">
              <Image
                src="/icons/link.svg"
                width={20}
                height={20}
                alt="connect"
                className="m-2 min-w-5 text-red-700"
              />
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
