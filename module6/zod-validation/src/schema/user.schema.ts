import { date, z } from "zod";

export const UserSchema = z.object({
  name: z.string().min(3).transform(val => val.toUpperCase()),
  age: z.number().min(18, "Age must be at least 18").max(100, "Age must be less than or equal to 100"),
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  phoneNumber: z.string().optional(),
  role: z.enum(["admin", "user", "guest"]).default("guest"),
  address: z.object({
    city: z.string(),
    country: z.string().refine(val => val.startsWith("ETH"), {message: "Must start with ETH"})

  }),
  arraySchema: z.array(
  z.object({
    name: z.string(),
    value: z.number()
  })),
  url: z.url(),
  uuid: z.uuid(),
  birthDate: z.iso.date()

});

