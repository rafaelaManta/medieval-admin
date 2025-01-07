"use client";
import { useCreate } from "@/hooks/useCreate";
import { Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { productsSchema } from "@/app/(admin)/products/lib/schema";
import { productFields } from "@/app/(admin)/products/lib/config";
import { createProduct } from "../lib/actions";
import type { ProductsFormData } from "../lib/types";

export default function CreateProduct() {
  const { error, isPending, onSubmitButtonPress, isSuccess } =
    useCreate(createProduct);
  return (
    <Main error={error} isSuccess={isSuccess}>
      <Form
        schema={productsSchema}
        formFields={productFields}
        buttonProps={{ text: literals.createText, isLoading: isPending }}
        // @ts-ignore
        onSubmitAction={(data: ProductsFormData) => onSubmitButtonPress(data)}
      />
    </Main>
  );
}
