"use client";
import { Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { WaiterFormData } from "@/app/(admin)/waiters/lib/types";
import { waiterSchema } from "@/app/(admin)/waiters/lib/shema";
import { PageScreenContentProps } from "@/lib/types";
import { useUpdate } from "@/hooks/useUpdate";
import { updateWaiter } from "../../lib/actions";

export default function EditWaiterContent({
  id,
  data,
  error,
}: PageScreenContentProps) {
  const {
    error: updateError,
    isPending,
    onSubmitButtonPress,
    isSuccess: updateSuccess,
  } = useUpdate(updateWaiter);
  console.log("dxfsfsd", updateSuccess, updateError);
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
        // @ts-ignore
        onSubmitAction={(data: WaiterFormData) => onSubmitButtonPress(data, id)}
      />
    </Main>
  );
}
