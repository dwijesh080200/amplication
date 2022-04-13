import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
