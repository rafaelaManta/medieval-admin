"use client";
import { Table } from "@/components";
import { Main } from "@/templates";
import { orderColumns } from "@/app/(admin)/orders/lib/config";
import type { PageScreenContentProps } from "@/lib/types";

export default function PageScreenContent({
  data,
  error,
}: PageScreenContentProps) {
  return (
    <Main error={error}>
      <Table columns={orderColumns} data={data} displayLink={"/orders/order"} />
    </Main>
  );
}
