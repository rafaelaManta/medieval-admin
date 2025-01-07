import { z } from "zod";
import { productsSchema } from "@/app/(admin)/products/lib/schema";

export type ProductsFormData = z.infer<typeof productsSchema>;
