import { z } from "zod";

export const waiterSchema = z.object({
  name: z.string().min(4),
});
