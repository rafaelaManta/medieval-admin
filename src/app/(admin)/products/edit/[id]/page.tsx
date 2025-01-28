import { getProduct } from "@/app/(admin)/products/lib/actions";
import EditProductContent from "./EditProductContent";

export default async function EditProduct({
  params,
  searchParams,
}: {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ disabled: boolean }>;
}) {
  const id = (await params).id;
  const { disabled } = await searchParams;
  const { product, error } = await getProduct(id);
  return (
    <EditProductContent
      id={id}
      data={product}
      error={error}
      disabledForm={Boolean(disabled)}
    />
  );
}
