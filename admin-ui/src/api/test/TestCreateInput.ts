import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type TestCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  order?: OrderWhereUniqueInput | null;
  price?: number | null;
};
