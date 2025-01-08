"use server";
import { get } from "@/fetch/methods";

export async function getCurrentUser() {
  try {
    const user = await get("/admin/users/current");
    return { user, error: undefined, isSuccess: true };
  } catch (error) {
    return { user: null, error, isSuccess: false };
  }
}
