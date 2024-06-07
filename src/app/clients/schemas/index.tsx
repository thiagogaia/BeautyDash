import { z } from "zod";

export const filterSchema = z.object({
  initialDate: z.date().optional(),
  finalDate: z.date().optional(),
});

export const formClientSchema = z.object({
  name: z.string({ message: "Nome é obrigatório" }).min(3),
  email: z.string({ message: "Email é obrigatório" }).email(),
  whatsapp: z.string({ message: "Whatsapp é obrigatório" }),
  active: z.boolean().default(true).optional(),
});
