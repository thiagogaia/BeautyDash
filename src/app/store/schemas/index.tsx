import { z } from "zod";

export const formBannerSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(5),
  link: z.string().min(10),
  initialDate: z.date(),
  finalDate: z.date(),
});
