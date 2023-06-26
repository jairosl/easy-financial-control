import { TypeTransaction } from "@/domain";
import { z } from "zod";

export const CreateTransactionSchema = z.object({
  description: z
    .string()
    .min(2, "A descrição deve ter pelo menos 2 caracteres"),
  price: z
    .string()
    .refine((value) => Number(value) !== 0, "O valor deve ser maior que 0")
    .transform((value) => Number(value)),
  category: z.string().min(2, "A categoria deve ter pelo menos 2 caracteres"),
  type: z
    .enum([TypeTransaction.enter, TypeTransaction.leave])
    .default(TypeTransaction.enter),
});

export type ICreateTransaction = z.infer<typeof CreateTransactionSchema>;
