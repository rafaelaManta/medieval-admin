"use client";
import { Table } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import type { ApiError, PageScreenContentProps } from "@/lib/types";
import { useDelete } from "@/hooks/useDelete";
import { waitersColumns } from "@/app/(admin)/waiters/lib/config";
import { deleteWaiter } from "@/app/(admin)/waiters/lib/actions";

export default function WaitersContent({
  data,
  error,
}: PageScreenContentProps) {
  const {
    onSubmitButtonPress,
    error: deleteError,
    isSuccess: deleteSuccess,
  } = useDelete(deleteWaiter);

  return (
    <Main
      error={error || deleteError}
      createButtonProps={{
        path: "/waiters/create",
        text: literals.createWaiterButtonText,
      }}
      isSuccess={deleteSuccess}
    >
      <Table
        data={data}
        columns={waitersColumns}
        editLink={"/waiters/edit"}
        deleteButtonPressAction={(id) => onSubmitButtonPress(id)}
      />
    </Main>
  );
}
