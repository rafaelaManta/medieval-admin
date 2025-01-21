import { OrderProduct } from "@/app/(admin)/(home)/lib/types";

export const OrderComments = ({ product }: { product: OrderProduct }) => {
  if (!product.comments && !product.order.comments) {
    return null;
  }
  return (
    <p>{`Σχόλια: ${product.comments ?? ""} ${product.order?.comments ?? ""}`}</p>
  );
};
