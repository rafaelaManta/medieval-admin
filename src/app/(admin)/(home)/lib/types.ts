import { ApiError } from "next/dist/server/api-utils";

export type OrderProduct = {
  order: {
    id: number;
    comments: string | null;
  };
  product: {
    id: number;
    description: string;
    in_stock: boolean;
    name: string;
    price: string;
    price_takeaway: string;
  };
  comments: string | null;
  takeaway: boolean;
  status: string;
  completed: boolean;
};

export interface IHomePageProps {
  toBeMadeOrders: OrderProduct[];
  toBeMadeOrdersError: ApiError | undefined;
  toBePaidOrders: OrderProduct[];
  toBePaidOrdersError: ApiError | undefined;
  paidOrders: OrderProduct[];
  paidOrdersError: ApiError | undefined;
}
