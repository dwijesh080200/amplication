import { Order } from "../order/Order";
import { Test } from "../test/Test";

export type Customer = {
  address: string;
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  tests?: Array<Test>;
  updatedAt: Date;
};
