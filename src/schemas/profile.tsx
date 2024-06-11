import { z } from "zod";

export const formEditPasswordSchema = z
  .object({
    currentPassword: z.string({ message: "Senha inválida" }),
    newPassword: z.string({ message: "" }),
    confirmPassword: z.string({ message: "" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });

export const formMyStoreSchema = z.object({
  name: z.string(),
  whatsapp: z.string(),
  category: z.string(),
  url: z.string(),
});

export const formMyDataSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().optional(),
});
