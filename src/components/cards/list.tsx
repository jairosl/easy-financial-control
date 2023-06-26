import { Transaction, TypeTransaction } from "@/domain";
import { formatterCurrency, formatterDate } from "@/services/formatters";

export function CardList(transaction: Transaction) {
  const isTransactionLeave = transaction.type === TypeTransaction.leave;

  return (
    <div className="w-full flex items-center px-8 py-6 bg-white rounded-md">
      <div className="flex-1 pr-2">
        <p className="text-black text-base leading-[160%]">
          {transaction.description}
        </p>
      </div>

      <div className="flex-1 flex items-center gap-2">
        <p
          className={`flex-1 text-black text-base leading-[160%] ${
            isTransactionLeave ? "text-red" : "text-green-action"
          }`}
        >
          {isTransactionLeave && <span className="text-red"> - </span>}
          {formatterCurrency.format(transaction.price)}
        </p>
        <p className=" flex-1 text-black text-base leading-[160%]">
          {transaction.category}
        </p>
        <p className="text-black text-base leading-[160%]">
          {formatterDate.format(new Date(transaction.created_at))}
        </p>
      </div>
    </div>
  );
}
