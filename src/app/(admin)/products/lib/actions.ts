"use server";

import { revalidatePath } from "next/cache";
import { del, get, post, put } from "@/fetch/methods";
import { CreateProductResponse, ProductsFormData, ProductsType } from "./types";
import { matchApiDataWithFields } from "@/lib/formatters";
import {ApiError} from "@/lib/types";
// import { productFields } from "../lib/config";

const productFields = [
  {
    name: "name",
    label: "Προϊόν",
    type: "text",
  },
  {
    name: "description",
    label: "Περιγραφή",
    type: "textarea",
  },
  {
    name: "price",
    label: "Κόστος",
    type: "text",
  },
  {
    name: "price_takeaway",
    label: "Takeaway",
    type: "text",
  },
  {
    name: "in_stock",
    label: "Σε Απόθεμα",
    type: "checkbox",
  },
  {
    name: "tags",
    label: "Λεπτομέριες",
    type: "tags",
  },
];

export async function getProducts() {
  try {
    const products:ProductsType[] = await get("/admin/products");
    return { products, error: undefined, isSuccess: true };
  } catch (error) {
    return { products: [], error: error as ApiError, isSuccess: false };
  }
}

export async function getProduct(id: number) {
  try {
    const product = await get(`/admin/products/${id}`);
    return {
      product: matchApiDataWithFields(productFields, product as ProductsType),
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { product: [], error: error as ApiError, isSuccess: false };
  }
}

export async function createProduct(
  data: ProductsFormData,
): Promise<CreateProductResponse> {
  try {
    const newProduct: ProductsType = await post("/admin/products", data);
    return { newProduct, error: undefined, isSuccess: true };
  } catch (error) {
    return { newProduct:null, error: error as ApiError, isSuccess: false };
  } finally {
    revalidatePath("/products");
  }
}

export const updateProduct = async (data: ProductsFormData, id: number) => {
  try {
    const updatedProduct: ProductsType[] = await put(`/admin/products/${id}`, data);
    return {
      updatedProduct,
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { updatedProduct: [], error: error as ApiError, isSuccess: false };
  } finally {
    revalidatePath(`/products`);
  }
};

export const deleteProduct = async (id: number) => {
  try {
    await del(`/admin/products/${id}`);
    return { error: undefined, isSuccess: true };
  } catch (error) {
    return { error, isSuccess: false };
  } finally {
    revalidatePath("/products");
  }
};
