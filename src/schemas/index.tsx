import { z } from "zod";

export const filterSchema = z.object({
  initialDate: z.date().optional(),
  finalDate: z.date().optional(),
});
