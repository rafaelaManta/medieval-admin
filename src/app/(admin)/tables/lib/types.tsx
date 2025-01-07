import { z } from "zod";
import { tablesSchema } from "./shema";

export type TablesFormData = z.infer<typeof tablesSchema>;
