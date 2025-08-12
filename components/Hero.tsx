"use client";
import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import gif from "./animations/Animation - 1745761704095.json";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <div className=" flex flex-col md:flex-row lg:flex-row items-center justify-between px-5 md:px-20 py-20 bg-[#fff] h-screen  ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[100%] md:w-[40%] lg:w-[40%] flex flex-col gap-4"
        >
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
              <button className="form-btn ">Get Started Free</button>
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[100%] md:w-[40%] lg:w-[40%]"
        >
          <Lottie animationData={gif} loop={true} />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
