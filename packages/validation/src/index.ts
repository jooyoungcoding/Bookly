import { z } from "zod";
export const bookSchema = z.object({
  id: z.string().uuid(),
  title: z.string().trim().min(1),
  format: z.enum(["pdf", "epub"]),
});
