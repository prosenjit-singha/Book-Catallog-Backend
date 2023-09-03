import { dateSchema } from "@/validations";
import { z } from "zod";

const book = z.object({
  title: z.string().trim(),
  author: z.string().trim(),
  price: z.number(),
  genre: z.string(),
  publicationDate: dateSchema,
  categoryId: z.string().trim(),
});

export const createBook = z.object({
  body: book,
});

export const updateBook = z.object({
  body: book.partial(),
});
