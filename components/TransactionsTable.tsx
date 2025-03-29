// import {
//   formatAmount,
//   formatDateTime,
//   getTransactionStatus,
//   removeSpecialCharacters,
// } from "@/lib/utils";

// const TransactionsTable = ({ transactions }: TransactionTableProps) => {
//   // console.log("this is transactions tabel data", transactions);

//   return (
//     <table className="w-full border-collapse border border-gray-200">
//       <thead className="bg-[#f9fafb]">
//         <tr>
//           <th className="px-2 border border-gray-200">Transaction</th>
//           <th className="px-2 border border-gray-200">Amount</th>
//           <th className="px-2 border border-gray-200">Status</th>
//           <th className="px-2 border border-gray-200">Date</th>
//           <th className="px-2 border border-gray-200 max-md:hidden">Channel</th>
//           <th className="px-2 border border-gray-200 max-md:hidden">
//             Category
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {transactions.map((t) => {
//           const status = getTransactionStatus(new Date(t.date));
//           const amount = formatAmount(t.amount);
//           const isDebit = t.type === "debit";
//           const isCredit = t.type === "credit";

//           return (
//             <tr
//               key={t.id}
//               className={`${
//                 isDebit || amount[0] === "-" ? "bg-[#FFFBFA]" : "bg-[#F6FEF9]"
//               } border-b border-gray-200`}
//             >
//               <td className="max-w-[250px] pl-2 pr-10 border border-gray-200">
//                 <div className="flex items-center gap-3">
//                   <h1 className="text-sm truncate font-semibold text-[#344054]">
//                     {removeSpecialCharacters(t.name)}
//                   </h1>
//                 </div>
//               </td>

//               <td
//                 className={`pl-2 pr-10 font-semibold border border-gray-200 ${
//                   isDebit || amount[0] === "-"
//                     ? "text-[#f04438]"
//                     : "text-[#039855]"
//                 }`}
//               >
//                 {isDebit ? `-${amount}` : isCredit ? amount : amount}
//               </td>

//               <td className="pl-2 pr-10 border border-gray-200">
//                 {/* <CategoryBadge category={status} /> */}
//                 {status}
//               </td>

//               <td className="min-w-32 pl-2 pr-10 border border-gray-200">
//                 {formatDateTime(new Date(t.date)).dateTime}
//               </td>

//               <td className="pl-2 pr-10 capitalize min-w-24 border border-gray-200">
//                 {t.paymentChannel}
//               </td>

//               <td className="pl-2 pr-10 max-md:hidden border border-gray-200">
//                 {/* <CategoryBadge category={t.category} /> */}
//                 {status}
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// };

// export default TransactionsTable;
import React from "react";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return <div>TransactionsTable</div>;
};

export default TransactionsTable;
