import { getOrders } from "@/app/(admin)/orders/lib/action";
import OrdersContent from "@/app/(admin)/orders/OrdersContent";


export default async function Orders() {
  const { orders, error } = await getOrders();
  return <OrdersContent data={orders} error={error} />;
}
