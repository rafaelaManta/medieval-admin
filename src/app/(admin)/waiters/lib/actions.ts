"use server";

import { del, get, post, put } from "@/fetch/methods";
import { revalidatePath } from "next/cache";
import type { WaiterFormData } from "@/app/(admin)/waiters/lib/types";
import { matchApiDataWithFields } from "@/lib/formatters";
import { waitersFields } from "@/app/(admin)/waiters/lib/config";
import { ApiError } from "@/lib/types";

export const getWaiters = async () => {
  try {
    const waiters: WaiterFormData[] = await get("/admin/waiters");
    return { waiters, error: undefined, isSuccess: true };
  } catch (error) {
    return { waiters: [], error: error as ApiError, isSuccess: false };
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
export const updateWaiter = async (id: number) => {
  try {
    const updatedWaiter = await get(`/admin/waiters/resetpasscode/${id}`);
    return {
      updatedWaiter,
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { error: error as ApiError, isSuccess: false };
  } finally {
    revalidatePath(`/waiters `);
  }
};

export const getWaiter = async (id: number) => {
  try {
    const waiter = await get(`/admin/waiters/${id}`);
    return {
      waiter: matchApiDataWithFields(waitersFields, waiter as WaiterFormData),
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { waiter: [], error: error as ApiError, isSuccess: false };
  }
};
