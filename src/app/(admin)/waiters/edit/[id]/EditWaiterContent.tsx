"use client";
import { Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { WaiterFormData } from "@/app/(admin)/waiters/lib/types";
import { waiterSchema } from "@/app/(admin)/waiters/lib/shema";
import { useUpdate } from "@/hooks/useUpdate";
import {updateWaiter} from "@/app/(admin)/waiters/lib/actions";
import type {ApiError, } from "@/lib/types";

export default function EditWaiterContent({
  id,
  data,
  error,
}: {
  id: number;
  data:  { value: string, id: string }[];
  error: ApiError | undefined;
}) {
  const {
    error: updateError,
    isPending,
    onSubmitButtonPress,
    isSuccess: updateSuccess,
  // @ts-ignore
  } = useUpdate(updateWaiter);

  return (
    <Main
      error={error || updateError}
      createButtonProps={{
        path: "/waiters/create",
        text: literals.createWaiterButtonText,
      }}
      isSuccess={updateSuccess}
    >
      <Form
        formFields={data}
        schema={waiterSchema}
        buttonProps={{ text: literals.updateText, isLoading: isPending }}
        onSubmitAction={(data) => onSubmitButtonPress(data as WaiterFormData, id)}
      />
    </Main>
  );
}
