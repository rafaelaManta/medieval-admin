"use client";
import { deleteTable } from "@/app/(admin)/tables/lib/actions";
import { Table } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import type { PageScreenContentProps } from "@/lib/types";
import { tablesColumns } from "@/app/(admin)/tables/lib/config";
import { useDelete } from "@/hooks/useDelete";

export default function PageScreenContent({
  data,
  error,
}: PageScreenContentProps) {
  const {
    onSubmitButtonPress,
    error: deleteError,
    isSuccess: deleteSuccess,
  } = useDelete(deleteTable);

  return (
    <Main
      error={error || deleteError}
      createButtonProps={{
        path: "/tables/create",
        text: literals.createTableButtonText,
      }}
      isSuccess={deleteSuccess}
    >
      <Table
        editLink={"/tables/edit"}
        columns={tablesColumns}
        data={data}
        deleteButtonPressAction={(id: number) => onSubmitButtonPress(id)}
      />
    </Main>
  );
}
