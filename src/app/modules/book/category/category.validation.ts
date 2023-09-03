import z from "zod";

const category = z.object({
  title: z.string().trim(),
});

export const create = z.object({ body: category });
export const update = z.object({ body: category.partial() });
