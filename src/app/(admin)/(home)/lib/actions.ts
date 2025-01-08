"use server";
import { get } from "@/fetch/methods";

export async function getTodayOrdersByStatus(status: string) {
  try {
    const todayOrders = await get(`/admin/orders/today/${status}`);
    return { todayOrders, error: undefined, isSuccess: true };
  } catch (error) {
    console.log("getTodayOrdersByStatus", error);
    return { todayOrders: null, error, isSuccess: false };
  }
}
