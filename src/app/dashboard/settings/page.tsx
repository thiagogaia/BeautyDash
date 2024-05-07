import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Configurações",
};

export default function DashboardPage() {
  return (
    <>
      <Header />
      <h1>Configurações</h1>
    </>
  );
}
