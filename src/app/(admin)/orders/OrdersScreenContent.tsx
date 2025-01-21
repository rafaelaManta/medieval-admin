"use client";
import { Table } from "@/components";
import { Main } from "@/templates";
import { orderColumns } from "@/app/(admin)/orders/lib/config";
import type { ApiError, PageScreenContentProps } from "@/lib/types";
import { OrdersType } from "@/app/(admin)/orders/lib/types";

export default function OrdersScreenContent({
  data,
  error,
}: {
  data: OrdersType;
  error: ApiError;
}) {
  return (
    <Main error={error}>
      <Table columns={orderColumns} data={data} displayLink={"/orders/order"} />
    </Main>
  );
}
