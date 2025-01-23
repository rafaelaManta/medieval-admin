"use client";
import { Table } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { useDelete } from "@/hooks/useDelete";
import { waitersColumns } from "@/app/(admin)/waiters/lib/config";
import { deleteWaiter } from "@/app/(admin)/waiters/lib/actions";
import {WaiterFormData} from "@/app/(admin)/waiters/lib/types";
import type { ApiError } from "@/lib/types";

export default function WaitersContent({
  data,
  error,
}:{
  data: WaiterFormData[],
  error: ApiError | undefined,
}) {
  const {
    onSubmitButtonPress,
    error: deleteError,
    isSuccess: deleteSuccess,
  // @ts-ignore
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
