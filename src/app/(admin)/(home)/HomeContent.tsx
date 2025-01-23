"use client";
import { Main } from "@/templates";
import { OrderProducts } from "@/components";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import { useCallback, useState } from "react";
import { updateTodayOrderStatus } from "@/app/(admin)/(home)/lib/actions";
import { ApiError } from "@/lib/types";
import { IHomePageProps } from "@/app/(admin)/(home)/lib/types";

export default function HomeContent({
  toBeMadeOrders,
  toBeMadeOrdersError,
  toBePaidOrders,
  toBePaidOrdersError,
  paidOrders,
  paidOrdersError,
}: IHomePageProps) {
  const [updateError, setUpdateError] = useState<ApiError | undefined>(
    undefined,
  );

  const onOrderPressAction = useCallback(async (id: number) => {
    const { error, isSuccess } = await updateTodayOrderStatus(id);
    setUpdateError(error);
  }, []);



  return (
    <Main className={"overflow-y-hidden"} error={updateError}>
      <div className="grid md:grid-cols-3 auto-rows-fr gap-4">
        <OrderProducts
          error={toBeMadeOrdersError}
          orderProducts={toBeMadeOrders}
          status={STATUSES.toBeMade}
          onClick={onOrderPressAction}
        />
        <OrderProducts
          error={toBePaidOrdersError}
          orderProducts={toBePaidOrders}
          status={STATUSES.toBePaid}
          onClick={onOrderPressAction}
        />
        <OrderProducts
          error={paidOrdersError}
          orderProducts={paidOrders}
          status={STATUSES.paid}
          onClick={onOrderPressAction}
        />
      </div>
    </Main>
  );
}
