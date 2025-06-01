import Image from "next/image";
import React from "react";

const About = () => {
  const content = [
    {
      icon: "/icons/link.svg",
      title: "Manage Connections.",
      description:
        "Easily link all your bank accounts, cards, and wallets into one secure dashboard.",
    },
    {
      icon: "/icons/receipt.svg",
      title: "Track Spending.",
      description:
        "Monitor every transaction across accounts and categories, with smart summaries and detailed insights.",
    },
    {
      icon: "/icons/business-finance-corporate-9-svgrepo-com.svg",
      title: "Stay In Control.",
      description:
        "Set budgets, receive alerts, and get personalized recommendations to achieve your financial goals.",
    },
  ];
  return (
    <div className="px-5 md:px-20 pt-10 flex flex-col gap-4 bg-[#fff]">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-2xl font-bold ">
          Take Full Control of Your Finances, Without the Stress
        </h1>
        <p className="text-sm text-gray-600">
          All your banks, all your transactions, all your insights beautifully
          organized to help you spend smarter and save more.
        </p>
      </div>

      <div className="flex gap-4 flex-col md:flex-row lg:flex-row  p-3 my-10">
        {content.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 ${
              index !== content.length - 1
                ? "md:border-r-2 border-dashed border-gray-400"
                : ""
            }`}
          >
            <span className="h-8 w-8 bg-blue-200 rounded-sm text-blue-600 flex items-center justify-center">
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt="connect"
                className="m-2 min-w-5 text-red-700"
              />
            </span>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
