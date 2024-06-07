import { z } from "zod";

export const filterSchema = z.object({
  initialDate: z.date().optional(),
  finalDate: z.date().optional(),
});

export const formCategorySchema = z.object({
  name: z.string().min(3),
  order: z.string(),
  active: z.boolean().default(false).optional(),
});
