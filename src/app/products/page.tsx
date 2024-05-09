import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";

export const metadata: Metadata = {
  title: "Produtos",
};

const topics = ["meus produtos", "adicionar produto", "categorias", "variações"];

export default function ProductsPage() {
  return (
    <div className="flex-col md:flex">
      <Header />
      <div className="flex">
        <LateralMenu topics={topics} />
      </div>
    </div>
  );
}
