import { Customer } from "../customer/Customer";
import { Test } from "../test/Test";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  price: number | null;
  tests?: Array<Test>;
  updatedAt: Date;
};
