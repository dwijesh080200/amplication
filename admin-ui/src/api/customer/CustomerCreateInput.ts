import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";
import { TestCreateNestedManyWithoutCustomersInput } from "./TestCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address: string;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  tests?: TestCreateNestedManyWithoutCustomersInput;
};
