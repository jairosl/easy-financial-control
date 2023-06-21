export enum TypeTransaction {
  enter = "ENTER",
  leave = "LEAVE",
}

export interface Transaction {
  description: string;
  price: number;
  category: string;
  type: TypeTransaction;
  created_at: string;
}
