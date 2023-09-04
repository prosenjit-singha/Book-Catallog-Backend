import { dateRegex } from "../constants";
import { z } from "zod";

export const dateSchema = z
  .string()
  .regex(dateRegex, "Invalid date format! Expected YYYY-MM-DD")
  .transform((value) => new Date(value));
