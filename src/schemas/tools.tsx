import { z } from "zod";

export const formWhatsappRouterSchema = z.object({
  name: z.string(),
  whatsapp: z.string(),
  description: z.string().optional(),
  message: z.string().optional(),
  link: z.string(),
});

export const formCloudflareSchema = z.object({
  account: z.string(),
  key: z.string(),
});

export const formEncryptedTextSchema = z.object({
  text: z.string(),
});