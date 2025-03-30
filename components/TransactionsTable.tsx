import { transactionCategoryStyles } from "@/constants";
import {
  cn,
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[
      category as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default;

  return (
    <div className={cn("category-badge", borderColor, chipBackgroundColor)}>
      <div className={cn("size-2 rounded-full", backgroundColor)} />
      <p className={cn("text-[12px] font-medium", textColor)}>{category}</p>
    </div>
  );
};

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  console.log("transactions:", transactions);
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="w-full border-collapse text-left text-sm text-gray-700">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            <th className="px-6 py-3">Transaction</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Channel</th>
            <th className="px-6 py-3 max-md:hidden">Category</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {transactions?.map((t) => {
            const status = getTransactionStatus(new Date(t.date));
            const amount = formatAmount(t.amount);
            const isDebit = t.type === "debit";
            const isCredit = t.type === "credit";

            return (
              <tr
                key={t.id}
                className={`${
                  isDebit || amount[0] === "-" ? "bg-red-50" : "bg-green-50"
                } hover:bg-gray-100 transition-colors `}
              >
                <td className="flex items-center gap-3 px-6 py-4 mt-4 max-w-[200px]">
                  <h1 className="font-medium text-gray-800 truncate">
                    {removeSpecialCharacters(t.name)}
                  </h1>
                </td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    isDebit || amount[0] === "-"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {isDebit ? `-${amount}` : isCredit ? `+${amount}` : amount}
                </td>
                <td className="px-6 py-4">
                  <CategoryBadge category={status} />
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {formatDateTime(new Date(t.date)).dateTime}
                </td>
                <td className="px-6 py-4 capitalize min-w-24">
                  {t.paymentChannel}
                </td>
                <td className="px-6 py-4 max-md:hidden">
                  <CategoryBadge category={t.category} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
