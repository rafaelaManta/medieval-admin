"use server";
import { get } from "@/fetch/methods";
import type { IOrder, OrdersType } from "@/app/(admin)/orders/lib/types";
import {ApiError} from "@/lib/types";

export async function getOrders() {
  try {
    const orders: OrdersType = await get("/orders");
    return { orders, isSuccess: true };
  } catch (error) {
    console.log("getOrders", error);
    return { orders:[], error: error as ApiError, isSuccess: false };
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
    return { order:{},error: error as ApiError, isSuccess: false };
  }
}
