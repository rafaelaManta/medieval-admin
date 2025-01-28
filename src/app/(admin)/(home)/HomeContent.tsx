"use client";
import { Main } from "@/templates";
import { OrderProducts } from "@/components";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import { useState } from "react";
import { updateTodayOrderStatus } from "@/app/(admin)/(home)/lib/actions";
import type { ApiError } from "@/lib/types";
import type { IHomePageProps } from "@/app/(admin)/(home)/lib/types";

export default function HomeContent({
  toBeMadeOrders,
  paidOrders,
  toBePaidOrders,
  todayOrdersByStatusError,
}: IHomePageProps) {
  const [updateError, setUpdateError] = useState<ApiError | undefined>(
    undefined,
  );

  const onOrderPressAction = async (id: number) => {
    const { error } = await updateTodayOrderStatus(id);
    setUpdateError(error);
  };

  return (
    <Main
      className={"overflow-y-hidden"}
      error={updateError || (todayOrdersByStatusError as ApiError)}
    >
      <div className="grid md:grid-cols-3 auto-rows-fr gap-4">
        <OrderProducts
          orderProducts={toBeMadeOrders}
          status={STATUSES.toBeMade}
          onClick={onOrderPressAction}
        />
        <OrderProducts
          orderProducts={toBePaidOrders}
          status={STATUSES.toBePaid}
          onClick={onOrderPressAction}
        />
        <OrderProducts
          orderProducts={paidOrders}
          status={STATUSES.paid}
          onClick={onOrderPressAction}
        />
      </div>
    </Main>
  );
}
