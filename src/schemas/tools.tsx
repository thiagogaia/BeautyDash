import { z } from "zod";

export const formWhatsappRouterSchema = z.object({
  name: z.string(),
  whatsapp: z.string(),
  description: z.string().optional(),
  message: z.string().optional(),
  link: z.string(),
});
