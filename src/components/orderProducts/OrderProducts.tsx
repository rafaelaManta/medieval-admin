import { OrderStatus } from "@/components/orderProducts/OrderStatus";
import { OrderCards } from "@/components/orderProducts/OrderCards";
import { OrderProduct } from "@/app/(admin)/(home)/lib/types";
import { NotFound } from "@/components/notFound/NotFound";

export const OrderProducts = ({
  orderProducts,
  status,
  onClick,
  withLink,
}: {
  orderProducts: OrderProduct[];
  status: string;
  onClick?: (id: number) => void;
  withLink?: boolean;
}) => {
  return (
    <div>
      <OrderStatus status={status} />
      <div className={"h-screen overflow-y-scroll"}>
        {orderProducts?.length <= 0 ? (
          <NotFound className={"bg-white p-2"} />
        ) : (
          <OrderCards
            withLink={withLink}
            orderProducts={orderProducts}
            onClickOrderProduct={onClick}
          />
        )}
      </div>
    </div>
  );
};
