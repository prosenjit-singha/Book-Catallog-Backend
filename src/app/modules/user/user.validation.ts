import { UserRole } from "@prisma/client";
import { z } from "zod";
const role: UserRole[] = ["admin", "customer"];

export const updateUserSchema = z.object({
  body: z
    .object({
      name: z.string().trim(),
      email: z.string().email().trim(),
      password: z.string(),
      role: z.enum(role as [string, ...string[]]),
      contactNo: z.string().trim(),
      address: z.string().trim(),
      profileImg: z.string().trim(),
    })
    .partial(),
});
