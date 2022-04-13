import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { TestListRelationFilter } from "../test/TestListRelationFilter";

export type CustomerWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  tests?: TestListRelationFilter;
};
