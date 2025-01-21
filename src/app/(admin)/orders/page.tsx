import { getOrders } from "@/app/(admin)/orders/lib/action";
import OrdersScreenContent from "@/app/(admin)/orders/OrdersScreenContent";
import { ApiError } from "@/lib/types";
import { OrdersType } from "@/app/(admin)/orders/lib/types";

export default async function Orders() {
  const { orders, error } = await getOrders();
  return <OrdersScreenContent data={orders} error={error} />;
}
