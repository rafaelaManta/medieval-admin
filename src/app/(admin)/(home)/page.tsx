import { auth } from "@/auth";
import { Main } from "@/templates";
import { getTodayOrdersByStatus } from "@/app/(admin)/(home)/lib/actions";
import { STATUSES } from "@/app/(admin)/(home)/lib/utils";
import { OrderProducts } from "@/components";

export default async function Home() {
  const session = await auth();
  console.log("dssd", session);
  const { todayOrders: toBeMadeOrders, error: toBeMadeOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBeMade);

  const { todayOrders: toBePaidOrders, error: toBePaidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.toBePaid);

  const { todayOrders: paidOrders, error: paidOrdersError } =
    await getTodayOrdersByStatus(STATUSES.paid);

  console.log(toBePaidOrders, paidOrders, toBeMadeOrders);
  return (
    <Main className={"overflow-y-hidden"}>
      <div className="grid md:grid-cols-3 auto-rows-fr gap-4">
        <OrderProducts
          error={toBeMadeOrdersError}
          orderProducts={toBeMadeOrders}
          status={STATUSES.toBeMade}
        />
        <OrderProducts
          error={toBePaidOrdersError}
          orderProducts={toBePaidOrders}
          status={STATUSES.toBePaid}
        />
        <OrderProducts
          error={paidOrdersError}
          orderProducts={paidOrders}
          status={STATUSES.paid}
        />
      </div>
    </Main>
  );
}
