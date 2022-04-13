import { Order } from "../order/Order";

export type Customer = {
  address: string;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  updatedAt: Date;
};
