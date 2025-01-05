import { z } from "zod";
import { loginSchema } from "./schema";

export type LoginType = z.infer<typeof loginSchema>;
