import { bgClass, LITERALS } from "@/components/orderProducts/utils";

export const OrderStatus = ({ status }: { status: string }) => (
  <div className={`p-2 rounded text-center shadow ${bgClass[status]} mb-4`}>
    <h2 className={"text-base text-white font-medium"}>{LITERALS[status]}</h2>
  </div>
);
