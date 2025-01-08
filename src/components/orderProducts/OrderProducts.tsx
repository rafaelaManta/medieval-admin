import { OrderStatus } from "@/components/orderProducts/OrderStatus";
import { OrderCards } from "@/components/orderProducts/OrderCards";
import { OrderProduct } from "@/app/(admin)/(home)/lib/types";
import { ApiError } from "@/lib/types";
import { NotFound } from "@/components/notFound/NotFound";

export const OrderProducts = ({
  orderProducts,
  status,
  onClick,
  error,
}: {
  orderProducts: OrderProduct[];
  status: string;
  onClick?: (product: OrderProduct) => void;
  error: ApiError;
}) => {
  return (
    <div>
      <OrderStatus status={status} />
      <div className={"h-screen overflow-y-scroll"}>
        {error?.status === 204 ? (
          <NotFound className={"bg-white p-2"} />
        ) : (
          <OrderCards
            orderProducts={orderProducts}
            onClickOrderProduct={onClick}
          />
        )}
      </div>
    </div>
  );
};
