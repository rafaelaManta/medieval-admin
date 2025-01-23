"use server";
import { revalidatePath } from "next/cache";
import { get, put } from "@/fetch/methods";
import type { OrderProduct } from "@/app/(admin)/(home)/lib/types";
import type { ApiError } from "@/lib/types";

export async function getTodayOrdersByStatus(status: string) {
  try {
    const todayOrders: OrderProduct[] = await get(
      `/admin/orders/today/${status}`,
    );
    return { todayOrders, error: undefined, isSuccess: true };
  } catch (error) {
    console.log("getTodayOrdersByStatus", error);
    return { todayOrders: [], error: error as ApiError, isSuccess: false };
  }
}

export async function updateTodayOrderStatus(id: number) {
  try {
    await put(`/admin/order_products/advance_status/${id}`, {});
    return { error: undefined, isSuccess: true };
  } catch (error) {
    return { error: error as ApiError, isSuccess: false };
  } finally {
    revalidatePath("/");
  }
}
