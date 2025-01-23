"use client";
import { deleteTable } from "@/app/(admin)/tables/lib/actions";
import { Table } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { tablesColumns } from "@/app/(admin)/tables/lib/config";
import { useDelete } from "@/hooks/useDelete";
import type {ApiError} from "@/lib/types";

export default function TablesContent({
  data,
  error,
}: {
  data: {title: string;  order: number;}[]
  error: ApiError | undefined,
}) {
  const {
    onSubmitButtonPress,
    error: deleteError,
    isSuccess: deleteSuccess,
  // @ts-ignore
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
