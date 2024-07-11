import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(5, { message: "Passwrd number must be at least 5 characters long" }),
});
