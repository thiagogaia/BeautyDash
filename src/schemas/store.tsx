import { z } from "zod";

export const formBannerSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  link: z.string().min(10),
  initialDate: z.date(),
  finalDate: z.date(),
});

export const formSellerSchema = z.object({
  name: z.string().min(3),
  whatsapp: z.string().min(5),
  email: z.string().email(),
});

export const formSettingsSchema = z.object({
  name: z.string().min(3),
  whatsapp: z.string().min(5),
});

export const formImportDataSchema = z.object({
  type: z.string().default("Produtos"),
  file: z.string(),
});
