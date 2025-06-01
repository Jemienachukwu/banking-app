"use client";

import { useScroll, useTransform, motion, pipe } from "framer-motion";
import { useRef } from "react";
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

  // Map global scroll progress into three segments for the 3 cards
  const progress1 = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const progress2 = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
  const progress3 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  const cards = [
    {
      title: "Manage All Your Connections Effortlessly",
      subtext:
        "Bring all your financial accounts under one roof. Link multiple bank accounts, credit cards, and digital wallets securely and instantly. Our smart dashboard gives you a real-time, unified view of your entire financial life no switching apps, no missed balances.",
      progress: progress1,
      bg: 100,
      gif: gif1,
    },
    {
      title: "Track Your Spending with Total Clarity",
      subtext:
        "Know exactly where your money goes, always. Automatically categorize your transactions and track your expenses across accounts. From daily coffee runs to monthly bills, you’ll get clean summaries, helpful trends, and powerful insights that help you make better financial choices.",
      progress: progress2,
      bg: 300,
      gif: gif2,
    },
    {
      title: "Stay In Control of Your Finances",
      subtext:
        "Set goals, stay on budget, and feel confident about your money. Create personalized budgets, receive instant alerts when you overspend, and get actionable tips tailored to your habits.",
      progress: progress3,
      bg: 200,
      gif: gif3,
    },
  ];

  return (
    <div
      ref={ref}
      className="h-[250vh] relative flex flex-col items-center justify-center my-20"
    >
      <div className="flex flex-col gap-4 text-center my-10">
        <h1 className="text-3xl font-bold ">Discover What We Offer</h1>
        <p className="text-xl text-gray-600">
          Elevate your e-commerce experience with our powerful feature set
          designed for unparalleled excellence.
        </p>
      </div>

      {cards.map((item, index) => {
        const start = index / cards.length;
        const end = (index + 1) / cards.length;

        // Last card should not fade
        // const isLast = index === cards.length - 1;

        // // Slight fade for previous cards — stops at 0.4
        // const opacity = isLast
        //   ? 1
        //   : useTransform(scrollYProgress, [end - 0.05, end], [1, 0.4]);

        const scale = useTransform(scrollYProgress, [start, end], [1, 0.97]);
        const y = useTransform(scrollYProgress, [start, end], [0, 20]);

        return (
          <motion.div
            key={index}
            // style={{ opacity, scale, y }}
            className={`sticky top-20 z-[${10 + index}] 
            h-[80vh] flex flex-col md:flex-row items-center justify-evenly px-5 py-10 bg-blue-${
              item.bg
            }  w-[90%] rounded-3xl shadow-xl transition-all duration-300`}
          >
            <div className="w-full md:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <p className="text-lg text-gray-600">{item.subtext}</p>
            </div>
            <div className="w-full md:w-1/3">
              <Lottie animationData={item.gif} loop />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutCard;
