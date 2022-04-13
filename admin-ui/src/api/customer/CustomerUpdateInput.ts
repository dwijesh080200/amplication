import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { TestUpdateManyWithoutCustomersInput } from "./TestUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
  tests?: TestUpdateManyWithoutCustomersInput;
};
