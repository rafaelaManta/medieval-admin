"use client";
import { Table } from "@/components";
import { Main } from "@/templates";
import { useDelete } from "@/hooks/useDelete";
import { deleteOrder } from "@/app/(admin)/orders/lib/action";
import { orderColumns } from "@/app/(admin)/orders/lib/config";
import type { PageScreenContentProps } from "@/lib/types";

export default function PageScreenContent({
  data,
  error,
}: PageScreenContentProps) {
  const {
    onSubmitButtonPress,
    error: deleteError,
    isSuccess: deleteSuccess,
  } = useDelete(deleteOrder);

  return (
    <Main error={error || deleteError} isSuccess={deleteSuccess}>
      <Table
        editLink={"#"}
        columns={orderColumns}
        data={data}
        deleteButtonPressAction={(id: number) => onSubmitButtonPress(id)}
      />
    </Main>
  );
}
