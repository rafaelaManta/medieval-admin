"use server";
import { get, put } from "@/fetch/methods";
import type { IOrder, OrdersType } from "@/app/(admin)/orders/lib/types";

export async function getOrders() {
  try {
    const orders: OrdersType = await get("/orders");
    return { orders, isSuccess: true };
  } catch (error) {
    console.log("getOrders", error);
    return { error };
  }
}

export async function getOrder(id: number) {
  try {
    const order: IOrder = await get(`/orders/${id}`);
    return {
      order,
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { error, isSuccess: false };
  }
}
