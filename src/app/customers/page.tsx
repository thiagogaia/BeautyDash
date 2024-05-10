import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";
import { customersData } from "./data";
import { MainCustomers } from "./components/main-customers";

export const metadata: Metadata = {
  title: "Clientes",
};

export default function CustomersPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <LateralMenu topics={customersData} />

        <MainCustomers />
      </div>
    </>
  );
}
