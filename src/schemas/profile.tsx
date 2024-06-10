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
