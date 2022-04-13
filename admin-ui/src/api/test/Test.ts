import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type Test = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  order?: Order | null;
  price: number | null;
  updatedAt: Date;
};
