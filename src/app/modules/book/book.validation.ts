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

const stringToFloat = z
  .string()
  .transform((value) => parseFloat(value))
  .refine((value) => (isNaN(value) ? false : true), "Number expected");

const stringToInt = z
  .string()
  .transform((value) => parseInt(value))
  .refine((value) => (isNaN(value) ? false : true), "Number expected");

const sortOrder = ["asc", "desc"];

export const getAllBook = z.object({
  query: z
    .object({
      minPrice: stringToFloat,
      maxPrice: stringToFloat,
      category: z.string(),
      search: z.string(),
      page: stringToInt,
      size: stringToInt,
      sortOrder: z.enum(sortOrder as [string, ...string[]]),
      sortBy: z.string(),
    })
    .partial(),
});
