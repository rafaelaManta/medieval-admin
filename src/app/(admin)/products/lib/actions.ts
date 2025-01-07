"use server";

import { revalidatePath } from "next/cache";
import { del, get, post, put } from "@/fetch/methods";
import { ProductsFormData } from "./types";
import { matchApiDataWithFields } from "@/lib/formatters";
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
    const products = await get("/admin/products");
    return { products, error: undefined, isSuccess: true };
  } catch (error) {
    return { products: null, error, isSuccess: false };
  }
}

export async function getProduct(id: number) {
  try {
    const product = await get(`/admin/products/${id}`);
    console.log("product", product);
    return {
      // @ts-ignore
      product: matchApiDataWithFields(productFields, product),
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { product: null, error, isSuccess: false };
  }
}

export async function createProduct(data: ProductsFormData) {
  try {
    const newProduct = await post("/admin/products", data);
    return { newProduct, error: undefined, isSuccess: true };
  } catch (error) {
    return { newProduct: null, error, isSuccess: false };
  } finally {
    revalidatePath("/products");
  }
}

export const updateProduct = async (data: ProductsFormData, id: number) => {
  try {
    const updatedProduct = await put(`/admin/products/${id}`, data);
    return {
      updatedProduct,
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { updatedProduct: null, error, isSuccess: false };
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
