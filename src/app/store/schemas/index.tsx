import { z } from "zod";

export const formBannerSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  link: z.string().min(10),
  initialDate: z.date(),
  finalDate: z.date(),
});

export const filterSchema = z.object({
  initialDate: z.date().optional(),
  finalDate: z.date().optional(),
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
