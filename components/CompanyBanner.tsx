"use client";
import React from "react";

const CompanyBanner = () => {
  return (
    <div className="flex flex-col md:flex-row  items-center justify-between  py-10 px-5 md:px-20 w-screen">
      <h2 className="text-2xl font-thin text-gray-800 mb-4 w-[100%] md:w-[50%]">
        WE ARE PARTNERED WITH MORE THAN 50+ companies around the globe.
      </h2>
      <div className="flex flex-wrap overflow-hidden w-[100%] md:w-[50%]">
        <div className="flex animate-scroll gap-1">
          {/* Repeat all logos twice for seamless loop */}

          {/* star logo */}
          <svg
            width="220"
            height="40"
            viewBox="0 0 220 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
              <path d="M20 8v24M8 20h24M12 12l16 16M12 28l16-16" />
            </g>
            <text
              x="44"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              fontSize="18"
              fontWeight="600"
            >
              Logo
            </text>
          </svg>

          {/* wave logo */}
          <svg
            width="220"
            height="40"
            viewBox="0 0 220 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 24c3 0 3-10 6-10s3 10 6 10 3-10 6-10 3 10 6 10"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="44"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              fontSize="18"
              fontWeight="600"
            >
              Logo
            </text>
          </svg>

          {/* leaf logo */}
          <svg
            width="200"
            height="40"
            viewBox="0 0 200 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M32 10c-12 0-18 6-18 18 12 0 18-6 18-18z" />
              <path d="M14 28c3-3 6-6 9-9" />
            </g>
            <text
              x="44"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              fontSize="18"
              fontWeight="600"
            >
              Logo
            </text>
          </svg>

          {/* domino */}
          <svg
            width="220"
            height="40"
            viewBox="0 0 220 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 8l8 8-8 8-8-8 8-8z" />
              <path d="M28 16l8 8-8 8-8-8 8-8z" />
            </g>
            <text
              x="44"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              fontSize="18"
              fontWeight="600"
            >
              Logo
            </text>
          </svg>

          {/* sunset wave */}
          <svg
            width="220"
            height="40"
            viewBox="0 0 220 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="20" cy="16" r="6" />
              <path d="M4 26c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4 2-4 4-4 2 4 4 4" />
            </g>
            <text
              x="44"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              fontSize="18"
              fontWeight="600"
            >
              Logo
            </text>
          </svg>

          {/* shield */}
          <svg
            width="220"
            height="40"
            viewBox="0 0 220 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 8l12 5v10c0 8-6 14-12 14S8 31 8 23V13l12-5z" />
              <path d="M13 21l4 4 7-7" />
            </g>
            <text
              x="44"
              y="26"
              fill="currentColor"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
              fontSize="18"
              fontWeight="600"
            >
              Logo
            </text>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CompanyBanner;

// <div className="flex flex-wrap justify-center gap-6">
//   {/* star logo */}
//   <svg
//     width="220"
//     height="40"
//     viewBox="0 0 220 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
//       <path d="M20 8v24M8 20h24M12 12l16 16M12 28l16-16" />
//     </g>
//     <text
//       x="44"
//       y="26"
//       fill="currentColor"
//       fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
//       fontSize="18"
//       fontWeight="600"
//     >
//       Logo
//     </text>
//   </svg>
//   {/* wave logo */}
//   <svg
//     width="220"
//     height="40"
//     viewBox="0 0 220 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M6 24c3 0 3-10 6-10s3 10 6 10 3-10 6-10 3 10 6 10"
//       stroke="currentColor"
//       strokeWidth="6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <text
//       x="44"
//       y="26"
//       fill="currentColor"
//       fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
//       fontSize="18"
//       fontWeight="600"
//     >
//       Logo
//     </text>
//   </svg>
//   {/* leaf logo */}
//   <svg
//     width="200"
//     height="40"
//     viewBox="0 0 200 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g
//       stroke="currentColor"
//       strokeWidth="4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M32 10c-12 0-18 6-18 18 12 0 18-6 18-18z" />
//       <path d="M14 28c3-3 6-6 9-9" />
//     </g>
//     <text
//       x="44"
//       y="26"
//       fill="currentColor"
//       fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
//       fontSize="18"
//       fontWeight="600"
//     >
//       Logo
//     </text>
//   </svg>
//   {/* domino */}
//   <svg
//     width="220"
//     height="40"
//     viewBox="0 0 220 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g
//       stroke="currentColor"
//       strokeWidth="4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 8l8 8-8 8-8-8 8-8z" />
//       <path d="M28 16l8 8-8 8-8-8 8-8z" />
//     </g>
//     <text
//       x="44"
//       y="26"
//       fill="currentColor"
//       fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
//       fontSize="18"
//       fontWeight="600"
//     >
//       Logo
//     </text>
//   </svg>
//   <svg
//     width="220"
//     height="40"
//     viewBox="0 0 220 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g
//       stroke="currentColor"
//       strokeWidth="3"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       {/* sun */}
//       <circle cx="20" cy="16" r="6" />
//       {/* wave */}
//       <path d="M4 26c2 0 2-4 4-4s2 4 4 4 2-4 4-4 2 4 4 4 2-4 4-4 2 4 4 4" />
//     </g>
//     <text
//       x="44"
//       y="26"
//       fill="currentColor"
//       fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
//       fontSize="18"
//       fontWeight="600"
//     >
//       Logo
//     </text>
//   </svg>
//   {/* shield logo */}
//   <svg
//     width="220"
//     height="40"
//     viewBox="0 0 220 40"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <g
//       stroke="currentColor"
//       strokeWidth="4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M20 8l12 5v10c0 8-6 14-12 14S8 31 8 23V13l12-5z" />
//       <path d="M13 21l4 4 7-7" />
//     </g>
//     <text
//       x="44"
//       y="26"
//       fill="currentColor"
//       fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
//       fontSize="18"
//       fontWeight="600"
//     >
//       Logo
//     </text>
//   </svg>
// </div>
