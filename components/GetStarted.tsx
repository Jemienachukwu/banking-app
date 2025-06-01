// components/GetStartedSteps.tsx

"use client";

import { motion } from "framer-motion";
import gif1 from "./animations/Animation - 1748704692968.json";
import gif2 from "./animations/Animation - 1748707193106.json";
import gif3 from "./animations/Animation - 1748647528882 (1).json";

import Lottie from "lottie-react";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up in minutes to unlock money management tools tailored for you.",

    gif: gif1,
  },
  {
    title: "Link Your Bank Accounts",
    description:
      "Securely connect all your existing banks and wallets for a unified financial view.",
    gif: gif2,
  },
  {
    title: "Track and Manage Your Money",
    description:
      "Stay on top of your spending, set goals, and make confident financial decisions.",
    gif: gif3,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const GetStarted = () => {
  return (
    <section className="py-20 bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Get Started In Just</h2>
        <h3 className="text-4xl font-bold text-blue-500 mb-12">
          3 Simple Steps
        </h3>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white flex flex-col justify-between  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="w-full bg-blue-300 rounded-t-xl">
                <div className="w-48 h-48 object-contain mx-auto ">
                  <Lottie animationData={step.gif} loop={true} />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">
                  {`Step ${index + 1}`}
                </h4>
                <h5 className="text-lg font-medium text-gray-700 mb-2">
                  {step.title}
                </h5>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
