import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TestCreateNestedManyWithoutOrdersInput } from "./TestCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  price?: number | null;
  tests?: TestCreateNestedManyWithoutOrdersInput;
};
