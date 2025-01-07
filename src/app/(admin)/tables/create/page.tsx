"use client";
import { useCreate } from "@/hooks/useCreate";
import { Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { tablesSchema } from "../lib/shema";
import { tableFields } from "../lib/config";
import { createTable } from "../lib/actions";
import type { TablesFormData } from "../lib/types";

export default function CreateTable() {
  const { error, isPending, onSubmitButtonPress, isSuccess } =
    useCreate(createTable);
  return (
    <Main error={error} isSuccess={isSuccess}>
      <Form
        schema={tablesSchema}
        formFields={tableFields}
        buttonProps={{ text: literals.createText, isLoading: isPending }}
        // @ts-ignore
        onSubmitAction={(data: TablesFormData) => onSubmitButtonPress(data)}
      />
    </Main>
  );
}
