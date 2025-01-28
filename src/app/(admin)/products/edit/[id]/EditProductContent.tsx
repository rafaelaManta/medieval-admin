"use client";
import { useUpdate } from "@/hooks/useUpdate";
import { Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { updateProduct } from "@/app/(admin)/products/lib/actions";
import { productsSchema } from "@/app/(admin)/products/lib/schema";
import type { ProductsFormData } from "@/app/(admin)/products/lib/types";
import type { ApiError } from "@/lib/types";

export default function EditProductContent({
  id,
  data,
  error,
  disabledForm = false,
}: {
  id: number;
  data: { value: string; id: string }[];
  error: ApiError | undefined;
  disabledForm: boolean;
}) {
  const {
    onSubmitButtonPress,
    error: updateError,
    isPending,
    isSuccess: updateSuccess,
    // @ts-ignore
  } = useUpdate(updateProduct);
  console.log("editproduct", disabledForm);
  return (
    <Main
      isSuccess={updateSuccess}
      error={error || updateError}
      createButtonProps={{
        path: "/products/create",
        text: literals.createProductsButtonText,
      }}
    >
      <Form
        disabled={disabledForm}
        formFields={data}
        schema={productsSchema}
        buttonProps={{ text: literals.updateText, isLoading: isPending }}
        onSubmitAction={(data) =>
          onSubmitButtonPress(data as ProductsFormData, id)
        }
      />
    </Main>
  );
}
