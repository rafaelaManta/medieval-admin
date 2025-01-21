import { getTodayOrdersByStatus } from "@/app/(admin)/(home)/lib/actions";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import HomeScreenContent from "@/app/(admin)/(home)/HomeScreenContent";

export default async function Home() {
  const { todayOrders: toBeMadeOrders, error: toBeMadeOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBeMade);

  const { todayOrders: toBePaidOrders, error: toBePaidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBePaid);

  const { todayOrders: paidOrders, error: paidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.paid);

  return (
    <HomeScreenContent
      paidOrders={paidOrders}
      toBeMadeOrders={toBeMadeOrders}
      toBePaidOrders={toBePaidOrders}
      paidOrdersError={paidOrdersError}
      toBeMadeOrdersError={toBeMadeOrdersError}
      toBePaidOrdersError={toBePaidOrdersError}
    />
  );
}
