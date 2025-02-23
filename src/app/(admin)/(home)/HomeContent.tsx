"use client";
import { Main } from "@/templates";
import { OrderProducts } from "@/components";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import { useEffect, useState } from "react";
import { updateTodayOrderStatus } from "@/app/(admin)/(home)/lib/actions";
import type { ApiError } from "@/lib/types";
import type { IHomePageProps } from "@/app/(admin)/(home)/lib/types";
import { useEcho } from "@/hooks/useEcho";

export default function HomeContent({
  toBeMadeOrders,
  paidOrders,
  toBePaidOrders,
  todayOrdersByStatusError,
}: IHomePageProps) {
  const [toBeMadeOrdersState, setToBeMadeOrders] = useState(toBeMadeOrders);
  const [toBePaidOrdersState, setToBePaidOrders] = useState(toBePaidOrders);
  const [paidOrdersState, setPaidOrders] = useState(paidOrders);

  const echo = useEcho();

  const [updateError, setUpdateError] = useState<ApiError | undefined>(
    undefined,
  );

  const onOrderPressAction = async (id: number) => {
    const { error } = await updateTodayOrderStatus(id);
    setUpdateError(error);
  };

  useEffect(() => {
    if (echo === null) {
      return;
    }
    const channel = echo.channel("orders");
    channel.listen("OrderCreated", (data: any) => {
      console.log("New Order:", data);
      if (data?.status === STATUSES.toBeMade) {
        setToBeMadeOrders((toBeMadeOrdersState) => [
          ...toBeMadeOrdersState,
          data,
        ]);
      }
      if (data?.status === STATUSES.toBePaid) {
        setToBePaidOrders((toBePaidOrdersState) => [
          ...toBePaidOrdersState,
          data,
        ]);
      }
      if (data?.status === STATUSES.paid) {
        setPaidOrders((paidOrdersState) => [...paidOrdersState, data]);
      }
    });

    return () => {
      channel.stopListening("OrderCreated");
    };
  }, [echo]);

  return (
    <Main
      className={"overflow-y-hidden"}
      error={updateError || (todayOrdersByStatusError as ApiError)}
    >
      <div className="grid md:grid-cols-3 auto-rows-fr gap-4">
        <OrderProducts
          orderProducts={toBeMadeOrdersState}
          status={STATUSES.toBeMade}
          onClick={onOrderPressAction}
        />
        <OrderProducts
          orderProducts={toBePaidOrdersState}
          status={STATUSES.toBePaid}
          onClick={onOrderPressAction}
        />
        <OrderProducts
          orderProducts={paidOrdersState}
          status={STATUSES.paid}
          onClick={onOrderPressAction}
        />
      </div>
    </Main>
  );
}
