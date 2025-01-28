"use client";
import { Alert, Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { WaiterFormData } from "@/app/(admin)/waiters/lib/types";
import { waiterSchema } from "@/app/(admin)/waiters/lib/shema";
import { updateWaiter } from "@/app/(admin)/waiters/lib/actions";
import type { ApiError } from "@/lib/types";
import React, { useState, useTransition } from "react";

export default function EditWaiterContent({
  id,
  data,
  error,
}: {
  id: number;
  data: { value: string; id: string }[];
  error: ApiError | undefined;
}) {
  const [isPending, startTransition] = useTransition();
  const [updatedError, setUpdatedError] = useState<ApiError | undefined>();
  const [open, setOpen] = React.useState(false);
  const [alertContent, setAlertContent] = useState<string>("");

  const onSubmitButtonPress = (data: WaiterFormData, id: number) => {
    startTransition(async () => {
      setOpen(false);
      setUpdatedError(undefined);
      const { error: apiError, updatedWaiter } = await updateWaiter(id);
      if (updatedWaiter && updatedWaiter?.passcode) {
        setOpen(true);
        setAlertContent(
          literals.waiterPinText.replace("%", updatedWaiter.passcode),
        );
      }
      setUpdatedError(apiError as ApiError);
    });
  };

  return (
    <Main
      error={error || updatedError}
      createButtonProps={{
        path: "/waiters/create",
        text: literals.createWaiterButtonText,
      }}
    >
      <Form
        disabled
        formFields={data}
        schema={waiterSchema}
        buttonProps={{
          text: literals.waiterForgotPasswordText,
          isLoading: isPending,
        }}
        onSubmitAction={(data) =>
          onSubmitButtonPress(data as WaiterFormData, id)
        }
      />
      <Alert
        open={open}
        description={alertContent}
        onOpenChange={setOpen}
        title={literals.successText}
      />
    </Main>
  );
}
