import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
