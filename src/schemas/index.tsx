import { z } from "zod";

export const filterSchema = z.object({
  initialDate: z.date().optional(),
  finalDate: z.date().optional(),
});

export const addressSchema = z.object({
  cep: z.string({ message: "CEP inválido" }),
  address: z.string({ message: "Endereço inválido" }),
  district: z.string({ message: "Bairro inválido" }),
  number: z.string({ message: "Número inválido" }),
  complement: z.string().optional(),
  state: z.string({ message: "Estado inválido" }),
  city: z.string({ message: "Cidade inválida" }),
});
