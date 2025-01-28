import { getTodayOrdersByStatus } from "@/app/(admin)/(home)/lib/actions";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import HomeContent from "@/app/(admin)/(home)/HomeContent";
import { areAllStatusesSame } from "@/lib/formatters";
import { literals } from "@/lib/literals";

export default async function Home() {
  const { todayOrders: toBeMadeOrders, error: toBeMadeOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBeMade);

  const { todayOrders: toBePaidOrders, error: toBePaidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBePaid);

  const { todayOrders: paidOrders, error: paidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.paid);

  const getTodayOrdersByStatusError = [
    toBeMadeOrdersError,
    toBePaidOrdersError,
    paidOrdersError,
  ];
  const todayOrdersByStatusError = areAllStatusesSame(
    getTodayOrdersByStatusError,
  )
    ? getTodayOrdersByStatusError[0]
    : { message: literals.genericError };

  return (
    <HomeContent
      paidOrders={paidOrders}
      toBeMadeOrders={toBeMadeOrders}
      toBePaidOrders={toBePaidOrders}
      todayOrdersByStatusError={todayOrdersByStatusError}
    />
  );
}
