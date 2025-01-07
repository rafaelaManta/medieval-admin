"use client";
import { WaiterFormData } from "@/app/(admin)/waiters/lib/types";
import { Form } from "@/components";
import { Main } from "@/templates";
import { waiterSchema } from "@/app/(admin)/waiters/lib/shema";
import { waitersFields } from "@/app/(admin)/waiters/lib/config";
import { literals } from "@/lib/literals";
import { createWaiter } from "@/app/(admin)/waiters/lib/actions";
import { useCreate } from "@/hooks/useCreate";

export default function CreateWaiter() {
  const { error, isPending, onSubmitButtonPress, isSuccess } =
    useCreate(createWaiter);

  return (
    <Main error={error} isSuccess={isSuccess}>
      <Form
        schema={waiterSchema}
        formFields={waitersFields}
        buttonProps={{ text: literals.createText, isLoading: isPending }}
        // @ts-ignore
        onSubmitAction={(data: WaiterFormData) => onSubmitButtonPress(data)}
      />
    </Main>
  );
}
