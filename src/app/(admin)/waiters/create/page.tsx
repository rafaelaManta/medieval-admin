"use client";
import { WaiterFormData } from "@/app/(admin)/waiters/lib/types";
import { Alert, Form } from "@/components";
import { Main } from "@/templates";
import { waiterSchema } from "@/app/(admin)/waiters/lib/shema";
import { waitersFields } from "@/app/(admin)/waiters/lib/config";
import { literals } from "@/lib/literals";
import { createWaiter } from "@/app/(admin)/waiters/lib/actions";
import React, { useState, useTransition } from "react";
import { ApiError } from "@/lib/types";

export default function CreateWaiter() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<ApiError | undefined>();
  const [open, setOpen] = React.useState(false);
  const [alertContent, setAlertContent] = useState<string>("");

  const onSubmitButtonPress = (data: WaiterFormData) => {
    startTransition(async () => {
      setOpen(false);
      setError(undefined);
      const { error: apiError, newWaiter } = await createWaiter(data);
      if (newWaiter && newWaiter?.passcode) {
        setOpen(true);
        setAlertContent(
          literals.waiterPinText.replace("%", newWaiter.passcode),
        );
      }
      setError(apiError as ApiError);
    });
  };

  return (
    <Main error={error}>
      <Form
        schema={waiterSchema}
        formFields={waitersFields}
        buttonProps={{ text: literals.createText, isLoading: isPending }}
        onSubmitAction={(data) => onSubmitButtonPress(data as WaiterFormData)}
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
