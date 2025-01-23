import { getOrders } from "@/app/(admin)/orders/lib/action";
import OrdersContent from "@/app/(admin)/orders/OrdersContent";
import { ApiError } from "@/lib/types";
import { OrdersType } from "@/app/(admin)/orders/lib/types";

export default async function Orders() {
  const { orders, error } = await getOrders();
  return <OrdersContent data={orders} error={error} />;
}
