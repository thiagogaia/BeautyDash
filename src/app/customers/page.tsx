import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Clientes",
};

export default function CustomersPage() {
  return (
    <>
      <Header />
      <h1>Clientes</h1>
    </>
  );
}
