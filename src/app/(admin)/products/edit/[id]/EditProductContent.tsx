"use client";
import { useUpdate } from "@/hooks/useUpdate";
import { Form } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import { updateProduct } from "@/app/(admin)/products/lib/actions";
import { productsSchema } from "@/app/(admin)/products/lib/schema";
import { ProductsFormData } from "@/app/(admin)/products/lib/types";
import type { PageScreenContentProps } from "@/lib/types";

export default function EditProductContent({
  id,
  data,
  error,
}: PageScreenContentProps) {
  const {
    onSubmitButtonPress,
    error: updateError,
    isPending,
    isSuccess: updateSuccess,
  } = useUpdate(updateProduct);

  return (
    <Main
      isSuccess={updateSuccess}
      error={error || updateError}
      createButtonProps={{
        path: "/products/create",
        text: literals.createTableButtonText,
      }}
    >
      <Form
        formFields={data}
        schema={productsSchema}
        buttonProps={{ text: literals.updateText, isLoading: isPending }}
        // @ts-ignore
        onSubmitAction={(data: ProductsFormData) =>
          onSubmitButtonPress(data, id)
        }
      />
    </Main>
  );
}
