"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lottie from "lottie-react";
import gif1 from "./animations/Animation - 1748042058811 (1).json";
import gif2 from "./animations/Animation - 1748705985352.json";
import gif3 from "./animations/Animation - 1748705678052.json";

const AboutCard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      title: "Manage All Your Connections Effortlessly",
      subtext:
        "Bring all your financial accounts under one roof. Link multiple bank accounts, credit cards, and digital wallets securely and instantly. Our smart dashboard gives you a real-time, unified view of your entire financial life—no switching apps, no missed balances.",
      gif: gif1,

      bg: "#E0F2FE", // blue-100
      blob: "#93C5FD", // blue-300
    },
    {
      title: "Track Your Spending with Total Clarity",
      subtext:
        "Know exactly where your money goes, always. Automatically categorize your transactions and track your expenses across accounts. From daily coffee runs to monthly bills, you’ll get clean summaries, helpful trends, and powerful insights that help you make better financial choices.",
      gif: gif2,
      bg: "#EFF6FF", // blue-50
      blob: "#BFDBFE", // blue-200
    },
    {
      title: "Stay In Control of Your Finances",
      subtext:
        "Set goals, stay on budget, and feel confident about your money. Create personalized budgets, receive instant alerts when you overspend, and get actionable tips tailored to your habits.",
      gif: gif3,
      bg: "#DBEAFE", // indigo-100
      blob: "#A5B4FC", // indigo-300
    },
  ];

  return (
    <div
      ref={ref}
      className="h-[250vh] relative flex flex-col items-center justify-center mb-20 px-5 md:px-20 bg-[#f8fafc]"
    >
      <div className="flex flex-col gap-4 text-center my-10">
        <h1 className="text-3xl font-bold">
          Explore Our <span className="text-blue-600"> Features</span>
        </h1>
        <p className="text-xl text-gray-600 md:w-[95%] text-center mx-auto">
          Enhance your financal journey with tools crafterd for exceptional
          perfromance
        </p>
      </div>

      {cards.map((item, index) => {
        const start = index / cards.length;
        const end = (index + 1) / cards.length;

        const scale = useTransform(scrollYProgress, [start, end], [1.05, 1]);
        const y = useTransform(scrollYProgress, [start, end], [-30, 0]);

        return (
          <motion.div
            key={index}
            style={{
              scale,
              y,
              backgroundColor: item.bg,
              zIndex: 10 + index,
            }}
            className="sticky top-20 h-[80vh] flex flex-col md:flex-row items-center justify-evenly mt-10 px-5 py-10 w-[90%] rounded-3xl shadow-xl transition-all duration-300"
          >
            {/* Blob */}
            <div
              className="absolute -bottom-1 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl z-0"
              style={{ backgroundColor: item.blob }}
            />

            {/* Text */}
            <div className="z-10">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-700 rounded-xl text-xl">
                💳
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-md">
                {item.subtext}
              </p>
            </div>

            {/* Lottie */}
            <div className="w-full md:w-1/3">
              <Lottie animationData={item.gif} loop />
            </div>

            {/* Blob */}
            <div
              className="absolute -top-1 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl z-0"
              style={{ backgroundColor: item.blob }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutCard;
