import { z } from "zod";
import { waiterSchema } from "@/app/(admin)/waiters/lib/shema";

export type WaiterFormData = z.infer<typeof waiterSchema>;
