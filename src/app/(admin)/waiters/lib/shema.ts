import { z } from "zod";

export const waiterSchema = z.object({
  name: z.string(),
  passcode: z.string().min(4).max(4).optional().or(z.literal("")),
});
