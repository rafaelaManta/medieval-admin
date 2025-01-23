"use client";
import { Table } from "@/components";
import { Main } from "@/templates";
import { orderColumns } from "@/app/(admin)/orders/lib/config";
import type { ApiError } from "@/lib/types";
import { OrdersType } from "@/app/(admin)/orders/lib/types";

export default function OrdersContent({
  data,
  error,
}: {
  data: OrdersType;
  error: ApiError | undefined;
}) {
  return (
    <Main error={error}>
      <Table columns={orderColumns} data={data} displayLink={"/orders/order"} />
    </Main>
  );
}
