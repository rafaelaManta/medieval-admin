import { getOrder } from "@/app/(admin)/orders/lib/action";
import OrderContent from "@/app/(admin)/orders/order/[id]/OrderContent";
import { Main } from "@/templates";

export default async function Order({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const { order, error } = await getOrder(id);
  return (
    <Main error={error}>
      <OrderContent order={order} />
    </Main>
  );
}
