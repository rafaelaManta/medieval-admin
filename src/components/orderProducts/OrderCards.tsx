import { OrderProduct } from "@/app/_lib/types";
import { bgClass, STATUSES } from "@/app/_lib/utils";
import { ButtonIcon } from "@/components";
import { ConciergeBell, HandCoins } from "lucide-react";
import { OrderComments } from "@/components/orderProducts/OrderComments";

export const OrderCards = ({
  orderProducts,
  onClickOrderProduct = () => {},
}: {
  onClickOrderProduct?: (orderProduct: OrderProduct) => void;
  orderProducts: OrderProduct[];
}) => {
  return orderProducts.map((orderProduct) => (
    <div
      key={orderProduct.order.id}
      className={"p-4 text-black bg-white shadow rounded mb-4"}
    >
      <div className={"flex justify-between gap-5"}>
        <div>
          <p className="text-xl font-bold">{`${orderProduct.product.name}`}</p>
          {orderProduct.order.table?.title && (
            <p>{`Τραπέζι: ${orderProduct.order.table.title}`}</p>
          )}
          <OrderComments product={orderProduct} />
        </div>
        {orderProduct.order.waiter?.name && (
          <div className={"bg-gray-100 rounded p-2 self-start"}>
            <p>{orderProduct.order.waiter.name}</p>
          </div>
        )}
      </div>

      <div
        className={`flex mt-2 ${orderProduct.takeaway ? "justify-between gap-5 items-center" : "justify-end"} `}
      >
        {orderProduct.takeaway && (
          <div className={"bg-gray-100 rounded p-2"}>
            <p>Takeaway</p>
          </div>
        )}
        {orderProduct.status === STATUSES.toBeMade && (
          <div className={"justify-end"}>
            <ButtonIcon
              variant={"default"}
              className={`opacity-100 ${bgClass[orderProduct.status]}`}
            >
              <ConciergeBell />
            </ButtonIcon>
          </div>
        )}
        {orderProduct.status === STATUSES.toBePaid && (
          <div className={" justify-end"}>
            <ButtonIcon
              variant={"default"}
              className={`opacity-100 ${bgClass[orderProduct.status]}`}
              onClick={() => onClickOrderProduct(orderProduct)}
            >
              <HandCoins />
            </ButtonIcon>
          </div>
        )}
      </div>
    </div>
  ));
};
