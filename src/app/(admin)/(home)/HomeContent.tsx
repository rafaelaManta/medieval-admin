"use client";
import { Main } from "@/templates";
import { OrderProducts } from "@/components";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import { useState } from "react";
import { updateTodayOrderStatus } from "@/app/(admin)/(home)/lib/actions";
import { ApiError } from "@/lib/types";
import { IHomePageProps } from "@/app/(admin)/(home)/lib/types";
import { useLogout } from "@/hooks/useLogout";

export default function HomeContent({
  toBeMadeOrders,
  toBeMadeOrdersError,
  toBePaidOrders,
  toBePaidOrdersError,
  paidOrders,
  paidOrdersError,
}: IHomePageProps) {
  const { signOut } = useLogout();
  const [updateError, setUpdateError] = useState<ApiError | undefined>(
    undefined,
  );

  //TODO:I need to implement error handling
  //TODO:should I display the error into the columns instead of the main template?
  if (
    paidOrdersError?.status === 401 ||
    toBeMadeOrdersError?.status === 401 ||
    toBePaidOrdersError?.status === 401
  ) {
    signOut();
    return null;
  }

  const onOrderPressAction = async (id: number) => {
    const { error } = await updateTodayOrderStatus(id);
    setUpdateError(error);
  };

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
