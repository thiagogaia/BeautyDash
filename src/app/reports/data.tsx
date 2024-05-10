import { Requests } from "./pages/requests";
import { TopSellingProducts } from "./pages/top-selling-products";
import { CustomersWhoBuyTheMost } from "./pages/customers-who-buy-the-most";

// eslint-disable-next-line import/no-anonymous-default-export
export const reportsData = [
  { name: "pedidos", component: <Requests /> },
  { name: "produtos mais vendidos", component: <TopSellingProducts /> },
  { name: "clientes que mais compram", component: <CustomersWhoBuyTheMost /> },
];
