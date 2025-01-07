"use server";

import { del, get, post, put } from "@/fetch/methods";
import { revalidatePath } from "next/cache";
import type { WaiterFormData } from "@/app/(admin)/waiters/lib/types";
import { matchApiDataWithFields } from "@/lib/formatters";
import { waitersFields } from "@/app/(admin)/waiters/lib/config";

export const getWaiters = async () => {
  try {
    const waiters = await get("/admin/waiters");
    return { waiters, error: undefined, isSuccess: true };
  } catch (error) {
    return { waiters: null, error, isSuccess: false };
  }
};

export const deleteWaiter = async (id: number) => {
  try {
    await del(`/admin/waiters/${id}`);
    return { error: undefined, isSuccess: true };
  } catch (error) {
    return { error, isSuccess: false };
  } finally {
    revalidatePath("/waiters");
  }
};

export async function createWaiter(data: WaiterFormData) {
  try {
    const newWaiter = await post("/admin/waiters", data);
    return { newWaiter, error: undefined, isSuccess: true };
  } catch (error) {
    return { newWaiter: null, error, isSuccess: false };
  } finally {
    revalidatePath("/waiters");
  }
}
export const updateWaiter = async (data: WaiterFormData, id: number) => {
  try {
    const updatedWaiter = await put(`/admin/waiters/${id}`, data);
    return {
      updatedWaiter,
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    console.log("admjasdmdfsdmf", error);
    return { error, isSuccess: false };
  } finally {
    revalidatePath(`/waiters `);
  }
};

export const getWaiter = async (id: number) => {
  try {
    const waiter = await get(`/admin/waiters/${id}`);
    return {
      waiter: matchApiDataWithFields(waitersFields, waiter),
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { waiter: null, error, isSuccess: false };
  }
};
