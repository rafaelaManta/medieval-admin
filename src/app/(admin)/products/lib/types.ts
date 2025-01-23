import { z } from "zod";
import { productsSchema } from "@/app/(admin)/products/lib/schema";
import { ApiError } from "@/lib/types";

export type ProductsFormData = z.infer<typeof productsSchema>;

export type ProductsType = {
  name: string;
  price: string;
  description: string;
  price_takeaway: string;
  in_stock: boolean;
  tags: { tag: string }[];
};

export type CreateProductResponse = {
  newProduct: ProductsType | null;
  error: ApiError | undefined;
  isSuccess: boolean;
};
