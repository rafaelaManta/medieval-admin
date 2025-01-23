import { getTodayOrdersByStatus } from "@/app/(admin)/(home)/lib/actions";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import HomeContent from "@/app/(admin)/(home)/HomeContent";
import { redirect } from "next/navigation";

export default async function Home() {
  const { todayOrders: toBeMadeOrders, error: toBeMadeOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBeMade);

  const { todayOrders: toBePaidOrders, error: toBePaidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBePaid);

  const { todayOrders: paidOrders, error: paidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.paid);

  if (
    paidOrdersError?.status === 401 ||
    toBeMadeOrdersError?.status === 401 ||
    toBePaidOrdersError?.status === 401
  ) {
    redirect("/login");
  }

  return (
    <HomeContent
      paidOrders={paidOrders}
      toBeMadeOrders={toBeMadeOrders}
      toBePaidOrders={toBePaidOrders}
      paidOrdersError={paidOrdersError}
      toBeMadeOrdersError={toBeMadeOrdersError}
      toBePaidOrdersError={toBePaidOrdersError}
    />
  );
}
