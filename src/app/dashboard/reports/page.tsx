import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Relatorios",
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <h1>Relatorios</h1>
    </>
  );
}
