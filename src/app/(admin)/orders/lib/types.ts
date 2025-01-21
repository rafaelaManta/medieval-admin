export interface IOrder {
  id: number;
  total: string;
  completed: boolean;
  table: { id: number; title: string; order: number };
  waiter: { id: number; name: string };
  order_products: {
    id: number;
    comments: string | undefined;
    takeaway: boolean;
    status: string;
    product: {
      id: number;
      description: string;
      in_stock: boolean;
      name: string;
      price: string;
      price_takeaway: string;
    };
  }[];
}

export type OrdersType = IOrder[];
