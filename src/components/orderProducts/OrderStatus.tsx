import { bgClass, LITERALS } from "@/app/_lib/utils";

export const OrderStatus = ({ status }: { status: string }) => (
  <div className={`p-2 rounded text-center shadow ${bgClass[status]} mb-4`}>
    <h2 className={"text-lg text-white font-medium"}>{LITERALS[status]}</h2>
  </div>
);
