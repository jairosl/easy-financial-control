import { Transaction } from "@/domain/transactions";
import { UserButton } from "@clerk/nextjs";

async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch("http://localhost:3000/transactions");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const transactions = await getTransactions();

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
