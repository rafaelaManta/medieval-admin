"use server";

import { revalidatePath } from "next/cache";
import { del, get, post, put } from "@/fetch/methods";
import type { TablesFormData } from "./types";
import { matchApiDataWithFields } from "@/lib/formatters";
import { tableFields } from "@/app/(admin)/tables/lib/config";
import {ApiError} from "@/lib/types";

export async function getTables() {
  try {
    const tables: TablesFormData[] = await get("/admin/tables");
    return { tables, error: undefined, isSuccess: true };
  } catch (error) {
    return { tables: [], error:error as ApiError, isSuccess: false };
  }
}

export async function getTable(id: number) {
  try {
    const table = await get(`/admin/tables/${id}`);
    return {
      table: matchApiDataWithFields(tableFields, table as TablesFormData),
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { table: [], error: error as ApiError, isSuccess: false };
  }
}

export async function createTable(data: TablesFormData) {
  try {
    const newTable: TablesFormData = await post("/admin/tables", data);
    return { newTable, error: undefined, isSuccess: true };
  } catch (error) {
    return { newTable: null, error, isSuccess: false };
  } finally {
    revalidatePath("/tables");
  }
}

export const updateTable = async (data: TablesFormData, id: number) => {
  try {
    const updatedTable = await put(`/admin/tables/${id}`, data);
    return {
      updatedTable,
      error: undefined,
      isSuccess: true,
    };
  } catch (error) {
    return { updatedTable: null, error, isSuccess: false };
  } finally {
    revalidatePath(`/tables`);
  }
};

export const deleteTable = async (id: number) => {
  try {
    await del(`/admin/tables/${id}`);
    return { error: undefined, isSuccess: true };
  } catch (error) {
    return { error, isSuccess: false };
  } finally {
    revalidatePath("/tables");
  }
};
