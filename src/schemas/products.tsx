import { z } from "zod";

export const formCategorySchema = z.object({
  name: z.string().min(3),
  order: z.string(),
  active: z.boolean().default(false).optional(),
});

export const formVariationSchema = z.object({
  name: z.string().min(1),
});
