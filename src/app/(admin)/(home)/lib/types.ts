export type OrderProduct = {
  order: {
    id: number;
    waiter: {
      id: number;
      name: string;
    } | null;
    comments: string | null;
    table: {
      id: number;
      title: string;
    } | null;
  };
  product: {
    name: string;
  };
  comments: string | null;
  takeaway: boolean;
  status: string;
};
