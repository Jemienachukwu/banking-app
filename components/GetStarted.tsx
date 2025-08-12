// components/GetStartedSteps.tsx

"use client";

import { motion } from "framer-motion";
import gif3 from "./animations/Business Task Management.json";
import gif1 from "./animations/Female accountant.json";
import gif2 from "./animations/Researchers.json";

import Lottie from "lottie-react";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Get started in just a few clicks. Whether you're managing your salary, side hustle, or student budget, our platform is built to simplify your financial life.",
    gif: gif1,
  },
  {
    title: "Link Your Bank Accounts",
    description:
      "Easily and securely connect all your bank accounts and wallets in one place. No more switching apps or guessing balances get a real-time, complete view of your money whenever you need it.",
    gif: gif2,
  },
  {
    title: "Track and Manage Your Money",
    description:
      "See where your money goes, set personalized budgets, and reach your goals faster. From daily expenses to long-term savings, our smart tools keep you in control every step of the way.",
    gif: gif3,
  },
];

const GetStarted = () => {
  return (
    <section className="flex flex-col items-center px-5 py-12 space-y-12">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col  
            ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} 
          items-center md:items-center md:justify-between gap-10 max-w-6xl w-full`}
        >
          {/* Text Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="flex-1 space-y-4"
          >
            <p className="text-sm font-medium text-blue-600 uppercase tracking-widest">
              Step 0{index + 1}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight text-gray-900">
              {step.title}
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {step.description}
            </p>

            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-sm shadow-md transition duration-200 group">
              Get Started For Free
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>

          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.25 }}
            className="flex-1 flex justify-center"
          >
            <div className="w-full max-w-md h-auto">
              <Lottie animationData={step.gif} loop={true} />
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default GetStarted;
