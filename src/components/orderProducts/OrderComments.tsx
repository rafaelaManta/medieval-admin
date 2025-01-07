import { OrderProduct } from "@/app/_lib/types";

export const OrderComments = ({ product }: { product: OrderProduct }) => {
  if (!product.comments && !product.order.comments) {
    return null;
  }
  return (
    <p>{`Σχόλια: ${product.comments ?? ""} ${product.order.comments ?? ""}`}</p>
  );
};
