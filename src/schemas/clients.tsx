import { z } from "zod";

export const formClientSchema = z.object({
  name: z.string({ message: "Nome é obrigatório" }).min(3),
  email: z.string({ message: "Email é obrigatório" }).email(),
  whatsapp: z.string({ message: "Whatsapp é obrigatório" }),
  active: z.boolean().default(true),
});

export const formHangTagsSchema = z.object({
  name: z.string(),
  color: z.string().default("#000000"),
});
