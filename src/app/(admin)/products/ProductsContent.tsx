"use client";
import { Table } from "@/components";
import { Main } from "@/templates";
import { literals } from "@/lib/literals";
import type {ApiError} from "@/lib/types";
import { useDelete } from "@/hooks/useDelete";
import { deleteProduct } from "@/app/(admin)/products/lib/actions";
import { productColumns } from "@/app/(admin)/products/lib/config";
import {ProductsType} from "@/app/(admin)/products/lib/types";

export default function ProductsContent({
  data,
  error,
}: {
  data: ProductsType[],
  error: ApiError | undefined
}) {
  const {
    onSubmitButtonPress,
    error: deleteError,
    isSuccess: deleteSuccess,
    // @ts-ignore
  } = useDelete(deleteProduct);

  return (
    <Main
      error={error || deleteError}
      createButtonProps={{
        path: "/products/create",
        text: literals.createProductsButtonText,
      }}
      isSuccess={deleteSuccess}
    >
      <Table
        editLink={"/products/edit"}
        columns={productColumns}
        data={data}
        deleteButtonPressAction={(id: number) => onSubmitButtonPress(id)}
      />
    </Main>
  );
}
