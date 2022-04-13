import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  address?: StringFilter;
  id?: StringFilter;
  orders?: OrderListRelationFilter;
};
