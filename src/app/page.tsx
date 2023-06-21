import { UserButton } from "@clerk/nextjs";

import { Card } from "@/components/card";
import { Transaction } from "@/domain/transactions";
import { Header } from "@/components/header";

async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch("http://localhost:3000/transactions", {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const transactions = await getTransactions();

  return (
    <div className="w-full h-full">
      {/* <UserButton afterSignOutUrl="/" /> */}
      <Header />
      <div className="max-w-3xl flex flex-col mx-auto">
        {transactions.map((transactions, index) => {
          return (
            <Card
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
  );
}
