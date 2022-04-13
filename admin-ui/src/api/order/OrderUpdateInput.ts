import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TestUpdateManyWithoutOrdersInput } from "./TestUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  price?: number | null;
  tests?: TestUpdateManyWithoutOrdersInput;
};
