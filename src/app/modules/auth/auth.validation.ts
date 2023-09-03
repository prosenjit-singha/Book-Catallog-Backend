import type { UserRole } from "@prisma/client";
import z from "zod";

const role: UserRole[] = ["admin", "customer"];

const signUpSchema = z.object({
  body: z.object({
    name: z.string().trim(),
    email: z.string().email().trim(),
    password: z.string(),
    role: z.enum(role as [string, ...string[]]),
    contactNo: z.string().trim(),
    address: z.string().trim(),
    profileImg: z.string().trim(),
  }),
});

const loginCredential = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string(),
  }),
});

export default { signUpSchema, loginCredential };
