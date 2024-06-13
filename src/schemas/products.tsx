import { z } from "zod";

export const formProductSchema = z.object({
  image: z.any(),
  category: z.string(),
  name: z.string().min(3),
  price: z.string(),
  description: z.string().optional(),
  reference: z.string().optional(),
  stock: z.number().default(1),
  hasVariation: z.boolean().default(false),
  activate: z.boolean().default(true),
  highlight: z.boolean().default(false),
  height: z.string(),
  width: z.string(),
  weight: z.string(),
  depth: z.string(),
});

export const formCategorySchema = z.object({
  name: z.string().min(3),
  order: z.string(),
  active: z.boolean().default(false).optional(),
});

export const formVariationSchema = z.object({
  name: z.string().min(1),
});
