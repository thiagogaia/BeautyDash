import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";

export const metadata: Metadata = {
  title: "Clientes",
};

const topics = ["meus clientes", "adicionar cliente", "etiquetas", "oportunidades"];

export default function CustomersPage() {
  return (
    <>
      <Header />
      <div className="flex">
        <LateralMenu topics={topics} />
      </div>
    </>
  );
}
