import { UserButton } from "@clerk/nextjs";

import { Header } from "@/components/header";
import { Summary } from "@/components/summary";
import { getTransactions } from "@/services/http/transactions";
import { CardList } from "@/components/cards";
import { TypeTransaction } from "@/domain";

export default async function Home() {
  const transactions = await getTransactions();

  const comeIn = transactions.reduce((acc, transaction) => {
    if (transaction.type === TypeTransaction.enter) {
      return (acc += transaction.price);
    }

    return acc;
  }, 0);

  const comeOut = transactions.reduce((acc, transaction) => {
    if (transaction.type === TypeTransaction.leave) {
      return (acc += transaction.price);
    }

    return acc;
  }, 0);

  return (
    <div className="min-w-screen min-h-screen  bg-green">
      {/* <UserButton afterSignOutUrl="/" /> */}
      <Header />
      <div className="mt-[-4rem] px-20">
        <Summary comeIn={comeIn} comeOut={comeOut} />
      </div>
      <div className="h-full w-screen">
        <div className="w-full flex flex-col mx-auto pt-32 px-20 gap-2">
          {transactions.map((transactions, index) => {
            return (
              <CardList
                category={transactions.category}
                created_at={transactions.created_at}
                description={transactions.description}
                price={transactions.price}
                type={transactions.type}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
