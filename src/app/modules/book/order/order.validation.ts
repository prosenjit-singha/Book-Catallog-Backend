import { z } from "zod";

export const orderSchema = z.object({
  orderedBooks: z
    .object({
      bookId: z.string().trim(),
      quantity: z.number().int().positive(),
    })
    .array()
    .min(1),
});
