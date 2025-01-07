import { getOrders } from "@/app/(admin)/orders/lib/action";
import PageScreenContent from "@/app/(admin)/orders/PageScreenContent";

export default async function Products() {
  const { orders, error } = await getOrders();
  return <PageScreenContent data={orders} error={error} />;
}
