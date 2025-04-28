import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="px-5 md:px-20 py-10 flex flex-col gap-4 bg-[#f0f4f8]">
      <div className="w-[70%] md:w-[40%] flex flex-col gap-4">
        <h1 className="text-2xl font-bold ">
          Take Full Control of Your Finances, Without the Stress
        </h1>
        <p className="text-sm text-gray-600">
          All your banks, all your transactions, all your insights beautifully
          organized to help you spend smarter and save more.
        </p>
      </div>

      <div className="flex gap-4 flex-col md:flex-row lg:flex-row  p-3 my-10">
        <div className="flex flex-col gap-2 md:border-r-2 border-dashed border-gray-400 ">
          <span className="h-8 w-8 bg-blue-200 rounded-sm text-blue-600 flex items-center justify-center">
            <Image
              src="/icons/link.svg"
              width={20}
              height={20}
              alt="connect"
              className="m-2 min-w-5 text-red-700"
            />
          </span>
          <h2 className="text-lg font-bold">Manage Connections.</h2>
          <p className="text-sm text-gray-600">
            Easily link all your bank accounts, cards, and wallets into one
            secure dashboard.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:border-r-2 border-dashed border-gray-400 ">
          <span className="h-8 w-8 bg-blue-200 rounded-sm text-blue-600 flex items-center justify-center">
            <Image
              src="/icons/receipt.svg"
              width={20}
              height={20}
              alt="connect"
              className="m-2 min-w-5 text-red-700"
            />
          </span>
          <h2 className="text-lg font-bold">Track Spending.</h2>
          <p className="text-sm text-gray-600">
            Monitor every transaction across accounts and categories, with smart
            summaries and detailed insights.
          </p>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="h-8 w-8 bg-blue-200 rounded-sm text-blue-600 flex items-center justify-center">
            <Image
              src="/icons/budget3.svg"
              width={20}
              height={20}
              alt="connect"
              className="m-2 min-w-5 text-red-700"
            />
          </span>
          <h2 className="text-lg font-bold">Stay In Control.</h2>
          <p className="text-sm text-gray-600">
            Set budgets, receive alerts, and get personalized recommendations to
            achieve your financial goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
