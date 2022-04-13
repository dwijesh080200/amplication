import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
