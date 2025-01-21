import { Button } from "@/components";
import { ConciergeBell, HandCoins } from "lucide-react";
import { OrderComments } from "@/components/orderProducts/OrderComments";
import { OrderProduct } from "@/app/(admin)/(home)/lib/types";
import { STATUSES } from "@/app/(admin)/(home)/lib/model";
import { bgClass } from "@/components/orderProducts/utils";
import { literals } from "@/lib/literals";

export const OrderCards = ({
  orderProducts,
  onClickOrderProduct,
}: {
  onClickOrderProduct?: (id: number) => void;
  orderProducts: OrderProduct[];
}) => {
  return orderProducts?.map((orderProduct, index) => (
    <div
      key={`${orderProduct.product.name}-${index.toString()}`}
      className={"p-4 text-black bg-white shadow rounded mb-4"}
    >
      <div className={"flex justify-between gap-5"}>
        <div>
          <p className="text-lg font-semibold">{`${orderProduct.product.name}`}</p>
          <OrderComments product={orderProduct} />
          {orderProduct?.product?.price && (
            <p>{`${literals.costText}: ${orderProduct?.product.price}€`}</p>
          )}
        </div>
      </div>

      <div
        className={`flex mt-2 ${orderProduct.takeaway ? "justify-between gap-5 items-center" : "justify-end"} `}
      >
        {Boolean(orderProduct.takeaway) && (
          <div className={"bg-gray-100 rounded p-2"}>
            <p>Takeaway</p>
          </div>
        )}
        {orderProduct.status === STATUSES.toBeMade && onClickOrderProduct && (
          <div className={"justify-end"}>
            <Button
              size="icon"
              onClick={() => onClickOrderProduct(orderProduct.id)}
              className={`opacity-100 ${bgClass[orderProduct.status]} hover:${bgClass[orderProduct.status]}`}
            >
              <ConciergeBell />
            </Button>
          </div>
        )}
        {orderProduct.status === STATUSES.toBePaid && onClickOrderProduct && (
          <div className={" justify-end"}>
            <Button
              size={"icon"}
              className={`opacity-100 ${bgClass[orderProduct.status]} hover:${bgClass[orderProduct.status]}`}
              onClick={() => onClickOrderProduct(orderProduct.id)}
            >
              <HandCoins />
            </Button>
          </div>
        )}
      </div>
    </div>
  ));
};
