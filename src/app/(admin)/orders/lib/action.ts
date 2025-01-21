"use server";
import { get } from "@/fetch/methods";

export async function getOrders() {
  try {
    const orders = await get("/orders");
    return { orders, error: undefined, isSuccess: true };
  } catch (error) {
    console.log("getOrders", error);
    return { orders: null, error, isSuccess: false };
  }
}

export async function getOrder(id: number) {
  try {
    const order = await get(`/orders/${id}`);
    return {
      order,
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { order: null, error, isSuccess: false };
  }
}
