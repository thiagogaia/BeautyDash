import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Produtos",
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <h1>Produtos</h1>
    </>
  );
}
