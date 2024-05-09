import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";

export const metadata: Metadata = {
  title: "Relatorios",
};

const topics = ["pedidos", "produtos mais vendidos", "clientes que mais compram"];

export default function ReportsPage() {
  return (
    <>
      <Header />
      <div className="flex">
        <LateralMenu topics={topics} />
      </div>
    </>
  );
}
