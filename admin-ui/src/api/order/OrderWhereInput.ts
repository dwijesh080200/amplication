import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TestListRelationFilter } from "../test/TestListRelationFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  tests?: TestListRelationFilter;
};
