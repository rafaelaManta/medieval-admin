import { getProduct } from "@/app/(admin)/products/lib/actions";
import EditScreenContent from "./EditScreenContent";

export default async function EditProduct({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const { product, error } = await getProduct(id);
  return <EditScreenContent id={id} data={product} error={error} />;
}
