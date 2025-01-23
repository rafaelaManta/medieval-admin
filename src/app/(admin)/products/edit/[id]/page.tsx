import { getProduct } from "@/app/(admin)/products/lib/actions";
import EditProductContent from "./EditProductContent";

export default async function EditProduct({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const { product, error } = await getProduct(id);
  return <EditProductContent id={id} data={product} error={error} />;
}
