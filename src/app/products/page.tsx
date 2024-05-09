import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";
import { productsData } from "./data";
import { MainProducts } from "./components/main-products";

export const metadata: Metadata = {
  title: "Produtos",
};

export default function ProductsPage() {
  return (
    <div className="flex-col flex-col md:flex-row">
      <Header />
      <div className="flex flex-col md:flex-row">
        <LateralMenu topics={productsData} />

        <MainProducts />
      </div>
    </div>
  );
}
