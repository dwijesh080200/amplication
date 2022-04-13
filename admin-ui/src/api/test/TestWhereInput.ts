import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TestWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  price?: FloatNullableFilter;
};
