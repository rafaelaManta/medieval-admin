import { z } from "zod";

const tag = z.object({
  tag: z.string(),
});

export const productsSchema = z.object({
  name: z.string(),
  price: z.string(),
  description: z.string(),
  price_takeaway: z.string(),
  in_stock: z.boolean(),
  tags: z.array(tag),
});
