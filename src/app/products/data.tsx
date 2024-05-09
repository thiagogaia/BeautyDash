import { AddProduct } from "./pages/add-product";
import { Categories } from "./pages/categories";
import { MyProducts } from "./pages/my-products";
import { Variations } from "./pages/variations";

// eslint-disable-next-line import/no-anonymous-default-export
export const productsData = [
  { name: "meus produtos", component: <MyProducts /> },
  { name: "adicionar produto", component: <AddProduct /> },
  { name: "categorias", component: <Categories /> },
  { name: "variações", component: <Variations /> },
];
