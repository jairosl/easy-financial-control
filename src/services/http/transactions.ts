import { Transaction } from "@/domain";

export async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch("http://localhost:3000/transactions", {
    cache: "no-cache",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function createTransaction(
  transaction: Omit<Transaction, "created_at">
): Promise<void> {
  const date = new Date(Date.now()).toISOString();
  const res = await fetch("http://localhost:3000/transactions", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    method: "POST",
    body: JSON.stringify({
      ...transaction,
      created_at: date,
    }),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
