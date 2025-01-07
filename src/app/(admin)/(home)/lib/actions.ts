"use server";

import { revalidatePath } from "next/cache";
import { get } from "@/fetch/methods";

export async function getAllTodayOrders() {
  try {
    const todayOrders = await get("/todayOrders");
    return { todayOrders, error: undefined, isSuccess: true };
  } catch (error) {
    return { todayOrders: null, error, isSuccess: false };
  }
}

export async function getTodayOrdersByStatus(status: string) {
  try {
    const todayOrders = await get(`/todayOrders&status${status}`);
    return { todayOrders, error: undefined, isSuccess: true };
  } catch (error) {
    return { todayOrders: null, error, isSuccess: false };
  }
}
