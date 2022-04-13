import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type TestUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
};
