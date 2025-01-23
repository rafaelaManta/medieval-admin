"use client";
import { useCreate } from "@/hooks/useCreate";
import { Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { productsSchema } from "@/app/(admin)/products/lib/schema";
import { productFields } from "@/app/(admin)/products/lib/config";
import {createProduct} from "@/app/(admin)/products/lib/actions";
import type { ProductsFormData} from "@/app/(admin)/products/lib/types";


export default function CreateProduct() {
    const { error, isPending, onSubmitButtonPress, isSuccess } =
  // @ts-ignore
    useCreate(createProduct);

    return (
    <Main error={error} isSuccess={isSuccess}>
      <Form
        schema={productsSchema}
        formFields={productFields}
        buttonProps={{ text: literals.createText, isLoading: isPending }}
        onSubmitAction={(data ) => onSubmitButtonPress(data as ProductsFormData)}
      />
    </Main>
  );
}
