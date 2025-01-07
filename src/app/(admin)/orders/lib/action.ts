"use server";

import { revalidatePath } from "next/cache";
import { del, get, post, put } from "@/fetch/methods";
import { matchApiDataWithFields } from "@/lib/formatters";

export async function getOrders() {
  try {
    const orders = await get("/orders");
    return { orders, error: undefined, isSuccess: true };
  } catch (error) {
    return { orders: null, error, isSuccess: false };
  }
}

export async function getOrder(id: number) {
  try {
    const order = await get(`/order${id}`);
    return {
      // @ts-ignore
      table: matchApiDataWithFields(orderFields, order),
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { order: null, error, isSuccess: false };
  }
}

// export async function createOrder(data: OrdersFormData) {
//   try {
//     const newOrder = await post("/orders", data);
//     return { newOrder, error: undefined };
//   } catch (error) {
//     return { newOrder: null, error };
//   } finally {
//     revalidatePath("/orders");
//   }
// }
//
// export const updateOrder = async (data: OrdersFormData, id: number) => {
//   try {
//     const updatedOrder = await put(`/orders/${id}`, data);
//     return {
//       updatedOrder,
//       error: undefined,
//     };
//   } catch (error) {
//     return { updatedOrder: null, error };
//   } finally {
//     revalidatePath(`/orders`);
//   }
// };

export const deleteOrder = async (id: number) => {
  try {
    await del(`/order${id}`);
    return { error: undefined };
  } catch (error) {
    return { error };
  } finally {
    revalidatePath("/orders");
  }
};
