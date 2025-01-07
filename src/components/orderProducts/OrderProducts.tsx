import { OrderStatus } from "@/components/orderProducts/OrderStatus";
import { OrderCards } from "@/components/orderProducts/OrderCards";
import { OrderProduct } from "@/app/(admin)/(home)/lib/types";

export const OrderProducts = ({
  orderProducts,
  status,
  onClick,
}: {
  orderProducts: OrderProduct[];
  status: string;
  onClick?: (product: OrderProduct) => void;
}) => {
  return (
    <div>
      <OrderStatus status={status} />
      <OrderCards orderProducts={orderProducts} onClickOrderProduct={onClick} />
    </div>
  );
};
