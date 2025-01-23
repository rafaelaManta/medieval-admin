"use client";
import { updateTable } from "@/app/(admin)/tables/lib/actions";
import { useUpdate } from "@/hooks/useUpdate";
import { Form } from "@/components";
import { Main } from "@/templates";
import { tablesSchema } from "@/app/(admin)/tables/lib/shema";
import { literals } from "@/lib/literals";
import type { TablesFormData } from "@/app/(admin)/tables/lib/types";
import type { PageScreenContentProps } from "@/lib/types";

export default function EditTableContent({
  id,
  data,
  error,
}: PageScreenContentProps) {
  const {
    onSubmitButtonPress,
    error: updateError,
    isPending,
    isSuccess: updateSuccess,
  } = useUpdate(updateTable);
  return (
    <Main
      error={error || updateError}
      createButtonProps={{
        path: "/tables/create",
        text: literals.createTableButtonText,
      }}
      isSuccess={updateSuccess}
    >
      <Form
        formFields={data}
        schema={tablesSchema}
        buttonProps={{ text: literals.updateText, isLoading: isPending }}
        // @ts-ignore
        onSubmitAction={(data: TablesFormData) => onSubmitButtonPress(data, id)}
      />
    </Main>
  );
}
